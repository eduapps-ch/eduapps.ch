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
- `.github/workflows/eduapps-wach-halten.yml`: fragt einmal pro Tag den Katalog ab, damit der
  Katalog-Server (Gratis-Plan) nicht pausiert

## Datenschutz

- Keine Anmeldung, keine Analyse-Tools, kein Tracking, keine Werbung.
- Der App-Katalog liegt auf einem Server in Zürich (Supabase, eu-central-2). Er enthält nur
  Angaben zu den Apps, keine Personendaten. Ist er nicht erreichbar, zeigt die Startseite eine eingebaute Liste.
- Alle Schriften und der QR-Erzeuger sind eingebettet. Die Sicherheitsregel jeder Seite erlaubt nur
  Verbindungen zum Katalog-Server (`lernstand.html` und die Apps: gar keine).

## Neue App

1. HTML-Datei in `apps/` legen; der Zurück-Knopf zeigt auf `../zurueck.html` (führt Lehrpersonen zur Übersicht, Kinder zur Klassenseite).
2. Ein Bild der Startseite (1024 × 768) als `bilder/<dateiname>.jpg` ablegen.
3. Eintrag in der Katalog-Tabelle `app` (Titel, Pfad, Fach, Klassen, Symbol).
