// KA 2.1 — Hoe 'ontdekten' Europese landen Amerika? — 4 havo
// Bron: JPT-4H (Google Drive), nieuwe slide over Columbus en de kolonisatie
// van Zuid-Amerika. Zelfde paragraaf/Kenmerkend Aspect als de bestaande
// "begin-europese-expansie" les (het begin van de Europese overzeese
// expansie) — geen nieuwe eigen "Paragraaf x.x"-dividerslide in de bron, dus
// nog steeds paragraaf 2.1, nu vanuit de Spaanse/Amerikaanse kant. Op
// verzoek een apart lesbestand/kaartje gehouden (twee lesuren), niet
// samengevoegd met de bestaande 2.1-les.
// "Maken"-slide op standaard verzoek weggelaten.
// Startopdracht recapt de Portugese ontdekkingsreizen uit de andere 2.1-les,
// omdat die les zonder startopdracht is gebouwd.
const LESSON_SLIDES = [
  {
    type: 'title',
    eyebrow: 'Paragraaf 2.1',
    title: 'KA: Het begin van de Europese overzeese expansie',
  },
  {
    type: 'startopdracht',
    bg: 'page',
    instruction: 'Schrijf over en vul aan. Gebruik de volgende woorden:',
    words: ['15e', 'winst', 'Christendom', 'Ghana', 'Azië'],
    paragraphs: [
      'De Portugese ontdekkingsreizen begonnen eind …… eeuw, gedreven door de zoektocht naar …… en de wens om het …… te verspreiden.',
      'Rond 1450 ontdekten ze de \'goudkust\' in ……, en voeren vandaar om Afrika heen naar ……',
    ],
  },
  {
    type: 'content',
    title: "Hoe 'ontdekten' Europese landen Amerika?",
    size: 'medium',
    items: [
      { text: 'Columbus vaart naar het westen (1492)', kind: 'header' },
      'In 1492 vaart Columbus, in opdracht van de Spaanse koning, naar het westen',
      'Hij denkt zo een nieuwe zeeroute naar Azië te vinden',
      'Maar: hij ontdekt een heel nieuw continent',
      "Hij noemt de bewoners **indianen**, omdat hij dacht in Indië (Azië) te zijn aangekomen",
    ],
  },
  {
    type: 'content',
    title: "Hoe 'ontdekten' Europese landen Amerika?",
    size: 'medium',
    items: [
      { text: 'Spanje en Portugal koloniseren Zuid-Amerika', kind: 'header' },
      'Spanje en Portugal koloniseren later een groot deel van Zuid-Amerika',
      'Spanje haalt veel **zilver** uit Zuid-Amerika',
      'Op plekken zoals Brazilië (kolonie van Portugal) komen plantages waar **suiker** wordt verbouwd',
    ],
  },
  {
    type: 'content',
    title: 'Vragen',
    size: 'loose',
    items: [
      '1. Leg uit waarom Columbus dacht dat hij in Azië was aangekomen, en wat dit zegt over de kennis van de wereld in die tijd.',
      '2. Vergelijk de motieven van Columbus met die van de Portugese ontdekkingsreizigers uit de vorige les: wat hadden ze gemeen, en waarin verschilden ze?',
      '3. Leg uit welk verband er bestaat tussen de aanwezigheid van zilver in Zuid-Amerika en het ontstaan van suikerplantages in Brazilië.',
      '4. Was het voor de inheemse bevolking van Amerika toeval dat Europese landen hun gebied gingen koloniseren, of was dit onvermijdelijk zodra Columbus voet aan wal zette? Onderbouw je antwoord.',
    ],
  },
  {
    type: 'question',
    eyebrow: 'Hoofdvraag',
    size: 'compact',
    question: "Waarom wordt Columbus' aankomst in Amerika een 'ontdekking' genoemd, en wat waren de gevolgen daarvan voor Europa en voor de inheemse bevolking van Amerika?",
  },
  {
    // Elke regel: twee begrippen die direct bij elkaar horen + één begrip uit
    // hetzelfde onderwerp (deze les of de vorige, paragraaf 2.1) dat er net
    // niet bij hoort.
    type: 'oddword',
    title: 'Welk woord weg?',
    size: 'loose',
    items: [
      '1. Columbus — 1492 — Vasco da Gama',
      '2. Spaanse koning — Columbus — Portugese koning',
      '3. Indianen — Columbus — Azië',
      '4. Nieuw continent — Amerika — Goudkust',
      '5. Zilver — Zuid-Amerika — Specerijen',
      '6. Suiker — Brazilië — Factorijen',
      '7. Portugal — Brazilië — Spanje',
      '8. Kolonisatie — Zuid-Amerika — Ontdekkingsreizen naar Azië',
    ],
  },
];
