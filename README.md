# eduapps.ch

Kleine Lern-Apps für die Primarschule: gratis, ohne Anmeldung, ohne Installation und ohne Daten über Kinder.

**Vision:** Bildung gehört allen. Die Apps entstehen mit Vibe-Coding: Lehrpersonen beschreiben, was ihre
Klasse braucht, und bauen daraus mit KI passgenaue Lern-Apps. Sie werden frei geteilt, öffentlich und gratis.

## Dateien

- `index.html`: Startseite für Lehrpersonen: Vision, «So funktioniert's», App-Übersicht mit Filtern
  (Fach, Klasse, ohne Lesen) und Auswahl «Für meine Klasse» mit QR-Code
- `klasse.html#a=slug,slug`: die ausgewählten Apps für die Kinder. Die Auswahl steckt nur im Link;
  das Tablet merkt sich den Link.
- `apps/`: die Lern-Apps. Der Knopf «Zurück» führt über `zurueck.html` dorthin, woher man kam.
- Vorlesen: alle Apps nutzen nur Stimmen, die auf dem Gerät laufen (nie Online-Stimmen), Spass-Stimmen zuletzt.
- `lernstand.html`: Lernstand-Codes der Apps einlesen und als Blätter drucken. Diese Seite darf
  gar keine Verbindung ins Internet aufbauen.
- `bilder/`: Bilder der Apps für die Startseite

## Datenschutz

- Kein Server, keine Datenbank: alles liegt in diesem Repo und läuft über GitHub Pages.
- Keine Anmeldung, keine Analyse-Tools, kein Tracking, keine Werbung.
- Der App-Katalog ist die Datei `katalog.js`. Startseite und Klassenseite lesen nur diese Datei.
- Alle Schriften und der QR-Erzeuger sind eingebettet. Die Sicherheitsregel jeder Seite verbietet
  Verbindungen nach aussen (`connect-src 'none'`).

## Neue App

1. HTML-Datei in `apps/` legen; der Zurück-Knopf zeigt auf `../zurueck.html` (führt Lehrpersonen zur Übersicht, Kinder zur Klassenseite).
2. Ein Bild der Startseite (1024 × 768) als `bilder/<dateiname>.jpg` ablegen.
3. In `katalog.js` einen Eintrag kopieren und anpassen.
