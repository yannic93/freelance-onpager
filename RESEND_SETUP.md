# Resend Integration Setup

## 1. Resend Account erstellen
1. Gehe zu [resend.com](https://resend.com) und erstelle einen Account
2. Verifiziere deine E-Mail-Adresse
3. Gehe zu den API Keys und erstelle einen neuen API Key

## 2. Umgebungsvariablen konfigurieren
Erstelle eine `.env.local` Datei im Root-Verzeichnis deines Projekts:

```env
# Resend API Key
RESEND_API_KEY=re_your_api_key_here

# E-Mail-Konfiguration
CONTACT_EMAIL=deine-email@example.com
FROM_EMAIL=noreply@deine-domain.com
```

**Wichtige Hinweise:**
- Ersetze `re_your_api_key_here` mit deinem tatsächlichen Resend API Key
- Ersetze `deine-email@example.com` mit der E-Mail-Adresse, an die die Kontaktformular-Nachrichten gesendet werden sollen
- Ersetze `noreply@deine-domain.com` mit einer verifizierten Domain (oder verwende eine Resend-Test-Domain)

## 3. Domain verifizieren (optional)
Für Produktionsumgebungen solltest du deine eigene Domain bei Resend verifizieren:
1. Gehe zu den Domain-Einstellungen in Resend
2. Füge deine Domain hinzu
3. Folge den DNS-Anweisungen zur Verifizierung

## 4. API-Route anpassen
In der Datei `src/app/api/contact/route.ts` kannst du folgende Werte anpassen:
- `from`: Die Absender-E-Mail-Adresse
- `to`: Die Empfänger-E-Mail-Adresse(n)

## 5. Testen
1. Starte deine Entwicklungsumgebung: `npm run dev`
2. Fülle das Kontaktformular aus
3. Überprüfe, ob die E-Mail ankommt

## Troubleshooting
- **API Key Fehler**: Stelle sicher, dass dein API Key korrekt ist und nicht abgeschnitten wurde
- **Domain Fehler**: Verwende zunächst eine verifizierte Test-Domain von Resend
- **E-Mail kommt nicht an**: Überprüfe den Spam-Ordner und die Resend-Logs 