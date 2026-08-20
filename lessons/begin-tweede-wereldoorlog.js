// KA 8.1 — Hoe begon de Tweede Wereldoorlog? — 5 havo
// Bron: Memo LOB 4/5 HV, paragraaf 8.1 "Het verloop van de oorlog" (p. 200-201).
// Startopdracht recapt Hitlers machtsgreep uit de vorige les/het vorige
// hoofdstuk ("HC Duitsland 1.1 — De opkomst van het nationaalsocialisme").
const LESSON_SLIDES = [
  {
    type: 'title',
    eyebrow: 'Paragraaf 8.1',
    title: 'KA: Het voeren van twee wereldoorlogen',
  },
  {
    type: 'startopdracht',
    bg: 'page',
    instruction: 'Schrijf over en vul aan. Gebruik de volgende woorden:',
    words: ['NSDAP', 'propaganda', 'Rijkskanselier', 'Versailles'],
    paragraphs: [
      'Adolf Hitler werd in 1933 …… van Duitsland.',
      'Zijn partij, de ……, gebruikte …… om aanhang te winnen onder de bevolking.',
      'Hitler beloofde het verdrag van …… terug te draaien en Duitsland weer machtig te maken.',
    ],
  },
  {
    type: 'content',
    title: 'Hoe begon de Tweede Wereldoorlog?',
    items: [
      { text: 'Duitsland breekt het verdrag van Versailles', kind: 'header' },
      'In 1935 voerde Hitler de dienstplicht weer in',
      'Hij liet een grote wapenindustrie opbouwen',
      'Maar: in 1936 bezette hij het Rijnland',
      'Zijn doel: alle Duitstalige gebieden verenigen in één groot Duits rijk',
      'In maart 1938 voegde hij Oostenrijk bij Duitsland: de **Anschluss**',
    ],
  },
  {
    type: 'content',
    title: 'Hoe begon de Tweede Wereldoorlog?',
    size: 'medium',
    items: [
      { text: 'Groot-Brittannië en Frankrijk kozen voor appeasement', kind: 'header' },
      'Ze keurden Hitlers beleid af, maar grepen niet in',
      'Reden: zware verliezen in de Eerste Wereldoorlog, en een zwakker leger dan Duitsland',
      'Met **appeasement** probeerden ze oorlog te voorkomen door Hitler tegemoet te komen',
      'Op de Conferentie van München (1938) mocht Hitler het Sudetenland innemen',
      'In maart 1939 bezette Hitler, in strijd met die afspraak, heel Tsjecho-Slowakije',
      'Op 1 september 1939 viel Duitsland Polen binnen: Groot-Brittannië en Frankrijk verklaarden de oorlog',
    ],
  },
  {
    type: 'content',
    title: 'Vragen',
    size: 'loose',
    items: [
      '1. Leg uit waarom Groot-Brittannië en Frankrijk in eerste instantie niet ingrepen toen Hitler het Verdrag van Versailles begon te schenden.',
      '2. Leg uit waarom de Conferentie van München averechts werkte: in plaats van oorlog te voorkomen, maakte het Hitler juist zelfverzekerder.',
      '3. Was de appeasementpolitiek van Groot-Brittannië en Frankrijk een logische keuze gezien hun situatie, of een grote fout? Onderbouw je antwoord.',
      '4. Leg uit waarom juist de inval in Polen, en niet eerdere stappen zoals de Anschluss, de directe aanleiding was voor het uitbreken van de oorlog.',
    ],
  },
  {
    // Echte oude examenvraag — havo geschiedenis, 2018 tijdvak 1, opgave 18.
    // Bron 6 is het Hossbach-verslag (5 nov. 1937); de vraag hinges alleen op
    // appeasement en de Conferentie van München, beide uit deze les.
    type: 'examenvraag',
    bronTekst: 'Verslag van een geheime bespreking op 5 november 1937 tussen Adolf Hitler, de Duitse minister van Buitenlandse Zaken en de Duitse legerleiding: "De Führer is van mening dat met grote waarschijnlijkheid Engeland, en naar het zich laat aanzien ook Frankrijk, in stilte Tsjecho-Slowakije al hebben afgeschreven en zich ermee hebben verzoend dat deze zaak binnenkort door Duitsland in het reine wordt gebracht. (...) Natuurlijk zal het noodzakelijk zijn onze aanvallen op Tsjecho-Slowakije en Oostenrijk voor te bereiden."',
    toelichting: 'Bron 6 uit het examen: een geheim verslag, opgesteld voor Hitler zelf, over zijn eigen plannen met Tsjecho-Slowakije en Oostenrijk.',
    vraag: 'Voor het slagen van de Conferentie van München en de appeasementpolitiek was het belangrijk dat de inhoud van dit gesprek niet in Groot-Brittannië bekend zou worden. Licht dit toe door: (1) zonder de bron aan te geven waarom de meeste Engelsen tijdens de Conferentie van München nog positief oordeelden over de gevoerde appeasementpolitiek, en (2) uit te leggen waardoor het bekend worden van deze bron dat oordeel zou hebben veranderd.',
    bron: 'Examenblad.nl — havo geschiedenis, 2018 tijdvak 1, opgave 18',
  },
  {
    type: 'question',
    eyebrow: 'Hoofdvraag',
    size: 'compact',
    question: 'Wat was de directe aanleiding voor het uitbreken van de Tweede Wereldoorlog, en hoe verhoudt die zich tot de stappen die Hitler daarvóór al had gezet?',
  },
  {
    // Elke regel: twee begrippen die direct bij elkaar horen + één begrip uit
    // hetzelfde onderwerp dat er net niet bij hoort.
    type: 'oddword',
    title: 'Welk woord weg?',
    size: 'loose',
    items: [
      '1. Rijkskanselier — 1933 — Appeasement',
      '2. Dienstplicht — Wapenindustrie — Anschluss',
      '3. Rijnland — Versailles — Sudetenland',
      '4. Anschluss — Oostenrijk — Polen',
      '5. München — Sudetenland — Tsjecho-Slowakije',
      '6. Appeasement — Groot-Brittannië en Frankrijk — Polen',
      '7. Tsjecho-Slowakije — Maart 1939 — München',
      '8. Polen — 1 september 1939 — Oostenrijk',
    ],
  },
];
