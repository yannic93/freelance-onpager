import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { email, source, sourceOther } = await request.json();

    // Validierung
    if (!email || !source) {
      return NextResponse.json(
        { error: 'E-Mail und Quelle sind erforderlich' },
        { status: 400 }
      );
    }

    // Source-Tracking per E-Mail senden
    const resend = new Resend(process.env.RESEND_API_KEY);
    const berlinTime = new Date().toLocaleString('de-DE', { 
      timeZone: 'Europe/Berlin',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const sourceText = source === 'Sonstiges' && sourceOther 
      ? `${source} (${sourceOther})` 
      : source;

    const html = `
      <h2>📊 Source Tracking Information</h2>
      <p><strong>Kontakt:</strong> ${email}</p>
      <p><strong>Quelle:</strong> ${sourceText}</p>
      <p><small>Erfasst am: ${berlinTime}</small></p>
    `;

    try {
      await resend.emails.send({
        from: 'info@yannicnandy.com',
        to: 'info@yannicnandy.com',
        subject: `Source Tracking: ${sourceText} - ${email}`,
        html,
      });

      // Optional: Hier könntest du die Daten auch in einer Datenbank speichern
      // await db.sourceTracking.create({ email, source, sourceOther, timestamp: new Date() });

      return NextResponse.json(
        { message: 'Source erfolgreich gespeichert' },
        { status: 200 }
      );
    } catch (err: unknown) {
      console.error('Source tracking email error:', err);
      return NextResponse.json(
        { error: 'E-Mail Versand fehlgeschlagen' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Source tracking error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}

