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
    { num: "0.0", name: "Home", file: "home.html", ia: "home.html", status: "spec", states: [
      { f: "home.html", s: "Base (guest)" }, { f: "home-operator.html", s: "Returning operator" }, { f: "home-owner.html", s: "Owner" } ] },

    { num: "1.0", name: "Pricing", file: "pricing.html", ia: "pricing.html", status: "spec", states: [] },
    { num: "1.1", name: "Security and privacy", file: "security-privacy.html", ia: "security-privacy.html", status: "spec", states: [] },
    { num: "1.2", name: "About", file: "about.html", ia: "about.html", status: "spec", states: [] },
    { num: "1.3", name: "Contact / Support", file: "contact.html", ia: "contact.html", status: "spec", states: [] },
    { num: "1.4", name: "Help / FAQ", file: "help.html", ia: "help.html", status: "spec", states: [] },
    { num: "1.5", name: "Category / segment landing", file: "segment-landing.html", ia: "segment-landing.html", status: "spec", states: [] },
    { num: "1.6", name: "Legal documents", file: "legal.html", ia: "legal.html", status: "spec", states: [] },

    { num: "2.0", name: "Sign up", file: "signup.html", ia: "signup.html", status: "spec", states: [
      { f: "signup.html", s: "Default" }, { f: "signup-error.html", s: "Error" }, { f: "signup-loading.html", s: "Submitting" } ] },
    { num: "2.1", name: "Log in", file: "login.html", ia: "login.html", status: "spec", states: [] },
    { num: "2.2", name: "Magic-link sent", file: "magic-link-sent.html", ia: "magic-link-sent.html", status: "spec", states: [] },
    { num: "2.3", name: "Invalid or expired link", file: "link-expired.html", ia: "link-expired.html", status: "spec", states: [] },
    { num: "2.4", name: "Reset password", file: "reset-password.html", ia: "reset-password.html", status: "spec", states: [] },

    { num: "3.0", name: "Company setup", file: "onboarding-company.html", ia: "onboarding-company.html", status: "spec", states: [
      { f: "onboarding-company.html", s: "Default" }, { f: "onboarding-company-error.html", s: "Save failed" }, { f: "onboarding-company-loading.html", s: "Saving" } ] },
    { num: "3.1", name: "First program confirm", file: "onboarding-program.html", ia: "onboarding-program.html", status: "spec", states: [
      { f: "onboarding-program.html", s: "Resolved" }, { f: "onboarding-program-loading.html", s: "Pre-select" }, { f: "onboarding-program-error.html", s: "Pre-select failed" } ] },
    { num: "3.2", name: "Invite team", file: "onboarding-invite.html", ia: "onboarding-invite.html", status: "spec", states: [
      { f: "onboarding-invite.html", s: "Default" }, { f: "onboarding-invite-loading.html", s: "Sending" } ] },
    { num: "3.3", name: "Invite-send error", file: "invite-send-error.html", ia: "invite-send-error.html", status: "spec", states: [
      { f: "invite-send-error.html", s: "Error shown" } ] },

    { num: "4.0", name: "Dashboard", file: "dashboard.html", ia: "dashboard.html", status: "spec", states: [
      { f: "dashboard.html", s: "Score ready" }, { f: "dashboard-empty.html", s: "Pre-minimum-N" }, { f: "dashboard-open.html", s: "Cycle open" },
      { f: "dashboard-loading.html", s: "Loading" }, { f: "dashboard-error.html", s: "Error" }, { f: "dashboard-noprogram.html", s: "No program" }, { f: "dashboard-alert.html", s: "Threshold alert" } ] },
    { num: "4.1", name: "Team pulse detail", file: "team-pulse.html", ia: "team-pulse.html", status: "spec", states: [
      { f: "team-pulse.html", s: "Default" }, { f: "team-pulse-empty.html", s: "Minimum-N not met" }, { f: "team-pulse-open.html", s: "Cycle open" },
      { f: "team-pulse-loading.html", s: "Loading" }, { f: "team-pulse-error.html", s: "Error" }, { f: "team-pulse-nodata.html", s: "First run" } ] },
    { num: "4.2", name: "Threshold alert detail", file: "threshold-alert.html", ia: "threshold-alert.html", status: "spec", states: [] },

    { num: "5.0", name: "Program library", file: "program-library.html", ia: "program-library.html", status: "spec", states: [] },
    { num: "5.1", name: "Program detail / manage", file: "program-detail.html", ia: "program-detail.html", status: "spec", states: [] },
    { num: "5.2", name: "Check-in setup", file: "check-in-setup.html", ia: "check-in-setup.html", status: "spec", states: [] },

    { num: "6.0", name: "Team roster", file: "team-roster.html", ia: "team-roster.html", status: "spec", states: [
      { f: "team-roster.html", s: "Has members" }, { f: "team-roster-empty.html", s: "No members" }, { f: "team-roster-pending.html", s: "Pending invites" },
      { f: "team-roster-open.html", s: "Open cycle" }, { f: "team-roster-loading.html", s: "Loading" }, { f: "team-roster-error.html", s: "Error" }, { f: "team-roster-manage.html", s: "Manage dialog" } ] },

    { num: "7.0", name: "Share with owner", file: "share-owner.html", ia: "share-owner.html", status: "spec", states: [] },
    { num: "7.1", name: "Invite owner + upgrade", file: "invite-owner.html", ia: "invite-owner.html", status: "spec", states: [] },
    { num: "7.2", name: "Upgrade / paywall", file: "upgrade.html", ia: "upgrade.html", status: "spec", states: [] },
    { num: "7.3", name: "Payment failed", file: "payment-failed.html", ia: "payment-failed.html", status: "spec", states: [] },

    { num: "8.0", name: "Settings shell", file: "settings.html", ia: "settings.html", status: "spec", states: [] },
    { num: "8.1", name: "Plan / subscription", file: "settings-plan.html", ia: "settings-plan.html", status: "spec", states: [] },
    { num: "8.2", name: "Privacy center", file: "settings-privacy.html", ia: "settings-privacy.html", status: "spec", states: [] },
    { num: "8.3", name: "Notifications", file: "settings-notifications.html", ia: "settings-notifications.html", status: "spec", states: [] },
    { num: "8.4", name: "Account settings", file: "settings-account.html", ia: "settings-account.html", status: "spec", states: [] },

    { num: "9.0", name: "Owner dashboard", file: "owner-dashboard.html", ia: "owner-dashboard.html", status: "spec", states: [] },
    { num: "9.2", name: "Monthly owner digest", file: "owner-digest.html", ia: "owner-digest.html", status: "spec", states: [] },

    { num: "10.0", name: "Check-in entry", file: "checkin-entry.html", ia: "checkin-entry.html", status: "spec", states: [] },
    { num: "10.1", name: "Pre-Q1 privacy disclosure", file: "checkin-privacy.html", ia: "checkin-privacy.html", status: "spec", states: [] },
    { num: "10.2", name: "Questions", file: "checkin-questions.html", ia: "checkin-questions.html", status: "spec", states: [] },
    { num: "10.3", name: "Check-in complete", file: "checkin-complete.html", ia: "checkin-complete.html", status: "spec", states: [] },
    { num: "10.4", name: "Invite link expired", file: "checkin-expired.html", ia: "checkin-expired.html", status: "spec", states: [] },
    { num: "10.5", name: "Already submitted", file: "checkin-already.html", ia: "checkin-already.html", status: "spec", states: [] },
    { num: "10.6", name: "Submit error", file: "checkin-submit-error.html", ia: "checkin-submit-error.html", status: "spec", states: [] },

    { num: "11.0", name: "404 Not found", file: "not-found.html", ia: "not-found.html", status: "spec", states: [] },
    { num: "11.1", name: "500 Server error", file: "server-error.html", ia: "server-error.html", status: "spec", states: [] },
    { num: "11.2", name: "Maintenance", file: "maintenance.html", ia: "maintenance.html", status: "spec", states: [] },
    { num: "11.3", name: "Cookie consent", file: "cookie-consent.html", ia: "cookie-consent.html", status: "spec", states: [] },
    { num: "11.4", name: "Toast / inline notification", file: "toast.html", ia: "toast.html", status: "spec", states: [] }
  ]
};
