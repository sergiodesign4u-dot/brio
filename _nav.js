/* Brio - roadmap navigation: the single registry for the whole project.
 *
 * Every html page of the project carries an empty <aside id="sidebar"></aside>, declares
 * window.NAV_BASE (depth to repo root, e.g. '../'), optionally window.NAV_SECTIONS (its own
 * in-page sections) and optionally window.NAV_ACTIVE + window.NAV_ACTIVE_LABEL (for pages that
 * are NOT in the roadmap registry: IA nodes, wireframe screens, colored copies). This file
 * renders the sidebar itself.
 *
 * The ONLY manual edit is a row in NAV below, plus done:true when a page is finished.
 * Everything else - active / Next / SOON / accordion / relative links - is computed at render.
 * Look lives in /_nav.css. A page never declares nav-* rules of its own.
 */

window.NAV = [
  { label: 'Foundation Research', page: 'research/research.html', done: true },

  {
    label: 'User Research',
    children: [
      { label: 'Personas', page: 'research/personas.html', done: true },
      { label: 'JTBD', page: 'research/jtbd.html', done: true },
      { label: 'CJM As-Is', page: 'research/cjm-as-is.html', done: true },
      { label: 'CJM To-Be', page: 'research/cjm-to-be.html', done: true },
    ],
  },

  {
    label: 'Information Architecture (IA)',
    children: [
      { subhead: 'Base layer' },
      { label: 'Flows', page: 'ia/flows.html', done: true },
      { label: 'Concept map', page: 'ia/concept-map.html', done: true },
      { subhead: 'Detail layer' },
      { label: 'Sitemap', page: 'ia/sitemap.html', done: true },
      { label: 'Structure', page: 'ia/structure.html', done: true },
    ],
  },

  { label: 'Wireframes', page: 'wireframes/overview.html', done: true },

  { label: 'Voice', page: 'voice/voice.html', done: true },

  {
    label: 'Concept',
    children: [
      { label: 'Directions', page: 'design/concept/directions.html', done: true },
      { label: 'Concept', page: 'design/concept/concept.html', done: true },
    ],
  },

  { label: 'UI + Visual', page: 'design/overview.html', done: true },
  { label: 'Tokens + Components', page: 'design/kit/overview.html', done: false },
  { label: 'Design System', page: 'design/kit/why.html', done: false },
  { label: 'Responsive', page: null, done: false },
  { label: 'Animation', page: null, done: false },
  { label: 'Handoff', page: null, done: false },
];

