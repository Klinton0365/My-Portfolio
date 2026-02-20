<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class HireRequestReceived extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Contact $contact, public string $service, public ?string $budget = null) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Hire Request: ' . $this->service,
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.hire',
            with: [
                'contact' => $this->contact,
                'service' => $this->service,
                'budget' => $this->budget,
            ],
        );
    }
}
