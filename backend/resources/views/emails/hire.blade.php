<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Hire Request</title>
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
                                        {{-- Priority badge --}}
                                        <table role="presentation" cellspacing="0" cellpadding="0" style="margin-bottom: 16px;">
                                            <tr>
                                                <td style="background-color: rgba(255,255,255,0.2); border-radius: 50px; padding: 5px 14px;">
                                                    <p style="margin: 0; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #ffffff;">
                                                        &#9889; HIRE REQUEST
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                        <h1 style="margin: 0; font-size: 26px; font-weight: 700; color: #ffffff; line-height: 1.3;">
                                            New Client Inquiry
                                        </h1>
                                        <p style="margin: 10px 0 0; font-size: 14px; color: rgba(255,255,255,0.8);">
                                            Someone wants to hire you through your portfolio!
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    {{-- Body --}}
                    <tr>
                        <td style="background-color: #ffffff; padding: 35px 40px;">

                            {{-- Service requested --}}
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: linear-gradient(135deg, #eef2ff, #f5f3ff); border-radius: 12px; margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 20px 24px;">
                                        <p style="margin: 0 0 6px; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #4f46e5;">SERVICE REQUESTED</p>
                                        <p style="margin: 0; font-size: 20px; font-weight: 700; color: #1e1b4b;">{{ $service }}</p>
                                    </td>
                                    @if($budget)
                                    <td align="right" style="padding: 20px 24px; vertical-align: top;">
                                        <p style="margin: 0 0 6px; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #4f46e5;">BUDGET</p>
                                        <table role="presentation" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="background-color: #4f46e5; border-radius: 50px; padding: 6px 16px;">
                                                    <p style="margin: 0; font-size: 13px; font-weight: 700; color: #ffffff;">{{ $budget }}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    @endif
                                </tr>
                            </table>

                            {{-- Client info card --}}
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 25px;">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 14px; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #9ca3af;">CLIENT DETAILS</p>
                                    </td>
                                </tr>
                            </table>

                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #fafafa; border-radius: 12px; border: 1px solid #f0f0f5; margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 20px 24px; border-bottom: 1px solid #f0f0f5;">
                                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="100">
                                                    <p style="margin: 0; font-size: 12px; font-weight: 600; color: #9ca3af;">Name</p>
                                                </td>
                                                <td>
                                                    <p style="margin: 0; font-size: 15px; font-weight: 600; color: #1a1a2e;">{{ $contact->name }}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px 24px; border-bottom: 1px solid #f0f0f5;">
                                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="100">
                                                    <p style="margin: 0; font-size: 12px; font-weight: 600; color: #9ca3af;">Email</p>
                                                </td>
                                                <td>
                                                    <a href="mailto:{{ $contact->email }}" style="font-size: 15px; color: #4f46e5; text-decoration: none; font-weight: 500;">{{ $contact->email }}</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                @if($contact->phone)
                                <tr>
                                    <td style="padding: 20px 24px; border-bottom: 1px solid #f0f0f5;">
                                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="100">
                                                    <p style="margin: 0; font-size: 12px; font-weight: 600; color: #9ca3af;">Phone</p>
                                                </td>
                                                <td>
                                                    <a href="tel:{{ $contact->phone }}" style="font-size: 15px; color: #374151; text-decoration: none;">{{ $contact->phone }}</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                @endif
                                <tr>
                                    <td style="padding: 20px 24px;">
                                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="100">
                                                    <p style="margin: 0; font-size: 12px; font-weight: 600; color: #9ca3af;">Received</p>
                                                </td>
                                                <td>
                                                    <p style="margin: 0; font-size: 15px; color: #374151;">{{ $contact->created_at->format('M d, Y \a\t h:i A') }}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            {{-- Project details --}}
                            <p style="margin: 0 0 10px; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #9ca3af;">PROJECT DETAILS</p>
                            <div style="background-color: #fafafa; border-radius: 10px; padding: 20px; border: 1px solid #f0f0f5; margin-bottom: 30px;">
                                <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #374151; white-space: pre-line;">{{ $contact->message }}</p>
                            </div>

                            {{-- Action buttons --}}
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="center">
                                        <table role="presentation" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="padding-right: 10px;">
                                                    <a href="mailto:{{ $contact->email }}?subject=Re: Hire Request - {{ $service }}" style="display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 50px;">
                                                        Reply to Client
                                                    </a>
                                                </td>
                                                @if($contact->phone)
                                                <td>
                                                    <a href="tel:{{ $contact->phone }}" style="display: inline-block; padding: 14px 28px; background-color: #ffffff; color: #4f46e5; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 50px; border: 2px solid #4f46e5;">
                                                        Call Client
                                                    </a>
                                                </td>
                                                @endif
                                            </tr>
                                        </table>
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
                                        <p style="margin: 0; font-size: 12px; color: #9ca3af;">This is an automated notification from your portfolio hire form.</p>
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