(function () {
  var mount = document.getElementById('sidebar');
  if (!mount) return;

  var base = window.NAV_BASE || './';
  var depth = (base.match(/\.\.\//g) || []).length;

  /* Current page as a path relative to the repo root, so it can be matched against the registry. */
  var parts = location.pathname.split('/').filter(Boolean);
  if (!parts.length || location.pathname.slice(-1) === '/') parts.push('index.html');
  var current = parts.slice(parts.length - (depth + 1)).join('/');

  function pagesOf(stage) {
    if (stage.children) return stage.children.filter(function (c) { return c.page; });
    return stage.page ? [stage] : [];
  }
  function isDone(stage) {
    var p = pagesOf(stage);
    return p.length > 0 && p.every(function (x) { return x.done; });
  }
  function anyDone(stage) {
    return pagesOf(stage).some(function (x) { return x.done; });
  }
  function firstDone(stage) {
    var hit = pagesOf(stage).filter(function (x) { return x.done; })[0];
    return hit ? hit.page : null;
  }

  /* Next is counted by STAGE, not by page: the first stage that is not fully done.
     A stage marked wip:true is being built right now, so Next stops there even
     though its page already exists - otherwise the badge runs ahead of the work. */
  var nextIndex = -1;
  for (var i = 0; i < window.NAV.length; i++) {
    if (!isDone(window.NAV[i]) || window.NAV[i].wip) { nextIndex = i; break; }
  }

  /* Which stage am I in? Explicit NAV_ACTIVE wins - it is how off-registry pages declare a home. */
  var activeIndex = -1;
  var target = window.NAV_ACTIVE || current;
  window.NAV.forEach(function (stage, idx) {
    if (pagesOf(stage).some(function (x) { return x.page === target; })) activeIndex = idx;
  });

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  var BADGE_TEXT = { next: 'Next', soon: 'Soon', wip: 'WIP' };
  function badge(kind) {
    return el('span', 'nav-badge nav-badge-' + kind, BADGE_TEXT[kind] || 'Soon');
  }
  /* wip:true says a stage is being built right now: the badge reads WIP instead of
     Next or Soon, and Next stays here rather than running ahead. Status of the
     finished stage still lives in README; done:true still tracks the page existing. */
  function badgeKind(idx) {
    if (window.NAV[idx] && window.NAV[idx].wip) return 'wip';
    return idx === nextIndex ? 'next' : 'soon';
  }

  /* --- shell --- */
  var top = el('div', 'nav-top');
  var brand = el('a', 'nav-brand', 'Brio');
  brand.href = base + 'index.html';
  var burger = el('button', 'nav-burger');
  burger.setAttribute('aria-label', 'Menu');
  burger.setAttribute('aria-expanded', 'false');
  burger.appendChild(el('span'));
  burger.appendChild(el('span'));
  burger.appendChild(el('span'));
  top.appendChild(brand);
  top.appendChild(burger);

  var body = el('div', 'nav-roadmap');
  mount.appendChild(top);
  mount.appendChild(body);

  /* --- in-page sections of the current page --- */
  function sectionsBlock() {
    var defs = (window.NAV_SECTIONS || []).map(function (s) {
      return typeof s === 'string' ? { id: s, label: s } : s;
    });
    if (!defs.length) return null;
    var wrap = el('div', 'nav-sections');
    defs.forEach(function (s) {
      var a = el('a', 'nav-section', s.label);
      a.href = '#' + s.id;
      a.setAttribute('data-section', s.id);
      wrap.appendChild(a);
    });
    return wrap;
  }

  function satelliteRow() {
    if (!window.NAV_ACTIVE) return null;
    var a = el('span', 'nav-subitem is-satellite is-current',
      window.NAV_ACTIVE_LABEL || document.title);
    return a;
  }

  /* --- rows --- */
  window.NAV.forEach(function (stage, idx) {
    var active = idx === activeIndex;

    if (!active) {
      var href = firstDone(stage);
      var row;
      if (href) {
        row = el('a', 'nav-item' + (isDone(stage) ? ' is-done' : ' is-partial'), stage.label);
        row.href = base + href;
        if (stage.wip) row.appendChild(badge('wip'));
      } else if (idx === nextIndex) {
        row = el('span', 'nav-item is-next', stage.label);
        row.appendChild(badge('next'));
      } else {
        row = el('span', 'nav-item is-soon', stage.label);
        row.appendChild(badge('soon'));
      }
      body.appendChild(row);
      return;
    }

    /* The active stage is the only expanded one. */
    body.appendChild(el('div', 'nav-item is-active', stage.label));
    var sub = el('div', 'nav-sub');

    if (stage.children) {
      stage.children.forEach(function (child) {
        if (child.subhead) {
          sub.appendChild(el('div', 'nav-subhead', child.subhead));
          return;
        }
        var here = child.page === current;
        var row;
        if (child.done) {
          row = el('a', 'nav-subitem' + (here ? ' is-current' : ''), child.label);
          row.href = base + child.page;
        } else {
          row = el('span', 'nav-subitem is-soon', child.label);
          row.appendChild(badge(badgeKind(idx)));
        }
        sub.appendChild(row);
        if (here) { var s = sectionsBlock(); if (s) sub.appendChild(s); }
        if (window.NAV_ACTIVE === child.page) {
          var sat = satelliteRow();
          if (sat) {
            sub.appendChild(sat);
            var ss = sectionsBlock();
            if (ss) sub.appendChild(ss);
          }
        }
      });
    } else {
      var sat2 = satelliteRow();
      if (sat2) sub.appendChild(sat2);
      var s2 = sectionsBlock();
      if (s2) sub.appendChild(s2);
    }

    body.appendChild(sub);
  });

  /* --- mobile open/close --- */
  burger.addEventListener('click', function () {
    var open = body.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  body.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      body.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  /* --- section highlight --- */
  var links = body.querySelectorAll('.nav-section');
  if (links.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (l) {
          l.classList.remove('is-current');
          l.removeAttribute('aria-current');
        });
        var hit = body.querySelector('.nav-section[data-section="' + entry.target.id + '"]');
        if (hit) {
          hit.classList.add('is-current');
          hit.setAttribute('aria-current', 'location');
        }
      });
    }, { rootMargin: '-15% 0px -75% 0px' });
    links.forEach(function (l) {
      var node = document.getElementById(l.getAttribute('data-section'));
      if (node) observer.observe(node);
    });
  }
})();
