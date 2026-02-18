<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

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

        return response()->json([
            'success' => true,
            'message' => 'Message sent successfully'
        ]);
    }
}
