# eduapps.ch – Lehrpersonenzimmer

Plattform für Lehrpersonen: Lern-Apps aus dem Katalog auswählen, auf Klassen-Boards legen
und per QR-Code auf die Tablets der Kinder bringen.

## Dateien

- `index.html`: Startseite für Lehrpersonen, ohne Anmeldung: Intro, «So funktioniert's»,
  App-Übersicht mit Filtern (Fach, Klasse, ohne Lesen) und Auswahl «Für meine Klasse» mit QR-Code
- `klasse.html#a=slug,slug`: die ausgewählten Apps für die Kinder. Die Auswahl steckt nur im Link;
  das Tablet merkt sich den Link. (Ältere Board-Codes `klasse.html#CODE` funktionieren weiterhin.)
- `lernstand.html`: Lernstand-Codes der Apps einlesen und als Blätter drucken. Diese Seite darf
  gar keine Verbindung ins Internet aufbauen.
- `bilder/`: Bilder der Apps für die Startseite
- `.github/workflows/eduapps-wach-halten.yml`: fragt einmal pro Tag den Katalog ab, damit Supabase
  das Gratis-Projekt nicht pausiert

## Wo die Apps liegen

Die Apps selbst bleiben auf dem Pausenplatz (Repo `LandingpageApps`):
`https://benihonegger-source.github.io/LandingpageApps/apps/…`.
Im Katalog steht bei eigenen Apps nur der Pfad, z. B. `apps/anlaute.html`. Das Lehrpersonenzimmer
und `klasse.html` setzen die Adresse des Pausenplatzes davor (`APP_BASIS`).
So bleiben gespeicherte Lernstände auf den Tablets erhalten.

## Server und Datenschutz

- Supabase-Projekt «Lehrerzimmer», Region Zürich (eu-central-2).
- Gespeichert werden nur Pseudonyme der Lehrpersonen, Boards und der App-Katalog. Keine Daten von Kindern.
- Keine Anmeldung. Die Seite liest nur den öffentlichen App-Katalog (aktive Apps). Ist der Server nicht
  erreichbar, zeigt sie eine eingebaute Liste der Pausenplatz-Apps.
- Neue App in den Katalog: Eintrag in der Supabase-Tabelle `app` (Claude kann das per Chat erledigen).
- Alle Schriften und der QR-Erzeuger sind eingebettet. Die Sicherheitsregel jeder Seite erlaubt nur
  Verbindungen zum eigenen Supabase-Server (`lernstand.html`: gar keine).

## Domain

eduapps.ch zeigt über GitHub Pages auf dieses Repo (Settings → Pages → Custom domain).
