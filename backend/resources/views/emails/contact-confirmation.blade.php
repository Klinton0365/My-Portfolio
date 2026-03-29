<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Message Received</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background-color: #f4f4f7; font-family: 'Segoe UI', Arial, sans-serif; color: #333; }
        .wrapper { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }

        /* Header */
        .header { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 40px 40px 32px; text-align: center; }
        .header .avatar { width: 72px; height: 72px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.4); margin: 0 auto 16px; display: block; }
        .header h1 { color: #fff; font-size: 22px; font-weight: 700; letter-spacing: -0.3px; }
        .header p  { color: rgba(255,255,255,0.75); font-size: 13px; margin-top: 4px; }

        /* Body */
        .body { padding: 36px 40px; }
        .greeting { font-size: 18px; font-weight: 600; color: #1a1a2e; margin-bottom: 12px; }
        .intro    { font-size: 14px; line-height: 1.7; color: #555; margin-bottom: 28px; }

        /* Message card */
        .msg-card { background: #f8f7ff; border-left: 4px solid #6d28d9; border-radius: 8px; padding: 18px 20px; margin-bottom: 28px; }
        .msg-card .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #7c3aed; margin-bottom: 8px; }
        .msg-card .text  { font-size: 14px; line-height: 1.7; color: #444; white-space: pre-wrap; }

        /* Info grid */
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 28px; }
        .info-item { background: #fafafa; border: 1px solid #eee; border-radius: 8px; padding: 12px 16px; }
        .info-item .info-label { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #999; margin-bottom: 4px; }
        .info-item .info-value { font-size: 13px; color: #333; font-weight: 500; word-break: break-all; }

        /* What next */
        .next-box { background: linear-gradient(135deg, #eef2ff, #f5f3ff); border-radius: 10px; padding: 20px 24px; margin-bottom: 28px; }
        .next-box h3 { font-size: 13px; font-weight: 700; color: #4f46e5; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
        .next-box ul { list-style: none; }
        .next-box ul li { font-size: 13px; color: #555; padding: 4px 0; padding-left: 20px; position: relative; }
        .next-box ul li::before { content: '✓'; position: absolute; left: 0; color: #7c3aed; font-weight: 700; }

        /* CTA */
        .cta { text-align: center; margin-bottom: 28px; }
        .cta a { display: inline-block; background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #fff; text-decoration: none; padding: 12px 32px; border-radius: 50px; font-size: 14px; font-weight: 600; letter-spacing: 0.02em; }

        /* Footer */
        .footer { background: #f9f9fb; border-top: 1px solid #eee; padding: 24px 40px; text-align: center; }
        .footer .social { margin-bottom: 12px; }
        .footer .social a { display: inline-block; margin: 0 6px; color: #6d28d9; font-size: 12px; text-decoration: none; font-weight: 500; }
        .footer p { font-size: 11px; color: #aaa; line-height: 1.6; }
        .footer strong { color: #6d28d9; }
    </style>
</head>
<body>
<div class="wrapper">

    <!-- Header -->
    <div class="header">
        <h1>Message Received!</h1>
        <p>Klinton A &mdash; Software Engineer</p>
    </div>

    <!-- Body -->
    <div class="body">
        <p class="greeting">Hi {{ $contact->name }},</p>
        <p class="intro">
            Thank you for reaching out! I've received your message and will personally review it.
            You can expect a reply within <strong>24&ndash;48 hours</strong>. In the meantime, here's a copy of what you sent.
        </p>

        <!-- Message preview -->
        <div class="msg-card">
            <div class="label">Your Message</div>
            <div class="text">{{ $contact->message }}</div>
        </div>

        <!-- Info grid -->
        <div class="info-grid">
            <div class="info-item">
                <div class="info-label">Name</div>
                <div class="info-value">{{ $contact->name }}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value">{{ $contact->email }}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Submitted At</div>
                <div class="info-value">{{ $contact->created_at->format('d M Y, h:i A') }}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Reference ID</div>
                <div class="info-value">#{{ str_pad($contact->id, 6, '0', STR_PAD_LEFT) }}</div>
            </div>
        </div>

        <!-- What's next -->
        <div class="next-box">
            <h3>What happens next?</h3>
            <ul>
                <li>Your message has been securely stored</li>
                <li>I'll review and reply to {{ $contact->email }}</li>
                <li>Response time: usually within 24 hours</li>
                <li>For urgent matters, mention it in a follow-up</li>
            </ul>
        </div>

        <!-- CTA -->
        <div class="cta">
            <a href="https://slateblue-raccoon-549806.hostingersite.com" target="_blank">Visit My Portfolio</a>
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
        <div class="social">
            <a href="https://github.com/klinton" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/klinton" target="_blank">LinkedIn</a>
            <a href="https://slateblue-raccoon-549806.hostingersite.com" target="_blank">Portfolio</a>
        </div>
        <p>
            You're receiving this because you contacted <strong>Klinton A</strong> via the portfolio website.<br/>
            If this wasn't you, please disregard this email.
        </p>
    </div>

</div>
</body>
</html>
