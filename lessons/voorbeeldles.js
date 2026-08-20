// Seed example lesson — the reference deck's own demo content (VOC / Gouden
// Eeuw), used to prove the deck engine end-to-end before real lessons are
// authored. To add a new lesson: copy this file's shape to
// lessons/<id>.js, add one entry per class in data/lessons-index.js.
const LESSON_SLIDES = [
  {
    type: 'title',
    eyebrow: '5.1',
    title: 'KA: De wetenschappelijke revolutie',
  },
  {
    type: 'startopdracht',
    bg: 'page',
    instruction: 'Schrijf over en vul aan. Gebruik de volgende woorden:',
    words: ['VOC', 'Azië', 'Amsterdam', 'multinational'],
    paragraphs: [
      'In 1602 kreeg de …… het alleenrecht op de handel met …….',
      'Het was de eerste …… ter wereld.',
      '…… groeide uit tot het belangrijkste handelscentrum van Europa.',
    ],
  },
  {
    type: 'content',
    title: 'Wat was de VOC?',
    items: [
      'Er waren zes aparte kamers, in verschillende steden.',
      'Handelaren konden aandelen kopen: de eerste **aandelenbeurs** ter wereld.',
      'De winst werd verdeeld onder de aandeelhouders.',
    ],
  },
  {
    type: 'content',
    title: 'Wat was de VOC?',
    items: [
      'Er waren zes aparte kamers, in verschillende steden.',
      'Handelaren konden aandelen kopen: de eerste **aandelenbeurs** ter wereld.',
      'De winst werd verdeeld onder de aandeelhouders.',
    ],
  },
  {
    type: 'content',
    title: 'Wat was de VOC?',
    items: [
      'Er waren zes aparte kamers, in verschillende steden.',
      'Handelaren konden aandelen kopen: de eerste **aandelenbeurs** ter wereld.',
      'De winst werd verdeeld onder de aandeelhouders.',
    ],
  },
  {
    type: 'images',
    image1Caption: 'Willem van Oranje — sleep hier je eigen afbeelding in',
    image2Caption: 'De Opstand — sleep hier je eigen afbeelding in',
  },
  {
    type: 'content',
    title: 'Vragen',
    items: [
      '1. Wanneer begon de Tachtigjarige Oorlog?',
      '2. Wie riep op tot volharding, ondanks de onzekere afloop?',
      '3. Wat betekent "volharding" in deze context?',
    ],
  },
  {
    type: 'question',
    eyebrow: 'Hoofdvraag',
    question: 'Hoe kon de Republiek, ondanks een langdurige oorlog, uitgroeien tot de rijkste staat van Europa?',
  },
  {
    type: 'oddword',
    title: 'Welk woord weg?',
    items: [
      '1. VOC — Azië — Amsterdam',
      '2. Willem van Oranje — volharding — Rampjaar',
      '3. Tachtigjarige Oorlog — Vrede van Munster — VOC',
      '4. Republiek — wereldhandel — Willem van Oranje',
    ],
  },
];
