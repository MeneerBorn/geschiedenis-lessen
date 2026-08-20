// Deck runtime for deck.html — ported from reference/LessonDeck.dc.html's
// Component class (state machine, advance/back/goTo, keyboard, scale-to-fit)
// and its per-slide-type sc-if branches (rendered here as DOM builders using
// the JPTL component ports from components.js). The design system's 9 slide
// types are supported as-is, plus one added type: 'examenvraag' (a real old
// exam question with its bron(nen), for havo classes in exam years).
//
// Two deliberate departures from the literal reference markup, both noted in
// the plan: the startopdracht "exercise" variant uses --surface-exercise (the
// reference file uses --surface-page for both variants, which contradicts its
// own FillInBlanks.prompt.md — followed the documented intent instead); and a
// floating "back to overview" link is added since this is a multi-deck site.

const DeckEngine = (() => {
  function totalSteps(slide) {
    if (slide.type === 'content' || slide.type === 'image' || slide.type === 'recap' || slide.type === 'oddword') {
      return slide.items.length;
    }
    if (slide.type === 'timeline') return slide.marks.length;
    return 1;
  }

  function buildContentSlide(slide, step, container) {
    // isTitle
    if (slide.type === 'title') {
      const block = JPTL.el('div', { className: 'deck-title-block' });
      if (slide.eyebrow) block.appendChild(JPTL.el('div', { className: 'deck-title-eyebrow', text: slide.eyebrow }));
      block.appendChild(JPTL.SlideHeader({ title: slide.title }));
      container.appendChild(block);
      return;
    }
    // isImage
    if (slide.type === 'image') {
      const block = JPTL.el('div', { className: 'deck-image-block' });
      const figureWrap = JPTL.el('div', { className: 'deck-image-block__figure' }, [
        JPTL.ImageFigure({ src: slide.imageSrc, caption: slide.imageCaption }),
      ]);
      const bodyWrap = JPTL.el('div', { className: 'deck-image-block__body' }, [
        JPTL.SlideHeader({ eyebrow: slide.eyebrow, title: slide.title }),
        JPTL.RevealList({ items: slide.items, revealedCount: step }),
      ]);
      block.appendChild(figureWrap);
      block.appendChild(bodyWrap);
      container.appendChild(block);
      return;
    }
    // isImages
    if (slide.type === 'images') {
      const block = JPTL.el('div', { className: 'deck-images-block' }, [
        JPTL.el('div', {}, [JPTL.ImageFigure({ src: slide.image1Src, caption: slide.image1Caption })]),
        JPTL.el('div', {}, [JPTL.ImageFigure({ src: slide.image2Src, caption: slide.image2Caption })]),
      ]);
      container.appendChild(block);
      return;
    }
    // isQuestion
    if (slide.type === 'question') {
      const block = JPTL.el('div', { className: 'deck-question-block' }, [
        slide.eyebrow ? JPTL.el('div', { className: 'deck-question-block__eyebrow', text: slide.eyebrow }) : null,
        JPTL.el('div', { className: ['deck-question-block__question', slide.size === 'compact' ? 'deck-question-block__question--compact' : ''].join(' ').trim() }, [JPTL.renderInline(slide.question || '')]),
        slide.hint ? JPTL.el('div', { className: 'deck-question-block__hint' }, [JPTL.renderInline(slide.hint)]) : null,
      ]);
      container.appendChild(block);
      return;
    }
    // isQuote
    if (slide.type === 'quote') {
      const block = JPTL.el('div', { className: 'deck-quote-block' }, [
        slide.eyebrow ? JPTL.el('div', { className: 'deck-quote-block__eyebrow', text: slide.eyebrow }) : null,
        JPTL.Callout({ kind: 'quote', text: slide.quote, attribution: slide.attribution }),
      ]);
      container.appendChild(block);
      return;
    }
    // isTimeline
    if (slide.type === 'timeline') {
      const revealedMarks = slide.marks.slice(0, step).map((m) => ({ label: `${m.year} — ${m.label}`, tone: m.tone }));
      const marksWrap = JPTL.el('div', { className: 'deck-timeline-block__marks' });
      revealedMarks.forEach((m) => marksWrap.appendChild(JPTL.Divider({ label: m.label, tone: m.tone })));
      const block = JPTL.el('div', { className: 'deck-timeline-block' }, [
        JPTL.SlideHeader({ eyebrow: slide.eyebrow, title: slide.title }),
        marksWrap,
      ]);
      container.appendChild(block);
      return;
    }
    // isRecap
    if (slide.type === 'recap') {
      const total = totalSteps(slide);
      const children = [
        JPTL.SlideHeader({ eyebrow: slide.eyebrow, title: slide.title }),
        JPTL.RevealList({ items: slide.items, revealedCount: step }),
      ];
      if (step >= total) {
        children.push(JPTL.el('div', {}, [
          JPTL.Button({ text: 'Opnieuw beginnen', variant: 'secondary', size: 'small', onClick: (e) => { e.stopPropagation(); window.__deckRestart && window.__deckRestart(); } }),
        ]));
      }
      container.appendChild(JPTL.el('div', { className: 'deck-recap-block' }, children));
      return;
    }
  }

  function buildOverlaySlide(slide, step, slot) {
    // isContent
    if (slide.type === 'content') {
      const overlay = JPTL.el('div', { className: 'deck-canvas__overlay' }, [
        JPTL.el('div', { className: 'deck-canvas__overlay-inner' }, [
          JPTL.SlideHeader({ eyebrow: slide.eyebrow, title: slide.title, size: 'h2' }),
          JPTL.RevealList({ items: slide.items, revealedCount: step, size: slide.size || 'default' }),
        ]),
      ]);
      slot.appendChild(overlay);
      return;
    }
    // isOddWord
    if (slide.type === 'oddword') {
      const overlay = JPTL.el('div', { className: 'deck-canvas__overlay' }, [
        JPTL.el('div', { className: 'deck-canvas__overlay-inner deck-oddword' }, [
          JPTL.SlideHeader({ title: slide.title, size: 'h2' }),
          JPTL.RevealList({ items: slide.items, revealedCount: step, size: slide.size || 'default' }),
        ]),
      ]);
      slot.appendChild(overlay);
      return;
    }
    // examenvraag — a real old exam question with its bron(nen) and source
    // citation, all on one slide. Added type, not from the reference deck.
    if (slide.type === 'examenvraag') {
      const children = [
        JPTL.el('div', { className: 'jptl-slidehdr__eyebrow', text: slide.eyebrow || 'Examenvraag' }),
      ];
      if (slide.bronnen && slide.bronnen.length) {
        const images = slide.bronnen.map((b) => JPTL.el('div', {}, [
          JPTL.ImageFigure({ src: b.src, caption: b.caption, aspect: '4 / 3' }),
        ]));
        children.push(JPTL.el('div', { className: 'deck-examenvraag__images' }, images));
      }
      if (slide.bronTekst) {
        children.push(JPTL.el('div', { className: 'deck-examenvraag__brontekst' }, [JPTL.renderInline(slide.bronTekst)]));
      }
      if (slide.toelichting) {
        children.push(JPTL.el('div', { className: 'deck-examenvraag__toelichting' }, [JPTL.renderInline(slide.toelichting)]));
      }
      children.push(JPTL.el('div', { className: 'deck-examenvraag__question' }, [JPTL.renderInline(slide.vraag || '')]));
      children.push(JPTL.el('div', { className: 'deck-examenvraag__source', text: slide.bron || '' }));
      const overlay = JPTL.el('div', { className: 'deck-canvas__overlay' }, [
        JPTL.el('div', { className: 'deck-canvas__overlay-inner deck-examenvraag' }, children),
      ]);
      slot.appendChild(overlay);
      return;
    }
    // isStartopdracht (page or exercise variant)
    if (slide.type === 'startopdracht') {
      const isPage = slide.bg === 'page';
      const overlay = JPTL.el('div', {
        className: ['deck-canvas__overlay', isPage ? '' : 'deck-canvas__overlay--exercise'].join(' ').trim(),
      });
      const fill = JPTL.FillInBlanks({ instruction: slide.instruction, words: slide.words, paragraphs: slide.paragraphs });
      fill.style.position = 'absolute';
      fill.style.inset = '96px 96px 96px 150px';
      // FillInBlanks' own class sets width/height:100%, which otherwise wins
      // over the inset-derived box size for an absolutely positioned element.
      fill.style.width = 'auto';
      fill.style.height = 'auto';
      overlay.appendChild(fill);
      slot.appendChild(overlay);
      return;
    }
  }

  function isOverlayType(type) {
    return type === 'content' || type === 'oddword' || type === 'startopdracht' || type === 'examenvraag';
  }

  function init({ slides, canvasEl, contentEl, overlaySlotEl, tabrailEl, startIndex = 0 }) {
    const state = { slideIndex: startIndex, step: 1, scale: 1 };

    function render() {
      const slide = slides[state.slideIndex];
      contentEl.innerHTML = '';
      overlaySlotEl.innerHTML = '';
      if (isOverlayType(slide.type)) {
        buildOverlaySlide(slide, state.step, overlaySlotEl);
      } else {
        buildContentSlide(slide, state.step, contentEl);
      }
      tabrailEl.innerHTML = '';
      tabrailEl.appendChild(JPTL.TabRail({ total: slides.length, current: state.slideIndex, onSelect: goTo }));
    }

    function updateScale() {
      state.scale = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
      canvasEl.style.transform = `scale(${state.scale})`;
    }

    function advance() {
      const slide = slides[state.slideIndex];
      const total = totalSteps(slide);
      if (state.step < total) {
        state.step += 1;
      } else if (state.slideIndex < slides.length - 1) {
        state.slideIndex += 1;
        state.step = 1;
      }
      render();
    }

    function back() {
      if (state.step > 1) {
        state.step -= 1;
      } else if (state.slideIndex > 0) {
        state.slideIndex -= 1;
        state.step = totalSteps(slides[state.slideIndex]);
      }
      render();
    }

    function goTo(index) {
      state.slideIndex = index;
      state.step = 1;
      render();
    }

    function restart() {
      state.slideIndex = 0;
      state.step = 1;
      render();
    }
    window.__deckRestart = restart;

    canvasEl.addEventListener('click', advance);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); advance(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); back(); }
    });
    window.addEventListener('resize', updateScale);

    updateScale();
    render();
  }

  return { init, totalSteps };
})();
