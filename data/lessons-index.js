// ── Voeg een nieuwe les toe onder de juiste klas ────────────────────────────
// { id, titel, beschrijving, kleur (optioneel) }
// 'id' moet overeenkomen met:
//   - het bestand in /lessons/  (bijv. "voc" → lessons/voc.js, met LESSON_SLIDES)
//   - het bestand in /practice-data/ (bijv. "voc" → practice-data/voc.json)
//
// 'kleur' gebruikt de tab-kleuren uit het design system (dezelfde kleuren als
// de TabRail in een les): var(--tab-a) t/m var(--tab-f).
//
// 'titel' begint altijd met het type les:
//   - "<x.x> — <titel>"   voor een paragraaf uit het boek, gekoppeld aan een
//     Kenmerkend Aspect. <titel> is woordelijk de 'title' van de content-
//     slide(s) met de lesstof (niet de Hoofdvraag-slide verderop in de les).
//     De bijbehorende 'beschrijving' is dan de KA zelf, ook woordelijk
//     overgenomen van de title-slide van de les (bijv.
//     "KA: Het voeren van twee wereldoorlogen") — dus niet een losse teaser.
//   - "HC <onderwerp> <hoofdstuk.paragraaf> — <titel>"   voor een historische
//     context, met het hoofdstuk/paragraafnummer uit het HC-boek (bijv.
//     "HC Duitsland 1.1 — ..."). 'beschrijving' blijft hier een losse teaser.

const KLASSEN = [
  {
    id: "4havo",
    naam: "4 havo",
    lessen: [
      { id: "begin-europese-expansie", titel: "2.1 — Hoe begon de Europese expansie overzee?", beschrijving: "KA: Het begin van de Europese overzeese expansie", kleur: "var(--tab-b)" },
    ],
  },
  {
    id: "5havo",
    naam: "5 havo",
    lessen: [
      { id: "duitsland-na-wo1", titel: "HC Duitsland 1.1 — Duitsland na de Eerste Wereldoorlog", beschrijving: "Van de Republiek van Weimar tot de beurskrach van 1929", kleur: "var(--tab-c)" },
      { id: "opkomst-nationaalsocialisme", titel: "HC Duitsland 1.1 — De opkomst van het nationaalsocialisme", beschrijving: "Waarom werd het nationaalsocialisme populair in Duitsland?", kleur: "var(--tab-c)" },
      { id: "begin-tweede-wereldoorlog", titel: "8.1 — Hoe begon de Tweede Wereldoorlog?", beschrijving: "KA: Het voeren van twee wereldoorlogen", kleur: "var(--tab-c)" },
    ],
  },
  {
    id: "5vwo",
    naam: "5 vwo",
    lessen: [
      { id: "opkomst-politieke-stromingen", titel: "8.2 — Conservatisme en politiek liberalisme", beschrijving: "KA: De opkomst van politiek-maatschappelijke stromingen: conservatisme en politiek liberalisme", kleur: "var(--tab-e)", voltooidBoodschap: "Lekker bezig, ouwe Thorbecke-adept!" },
    ],
  },
];
