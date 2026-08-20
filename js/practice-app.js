// Retrieval-practice flashcard app — reuses the interaction set already
// validated in ~/flashcards/flashcard.html (flip, shuffle, prev/next, known
// toggle + localStorage, "alleen onbekend" filter) restyled under the
// JPT-lessen tokens/components instead of inventing a new flow.

(function () {
  const params = new URLSearchParams(location.search);
  const lessonId = params.get('lesson') || '';
  const storageKey = 'known_' + lessonId;

  let allCards = [];
  let deck = [];
  let index = 0;
  let knownSet = new Set();
  let filterOnly = false;

  const stageEl = document.getElementById('flashcard-stage');
  const cardEl = document.getElementById('flashcard');
  const questionEl = document.getElementById('question-text');
  const answerEl = document.getElementById('answer-text');
  const knownBadge = document.getElementById('known-badge');
  const countEl = document.getElementById('practice-count');
  const emptyEl = document.getElementById('practice-empty');
  const toolbarActions = document.getElementById('toolbar-actions');
  const progressDotsWrap = document.getElementById('progress-dots-wrap');
  const knownToggleWrap = document.getElementById('known-toggle-wrap');
  const navWrap = document.getElementById('practice-nav');
  const titleEl = document.getElementById('lesson-title');

  function loadKnown() {
    try { knownSet = new Set(JSON.parse(localStorage.getItem(storageKey)) || []); }
    catch { knownSet = new Set(); }
  }
  function saveKnown() {
    localStorage.setItem(storageKey, JSON.stringify([...knownSet]));
  }
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function buildDeck() {
    deck = filterOnly ? allCards.filter((_, i) => !knownSet.has(i)) : [...allCards];
    index = 0;
  }

  let btnShuffle, btnFilter, btnKnown, btnPrev, btnNext;

  function renderToolbar() {
    toolbarActions.innerHTML = '';
    btnShuffle = JPTL.Button({ text: '🔀 Schudden', variant: 'secondary', size: 'small', onClick: onShuffle });
    btnFilter = JPTL.Button({ text: filterOnly ? '🔍 Alle kaarten' : '🔍 Alleen onbekend', variant: filterOnly ? 'primary' : 'secondary', size: 'small', onClick: onToggleFilter });
    toolbarActions.appendChild(btnShuffle);
    toolbarActions.appendChild(btnFilter);
  }

  function renderKnownToggle(isKnown) {
    knownToggleWrap.innerHTML = '';
    btnKnown = JPTL.Button({
      text: isKnown ? '✓ Gekend!' : '☐ Ik ken dit',
      variant: isKnown ? 'primary' : 'secondary',
      onClick: onToggleKnown,
    });
    knownToggleWrap.appendChild(btnKnown);
  }

  function renderNav() {
    navWrap.innerHTML = '';
    btnPrev = JPTL.Button({ text: '‹', variant: 'secondary', onClick: () => { if (index > 0) { index--; showCard(); } } });
    btnNext = JPTL.Button({ text: '›', variant: 'secondary', onClick: () => { if (index < deck.length - 1) { index++; showCard(); } } });
    navWrap.appendChild(btnPrev);
    navWrap.appendChild(btnNext);
  }

  function showCard() {
    if (deck.length === 0) {
      stageEl.style.display = 'none';
      knownToggleWrap.style.display = 'none';
      navWrap.style.display = 'none';
      emptyEl.style.display = 'block';
      countEl.textContent = '0 kaarten';
      progressDotsWrap.innerHTML = '';
      return;
    }
    stageEl.style.display = '';
    knownToggleWrap.style.display = '';
    navWrap.style.display = '';
    emptyEl.style.display = 'none';

    cardEl.classList.remove('is-flipped');

    const card = deck[index];
    questionEl.textContent = card.question;
    answerEl.textContent = card.answer;

    const originalIndex = allCards.indexOf(card);
    const isKnown = knownSet.has(originalIndex);
    knownBadge.style.display = isKnown ? '' : 'none';
    renderKnownToggle(isKnown);

    renderNav();
    btnPrev.disabled = index === 0;
    btnNext.disabled = index === deck.length - 1;

    countEl.innerHTML = `${index + 1} / ${deck.length} &nbsp;·&nbsp; ${knownSet.size} gekend`;

    progressDotsWrap.innerHTML = '';
    progressDotsWrap.appendChild(JPTL.ProgressDots({ total: deck.length, current: index }));
  }

  function onToggleKnown() {
    const card = deck[index];
    const originalIndex = allCards.indexOf(card);
    if (knownSet.has(originalIndex)) knownSet.delete(originalIndex);
    else knownSet.add(originalIndex);
    saveKnown();

    const isKnown = knownSet.has(originalIndex);
    knownBadge.style.display = isKnown ? '' : 'none';
    renderKnownToggle(isKnown);
    countEl.innerHTML = `${index + 1} / ${deck.length} &nbsp;·&nbsp; ${knownSet.size} gekend`;

    if (filterOnly && isKnown) {
      setTimeout(() => {
        deck.splice(index, 1);
        if (index >= deck.length) index = Math.max(0, deck.length - 1);
        showCard();
      }, 500);
    }
  }

  function onShuffle() {
    deck = shuffle(deck);
    index = 0;
    showCard();
  }

  function onToggleFilter() {
    filterOnly = !filterOnly;
    renderToolbar();
    buildDeck();
    showCard();
  }

  stageEl.addEventListener('click', () => cardEl.classList.toggle('is-flipped'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') btnNext && btnNext.click();
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') btnPrev && btnPrev.click();
    else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); cardEl.classList.toggle('is-flipped'); }
  });

  async function init() {
    loadKnown();
    renderToolbar();

    const lesson = typeof KLASSEN !== 'undefined'
      ? KLASSEN.flatMap(k => k.lessen).find(l => l.id === lessonId)
      : null;
    if (lesson) {
      titleEl.textContent = lesson.titel;
      document.title = lesson.titel + ' — oefenen';
    } else if (lessonId) {
      titleEl.textContent = lessonId;
    }

    if (!lessonId) {
      document.querySelector('.practice-shell').innerHTML = '<p class="practice-empty">Geen les opgegeven. Ga terug naar het <a href="index.html">overzicht</a>.</p>';
      return;
    }

    try {
      const res = await fetch('practice-data/' + lessonId + '.json');
      if (!res.ok) throw new Error('not found');
      allCards = await res.json();
    } catch {
      document.querySelector('.practice-shell').innerHTML = `<p class="practice-empty">Kon de oefenvragen voor "${lessonId}" niet laden.</p>`;
      return;
    }

    buildDeck();
    deck = shuffle(deck);
    showCard();
  }

  init();
})();
