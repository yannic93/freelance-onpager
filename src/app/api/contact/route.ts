import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, services } = await request.json();

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      );
    }

    // Resend Integration
    const resend = new Resend('re_9Cr6v1Vg_EJFjiUrYKkzT1tqZZf6jHBjv');
    const subject = `Neue Kontaktanfrage von ${name}`;
    const html = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Nachricht:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      ${services && services.length > 0 ? `<p><strong>Services:</strong><br/>${services.map((s: string) => `<li>${s}</li>`).join('')}</p>` : ''}
      <p><small>Gesendet am: ${new Date().toLocaleString('de-DE')}</small></p>
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