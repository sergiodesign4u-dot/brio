/* Brio design system - the registry of the stand (stage 08).
 *
 * One array, one namespace. It renders two things: the cards on overview.html and
 * the kit-only side panel on every other page here. The roadmap sidebar of the
 * project is a different registry (/_nav.js) and lives only on overview.html; the
 * two never share a global.
 *
 * Groups are LEVELS, not purposes. By purpose a button and a log in dialog are both
 * "forms" and would sit side by side in the panel, although one lives inside the
 * other. The order below is the order of @import in design/system/index.css and the
 * order of the level column in docs/inventory.md, and all three are the same order
 * on purpose.
 *
 * The only manual edit is a row. Adding a component means five things and this is
 * one of them.
 */
window.KIT_NAV = {
  groups: [
    { label: 'Foundations', items: [
      { f: 'architecture.html', s: 'Architecture' },
      { f: 'color.html',        s: 'Colour' },
      { f: 'typography.html',   s: 'Typography' },
      { f: 'geometry.html',     s: 'Geometry' },
      { f: 'icons.html',        s: 'Icons' },
    ] },
    { label: 'Atoms', items: [
      { f: 'button.html', s: 'Button' },
      { f: 'input.html', s: 'Input' },
      { f: 'select.html', s: 'Select' },
      { f: 'checkbox.html', s: 'Checkbox' },
      { f: 'radio.html', s: 'Radio option' },
      { f: 'chip.html', s: 'Chip' },
      { f: 'status.html', s: 'Status pill' },
      { f: 'badge.html', s: 'Outcome badge' },
      { f: 'metric.html', s: 'Metric' },
      { f: 'spark.html', s: 'Spark' },
      { f: 'skeleton.html', s: 'Skeleton' },
      { f: 'icon-slot.html', s: 'Icon slot' },
      { f: 'media.html', s: 'Media slot' },
      { f: 'error-text.html', s: 'Error text' },
      { f: 'error-code.html', s: 'Error code' },
      { f: 'switch.html', s: 'Document switch' },
    ] },
    { label: 'Molecules', items: [
      { f: 'field.html', s: 'Field' },
      { f: 'copy-field.html', s: 'Copy field' },
      { f: 'card.html', s: 'Card' },
      { f: 'privacy-strip.html', s: 'Privacy strip' },
      { f: 'alert.html', s: 'Alert banner' },
      { f: 'pulse.html', s: 'Pulse card' },
      { f: 'program-card.html', s: 'Program card' },
      { f: 'list-row.html', s: 'List row' },
      { f: 'claims.html', s: 'Claims list' },
    ] },
    { label: 'Organisms', items: [
      { f: 'list.html', s: 'List' },
      { f: 'state.html', s: 'State block' },
      { f: 'system-block.html', s: 'System block' },
      { f: 'disclosure.html', s: 'Proof disclosure' },
      { f: 'dialog.html', s: 'Dialog' },
      { f: 'hero.html', s: 'Hero' },
      { f: 'auth.html', s: 'Split auth' },
      { f: 'appbar.html', s: 'App bar' },
      { f: 'tabbar.html', s: 'Bottom tab bar' },
      { f: 'app-footer.html', s: 'App footer' },
      { f: 'public-footer.html', s: 'Public footer' },
      { f: 'content-grid.html', s: 'Content grid' },
    ] },
    { label: 'Verification', items: [
      { f: 'pixel-proof.html', s: 'Proof and audit' },
      { f: 'kit.html',         s: 'Stage 07 smoke test' },
      { f: 'shell.html',       s: 'Shells' },
    ] },
  ],
};

/* theme, applied before the first paint so the page never flashes light */
(function () {
  try {
    var t = localStorage.getItem('brio-theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
})();

(function () {
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var here = (location.pathname.split('/').pop() || 'overview.html');
    var mount = document.getElementById('kit-panel');
    if (mount) {
      mount.className = 'kp';
      var head = el('div', 'kp-head');
      var back = el('a', 'kp-back', 'The whole system');
      back.href = 'overview.html';
      head.appendChild(back);
      head.appendChild(el('span', 'kp-badge', 'DESIGN SYSTEM'));
      head.appendChild(el('span', 'kp-sub', 'tokens and components'));
      mount.appendChild(head);

      var open = null;
      window.KIT_NAV.groups.forEach(function (g) {
        g.items.forEach(function (i) { if (i.f === here) open = g; });
      });

      window.KIT_NAV.groups.forEach(function (g) {
        var isOpen = g === open;
        var gh = el('button', 'kp-group' + (isOpen ? ' is-open' : ''), g.label);
        gh.type = 'button';
        gh.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        var box = el('div', 'kp-items' + (isOpen ? '' : ' is-shut'));
        g.items.forEach(function (i) {
          var a = el('a', 'kp-item' + (i.f === here ? ' is-current' : ''), i.s);
          a.href = i.f;
          if (i.f === here) a.setAttribute('aria-current', 'page');
          box.appendChild(a);
        });
        gh.addEventListener('click', function () {
          var shut = box.classList.toggle('is-shut');
          gh.classList.toggle('is-open', !shut);
          gh.setAttribute('aria-expanded', shut ? 'false' : 'true');
        });
        mount.appendChild(gh);
        mount.appendChild(box);
      });

      var foot = el('div', 'kp-foot');
      var a1 = el('a', null, 'Product, all screens');
      a1.href = '../overview.html';
      var a2 = el('a', null, 'The language of the product, Concept');
      a2.href = '../concept/concept.html';
      foot.appendChild(a1); foot.appendChild(a2);
      mount.appendChild(foot);
    }

    /* the theme switch, on every surface of the stand */
    var host = document.getElementById('kit-theme') || mount;
    if (!host) return;
    var btn = el('button', 'kp-theme');
    btn.type = 'button';
    function label() {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      btn.textContent = dark ? 'Light theme' : 'Dark theme';
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    }
    btn.addEventListener('click', function () {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (dark) document.documentElement.removeAttribute('data-theme');
      else document.documentElement.setAttribute('data-theme', 'dark');
      try { localStorage.setItem('brio-theme', dark ? 'light' : 'dark'); } catch (e) {}
      label();
    });
    label();
    host.appendChild(btn);
  });
})();
