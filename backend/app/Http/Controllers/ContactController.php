<?php

namespace App\Http\Controllers;

use App\Mail\ContactReceived;
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
        Log::info($request->all());
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
            'h-captcha-response' => 'required'
        ]);

        // Verify hCaptcha
        $response = Http::asForm()->post(
            'https://hcaptcha.com/siteverify',
            [
                'secret' => env('HCAPTCHA_SECRET'),
                'response' => $request->input('h-captcha-response'),
            ]
        );

        if (!($response->json()['success'] ?? false)) {
            return response()->json([
                'success' => false,
                'message' => 'Captcha verification failed'
            ], 422);
        }

        $contact = Contact::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'message' => $request->input('message'),
            'subject' => $request->input('subject', 'Contact Form'),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        try {
            Mail::to(config('mail.from.address'))->send(new ContactReceived($contact));
        } catch (\Throwable $e) {
            Log::error('Contact email failed: ' . $e->getMessage());
        }

        return response()->json([
            'success' => true,
            'message' => 'Message sent successfully'
        ]);
    }

    public function hire(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'service' => 'required|string|max:255',
            'budget' => 'nullable|string|max:100',
            'message' => 'required|string|max:2000',
        ]);

        $contact = Contact::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'subject' => 'Hire Request: ' . $request->input('service'),
            'message' => $request->input('message')
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
            'message' => 'Your hire request has been submitted successfully!'
        ]);
    }
}
