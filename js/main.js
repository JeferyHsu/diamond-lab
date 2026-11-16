/* Diamond Lab UI：文章資料完全由 data/articles.js 驅動。 */
(() => {
  'use strict';
  const articles = window.BASEBALL_ARTICLES || [];
  const grid = document.getElementById('article-grid');
  const filters = document.getElementById('category-filters');
  const search = document.getElementById('search-input');
  const resultsLabel = document.getElementById('results-label');
  const empty = document.getElementById('empty-state');
  const dialog = document.getElementById('article-dialog');
  const dialogContent = document.getElementById('dialog-content');
  const statsForm = document.getElementById('stats-form');
  const validation = document.getElementById('validation');
  let category = '全部';

  // 只用 textContent 建立文字；文章資料不會被當成 HTML 執行。
  const el = (tag, className, content) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = String(content);
    return node;
  };

  const categories = ['全部', ...new Set(articles.map(a => a.category))];
  categories.forEach(name => {
    const b = el('button', 'filter-btn' + (name === category ? ' active' : ''), name);
    b.type = 'button';
    b.setAttribute('aria-pressed', String(name === category));
    b.addEventListener('click', () => {
      category = name;
      filters.querySelectorAll('button').forEach(btn => {
        const selected = btn.textContent === name;
        btn.classList.toggle('active', selected);
        btn.setAttribute('aria-pressed', String(selected));
      });
      renderCards();
    });
    filters.append(b);
  });

  function renderCards() {
    const query = search.value.trim().toLocaleLowerCase();
    const matches = articles.filter(a =>
      (category === '全部' || a.category === category) &&
      [a.title, a.description, a.category, a.summary, ...(a.tags || [])]
        .join(' ').toLocaleLowerCase().includes(query)
    );
    grid.replaceChildren();
    matches.forEach((a, i) => {
      const card = el('a', 'article-card');
      card.href = `#article/${encodeURIComponent(a.id)}`;
      card.dataset.accent = a.accent;
      card.setAttribute('aria-label', `閱讀文章：${a.title}`);
      const top = el('div', 'card-top');
      top.append(el('span', 'card-icon', a.icon), el('span', 'card-index', String(i + 1).padStart(2, '0') + ' / ' + String(articles.length).padStart(2, '0')));
      const bottom = el('div', 'card-bottom');
      bottom.append(el('span', '', `${a.level} · ${a.readTime} MIN READ`), el('b', '', '↗'));
      card.append(top, el('div', 'card-category', a.category.toUpperCase()), el('h3', '', a.title), el('p', '', a.description), bottom);
      grid.append(card);
    });
    resultsLabel.textContent = `${String(matches.length).padStart(2,'0')} ARTICLES AVAILABLE`;
    empty.hidden = matches.length !== 0;
  }

  function showArticle(id) {
    const a = articles.find(item => item.id === id);
    if (!a) return false;
    dialogContent.replaceChildren();
    const root = el('div', 'dialog-article');
    const title = el('h2', '', a.title);
    title.id = 'dialog-title';
    root.append(el('span', 'dialog-chip', `${a.category} / ${a.level} / ${a.readTime} MIN READ`), title, el('div', 'dialog-summary', a.summary));
    a.sections.forEach(section => {
      const s = el('section');
      s.append(el('h3', '', section.heading));
      if (section.formula) s.append(el('div', 'dialog-formula', section.formula));
      (section.paragraphs || []).forEach(p => s.append(el('p', '', p)));
      if (section.bullets) {
        const ul = el('ul');
        section.bullets.forEach(item => ul.append(el('li', '', item)));
        s.append(ul);
      }
      if (section.callout) s.append(el('div', 'dialog-callout', section.callout));
      root.append(s);
    });
    const tagRow = el('div', 'article-tags');
    a.tags.forEach(t => tagRow.append(el('span', '', `# ${t}`)));
    root.append(tagRow);
    dialogContent.append(root);
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    return true;
  }
  const handleHash = () => {
    if (location.hash.startsWith('#article/')) {
      let id = '';
      try { id = decodeURIComponent(location.hash.slice(9)); } catch { return; }
      if (!showArticle(id) && dialog.open) dialog.close();
    } else if (dialog.open) dialog.close();
  };
  window.addEventListener('hashchange', handleHash);
  document.getElementById('close-dialog').addEventListener('click', () => {
    if (location.hash.startsWith('#article/')) location.hash = 'explore';
    else dialog.close();
  });
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      if (location.hash.startsWith('#article/')) location.hash = 'explore';
      else dialog.close();
    }
  });
  dialog.addEventListener('close', () => {
    if (location.hash.startsWith('#article/')) location.hash = 'explore';
  });
  search.addEventListener('input', renderCards);
  document.getElementById('article-count').textContent = String(articles.length).padStart(2, '0');
  renderCards();
  handleHash();

  // 計算時用實際整數個數，不接受安打多於打數等不合理輸入。
  function computeStats(data) {
    const nums = ['ab','single','double','triple','hr','bb','hbp','sf'];
    for (const key of nums) {
      if (!Number.isSafeInteger(data[key]) || data[key] < 0)
        throw new Error('所有欄位都必須是 0 以上的整數。');
    }
    const hits = data.single + data.double + data.triple + data.hr;
    if (hits > data.ab) throw new Error('安打總數不能超過打數（AB）。');
    const totalBases = data.single + 2 * data.double + 3 * data.triple + 4 * data.hr;
    const obpDenom = data.ab + data.bb + data.hbp + data.sf;
    const avg = data.ab ? hits / data.ab : null;
    const obp = obpDenom ? (hits + data.bb + data.hbp) / obpDenom : null;
    const slg = data.ab ? totalBases / data.ab : null;
    const ops = obp === null || slg === null ? null : obp + slg;
    return { avg, obp, slg, ops };
  }
  const format = n => n === null ? '—' : n.toFixed(3).replace(/^0(?=\.)/, '');
  const renderStats = values => {
    Object.entries(values).forEach(([k,v]) => { document.getElementById('val-' + k).textContent = format(v); });
  };
  statsForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = {};
    new FormData(statsForm).forEach((v,k) => { data[k] = v === '' ? NaN : Number(v); });
    try { renderStats(computeStats(data)); validation.textContent = ''; }
    catch (error) { validation.textContent = error.message; renderStats({ avg:null,obp:null,slg:null,ops:null }); }
  });
  document.getElementById('reset-stats').addEventListener('click', () => {
    statsForm.reset(); validation.textContent = '';
    statsForm.requestSubmit();
  });
  statsForm.requestSubmit();

  const menuBtn = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  menuBtn.addEventListener('click', () => {
    mobileNav.hidden = !mobileNav.hidden;
    menuBtn.setAttribute('aria-expanded', String(!mobileNav.hidden));
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileNav.hidden = true; menuBtn.setAttribute('aria-expanded', 'false');
  }));
  // 鍵盤快速定位搜尋框。
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName) && !dialog.open) {
      event.preventDefault(); search.focus();
    }
  });
})();
