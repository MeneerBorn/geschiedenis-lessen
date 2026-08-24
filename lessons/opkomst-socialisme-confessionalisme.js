// KA 5.3 — Socialisme en confessionalisme — 5 vwo
// Bron: JPT-26/27-5V (Google Drive). Zelfde bredere KA als de bestaande
// "opkomst-politieke-stromingen"-les (conservatisme/politiek liberalisme),
// nu vanuit socialisme en confessionalisme — KA-tekst getrimd tot alleen die
// twee stromingen, zoals ook bij de vorige les gedaan.
// Startopdracht is de echte, al goed opgebouwde recap van de vorige les uit
// de bron (conservatisme/politiek liberalisme) — vrijwel woordelijk
// overgenomen, inclusief hergebruikt woord (Franse revolutie, 2x) en één
// zelfbedacht antwoord (minister Thorbecke).
// Geen examenvraag (op standaard verzoek vanaf nu voor alle klassen).
// Hoofdvraag was in de bron nog "Yet to be determined" — hieronder zelf
// ingevuld, reproductie + lichte koppeling, geen Big Six-behandeling
// gevraagd deze keer.
// Extra, eenmalige opdracht aan het eind van de les (op verzoek): een
// sorteeropdracht (conservatisme/politiek liberalisme/kan allebei) uit de
// bron. De bron geeft alleen de ongesorteerde begrippen, geen antwoordsleutel
// (kolomindeling is visuele info die verloren gaat bij tekst-extractie) — de
// sortering hieronder is zelf bepaald en door de gebruiker goedgekeurd:
// conservatisme (hertogen, koningen, restauratie), politiek liberalisme
// (revolutie, burgers, fabriekseigenaren, democratie, Thorbecke), kan
// allebei (arbeiders, oorlog, feminisme — expliciet als "ambigu" behandeld).
const LESSON_SLIDES = [
  {
    type: 'startopdracht',
    bg: 'page',
    instruction: 'Schrijf over en vul aan. Gebruik de volgende woorden:',
    words: ['Napoleon', 'restauratie', 'Franse revolutie', 'conservatisme', 'politiek liberalisme', 'burgers', 'inspraak'],
    wordsSuffix: '(verzin er één zelf)',
    paragraphs: [
      'Na de val van …… begon in West-Europa de ……. Gedurende deze periode wilden sommige mensen terug naar de tijd van vóór de ……. Deze mensen geloofden in het …….',
      'Tegelijkertijd was er ook het ……: een politieke stroming die juist blij was met de ……. Politiek liberalen wilden dat …… meer …… kregen in de politiek. Een belangrijke liberale politicus was …….',
    ],
  },
  {
    type: 'title',
    eyebrow: 'Paragraaf 5.3',
    title: 'KA: De opkomst van politiek-maatschappelijke stromingen: socialisme en confessionalisme',
  },
  {
    type: 'content',
    title: 'Socialisme en confessionalisme',
    size: 'medium',
    startCollapsed: true,
    items: [
      { text: 'Socialisme', kind: 'header' },
      'Kwam voort uit de industriële revolutie',
      'Socialisten wilden de levens van arbeiders verbeteren',
      'Al snel ontstonden er meerdere soorten socialisme',
      '**Sociaaldemocratie**: wilde dit bereiken via wetten en regels, bijvoorbeeld een minimumloon',
      '**Communisme**: wilde dat de arbeiders de macht grepen en het kapitalisme afschaften',
    ],
  },
  {
    type: 'content',
    title: 'Socialisme en confessionalisme',
    size: 'medium',
    items: [
      { text: 'Confessionalisme', kind: 'header' },
      'Een politieke stroming gebaseerd op het christelijk geloof',
      'In de nieuwe grondwet van minister Thorbecke (1848) kwam het recht op bijzonder onderwijs',
      'Dat betekende dat je een katholieke of protestantse school mocht oprichten',
      'Dit droeg bij aan **verzuiling**: de samenleving raakte opgedeeld in groepen (zuilen), zoals katholieken en socialisten',
    ],
  },
  {
    type: 'content',
    title: 'Vragen',
    size: 'loose',
    items: [
      '1. Leg uit het verschil in aanpak tussen sociaaldemocraten en communisten, ondanks dat beide het leven van arbeiders wilden verbeteren.',
      '2. Leg uit welk verband er bestaat tussen het christelijk geloof van confessionalisten en hun wens voor het recht op bijzonder onderwijs.',
      '3. Leg uit wat verzuiling was, en hoe het recht op bijzonder onderwijs daaraan bijdroeg.',
      '4. Leg uit waarom zowel het socialisme als het confessionalisme uiteindelijk hun eigen \'zuil\' vormden in de Nederlandse samenleving.',
    ],
  },
  {
    type: 'question',
    eyebrow: 'Hoofdvraag',
    question: 'Leg uit wat socialisten en confessionalisten elk wilden bereiken, en voor welke groep mensen zij opkwamen.',
  },
  {
    // Elke regel: twee begrippen die direct bij elkaar horen + één begrip uit
    // hetzelfde onderwerp (deze les of de vorige) dat er net niet bij hoort.
    type: 'oddword',
    title: 'Welk woord weg?',
    size: 'loose',
    items: [
      '1. Sociaaldemocratie — Communisme — Conservatisme',
      '2. Arbeiders — Industriële revolutie — Christelijk geloof',
      '3. Minimumloon — Sociaaldemocratie — Kapitalisme afschaffen',
      '4. Confessionalisme — Christelijk geloof — Franse revolutie',
      '5. Thorbecke — Grondwet van 1848 — Restauratie',
      '6. Bijzonder onderwijs — Katholieke of protestantse school — Burgers',
      '7. Verzuiling — Katholieken en socialisten — Politiek liberalisme',
      '8. Communisme — Arbeiders grijpen de macht — Democratie',
    ],
  },
  {
    // Eenmalige extra opdracht (op verzoek) — sorteeropdracht uit de bron,
    // niet de standaard startopdracht-format. Vraag-slide: ongesorteerd.
    type: 'content',
    title: 'Nog even herhalen: conservatisme of politiek liberalisme?',
    size: 'medium',
    items: [
      { text: 'Zet de begrippen in de juiste kolom', kind: 'header' },
      'Kolommen: Conservatisme — Politiek liberalisme — Kan allebei',
      'Revolutie, burgers, hertogen, fabriekseigenaren, arbeiders, oorlog, koningen, restauratie, democratie, minister Thorbecke, feminisme',
    ],
  },
  {
    // Antwoord-slide bij de sorteeropdracht hierboven.
    type: 'content',
    title: 'Nog even herhalen: conservatisme of politiek liberalisme? (antwoorden)',
    size: 'medium',
    items: [
      { text: 'Conservatisme', kind: 'header' },
      'Hertogen — Koningen — Restauratie',
      { text: 'Politiek liberalisme', kind: 'header' },
      'Revolutie — Burgers — Fabriekseigenaren — Democratie — Minister Thorbecke',
      { text: 'Kan allebei', kind: 'header' },
      'Arbeiders — Oorlog — Feminisme',
    ],
  },
];
