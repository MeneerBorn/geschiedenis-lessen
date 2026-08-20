// Duitsland na de Eerste Wereldoorlog — 5 havo
// Slide-type set from the design system: title, content, images,
// content ("Vragen"), question ("Hoofdvraag"), oddword.
const LESSON_SLIDES = [
  {
    type: 'title',
    title: 'Hoe eindigde voor Duitsland de Eerste Wereldoorlog?',
  },
  {
    type: 'content',
    title: 'Hoe eindigde voor Duitsland de Eerste Wereldoorlog?',
    items: [
      { text: 'Eind 1918 werd duidelijk dat Duitsland zou verliezen', kind: 'header' },
      'Arbeiders en soldaten kwamen in opstand',
      'Duitse keizer vluchtte naar Nederland',
      'De **Republiek van Weimar** werd uitgeroepen (grootste partij: sociaaldemocraten)',
      'Nieuwe grondwet, Duitsland werd een **parlementaire democratie** (een land met gekozen regering)',
    ],
  },
  {
    type: 'content',
    title: 'Hoe eindigde voor Duitsland de Eerste Wereldoorlog?',
    items: [
      { text: 'De nieuwe regering sloot in 1919 het verdrag van Versailles', kind: 'header' },
      'Duitsland moest zich helemaal ontwapenen',
      'Het gebied Elzas-Lotharingen werd van Frankrijk',
      'Duitsland moest **herstelbetalingen** doen',
      'Veel Duitsers voelden zich vernederd',
    ],
  },
  {
    type: 'content',
    title: 'Hoe eindigde voor Duitsland de Eerste Wereldoorlog?',
    size: 'medium',
    items: [
      { text: 'Duitsland kwam in financiële problemen', kind: 'header' },
      'Teveel herstelbetalingen',
      'Elzas-Lotharingen had veel grondstoffen, die miste Duitsland nu',
      'Daardoor kwam er **hyperinflatie**: geld was niets meer waard',
      'Amerika kwam met het **Dawesplan**: tijdelijk minder herstelbetalingen en leningen van Amerika',
      'In 1929 kwam er een nieuwe economische crisis door de **beurskrach** (gevolg: veel werkloosheid)',
    ],
  },
  {
    type: 'images',
    image1Caption: 'Onlusten in Duitsland — sleep hier je eigen afbeelding in',
    image2Caption: 'Hyperinflatie: geld stapelen — sleep hier je eigen afbeelding in',
  },
  {
    // Hogere-orde vragen (uitleggen/beredeneren/onderbouwen), niet alleen
    // reproductie — passend bij het examenniveau van 5 havo.
    type: 'content',
    title: 'Vragen',
    size: 'loose',
    items: [
      '1. Leg uit hoe het verdrag van Versailles indirect heeft bijgedragen aan de hyperinflatie van de jaren twintig.',
      '2. Was het Dawesplan volgens jou een echte oplossing voor de Duitse economische problemen, of vooral uitstel van problemen? Onderbouw je antwoord.',
      '3. De Republiek van Weimar wordt wel eens "een democratie zonder democraten" genoemd. Leg uit waarom.',
      '4. Sommigen zeggen dat de Republiek van Weimar al vanaf 1919 gedoemd was te mislukken, anderen zeggen dat pas de beurskrach van 1929 haar einde bezegelde. Welk standpunt vind jij het meest overtuigend? Onderbouw je keuze.',
    ],
  },
  {
    // Echte oude examenvraag — havo geschiedenis, 2016 tijdvak 1, opgave 18.
    // Bron A/B: foto's van Willy Römer. Alleen voor eigen, niet-gepubliceerd
    // gebruik — deze foto's zijn auteursrechtelijk beschermd (bpk-bildagentur).
    type: 'examenvraag',
    bronnen: [
      { src: 'assets/duitsland-na-wo1/bron-a-veteraan-1922.png', caption: 'Bron A — Foto van Willy Römer, 1922: een in de Eerste Wereldoorlog verblinde veteraan, werkzaam als straatmuzikant' },
      { src: 'assets/duitsland-na-wo1/bron-b-juwelier-1931.jpeg', caption: 'Bron B — Foto van Willy Römer, 1931: opheffingsuitverkoop van een juwelier aan de Friedrichstrasse in Berlijn ("22.000 Mark huur is niet meer op te brengen")' },
    ],
    vraag: 'De foto\'s die Willy Römer tussen 1919 en 1933 in Berlijn maakte, brengen verschillende factoren in beeld die hebben geleid tot de ondergang van de Republiek van Weimar. Licht dit toe door bij elke foto een punt van kritiek op de leiders van de Republiek van Weimar te noemen en aan te geven hoe dit in de foto zichtbaar wordt.',
    bron: 'Examenblad.nl — havo geschiedenis, 2016 tijdvak 1, opgave 18',
  },
  {
    type: 'question',
    eyebrow: 'Hoofdvraag',
    question: 'Waarom kwam Duitsland na de Eerste Wereldoorlog in zulke grote problemen?',
  },
  {
    // Elke regel: twee begrippen die direct bij elkaar horen + één begrip uit
    // hetzelfde onderwerp dat er net niet bij hoort — leerlingen moeten
    // uitleggen waarom, niet alleen herkennen.
    type: 'oddword',
    title: 'Welk woord weg?',
    size: 'loose',
    items: [
      '1. Opstand — Vlucht van de keizer — Herstelbetalingen',
      '2. Republiek van Weimar — Sociaaldemocraten — Elzas-Lotharingen',
      '3. Ontwapening — Elzas-Lotharingen — Hyperinflatie',
      '4. Herstelbetalingen — Vernedering — Beurskrach',
      '5. Elzas-Lotharingen — Verlies van grondstoffen — Dawesplan',
      '6. Dawesplan — Amerikaanse leningen — Werkloosheid',
      '7. Beurskrach — Werkloosheid — Herstelbetalingen',
      '8. Sociaaldemocraten — Parlementaire democratie — Vernedering',
    ],
  },
];
