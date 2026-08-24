// KA 8.1 — Hoe verliep de Tweede Wereldoorlog in Europa? — 5 havo
// Bron: Memo LOB 4/5 HV, paragraaf 8.1 "Het verloop van de oorlog" (p. 200-201,
// gelezen via de Publitas-bladerboek-link). Zelfde paragraaf/KA als de
// bestaande "begin-tweede-wereldoorlog"-les (het voeren van twee
// wereldoorlogen) — die les eindigde bij de inval in Polen; deze les gaat
// verder met het verloop van de oorlog, maar bewust alleen het Europese
// front — de Aziatische/Pacifische kant van het hoofdstuk (Japan, Pearl
// Harbor, atoombommen) is op verzoek weggelaten.
// Op verzoek (2026-08-24) sterk ingekort: de lesstof stopt bewust bij de
// inval in de Sovjet-Unie (1941) — "leave it there for now". Het vervolg
// (Stalingrad, D-Day, capitulatie mei 1945, nieuwe machtsverhoudingen) is
// welbewust NIET meegenomen en kan in een latere versie/vervolgles.
// "Maken"-slide n.v.t. (niet in deze bron aanwezig).
// Startopdracht recapt de vorige 5havo-les (begin-tweede-wereldoorlog):
// Duitsland breekt het verdrag van Versailles, tot en met de inval in Polen.
// Volgorde: advance-organizer-opzet zoals ontdekking-van-amerika (4havo) —
// eerst Startopdracht, dan titel/KA, dan de content-slide met
// startCollapsed:true zodat alleen de les-vraag in beeld komt tot de eerste
// klik.
const LESSON_SLIDES = [
  {
    type: 'startopdracht',
    bg: 'page',
    instruction: 'Schrijf over en vul aan. Gebruik de volgende woorden:',
    words: ['1935', 'Rijnland', 'Anschluss', 'appeasement', 'München', 'Sudetenland', 'Polen', 'Tweede Wereldoorlog'],
    paragraphs: [
      'Vanaf …… schond Hitler het verdrag van Versailles: hij bouwde een leger op, bezette het ……, en voegde in 1938 Oostenrijk bij Duitsland (de ……).',
      'Groot-Brittannië en Frankrijk kozen voor ……, en lieten Hitler op de Conferentie van …… het …… van Tsjecho-Slowakije innemen.',
      'Toch bezette hij in 1939 het hele land, en viel op 1 september …… binnen, waarna de …… officieel uitbrak.',
    ],
  },
  {
    type: 'title',
    eyebrow: 'Paragraaf 8.1',
    title: 'KA: Het voeren van twee wereldoorlogen',
  },
  {
    type: 'content',
    title: 'Hoe verliep de Tweede Wereldoorlog in Europa?',
    size: 'medium',
    startCollapsed: true,
    items: [
      { text: 'Na Polen wilde Hitler de rest van Europa', kind: 'header' },
      'In 1940 veroverde het Duitse leger bijna heel West-Europa: Denemarken, Noorwegen, Nederland, België en Frankrijk',
      'Maar Groot-Brittannië won de **Battle of Britain** en hield stand',
      '**Battle of Britain**: de strijd in de lucht boven Groot-Brittannië',
      'In 1941 viel Hitler de Sovjet-Unie aan',
      'Daarmee verbrak hij het **niet-aanvalsverdrag** dat hij in 1939 met Stalin had gesloten',
    ],
  },
  {
    type: 'content',
    title: 'Vragen',
    size: 'loose',
    items: [
      '1. Leg uit wat de Battle of Britain was, en waarom het winnen daarvan belangrijk was voor Groot-Brittannië.',
      '2. Leg uit wat het niet-aanvalsverdrag tussen Duitsland en de Sovjet-Unie inhield, en wat Hitler daarmee deed in 1941.',
      '3. Leg uit het verschil tussen wat er in 1940 gebeurde met West-Europa en wat er gebeurde met Groot-Brittannië.',
      '4. Leg uit waarom je zou kunnen zeggen dat Duitsland in 1940 en 1941 steeds meer landen als vijand kreeg.',
    ],
  },
  {
    type: 'question',
    eyebrow: 'Hoofdvraag',
    size: 'compact',
    question: 'Leg uit hoe Duitsland er in 1940 en 1941 in slaagde om grote delen van Europa te veroveren.',
  },
  {
    // Elke regel: twee begrippen die direct bij elkaar horen + één begrip uit
    // hetzelfde onderwerp (deze les of de vorige, paragraaf 8.1) dat er net
    // niet bij hoort.
    type: 'oddword',
    title: 'Welk woord weg?',
    size: 'loose',
    items: [
      '1. Denemarken — Noorwegen — Polen',
      '2. Nederland — België — Sovjet-Unie',
      '3. Groot-Brittannië — Standhield — Veroverd',
      '4. Niet-aanvalsverdrag — Stalin — Churchill',
      '5. 1940 — West-Europa — Sovjet-Unie',
      '6. 1941 — Sovjet-Unie — Frankrijk',
    ],
  },
];
