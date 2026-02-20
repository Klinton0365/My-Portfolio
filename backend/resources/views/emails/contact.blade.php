<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f7; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">

                    {{-- Header with gradient --}}
                    <tr>
                        <td style="background: linear-gradient(135deg, #4f46e5, #7c3aed); border-radius: 16px 16px 0 0; padding: 40px 40px 30px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.7);">
                                            PORTFOLIO NOTIFICATION
                                        </p>
                                        <h1 style="margin: 0; font-size: 26px; font-weight: 700; color: #ffffff; line-height: 1.3;">
                                            New Contact Message
                                        </h1>
                                        <p style="margin: 10px 0 0; font-size: 14px; color: rgba(255,255,255,0.8);">
                                            You received a new message from your portfolio website.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    {{-- Body --}}
                    <tr>
                        <td style="background-color: #ffffff; padding: 35px 40px;">

                            {{-- Sender info card --}}
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8f7ff; border-radius: 12px; border-left: 4px solid #4f46e5; padding: 0; margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 20px 24px;">
                                        <p style="margin: 0 0 4px; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #4f46e5;">FROM</p>
                                        <p style="margin: 0 0 2px; font-size: 18px; font-weight: 700; color: #1a1a2e;">{{ $contact->name }}</p>
                                        <p style="margin: 0; font-size: 14px; color: #6b7280;">{{ $contact->email }}</p>
                                    </td>
                                </tr>
                            </table>

                            {{-- Details grid --}}
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 25px;">
                                @if($contact->phone)
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f5;">
                                        <p style="margin: 0; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #9ca3af;">PHONE</p>
                                        <p style="margin: 4px 0 0; font-size: 15px; color: #374151;">{{ $contact->phone }}</p>
                                    </td>
                                </tr>
                                @endif
                                @if($contact->subject && $contact->subject !== 'Contact Form')
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f5;">
                                        <p style="margin: 0; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #9ca3af;">SUBJECT</p>
                                        <p style="margin: 4px 0 0; font-size: 15px; color: #374151;">{{ $contact->subject }}</p>
                                    </td>
                                </tr>
                                @endif
                                <tr>
                                    <td style="padding: 12px 0;">
                                        <p style="margin: 0; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #9ca3af;">RECEIVED AT</p>
                                        <p style="margin: 4px 0 0; font-size: 15px; color: #374151;">{{ $contact->created_at->format('M d, Y \a\t h:i A') }}</p>
                                    </td>
                                </tr>
                            </table>

                            {{-- Message --}}
                            <p style="margin: 0 0 10px; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #9ca3af;">MESSAGE</p>
                            <div style="background-color: #fafafa; border-radius: 10px; padding: 20px; border: 1px solid #f0f0f5;">
                                <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #374151; white-space: pre-line;">{{ $contact->message }}</p>
                            </div>

                            {{-- Reply button --}}
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 30px;">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:{{ $contact->email }}?subject=Re: Message from Portfolio" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 50px;">
                                            Reply to {{ $contact->name }}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    {{-- Footer --}}
                    <tr>
                        <td style="background-color: #fafafa; border-radius: 0 0 16px 16px; padding: 25px 40px; border-top: 1px solid #f0f0f5;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 4px; font-size: 13px; font-weight: 600; color: #374151;">Klinton A &mdash; Portfolio</p>
                                        <p style="margin: 0; font-size: 12px; color: #9ca3af;">This email was sent automatically from your portfolio contact form.</p>
                                    </td>
                                    <td align="right" style="vertical-align: top;">
                                        @if($contact->ip_address)
                                        <p style="margin: 0; font-size: 11px; color: #d1d5db;">IP: {{ $contact->ip_address }}</p>
                                        @endif
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
