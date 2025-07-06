import { NextRequest, NextResponse } from 'next/server';

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

    // Temporär: Log die Nachricht statt E-Mail zu senden
    console.log('Neue Kontaktanfrage:', {
      name,
      email,
      message,
      services,
      timestamp: new Date().toISOString()
    });

    // Simuliere erfolgreiche Antwort
    return NextResponse.json(
      { message: 'Nachricht erfolgreich gesendet! (Temporär: E-Mail-Funktion wird bald aktiviert)' },
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