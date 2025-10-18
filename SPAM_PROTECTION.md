# Spam-Schutz für Kontaktformular

Dieses Dokument beschreibt die implementierten Spam-Schutzmaßnahmen für das Resend-Kontaktformular.

## 🛡️ Implementierte Schutzmaßnahmen

### 1. **Honeypot-Feld** 
- Unsichtbares Eingabefeld, das nur von Bots ausgefüllt wird
- Echte Nutzer sehen und füllen dieses Feld nicht aus
- Bei Ausfüllung wird die Anfrage still abgelehnt (Bot erhält keine Info)
- **Location:** `Contact.tsx` - verstecktes Input-Feld

### 2. **Rate Limiting (IP-basiert)**
- Maximale Anfragen: **3 pro Stunde pro IP-Adresse**
- Zeitfenster: 1 Stunde
- Automatisches Cleanup alter Einträge alle 10 Minuten
- **Location:** `api/contact/route.ts`

**Wichtig:** Die aktuelle Implementierung verwendet In-Memory-Storage. Für Produktions-Umgebungen mit mehreren Server-Instanzen sollte Redis oder eine Datenbank verwendet werden.

### 3. **Zeitbasierte Validierung**
- **Client-seitig:** Formular muss mindestens 3 Sekunden geöffnet sein
- **Server-seitig:** Anfrage muss zwischen 2 Sekunden und 1 Stunde liegen
- Verhindert automatisierte Bot-Submissions
- **Location:** `Contact.tsx` & `api/contact/route.ts`

### 4. **Verbesserte Input-Validierung**
- **E-Mail-Format:** Regex-Validierung
- **Name:** Max. 100 Zeichen
- **E-Mail:** Max. 100 Zeichen
- **Nachricht:** Min. 10 Zeichen, Max. 5000 Zeichen
- **Location:** `api/contact/route.ts`

### 5. **Spam-Keyword-Filter**
- Prüft auf gängige Spam-Begriffe wie:
  - viagra, casino, lottery, prize, click here, free money
- Bei Erkennung: Stille Ablehnung (gibt Erfolg zurück, sendet aber keine E-Mail)
- **Location:** `api/contact/route.ts`

### 6. **Security Headers**
- IP-Adresse wird aus Headers extrahiert (`x-forwarded-for`, `x-real-ip`)
- Unterstützt Reverse Proxies und CDNs
- **Location:** `api/contact/route.ts`

## 🔧 Konfiguration anpassen

### Rate Limit ändern
In `src/app/api/contact/route.ts`:

```typescript
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 Stunde
const MAX_REQUESTS_PER_WINDOW = 3; // Max. Anfragen
```

### Zeitbasierte Validierung ändern
In `src/app/components/Contact.tsx`:

```typescript
if (timeSpent < 3) { // Mindestzeit in Sekunden
  // Fehler
}
```

In `src/app/api/contact/route.ts`:

```typescript
if (timeSpent < 2 || timeSpent > 3600) { // Min/Max in Sekunden
  // Fehler
}
```

### Spam-Keywords erweitern
In `src/app/api/contact/route.ts`:

```typescript
const spamKeywords = ['viagra', 'casino', 'lottery', 'prize', 'click here', 'free money', 'DEIN_KEYWORD'];
```

## 📊 Monitoring

### Rate Limit Status prüfen
Die Rate-Limit-Map speichert folgende Informationen:
- IP-Adresse
- Anzahl der Anfragen
- Reset-Zeitpunkt

### Logs aktivieren
Für Debugging kannst du in der API-Route Logs hinzufügen:

```typescript
console.log('Rate Limit Check:', { ip: clientIp, ...rateLimit });
```

## 🚀 Weitere Verbesserungen (Optional)

### 1. Google reCAPTCHA v3
Für noch besseren Schutz kann reCAPTCHA v3 hinzugefügt werden:

```bash
npm install react-google-recaptcha-v3
```

### 2. Redis für Rate Limiting
Für Produktions-Umgebungen mit mehreren Servern:

```bash
npm install ioredis
```

### 3. Cloudflare Turnstile
Alternative zu reCAPTCHA, datenschutzfreundlicher:

```bash
npm install @marsidev/react-turnstile
```

### 4. Content Security Policy (CSP)
In `next.config.ts` Headers hinzufügen für zusätzliche Sicherheit.

## 🐛 Troubleshooting

### Problem: Legitime Nutzer werden blockiert
- **Lösung:** Rate Limit erhöhen (`MAX_REQUESTS_PER_WINDOW`)
- **Lösung:** Zeitfenster verkleinern (`RATE_LIMIT_WINDOW`)

### Problem: Spam kommt immer noch durch
- **Lösung:** Spam-Keywords erweitern
- **Lösung:** reCAPTCHA hinzufügen
- **Lösung:** Zeitbasierte Validierung verschärfen

### Problem: Rate Limiting funktioniert nicht bei mehreren Servern
- **Lösung:** Redis oder Datenbank für Rate-Limit-Storage verwenden

## 📝 Wartung

### Regelmäßige Aufgaben:
1. Spam-Meldungen analysieren und Keywords aktualisieren
2. Rate-Limit-Metriken überwachen
3. Bei Bedarf Schutzmaßnahmen anpassen

### Logs:
- Server-Logs auf verdächtige Muster prüfen
- Bei vielen 429-Errors (Too Many Requests): Rate Limit anpassen
- Bei vielen 400-Errors: Validierung überprüfen

## 📞 Support

Bei Fragen oder Problemen:
- Überprüfe die Konfiguration in `api/contact/route.ts`
- Teste das Formular mit verschiedenen Szenarien
- Prüfe Browser-Console und Server-Logs

