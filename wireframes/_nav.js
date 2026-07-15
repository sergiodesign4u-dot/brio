/* Brio wireframes - single navigation source (Stage 04).
   Flows from ia/docs/flows.md; screens and state files from wireframes/docs/screens.md
   and ia/docs/sitemap.md. index.html renders the flow entries and the coverage map from
   here; each screen page reads its state row for the top state panel. Flip a screen's
   status to "built" as its wireframe lands, and the coverage map lights up.
   Global-component render is added here at Step 5. No em dash. */
window.BRIO_WF = {

  /* Cluster labels, from ia/docs/sitemap.md */
  clusters: {
    "0": "Global shell and home",
    "1": "Public marketing and acquisition",
    "2": "Authentication",
    "3": "Onboarding wizard",
    "4": "Dashboard and pulse",
    "5": "Programs",
    "6": "Team",
    "7": "Owner share and upgrade",
    "8": "Settings",
    "9": "Owner surface",
    "10": "Employee check-in",
    "11": "System and global"
  },

  /* Product flows, from ia/docs/flows.md. screens = ordered node numbers. */
  flows: [
    { id: "f1", n: "Flow 1", label: "Run wellbeing", persona: "Priya", job: "Main job", note: "the first flow assembled",
      screens: ["0.0", "2.0", "3.0", "3.1", "3.2", "3.3", "4.0", "4.1", "6.0"] },
    { id: "f2", n: "Flow 2", label: "Private check-in", persona: "Yemi", job: "J3 + J4", note: "near-anonymous, under 30s",
      screens: ["10.0", "10.1", "10.2", "10.3", "10.4", "10.5", "10.6"] },
    { id: "f3", n: "Flow 3", label: "Prove it works, owner share", persona: "Priya to Marcus", job: "J1 + J5 + S2", note: "share and upgrade",
      screens: ["4.0", "7.0", "7.1", "7.2", "7.3", "9.0", "9.2"] },
    { id: "f4", n: "Flow 4", label: "Early warning", persona: "Priya", job: "J2", note: "threshold alert",
      screens: ["4.0", "4.2", "4.1"] }
  ],

  /* Every product screen. status: "built" (has wireframe files) or "spec" (IA only).
     states: wireframe state files, base first. Filled for Flow 1 now; the rest fill at Step 8.
     A spec screen with no states links to its IA page (../ia/<file>) as reference. */
  screens: [
    { num: "0.0", name: "Home", file: "home.html", ia: "home.html", status: "built", states: [
      { f: "home.html", s: "Base (guest)" }, { f: "home-operator.html", s: "Returning operator" }, { f: "home-owner.html", s: "Owner" } ] },

    { num: "1.0", name: "Pricing", file: "pricing.html", ia: "pricing.html", status: "built", states: [
      { f: "pricing.html", s: "Default" } ] },
    { num: "1.1", name: "Security and privacy", file: "security-privacy.html", ia: "security-privacy.html", status: "built", states: [
      { f: "security-privacy.html", s: "Default" } ] },
    { num: "1.2", name: "About", file: "about.html", ia: "about.html", status: "built", states: [
      { f: "about.html", s: "Default" } ] },
    { num: "1.3", name: "Contact / Support", file: "contact.html", ia: "contact.html", status: "built", states: [
      { f: "contact.html", s: "Default" },
      { f: "contact-error.html", s: "Error" },
      { f: "contact-sent.html", s: "Sent" } ] },
    { num: "1.4", name: "Help / FAQ", file: "help.html", ia: "help.html", status: "built", states: [
      { f: "help.html", s: "Default" } ] },
    { num: "1.5", name: "Category / segment landing", file: "segment-landing.html", ia: "segment-landing.html", status: "built", states: [
      { f: "segment-landing.html", s: "Default" } ] },
    { num: "1.6", name: "Legal documents", file: "legal.html", ia: "legal.html", status: "built", states: [
      { f: "legal.html", s: "Default" } ] },

    { num: "2.0", name: "Sign up", file: "signup.html", ia: "signup.html", status: "built", states: [
      { f: "signup.html", s: "Default" }, { f: "signup-error.html", s: "Error" }, { f: "signup-loading.html", s: "Submitting" } ] },
    { num: "2.1", name: "Log in", file: "login.html", ia: "login.html", status: "built", states: [
      { f: "login.html", s: "Default" },
      { f: "login-error.html", s: "Error" },
      { f: "login-loading.html", s: "Loading" } ] },
    { num: "2.2", name: "Magic-link sent", file: "magic-link-sent.html", ia: "magic-link-sent.html", status: "built", states: [
      { f: "magic-link-sent.html", s: "Link sent" } ] },
    { num: "2.3", name: "Invalid or expired link", file: "link-expired.html", ia: "link-expired.html", status: "built", states: [
      { f: "link-expired.html", s: "Expired" } ] },
    { num: "2.4", name: "Reset password", file: "reset-password.html", ia: "reset-password.html", status: "built", states: [
      { f: "reset-password.html", s: "Default" },
      { f: "reset-password-error.html", s: "Error" },
      { f: "reset-password-loading.html", s: "Loading" },
      { f: "reset-password-success.html", s: "Success" } ] },

    { num: "3.0", name: "Company setup", file: "onboarding-company.html", ia: "onboarding-company.html", status: "built", states: [
      { f: "onboarding-company.html", s: "Default" }, { f: "onboarding-company-error.html", s: "Save failed" }, { f: "onboarding-company-loading.html", s: "Saving" } ] },
    { num: "3.1", name: "First program confirm", file: "onboarding-program.html", ia: "onboarding-program.html", status: "built", states: [
      { f: "onboarding-program.html", s: "Resolved" }, { f: "onboarding-program-loading.html", s: "Pre-select" }, { f: "onboarding-program-error.html", s: "Pre-select failed" } ] },
    { num: "3.2", name: "Invite team", file: "onboarding-invite.html", ia: "onboarding-invite.html", status: "built", states: [
      { f: "onboarding-invite.html", s: "Default" }, { f: "onboarding-invite-loading.html", s: "Sending" } ] },
    { num: "3.3", name: "Invite-send error", file: "invite-send-error.html", ia: "invite-send-error.html", status: "built", states: [
      { f: "invite-send-error.html", s: "Error shown" } ] },

    { num: "4.0", name: "Dashboard", file: "dashboard.html", ia: "dashboard.html", status: "built", states: [
      { f: "dashboard.html", s: "Score ready" }, { f: "dashboard-empty.html", s: "Pre-minimum-N" }, { f: "dashboard-open.html", s: "Cycle open" },
      { f: "dashboard-loading.html", s: "Loading" }, { f: "dashboard-error.html", s: "Error" }, { f: "dashboard-noprogram.html", s: "No program" }, { f: "dashboard-alert.html", s: "Threshold alert" } ] },
    { num: "4.1", name: "Team pulse detail", file: "team-pulse.html", ia: "team-pulse.html", status: "built", states: [
      { f: "team-pulse.html", s: "Default" }, { f: "team-pulse-empty.html", s: "Minimum-N not met" }, { f: "team-pulse-open.html", s: "Cycle open" },
      { f: "team-pulse-loading.html", s: "Loading" }, { f: "team-pulse-error.html", s: "Error" }, { f: "team-pulse-nodata.html", s: "First run" } ] },
    { num: "4.2", name: "Threshold alert detail", file: "threshold-alert.html", ia: "threshold-alert.html", status: "built", states: [
      { f: "threshold-alert.html", s: "Default" },
      { f: "threshold-alert-error.html", s: "Error" },
      { f: "threshold-alert-loading.html", s: "Loading" },
      { f: "threshold-alert-recovered.html", s: "Recovered" } ] },

    { num: "5.0", name: "Program library", file: "program-library.html", ia: "program-library.html", status: "built", states: [
      { f: "program-library.html", s: "Default" },
      { f: "program-library-empty.html", s: "Empty" },
      { f: "program-library-error.html", s: "Error" },
      { f: "program-library-loading.html", s: "Loading" } ] },
    { num: "5.1", name: "Program detail / manage", file: "program-detail.html", ia: "program-detail.html", status: "built", states: [
      { f: "program-detail.html", s: "Default" },
      { f: "program-detail-draft.html", s: "Draft" },
      { f: "program-detail-end.html", s: "End dialog" },
      { f: "program-detail-ended.html", s: "Ended" },
      { f: "program-detail-error.html", s: "Error" },
      { f: "program-detail-loading.html", s: "Loading" },
      { f: "program-detail-notfound.html", s: "Not found" } ] },
    { num: "5.2", name: "Check-in setup", file: "check-in-setup.html", ia: "check-in-setup.html", status: "built", states: [
      { f: "check-in-setup.html", s: "Default" },
      { f: "check-in-setup-error.html", s: "Error" },
      { f: "check-in-setup-loading.html", s: "Loading" } ] },

    { num: "6.0", name: "Team roster", file: "team-roster.html", ia: "team-roster.html", status: "built", states: [
      { f: "team-roster.html", s: "Has members" }, { f: "team-roster-empty.html", s: "No members" }, { f: "team-roster-pending.html", s: "Pending invites" },
      { f: "team-roster-open.html", s: "Open cycle" }, { f: "team-roster-loading.html", s: "Loading" }, { f: "team-roster-error.html", s: "Error" }, { f: "team-roster-manage.html", s: "Manage dialog" } ] },

    { num: "7.0", name: "Share with owner", file: "share-owner.html", ia: "share-owner.html", status: "built", states: [
      { f: "share-owner.html", s: "Default" } ] },
    { num: "7.1", name: "Invite owner + upgrade", file: "invite-owner.html", ia: "invite-owner.html", status: "built", states: [
      { f: "invite-owner.html", s: "Default" },
      { f: "invite-owner-sent.html", s: "Sent" } ] },
    { num: "7.2", name: "Upgrade / paywall", file: "upgrade.html", ia: "upgrade.html", status: "built", states: [
      { f: "upgrade.html", s: "Default" } ] },
    { num: "7.3", name: "Payment failed", file: "payment-failed.html", ia: "payment-failed.html", status: "built", states: [
      { f: "payment-failed.html", s: "Payment failed" } ] },

    { num: "8.0", name: "Settings shell", file: "settings.html", ia: "settings.html", status: "built", states: [
      { f: "settings.html", s: "Default" } ] },
    { num: "8.1", name: "Plan / subscription", file: "settings-plan.html", ia: "settings-plan.html", status: "built", states: [
      { f: "settings-plan.html", s: "Default" } ] },
    { num: "8.2", name: "Privacy center", file: "settings-privacy.html", ia: "settings-privacy.html", status: "built", states: [
      { f: "settings-privacy.html", s: "Default" } ] },
    { num: "8.3", name: "Notifications", file: "settings-notifications.html", ia: "settings-notifications.html", status: "built", states: [
      { f: "settings-notifications.html", s: "Default" } ] },
    { num: "8.4", name: "Account settings", file: "settings-account.html", ia: "settings-account.html", status: "built", states: [
      { f: "settings-account.html", s: "Default" },
      { f: "settings-account-delete.html", s: "Delete" } ] },

    { num: "9.0", name: "Owner dashboard", file: "owner-dashboard.html", ia: "owner-dashboard.html", status: "built", states: [
      { f: "owner-dashboard.html", s: "Default" },
      { f: "owner-dashboard-empty.html", s: "Empty" } ] },
    { num: "9.2", name: "Monthly owner digest", file: "owner-digest.html", ia: "owner-digest.html", status: "built", states: [
      { f: "owner-digest.html", s: "Default" } ] },

    { num: "10.0", name: "Check-in entry", file: "checkin-entry.html", ia: "checkin-entry.html", status: "built", states: [
      { f: "checkin-entry.html", s: "Default" } ] },
    { num: "10.1", name: "Pre-Q1 privacy disclosure", file: "checkin-privacy.html", ia: "checkin-privacy.html", status: "built", states: [
      { f: "checkin-privacy.html", s: "Default" } ] },
    { num: "10.2", name: "Questions", file: "checkin-questions.html", ia: "checkin-questions.html", status: "built", states: [
      { f: "checkin-questions.html", s: "Default" },
      { f: "checkin-questions-loading.html", s: "Loading" } ] },
    { num: "10.3", name: "Check-in complete", file: "checkin-complete.html", ia: "checkin-complete.html", status: "built", states: [
      { f: "checkin-complete.html", s: "Default" } ] },
    { num: "10.4", name: "Invite link expired", file: "checkin-expired.html", ia: "checkin-expired.html", status: "built", states: [
      { f: "checkin-expired.html", s: "Expired" } ] },
    { num: "10.5", name: "Already submitted", file: "checkin-already.html", ia: "checkin-already.html", status: "built", states: [
      { f: "checkin-already.html", s: "Already" } ] },
    { num: "10.6", name: "Submit error", file: "checkin-submit-error.html", ia: "checkin-submit-error.html", status: "built", states: [
      { f: "checkin-submit-error.html", s: "Submit error" } ] },

    { num: "11.0", name: "404 Not found", file: "not-found.html", ia: "not-found.html", status: "built", states: [
      { f: "not-found.html", s: "404" } ] },
    { num: "11.1", name: "500 Server error", file: "server-error.html", ia: "server-error.html", status: "built", states: [
      { f: "server-error.html", s: "500" } ] },
    { num: "11.2", name: "Maintenance", file: "maintenance.html", ia: "maintenance.html", status: "built", states: [
      { f: "maintenance.html", s: "503" } ] },
    { num: "11.3", name: "Cookie consent", file: "cookie-consent.html", ia: "cookie-consent.html", status: "built", states: [
      { f: "cookie-consent.html", s: "Default" },
      { f: "cookie-consent-manage.html", s: "Manage" } ] },
    { num: "11.4", name: "Toast / inline notification", file: "toast.html", ia: "toast.html", status: "built", states: [
      { f: "toast.html", s: "Default" } ] }
  ]
};

