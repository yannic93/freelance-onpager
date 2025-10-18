import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Rate Limiting - In-Memory Store (für Produktion: Redis verwenden)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate Limit Konfiguration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 Stunde in Millisekunden
const MAX_REQUESTS_PER_WINDOW = 3; // Maximal 3 Anfragen pro Stunde pro IP

// Hilfsfunktion: IP-Adresse extrahieren
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIp) {
    return realIp;
  }
  return 'unknown';
}

// Hilfsfunktion: Rate Limit prüfen
function checkRateLimit(ip: string): { allowed: boolean; remainingRequests: number } {
  const now = Date.now();
  const limitData = rateLimitMap.get(ip);

  if (!limitData || now > limitData.resetTime) {
    // Neues Zeitfenster
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remainingRequests: MAX_REQUESTS_PER_WINDOW - 1 };
  }

  if (limitData.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remainingRequests: 0 };
  }

  // Request zählen
  limitData.count++;
  return { allowed: true, remainingRequests: MAX_REQUESTS_PER_WINDOW - limitData.count };
}

// Cleanup alte Einträge (alle 10 Minuten)
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now > data.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 10 * 60 * 1000);

// Hilfsfunktion: E-Mail-Validierung
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting prüfen
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte versuche es später erneut.' },
        { status: 429 }
      );
    }

    const { name, email, message, services, timestamp } = await request.json();

    // 2. Basis-Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      );
    }

    // 3. E-Mail-Format validieren
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // 4. Längen-Validierung (Spam-Schutz)
    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Name ist zu lang' },
        { status: 400 }
      );
    }

    if (email.length > 100) {
      return NextResponse.json(
        { error: 'E-Mail ist zu lang' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Nachricht ist zu kurz' },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Nachricht ist zu lang' },
        { status: 400 }
      );
    }

    // 5. Zeitbasierte Validierung (Server-seitig)
    if (timestamp) {
      const timeSpent = (Date.now() - timestamp) / 1000;
      if (timeSpent < 2 || timeSpent > 3600) {
        // Zu schnell (<2s) oder zu langsam (>1h)
        return NextResponse.json(
          { error: 'Ungültige Anfrage' },
          { status: 400 }
        );
      }
    }

    // 6. Spam-Keywords prüfen
    const spamKeywords = ['viagra', 'casino', 'lottery', 'prize', 'click here', 'free money'];
    const content = `${name} ${email} ${message}`.toLowerCase();
    const hasSpam = spamKeywords.some(keyword => content.includes(keyword));

    if (hasSpam) {
      // Stille Ablehnung - keine Info an Spammer
      return NextResponse.json(
        { message: 'Nachricht erfolgreich gesendet!' },
        { status: 200 }
      );
    }

    // Resend Integration
    const resend = new Resend(process.env.RESEND_API_KEY);
    const subject = `Neue Kontaktanfrage von ${name}`;
    const berlinTime = new Date().toLocaleString('de-DE', { 
      timeZone: 'Europe/Berlin',
      dateStyle: 'full',
      timeStyle: 'short'
    });
    const html = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Nachricht:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      ${services && services.length > 0 ? `<p><strong>Services:</strong><br/>${services.map((s: string) => `<li>${s}</li>`).join('')}</p>` : ''}
      <p><small>Gesendet am: ${berlinTime}</small></p>
    `;

    try {
      const data = await resend.emails.send({
        from: 'info@yannicnandy.com',
        to: 'info@yannicnandy.com',
        replyTo: email,
        subject,
        html,
      });
      if (data.error) {
        return NextResponse.json(
          { error: 'E-Mail konnte nicht gesendet werden: ' + data.error.message },
          { status: 500 }
        );
      }

      // Bestätigungsmail an den Absender
      const userMailHtml = `
        <div style="font-family: 'Inter', Arial, sans-serif; background: #f5efe6; color: #1A1A1A; padding: 32px; border-radius: 16px; max-width: 600px; margin: auto;">
          <h2 style="color: #cda967;">Danke für deine Anfrage!</h2>
          <p>Hallo ${name},</p>
          <p>vielen Dank für deine Kontaktaufnahme über meine Website. Ich habe deine Angaben erhalten und melde mich in Kürze persönlich bei dir zurück.</p>
          <h3 style="margin-top: 2em; color: #cda967;">Deine Angaben:</h3>
          <ul style="line-height: 1.7;">
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>E-Mail:</strong> ${email}</li>
            <li><strong>Nachricht:</strong> ${message.replace(/\n/g, '<br/>')}</li>
            ${services && services.length > 0 ? `<li><strong>Themen:</strong> ${services.map((s: string) => `<span style='display:inline-block;background:#cda96710;color:#cda967;padding:2px 8px;border-radius:8px;margin-right:4px;'>${s}</span>`).join('')}</li>` : ''}
          </ul>
          <p style="margin-top:2em;">Viele Grüße,<br/>Yannic Nandy</p>
          <hr style="margin:2em 0; border:none; border-top:1px solid #cda96730;"/>
          <p style="font-size:0.95em;color:#888;">Diese E-Mail wurde automatisch als Bestätigung deiner Anfrage versendet.</p>
        </div>
      `;
      try {
        await resend.emails.send({
          from: 'info@yannicnandy.com',
          to: email,
          subject: 'Deine Anfrage bei Yannic Nandy',
          html: userMailHtml,
        });
      } catch (userMailErr) {
        console.error('Fehler beim Senden der Bestätigungsmail:', userMailErr);
      }

    } catch (err: unknown) {
      return NextResponse.json(
        { error: 'E-Mail Versand fehlgeschlagen: ' + (err instanceof Error ? err.message : 'Unbekannter Fehler') },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Nachricht erfolgreich gesendet!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
} 

