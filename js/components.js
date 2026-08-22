// Vanilla-JS ports of the JPT-lessen component library (see design handoff
// components/**/*.jsx.txt). Each function builds real DOM nodes with the
// same class names/structure as the React source, so css/components.css
// applies unchanged. Props mirror the .jsx.txt signatures.

const JPTL = (() => {
  const TAB_PALETTE = ['--tab-a', '--tab-b', '--tab-c', '--tab-d', '--tab-e', '--tab-f'];

  function el(tag, opts = {}, children = []) {
    const node = document.createElement(tag);
    if (opts.className) node.className = opts.className;
    if (opts.style) Object.assign(node.style, opts.style);
    if (opts.attrs) for (const [k, v] of Object.entries(opts.attrs)) node.setAttribute(k, v);
    if (opts.onClick) node.addEventListener('click', opts.onClick);
    if (opts.text != null) node.textContent = opts.text;
    for (const child of [].concat(children)) {
      if (child == null) continue;
      node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
    }
    return node;
  }

  // Renders "**bold**" spans within an otherwise plain text line.
  function renderInline(text) {
    const frag = document.createDocumentFragment();
    if (typeof text !== 'string' || text.indexOf('**') === -1) {
      frag.appendChild(document.createTextNode(text));
      return frag;
    }
    text.split('**').forEach((part, i) => {
      frag.appendChild(i % 2 === 1 ? el('strong', {}, part) : document.createTextNode(part));
    });
    return frag;
  }

  function SlideHeader({ eyebrow, title, subtitle, size } = {}) {
    const wrap = el('div', { className: 'jptl-slidehdr' });
    if (eyebrow) wrap.appendChild(el('div', { className: 'jptl-slidehdr__eyebrow', text: eyebrow }));
    const titleEl = el('h1', { className: 'jptl-slidehdr__title' });
    titleEl.appendChild(renderInline(title || ''));
    if (size === 'h2') titleEl.style.fontSize = 'var(--text-h2)';
    wrap.appendChild(titleEl);
    if (subtitle) wrap.appendChild(el('div', { className: 'jptl-slidehdr__subtitle', text: subtitle }));
    return wrap;
  }

  function RevealList({ items = [], revealedCount, animate = true, size = 'default' } = {}) {
    const count = revealedCount == null ? items.length : revealedCount;
    const wrap = el('div', { className: ['jptl-reveal', size !== 'default' ? `jptl-reveal--${size}` : ''].join(' ').trim() });
    items.slice(0, count).forEach((item) => {
      const isHeader = typeof item === 'object' && item !== null && item.kind === 'header';
      const text = typeof item === 'object' && item !== null ? item.text : item;
      const row = el('div', {
        className: ['jptl-reveal__item', animate ? 'jptl-anim' : '', isHeader ? 'jptl-reveal__item--header' : ''].join(' ').trim(),
      });
      if (!isHeader) row.appendChild(el('span', { className: 'jptl-reveal__marker' }));
      row.appendChild(el('span', {}, renderInline(text)));
      wrap.appendChild(row);
    });
    return wrap;
  }

  const IMAGE_PLACEHOLDER_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
    '<rect x="3" y="4" width="18" height="16" rx="2"></rect>' +
    '<circle cx="8.5" cy="9.5" r="1.5"></circle>' +
    '<path d="M21 16l-5-5-4 4-3-3-5 5"></path></svg>';

  function ImageFigure({ src, alt = '', caption, aspect = '4 / 3' } = {}) {
    const figure = el('figure', { className: 'jptl-figure' });
    const frame = el('div', { className: 'jptl-figure__frame', style: { aspectRatio: aspect } });
    if (src) {
      frame.appendChild(el('img', { attrs: { src, alt } }));
    } else {
      const placeholder = el('div', { className: 'jptl-figure__placeholder' });
      placeholder.innerHTML = IMAGE_PLACEHOLDER_SVG;
      placeholder.appendChild(el('span', { text: 'Afbeelding' }));
      frame.appendChild(placeholder);
    }
    figure.appendChild(frame);
    if (caption) figure.appendChild(el('figcaption', { className: 'jptl-figure__caption', text: caption }));
    return figure;
  }

  function FillInBlanks({ heading = 'Startopdracht', instruction, words = [], wordsSuffix, paragraphs = [] } = {}) {
    const wrap = el('div', { className: 'jptl-fill' });
    wrap.appendChild(el('h2', { className: 'jptl-fill__heading', text: heading }));
    const body = el('div', { className: 'jptl-fill__body' });
    if (instruction) {
      const p = el('p', { className: 'jptl-fill__instruction' });
      p.appendChild(document.createTextNode(instruction + (words.length ? ' ' : '')));
      words.forEach((w, i) => {
        p.appendChild(el('strong', {}, w + (i < words.length - 1 ? ', ' : '')));
      });
      if (wordsSuffix) p.appendChild(document.createTextNode(' ' + wordsSuffix));
      body.appendChild(p);
    }
    const paraWrap = el('div', { className: 'jptl-fill__paragraphs' });
    paragraphs.forEach((p) => paraWrap.appendChild(el('p', { className: 'jptl-fill__paragraph', text: p })));
    body.appendChild(paraWrap);
    wrap.appendChild(body);
    return wrap;
  }

  function TabRail({ total, current = 0, onSelect } = {}) {
    const wrap = el('div', { className: 'jptl-tabrail' });
    for (let i = 0; i < total; i++) {
      const color = `var(${TAB_PALETTE[i % TAB_PALETTE.length]})`;
      const isCurrent = i === current;
      const isDone = i < current;
      const style = isCurrent
        ? { width: '44px', background: color, borderColor: color, opacity: '1' }
        : isDone
          ? { background: color, borderColor: color, opacity: '0.85' }
          : { background: color, borderColor: color, opacity: '0.55' };
      const tab = el('div', {
        className: 'jptl-tabrail__tab',
        style,
        onClick: onSelect ? (e) => { e.stopPropagation(); onSelect(i); } : undefined,
      });
      wrap.appendChild(tab);
    }
    return wrap;
  }

  const CALLOUT_QUOTE_SVG =
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 6c-2.8 0-5 2.2-5 5 0 2.5 1.8 4.5 4.2 4.9-.3 1.6-1.3 2.7-2.7 3.4l.7 1.4c2.6-1 4.8-3.1 4.8-6.7V6H7zm10 0c-2.8 0-5 2.2-5 5 0 2.5 1.8 4.5 4.2 4.9-.3 1.6-1.3 2.7-2.7 3.4l.7 1.4c2.6-1 4.8-3.1 4.8-6.7V6h-2z"/></svg>';
  const CALLOUT_FACT_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v5"></path><circle cx="12" cy="16" r="0.5" fill="currentColor"></circle></svg>';

  function Callout({ kind = 'quote', text, attribution } = {}) {
    const wrap = el('div', { className: ['jptl-callout', `jptl-callout--${kind}`].join(' ') });
    const icon = el('div', { className: 'jptl-callout__icon' });
    icon.innerHTML = kind === 'quote' ? CALLOUT_QUOTE_SVG : CALLOUT_FACT_SVG;
    wrap.appendChild(icon);
    const body = el('div', { className: 'jptl-callout__body' });
    body.appendChild(el('div', { className: 'jptl-callout__text', text }));
    if (attribution) body.appendChild(el('div', { className: 'jptl-callout__attribution', text: attribution }));
    wrap.appendChild(body);
    return wrap;
  }

  function Divider({ label, tone = 'neutral' } = {}) {
    const wrap = el('div', { className: ['jptl-divider', tone !== 'neutral' ? `jptl-divider--${tone}` : ''].join(' ').trim() });
    wrap.appendChild(el('div', { className: 'jptl-divider__line' }));
    if (label) {
      const labelSpan = el('span', { className: 'jptl-divider__label' });
      labelSpan.appendChild(el('span', { className: 'jptl-divider__dot' }));
      labelSpan.appendChild(document.createTextNode(label));
      wrap.appendChild(labelSpan);
      wrap.appendChild(el('div', { className: 'jptl-divider__line' }));
    }
    return wrap;
  }

  function Tag({ text, tone = 'neutral' } = {}) {
    return el('span', { className: ['jptl-tag', tone !== 'neutral' ? `jptl-tag--${tone}` : ''].join(' ').trim(), text });
  }

  function Button({ text, variant = 'primary', size = 'default', disabled, onClick, type = 'button' } = {}) {
    const cls = ['jptl-btn', `jptl-btn--${variant}`, size === 'small' ? 'jptl-btn--small' : ''].join(' ').trim();
    const btn = el('button', { className: cls, attrs: { type }, text, onClick });
    if (disabled) btn.disabled = true;
    return btn;
  }

  function ProgressDots({ total, current = 0 } = {}) {
    const wrap = el('div', { className: 'jptl-dots' });
    for (let i = 0; i < total; i++) {
      const cls = ['jptl-dot', i < current ? 'jptl-dot--done' : '', i === current ? 'jptl-dot--current' : ''].join(' ').trim();
      wrap.appendChild(el('div', { className: cls }));
    }
    return wrap;
  }

  return { el, renderInline, SlideHeader, RevealList, ImageFigure, FillInBlanks, TabRail, Callout, Divider, Tag, Button, ProgressDots };
})();
