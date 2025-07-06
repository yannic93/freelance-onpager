import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // E-Mail senden
    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Kontaktformular <noreply@deine-domain.com>',
      to: [process.env.CONTACT_EMAIL || 'deine-email@example.com'],
      subject: `Neue Nachricht von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #cda967;">Neue Nachricht über das Kontaktformular</h2>
          <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            ${services && services.length > 0 ? `
            <p><strong>Interessierte Dienstleistungen:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <ul style="margin: 0; padding-left: 20px;">
                ${services.map((service: string) => `<li style="margin-bottom: 5px;">${service}</li>`).join('')}
              </ul>
            </div>
            ` : ''}
            <p><strong>Nachricht:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            Diese Nachricht wurde über das Kontaktformular auf deiner Website gesendet.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Fehler beim Senden der E-Mail' },
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