/* ===== Global components (Step 5) =====
   Operator app shell (0.1 Navigation): brand + 4 job tabs + Settings, plus the mobile
   bottom tab bar and the app footer. Defined once here; screens include placeholders
   and call BRIO_WF.render(). Change the canon here, every operator screen follows. */
window.BRIO_WF.appnav = {
  tabs: [
    { label: "Dashboard", file: "dashboard.html" },
    { label: "Programs", file: "program-library.html" },
    { label: "Team", file: "team-roster.html" },
    { label: "Owner", file: "share-owner.html" }
  ],
  settings: { label: "Settings", file: "settings.html" },
  footer: [
    { label: "Privacy", file: "security-privacy.html" },
    { label: "Help", file: "help.html" }
  ]
};

/* Public marketing shell (0.1 reduced nav + 0.2 columned footer), reused by cluster 1. */
window.BRIO_WF.publicnav = {
  links: [
    { label: "Pricing", file: "pricing.html" },
    { label: "Security", file: "security-privacy.html" },
    { label: "Help", file: "help.html" }
  ],
  login: { label: "Log in", file: "login.html" },
  cta: { label: "Start free", file: "signup.html" },
  footer: [
    { title: "Product", links: [ { label: "Pricing", file: "pricing.html" }, { label: "Security and privacy", file: "security-privacy.html" } ] },
    { title: "Company", links: [ { label: "About", file: "about.html" }, { label: "Contact", file: "contact.html" } ] },
    { title: "Resources", links: [ { label: "Help and FAQ", file: "help.html" } ] },
    { title: "Legal", links: [ { label: "Privacy Policy", file: "legal.html" }, { label: "Terms", file: "legal.html" }, { label: "Cookie settings", file: "cookie-consent.html" } ] }
  ]
};

