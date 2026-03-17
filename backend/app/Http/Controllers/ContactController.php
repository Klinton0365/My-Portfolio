<?php

namespace App\Http\Controllers;

use App\Mail\ContactReceived;
use App\Mail\ContactConfirmation;
use App\Mail\HireRequestReceived;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name'            => 'required|string|max:255',
            'email'           => 'required|email|max:255',
            'message'         => 'required|string|max:5000',
            'recaptcha_token' => 'required|string',
        ]);

        // Verify Google reCAPTCHA v3
        $recaptcha = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret'   => config('services.recaptcha.secret'),
            'response' => $request->input('recaptcha_token'),
            'remoteip' => $request->ip(),
        ])->json();

        if (!($recaptcha['success'] ?? false) || ($recaptcha['score'] ?? 0) < 0.5) {
            return response()->json([
                'success' => false,
                'message' => 'reCAPTCHA verification failed. Please try again.',
            ], 422);
        }

        $contact = Contact::create([
            'name'       => $request->input('name'),
            'email'      => $request->input('email'),
            'message'    => $request->input('message'),
            'subject'    => $request->input('subject', 'Contact Form'),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        // Admin notification
        $adminMailOk = false;
        try {
            Mail::to(config('mail.from.address'))->send(new ContactReceived($contact));
            $adminMailOk = true;
        } catch (\Throwable $e) {
            Log::error('Admin contact email failed: ' . $e->getMessage());
        }

        // User confirmation
        $userMailOk = false;
        try {
            Mail::to($contact->email)->send(new ContactConfirmation($contact));
            $userMailOk = true;
        } catch (\Throwable $e) {
            Log::error('User confirmation email failed: ' . $e->getMessage());
        }

        return response()->json([
            'success'       => true,
            'message'       => 'Message sent successfully',
            'admin_mail_ok' => $adminMailOk,
            'user_mail_ok'  => $userMailOk,
        ]);
    }

    public function hire(Request $request)
    {
        $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'phone'   => 'nullable|string|max:20',
            'service' => 'required|string|max:255',
            'budget'  => 'nullable|string|max:100',
            'message' => 'required|string|max:2000',
        ]);

        $contact = Contact::create([
            'name'       => $request->input('name'),
            'email'      => $request->input('email'),
            'phone'      => $request->input('phone'),
            'subject'    => 'Hire Request: ' . $request->input('service'),
            'message'    => $request->input('message')
                . ($request->input('budget') ? "\n\nBudget: " . $request->input('budget') : ''),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        try {
            Mail::to(config('mail.from.address'))->send(
                new HireRequestReceived($contact, $request->input('service'), $request->input('budget'))
            );
        } catch (\Throwable $e) {
            Log::error('Hire email failed: ' . $e->getMessage());
        }

        return response()->json([
            'success' => true,
            'message' => 'Your hire request has been submitted successfully!',
        ]);
    }
}
