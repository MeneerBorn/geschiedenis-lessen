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
//   - "KA <paragraaf> — <titel>"              voor een paragraaf uit het boek,
//     gekoppeld aan een Kenmerkend Aspect (bijv. "KA 5.1 — ...", "KA 8.2 — ...")
//   - "HC <onderwerp> <hoofdstuk.paragraaf> — <titel>"   voor een historische
//     context, met het hoofdstuk/paragraafnummer uit het HC-boek (bijv.
//     "HC Duitsland 1.1 — ...", straks ook "HC Nederland <x.x> — ...")

const KLASSEN = [
  {
    id: "4havo",
    naam: "4 havo",
    lessen: [
      { id: "voorbeeldles", titel: "KA 5.1 — De wetenschappelijke revolutie", beschrijving: "Voorbeeldles: de VOC en de Gouden Eeuw", kleur: "var(--tab-b)" },
      { id: "begin-europese-expansie", titel: "KA 2.1 — Het begin van de Europese overzeese expansie", beschrijving: "Goud, God en specerijen: hoe de Portugese ontdekkingsreizen begonnen", kleur: "var(--tab-b)" },
    ],
  },
  {
    id: "5havo",
    naam: "5 havo",
    lessen: [
      { id: "duitsland-na-wo1", titel: "HC Duitsland 1.1 — Duitsland na de Eerste Wereldoorlog", beschrijving: "Van de Republiek van Weimar tot de beurskrach van 1929", kleur: "var(--tab-c)" },
      { id: "opkomst-nationaalsocialisme", titel: "HC Duitsland 1.1 — De opkomst van het nationaalsocialisme", beschrijving: "Waarom werd het nationaalsocialisme populair in Duitsland?", kleur: "var(--tab-c)" },
      { id: "begin-tweede-wereldoorlog", titel: "KA 8.1 — Hoe begon de Tweede Wereldoorlog?", beschrijving: "Van Hitlers machtsopbouw tot de Duitse inval in Polen", kleur: "var(--tab-c)" },
    ],
  },
  {
    id: "5vwo",
    naam: "5 vwo",
    lessen: [
      { id: "opkomst-politieke-stromingen", titel: "KA 8.2 — De opkomst van politiek-maatschappelijke stromingen: conservatisme en politiek liberalisme", beschrijving: "Conservatisme tegenover politiek liberalisme: van de Restauratie tot de grondwet van Thorbecke", kleur: "var(--tab-e)" },
    ],
  },
];
