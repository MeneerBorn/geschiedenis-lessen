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
// Volgorde op verzoek aangepast (2026-08-23) tot een "advance organizer"-
// opzet: eerst de Startopdracht (activeert voorkennis), dan pas titel/KA,
// dan meteen de eerste content-slide — maar die start "collapsed"
// (startCollapsed: true) zodat alleen de titel/les-vraag ("Hoe 'ontdekten'
// Europese landen Amerika?") in beeld komt, en zelfs de eerste regel
// ("Columbus vaart naar het westen") pas op de eerste klik verschijnt.
// Let op: dit is NIET de Hoofdvraag — die blijft een apart, dieper
// synthesevraagje en staat zoals gebruikelijk verderop (na Vragen, voor
// oddword), ongewijzigd qua inhoud en positie.
const LESSON_SLIDES = [
  {
    type: 'startopdracht',
    bg: 'page',
    instruction: 'Schrijf over en vul aan. Gebruik de volgende woorden:',
    words: ['15e', 'goud en zilver', 'Christendom', 'Ghana', 'Azië', 'factorijen', 'specerijen'],
    paragraphs: [
      'In de …… eeuw voeren de Portugezen langs Afrika naar Azië, op zoek naar ……, en om het …… te verspreiden.',
      'Rond 1450 bereikten ze de \'goudkust\' in ……, en voeren vandaar verder om Afrika heen naar ……',
      'Onderweg bouwden ze ……: handelsposten voor de handel in …… zoals peper en kaneel.',
    ],
  },
  {
    type: 'title',
    eyebrow: 'Paragraaf 2.1',
    title: 'KA: Het begin van de Europese overzeese expansie',
  },
  {
    type: 'content',
    title: "Hoe 'ontdekten' Europese landen Amerika?",
    size: 'medium',
    startCollapsed: true,
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
      '1. Leg uit waarom Columbus dacht dat hij in Azië was aangekomen, terwijl hij in werkelijkheid in Amerika was.',
      '2. Leg uit hoe Columbus\' zoektocht naar een route naar Azië uiteindelijk leidde tot de kolonisatie van Amerika door Spanje en Portugal.',
      '3. Leg uit welk verband er bestaat tussen de ontdekking van zilver in Zuid-Amerika en de kolonisatie van dat gebied door Spanje.',
      '4. Leg uit waarom 1492 vaak wordt gezien als een keerpunt in de wereldgeschiedenis.',
    ],
  },
  {
    type: 'question',
    eyebrow: 'Hoofdvraag',
    size: 'compact',
    question: "Hoe droeg Columbus' vergissing over zijn bestemming bij aan de kolonisatie van Amerika door Spanje en Portugal?",
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
