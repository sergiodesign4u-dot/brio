# Information Architecture - Base Layer (User Flows)

*Phase: IA (Basic). User flows for the primary persona's main job plus key related jobs, from user-research/docs/jtbd.md. Each flow proves the route: steps, decision diamonds, states (empty / error / loading), both ends (success and dead-end). Color is semantic, not decorative: green = happy-path ends and the arrows that reach them, red = a true dead-end with no path to the goal, gray = everything between, including an error that recovers. Every node-screen exists in sitemap.md. Colors reuse the project token palette (green #3fb56b, red #e5484d, gray #5a5a5a). Step 6 critique fixes are applied (dead-end exits and missing states added).*

---

## Flow 1 - MAIN JOB (Priya): Run wellbeing without HR training

```mermaid
flowchart TD
    Start(["Priya: handed wellbeing, no HR training"]) --> Landing["Landing / home"]
    Landing --> Signup["Sign up"]
    Signup --> Onboard["Onboarding: company setup"]
    Onboard --> Load1["Loading: pre-select program by size"]
    Load1 --> Confirm["First program confirm"]
    Confirm --> Invite["Invite team: join link / code"]
    Invite --> SendOk{"Invites sent?"}
    SendOk -->|send failed| InviteErr["Error: invite send failed, retry"]
    InviteErr --> Invite
    SendOk -->|yes| Dash["Dashboard: waiting for check-ins"]
    Dash --> Enough{"Cycle closed, N of 5 met?"}
    Enough -->|still open| Waiting["Loading: cycle open, no live count"]
    Waiting --> Enough
    Enough -->|under 5 at close| EmptyN["Empty: too few responses, nudge team"]
    EmptyN --> Roster["Team roster: resend invite"]
    Roster --> Dash
    Enough -->|team too small| TooSmall["Team below minimum-N: privacy math explained"]
    TooSmall --> Grow{"Can invite more to reach 5?"}
    Grow -->|yes| Roster
    Grow -->|no| DeadN["Dead: under minimum-N, no team signal possible"]
    Enough -->|yes| Pulse["Team pulse: score + interpretation + next action"]
    Pulse --> Win(["Job closed: team read and next action"])

    classDef success fill:#12351f,stroke:#3fb56b,color:#eafff9;
    classDef dead fill:#3a1618,stroke:#e5484d,color:#ffd7d7;
    classDef neutral fill:#1b1b1b,stroke:#5a5a5a,color:#dddddd;
    class Start,Win success;
    class DeadN dead;
    class Landing,Signup,Onboard,Load1,Confirm,Invite,SendOk,InviteErr,Dash,Enough,Waiting,EmptyN,Roster,TooSmall,Grow,Pulse neutral;
    linkStyle 0,1,2,3,4,5,6,9,10,20,21 stroke:#3fb56b,stroke-width:2px;
```

**Decisions:** invites sent? cycle closed and N of 5 met? can invite more to reach 5? **States:** loading (pre-select program; cycle open with no live count), empty (too few responses at close, nudge), error (invite send failed, retry). **Informed stop (Step 6 DE1):** a team structurally under minimum-N first sees the privacy-math explainer and an offer to invite more; only if it cannot reach 5 is it a dead-end. **Dead-end:** team stays under minimum-N, so an aggregate signal is genuinely not possible (the honest limit of an aggregate-only model; a program-only, no-score mode is a possible future fallback). **Recoverable loop:** under-5-at-close, nudge, resend invite, back to waiting. **Success:** pulse read plus next action.

---

## Flow 2 - J3 + J4 (Yemi): Private, under-30s check-in

```mermaid
flowchart TD
    Start(["Yemi: invite received, is it private?"]) --> Open["Check-in via invite link / join code"]
    Open --> Valid{"Invite link valid?"}
    Valid -->|expired| Expired["Error: invite expired, ask operator to resend"]
    Valid -->|ok| Dup{"Already checked in this cycle?"}
    Dup -->|yes| Already["Already submitted this cycle, thank-you"]
    Dup -->|no| Disc["Pre-Q1 privacy disclosure"]
    Disc --> Believe{"Do I believe my answer stays private?"}
    Believe -->|not sure| Learn["See exactly what your manager sees"]
    Learn --> Believe
    Believe -->|no| DeadSkip["Dead: skips or non-answer, trust lost"]
    Believe -->|yes| Q["Questions: 1 to 3, emoji / slider"]
    Q --> Submit["Loading: submitting response"]
    Submit --> Ok{"Submitted?"}
    Ok -->|network error| Err["Error: submit failed, retry"]
    Err --> Q
    Ok -->|yes| Done["Check-in complete: thank-you, no individual data"]
    Done --> Win(["Job closed: honest response joined the team aggregate"])

    classDef success fill:#12351f,stroke:#3fb56b,color:#eafff9;
    classDef dead fill:#3a1618,stroke:#e5484d,color:#ffd7d7;
    classDef neutral fill:#1b1b1b,stroke:#5a5a5a,color:#dddddd;
    class Start,Win success;
    class DeadSkip dead;
    class Open,Valid,Expired,Dup,Already,Disc,Believe,Learn,Q,Submit,Ok,Err,Done neutral;
    linkStyle 0,1,3,5,6,10,11,12,15,16 stroke:#3fb56b,stroke-width:2px;
```

**Decisions:** invite valid? already checked in this cycle? do I believe it stays private? submitted? **States:** error (expired invite, recovers via operator resend; submit failed, retry), loading (submitting), already-submitted (Step 6 MS1: re-open after completing shows a thank-you, not a duplicate). **Recovery (Step 6 DE2):** an unsure employee can open "see exactly what your manager sees" and return to the decision, instead of being lost immediately. **Dead-end:** disbelief in privacy, she skips or non-answers, trust lost (the E4 mental opt-out; red because there is no in-flow path back to an honest answer once trust is gone). **Success:** honest response joins the aggregate.