/* Fill the placeholders on a screen page.
   opts: { node: "4.0", file: "dashboard.html", shell: "operator", tab: "Dashboard" }
   - always renders the prototype strip into #wf-bar
   - shell "operator" also renders #wf-appbar, #wf-tabbar, #wf-appfoot */
window.BRIO_WF.render = function (opts) {
  var WF = window.BRIO_WF;
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }

  var bar = document.getElementById("wf-bar");
  if (bar) {
    var scr = WF.screens.find(function (s) { return s.num === opts.node; });
    bar.textContent = "";
    if (scr) {
      bar.appendChild(el("span", "node", scr.num));
      bar.appendChild(el("span", "name", scr.name));
      var cur = scr.states.find(function (st) { return st.f === opts.file; });
      bar.appendChild(el("span", "state", cur ? cur.s : ""));
      var states = el("div", "states");
      scr.states.forEach(function (st) {
        if (st.f === opts.file) { states.appendChild(el("span", "wf-state-chip on", st.s)); }
        else if (scr.status === "built") { var a = el("a", "wf-state-chip", st.s); a.href = st.f; states.appendChild(a); }
        else { states.appendChild(el("span", "wf-state-chip", st.s)); }
      });
      bar.appendChild(states);
    }
    var back = el("a", "wf-back", "All screens"); back.href = "index.html"; bar.appendChild(back);
  }

  if (opts.shell === "operator") {
    var nav = WF.appnav;
    var appbar = document.getElementById("wf-appbar");
    if (appbar) {
      appbar.textContent = "";
      var inner = el("div", "wf-appbar-inner");
      inner.appendChild(el("span", "wf-brand", "Brio"));
      var tabs = el("div", "wf-tabs");
      nav.tabs.forEach(function (t) {
        var a = el("a", "wf-tab" + (t.label === opts.tab ? " on" : ""), t.label); a.href = t.file;
        if (t.label === opts.tab) a.setAttribute("aria-current", "page");
        tabs.appendChild(a);
      });
      inner.appendChild(tabs);
      inner.appendChild(el("span", "sp"));
      var setg = el("a", "wf-settings", nav.settings.label); setg.href = nav.settings.file; inner.appendChild(setg);
      appbar.appendChild(inner);
    }
    var tabbar = document.getElementById("wf-tabbar");
    if (tabbar) {
      tabbar.textContent = "";
      nav.tabs.forEach(function (t) {
        var a = el("a", (t.label === opts.tab ? "on" : ""), t.label); a.href = t.file;
        if (t.label === opts.tab) a.setAttribute("aria-current", "page");
        tabbar.appendChild(a);
      });
    }
    var foot = document.getElementById("wf-appfoot");
    if (foot) {
      foot.textContent = "";
      var finner = el("div", "wf-appfoot-inner");
      nav.footer.forEach(function (f) { var a = el("a", null, f.label); a.href = f.file; finner.appendChild(a); });
      foot.appendChild(finner);
    }
  }

  if (opts.shell === "wizard") {
    var wbar = document.getElementById("wf-appbar");
    if (wbar) {
      wbar.textContent = "";
      var winner = el("div", "wf-appbar-inner");
      winner.appendChild(el("span", "wf-brand", "Brio"));
      winner.appendChild(el("span", "sp"));
      if (opts.step) winner.appendChild(el("span", "wf-step", opts.step));
      wbar.appendChild(winner);
    }
  }

  if (opts.shell === "auth") {
    var abar = document.getElementById("wf-appbar");
    if (abar) {
      abar.textContent = "";
      var ainner = el("div", "wf-appbar-inner");
      ainner.appendChild(el("span", "wf-brand", "Brio"));
      ainner.appendChild(el("span", "sp"));
      var login = el("a", "wf-settings", opts.authLabel || "Log in");
      login.href = opts.authHref || "login.html";
      ainner.appendChild(login);
      abar.appendChild(ainner);
    }
  }

  if (opts.shell === "public") {
    var pnav = WF.publicnav;
    var pbar = document.getElementById("wf-appbar");
    if (pbar) {
      pbar.textContent = "";
      var pinner = el("div", "wf-appbar-inner");
      pinner.appendChild(el("span", "wf-brand", "Brio"));
      var plinks = el("div", "wf-navlinks");
      pnav.links.forEach(function (l) { var a = el("a", "wf-navlink", l.label); a.href = l.file; plinks.appendChild(a); });
      pinner.appendChild(plinks);
      pinner.appendChild(el("span", "sp"));
      var plogin = el("a", "wf-navlink", pnav.login.label); plogin.href = pnav.login.file; pinner.appendChild(plogin);
      var pcta = el("a", "wf-btn solid", pnav.cta.label); pcta.href = pnav.cta.file; pinner.appendChild(pcta);
      pbar.appendChild(pinner);
    }
    var pfoot = document.getElementById("wf-appfoot");
    if (pfoot) {
      pfoot.textContent = "";
      var pf = el("div", "wf-pubfoot-inner");
      pf.appendChild(el("p", "trust", "Aggregate only. Brio never shows any individual's answers."));
      var cols = el("div", "wf-foot-cols");
      pnav.footer.forEach(function (col) {
        var c = el("div", "wf-foot-col");
        c.appendChild(el("h3", null, col.title));
        col.links.forEach(function (l) { var a = el("a", null, l.label); a.href = l.file; c.appendChild(a); });
        cols.appendChild(c);
      });
      pf.appendChild(cols);
      pfoot.appendChild(pf);
    }
  }

  if (opts.shell === "owner") {
    var obar = document.getElementById("wf-appbar");
    if (obar) {
      obar.textContent = "";
      var oinner = el("div", "wf-appbar-inner");
      oinner.appendChild(el("span", "wf-brand", "Brio"));
      oinner.appendChild(el("span", "sp"));
      oinner.appendChild(el("span", "wf-step", "Owner view, aggregate only"));
      obar.appendChild(oinner);
    }
  }

  if (opts.shell === "employee") {
    var ebar = document.getElementById("wf-appbar");
    if (ebar) {
      ebar.textContent = "";
      var einner = el("div", "wf-appbar-inner");
      einner.appendChild(el("span", "wf-brand", "Brio"));
      einner.appendChild(el("span", "sp"));
      einner.appendChild(el("span", "wf-step", "Your answers are anonymous"));
      ebar.appendChild(einner);
    }
  }
};
