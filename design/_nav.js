/* Brio - the design-only navigator for the coloured screens (stage 07).
 *
 * Two navigations meet on a coloured screen and they answer different questions.
 * The roadmap sidebar from the root /_nav.js answers "where am I in the project";
 * this file answers "which screen am I on and what else is in colour". It has its
 * own namespace, window.DESIGN_NAV, and never touches window.NAV.
 *
 * A screen carries one empty <nav id="dz-strip"></nav> and loads this file. The
 * strip is prototype chrome: it sits outside .wf-screen, so the markup of the
 * screen itself stays comparable to its grey original, class for class.
 *
 * The only manual edit is a row below. Adding a coloured screen means one row.
 *
 * Stage 08 added one thing: the theme switch. It sits in this strip, which means it
 * sits on every coloured screen, and it is here rather than in the root navigator
 * because the roadmap renders the grey stages too and a theme means nothing there.
 */

/* the theme is applied before the first paint, so a screen never flashes light */
(function () {
  try {
    var t = localStorage.getItem('brio-theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
})();

window.DESIGN_NAV = {
  /* every screen that exists in colour, grouped the way the product is grouped */
  groups: [
    { label: 'Public', screens: [
      { f: 'index.html',                 s: 'Home 0.0' },
      { f: 'signup.html',                s: 'Sign up 2.0' },
      { f: 'signup-error.html',          s: 'Sign up, error' },
      { f: 'contact.html',               s: 'Contact 1.3' },
      { f: 'contact-sent.html',          s: 'Contact, sent' },
    ] },
    { label: 'Operator', screens: [
      { f: 'dashboard.html',             s: 'Dashboard 4.0' },
      { f: 'dashboard-open.html',        s: 'Cycle open' },
      { f: 'dashboard-empty.html',       s: 'Pre-minimum-N' },
      { f: 'dashboard-noprogram.html',   s: 'No program' },
      { f: 'dashboard-alert.html',       s: 'Threshold alert' },
      { f: 'dashboard-loading.html',     s: 'Loading' },
      { f: 'dashboard-error.html',       s: 'Error' },
      { f: 'program-library.html',       s: 'Programs 5.0' },
      { f: 'program-library-empty.html', s: 'Programs, no results' },
      { f: 'team-roster.html',           s: 'Team 6.0' },
      { f: 'team-roster-manage.html',    s: 'Team, manage' },
    ] },
    { label: 'Employee', screens: [
      { f: 'checkin-entry.html',            s: 'Entry 10.0' },
      { f: 'checkin-privacy.html',          s: 'Before you answer 10.1' },
      { f: 'checkin-questions.html',        s: 'Questions 10.2' },
      { f: 'checkin-questions-loading.html', s: 'Sending' },
      { f: 'checkin-complete.html',         s: 'Done 10.3' },
      { f: 'checkin-expired.html',          s: 'Link expired 10.4' },
      { f: 'checkin-already.html',          s: 'Already answered 10.5' },
      { f: 'checkin-submit-error.html',     s: 'Submit error 10.6' },
    ] },
  ],
};

(function () {
  var mount = document.getElementById('dz-strip');
  if (!mount) return;

  var here = (location.pathname.split('/').pop() || 'index.html');
  var base = window.DESIGN_NAV_BASE || '';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  mount.className = 'dz-strip';
  mount.setAttribute('aria-label', 'Coloured screens');

  var current = null;
  window.DESIGN_NAV.groups.forEach(function (g) {
    g.screens.forEach(function (s) { if (s.f === here) current = { g: g, s: s }; });
  });

  mount.appendChild(el('span', 'dz-id', current ? current.g.label + ', in colour' : 'Coloured screens'));

  /* the group this screen belongs to opens; the others stay one link each */
  window.DESIGN_NAV.groups.forEach(function (g) {
    if (current && g === current.g) {
      g.screens.forEach(function (s) {
        var a = el('a', s.f === here ? 'on' : null, s.s);
        a.href = base + s.f;
        if (s.f === here) a.setAttribute('aria-current', 'page');
        mount.appendChild(a);
      });
    } else {
      var a = el('a', 'dz-group', g.label);
      a.href = base + g.screens[0].f;
      mount.appendChild(a);
    }
  });

  [['All coloured screens', 'overview.html'], ['Component kit', 'kit/kit.html']].forEach(function (pair) {
    var a = el('a', 'dz-out', pair[0]);
    a.href = base + pair[1];
    mount.appendChild(a);
  });

  /* the theme switch. The dark half of every role is written in design/system/tokens.css,
     so nothing here knows a colour: it flips one attribute on <html>. */
  var themeBtn = el('button', 'dz-theme');
  themeBtn.type = 'button';
  function themeLabel() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeBtn.textContent = dark ? 'Light' : 'Dark';
    themeBtn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    themeBtn.setAttribute('aria-label', dark ? 'Switch to the light theme' : 'Switch to the dark theme');
  }
  themeBtn.addEventListener('click', function () {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (dark) document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', 'dark');
    try { localStorage.setItem('brio-theme', dark ? 'light' : 'dark'); } catch (e) {}
    themeLabel();
  });
  themeLabel();
  mount.appendChild(themeBtn);

  /* one way only: the grey prototype is frozen and never links forward to colour */
  if (current) {
    var grey = el('a', 'dz-out', 'Grey original');
    grey.href = base + '../wireframes/' + current.s.f;
    mount.appendChild(grey);
  }
})();