---

## Flow 3 - J1 + J5 + S2 (Priya to Marcus): Prove it works, owner share and upgrade

```mermaid
flowchart TD
    Start(["Priya: wants to show the owner it works"]) --> Milestone["Dashboard: positive pulse milestone"]
    Milestone --> Share["Share with owner"]
    Share --> Gate{"On a paid plan?"}
    Gate -->|no| Upgrade["Invite owner + upgrade"]
    Upgrade --> Pay{"Upgrade completed?"}
    Pay -->|payment failed| PayErr["Error: payment failed, retry or stay free"]
    PayErr --> Upgrade
    Pay -->|not now| StayFree["Stay on free tier, retry later"]
    StayFree --> Milestone
    Pay -->|yes| Sent["Confirmation: owner invite sent"]
    Gate -->|yes| Sent
    Sent --> Wait["Loading: waiting for owner to open"]
    Wait --> Seen{"Owner opened dashboard or digest?"}
    Seen -->|not yet| Nudge2["Empty: owner has not opened, resend digest"]
    Nudge2 --> Wait
    Seen -->|never opens| DeadUnseen["Dead: owner never opens, share never lands"]
    Seen -->|yes| OwnerDash["Owner dashboard: one number, trend, what I cannot see"]
    OwnerDash --> Ready{"Team score ready, N of 5 met?"}
    Ready -->|no| OwnerEmpty["Empty: score not available yet, privacy minimum not met"]
    Ready -->|yes| Win(["Job closed: owner sees an honest signal, renewal confidence"])

    classDef success fill:#12351f,stroke:#3fb56b,color:#eafff9;
    classDef dead fill:#3a1618,stroke:#e5484d,color:#ffd7d7;
    classDef neutral fill:#1b1b1b,stroke:#5a5a5a,color:#dddddd;
    class Start,Win success;
    class DeadUnseen dead;
    class Milestone,Share,Gate,Upgrade,Pay,PayErr,StayFree,Sent,Wait,Seen,Nudge2,OwnerDash,Ready,OwnerEmpty neutral;
    linkStyle 0,1,2,10,11,12,16,17,19 stroke:#3fb56b,stroke-width:2px;
```

**Decisions:** on a paid plan? upgrade completed? owner opened it? team score ready (N of 5)? **States:** error (payment failed, retry or stay free), loading (waiting for owner), empty (owner has not opened, resend digest; and Step 6 MS2: owner opens before the minimum-N is met, so the score is not shown yet). **Recoverable exit (Step 6 DE3):** declining the upgrade is not a trap, she stays on the free tier and can retry later. **Dead-end:** owner never opens despite resends, the share never lands (the operator cannot force the owner to look). **Success:** owner reads an honest signal. The highlighted spine is the already-paid path; the upgrade branch (Upgrade, Pay, Sent) also converges to success.

---

## Flow 4 - J2 (Priya): Know if the team is struggling early

```mermaid
flowchart TD
    Start(["Brio: a pulse cycle closes"]) --> Compute["Loading: compute aggregate, check N of 5"]
    Compute --> N{"N of 5 met?"}
    N -->|no| Hold["Empty: too few responses, no score, no alert"]
    Hold --> Wait2["Wait for next cycle"]
    Wait2 --> Start
    N -->|yes| Trend{"Aggregate dropped past threshold?"}
    Trend -->|no| Steady["Dashboard: steady, no action needed"]
    Steady --> OkEnd(["Job closed: reassured, nothing needed"])
    Trend -->|yes| Alert["Threshold alert detail"]
    Alert --> Act{"Operator acts?"}
    Act -->|ignores once| Digest["Weekly digest re-surfaces the alert"]
    Digest --> Alert
    Act -->|keeps ignoring| DeadMiss["Dead: alert ignored, someone resigns"]
    Act -->|yes| NextAction["Team pulse: suggested next action"]
    NextAction --> Win(["Job closed: acted before a resignation"])

    classDef success fill:#12351f,stroke:#3fb56b,color:#eafff9;
    classDef dead fill:#3a1618,stroke:#e5484d,color:#ffd7d7;
    classDef neutral fill:#1b1b1b,stroke:#5a5a5a,color:#dddddd;
    class Start,OkEnd,Win success;
    class DeadMiss dead;
    class Compute,N,Hold,Wait2,Trend,Steady,Alert,Act,Digest,NextAction neutral;
    linkStyle 0,1,5,6,7,8,9,13,14 stroke:#3fb56b,stroke-width:2px;
```

**Decisions:** N of 5 met? dropped past threshold? operator acts? **States:** loading (compute aggregate), empty (too few responses, no score, no alert). **Escalation (Step 6 DE4):** a single ignore does not equal a resignation, the weekly digest re-surfaces the alert; only repeated ignoring is the dead-end. **Two success ends** (both close J2): steady equals reassured, and alert-then-acted. **Dead-end:** alert kept ignored, someone resigns (the early-warning miss).

---

## Legend

- **Green** (success): the start and finish of a happy path (job closed), plus the arrows that reach it. Intermediate screens stay neutral.
- **Red** (dead): a true dead-end, a node with no path to the goal (team under minimum-N, trust lost, owner never opens, alert kept ignored).
- **Gray** (neutral): everything between the ends, including decision diamonds, loading / empty / already-submitted, recovery detours, and an error that recovers with an arrow back toward the goal.
