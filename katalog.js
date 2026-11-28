/*
  APP-KATALOG VON EDUAPPS.CH
  --------------------------
  Diese Liste ist der ganze Katalog. Es gibt keinen Server und keine Datenbank:
  die Startseite (index.html) und die Klassenseite (klasse.html) lesen nur diese Datei.

  Neue App hinzufügen:
  1. Die HTML-Datei in den Ordner «apps» legen (Zurück-Knopf: href="../zurueck.html").
  2. Ein Bild der Startseite (1024 × 768) als «bilder/<dateiname>.jpg» ablegen (freiwillig).
  3. Hier einen Eintrag kopieren, anpassen, Komma nicht vergessen.
  4. Mit Bild: den Dateinamen in index.html bei «var BILDER» ergänzen.
  5. In index.html und klasse.html bei «katalog.js?v=…» das Datum erhöhen,
     sonst zeigen Browser bis zu 10 Minuten lang noch die alte Liste.

  fach:      deutsch, mathematik, nmg, bewegung_sport, medien_informatik, ueberfachlich
  klassen:   Klassenstufen 1 bis 6, z. B. [1, 2]
  ohneLesen: true, wenn die App auch ohne Lesen spielbar ist
  slug:      kurzer Name ohne Leerzeichen; steht im QR-Link, darum später nicht mehr ändern
  aktiv:     false versteckt eine App, ohne sie zu löschen (freiwillig, Standard: sichtbar)
  extern:    true für Links auf fremde Seiten (öffnen in neuem Tab, freiwillig)
*/
window.KATALOG = [
  {
    slug:   "anlaute",
    titel:  "Anlaute",
    uebt:   "Anlaute hören, Buchstaben finden, der, die, das",
    url:    "apps/anlaute.html",
    fach:   "deutsch",
    klassen: [1],
    lp21:   ["D.1.A", "D.4.A"],
    ohneLesen: true,
    symbol: "A·a"
  },
  {
    slug:   "bildersudoku",
    titel:  "Bildersudoku",
    uebt:   "Logisch denken: Tiere so einziehen lassen, dass jedes pro Reihe, Spalte und Haus einmal wohnt (4×4, 6×6, 8×8)",
    url:    "apps/bildersudoku.html",
    fach:   "mathematik",
    klassen: [1, 2, 3, 4],
    lp21:   ["MA.2.B"],
    ohneLesen: true,
    symbol: "4×4"
  },
  {
    slug:   "blitzlicht",
    titel:  "Blitzlicht",
    uebt:   "Blitzlesen: die 100 häufigsten Wörter schnell erkennen",
    url:    "apps/blitzlesen.html",
    fach:   "deutsch",
    klassen: [1, 2],
    lp21:   ["D.2.A"],
    ohneLesen: false,
    symbol: "Blitz"
  },
  {
    slug:   "einmaleins-heft",
    titel:  "Einmaleins-Heft",
    uebt:   "Kleines und grosses 1×1, Rechnen bis 10 000",
    url:    "apps/einmaleins-heft.html",
    fach:   "mathematik",
    klassen: [2, 3, 4],
    lp21:   ["MA.1.A"],
    ohneLesen: false,
    symbol: "1×1"
  },
  {
    slug:   "geld-laden",
    titel:  "Geld-Laden",
    uebt:   "Rechnen mit Franken und Rappen, Rückgeld geben",
    url:    "apps/geld-laden.html",
    fach:   "mathematik",
    klassen: [1, 2],
    lp21:   ["MA.3.A"],
    ohneLesen: false,
    symbol: "Fr."
  },
  {
    slug:   "lesezug",
    titel:  "Lesezug",
    uebt:   "Lesen lernen: hören, Laute, Silben, Wörter, Sätze, Blitzlesen",
    url:    "apps/lesezug.html",
    fach:   "deutsch",
    klassen: [1, 2],
    lp21:   ["D.2.A"],
    ohneLesen: true,
    symbol: "Zug"
  },
  {
    slug:   "rechentrainer",
    titel:  "Rechentrainer 1",
    uebt:   "Plus und Minus bis 20 mit dem 20er-Feld",
    url:    "apps/rechentrainer-1.html",
    fach:   "mathematik",
    klassen: [1],
    lp21:   ["MA.1.A"],
    ohneLesen: false,
    symbol: "+−"
  },
  {
    slug:   "rechentrainer-2",
    titel:  "Rechentrainer 2",
    uebt:   "Plus und Minus bis 100: zuerst die Zehner, dann die Einer",
    url:    "apps/rechentrainer-2.html",
    fach:   "mathematik",
    klassen: [2],
    lp21:   ["MA.1.A"],
    ohneLesen: false,
    symbol: "100"
  },
  {
    slug:   "spielebox",
    titel:  "Spielebox",
    uebt:   "Knobeln: Klötze drehen, spiegeln und eine Kiste lückenlos füllen",
    url:    "apps/spielebox.html",
    fach:   "mathematik",
    klassen: [1, 2, 3, 4],
    lp21:   ["MA.2.A"],
    ohneLesen: true,
    symbol: "Box"
  },
  {
    slug:   "staerkenkreis",
    titel:  "Stärkenkreis",
    uebt:   "Eigene Stärken entdecken (nach Gardner)",
    url:    "apps/staerkenkreis.html",
    fach:   "ueberfachlich",
    klassen: [1, 2, 3, 4, 5, 6],
    lp21:   ["personal"],
    ohneLesen: false,
    symbol: "Ich"
  },
  {
    slug:   "tierbibliothek",
    titel:  "Tierbibliothek",
    uebt:   "Wissen über heimische Wildtiere, mit Videos",
    url:    "apps/tierbibliothek.html",
    fach:   "nmg",
    klassen: [2],
    lp21:   ["NMG.2"],
    ohneLesen: true,
    symbol: "Tier"
  }
];
