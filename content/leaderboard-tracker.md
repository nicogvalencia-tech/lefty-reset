# Lefty Reset — Leaderboard & Scoring Tracker
# Build this in Google Sheets. Restrict access to Admin + VA only. Never share this file publicly.

---

## SHEET 1: PARTICIPANT DATA (Admin Only)

### Column Structure (Row 1 = Headers)

| Col | Header | Notes |
|---|---|---|
| A | Participant ID | Auto-increment: LR-001, LR-002... |
| B | First Name | From registration form |
| C | Last Name | From registration form |
| D | Email | From registration form |
| E | Instagram Handle | From registration form |
| F | TikTok Handle | From registration form |
| G | Location | Optional, from registration form |
| H | Primary Goal | Optional, from registration form |
| I | Registration Date | Date they signed up |
| J | Day 1 Weight (lbs) | From Day 1 check-in submission |
| K | Week 1 Weight | From weekly check-in |
| L | Week 2 Weight | From weekly check-in |
| M | Week 3 Weight | From weekly check-in |
| N | Week 4 Weight | From weekly check-in |
| O | Week 5 Weight | From weekly check-in |
| P | Week 6 Weight | From weekly check-in |
| Q | Week 7 Weight | From weekly check-in |
| R | Week 8 Weight (Final) | From final check-in |
| S | % Body Weight Lost | Formula (see below) |
| T | Check-In Streak | Formula (see below) |
| U | Codeword Verified | Y/N — manually confirmed by VA |
| V | Finalist Nominated | Y/N — filled in after Week 8 |
| W | Community Vote Count | Number of fan votes received |
| X | Prize Eligible | Y/N — Formula (see below) |
| Y | Prize Awarded | Leave blank until winner reveal |
| Z | Notes | Free text for admin/VA use |

---

## KEY FORMULAS

### % Body Weight Lost (Column S)
Calculates the percentage of starting weight lost by final weigh-in.

```
=IF(AND(J2<>"", R2<>""), ROUND(((J2-R2)/J2)*100, 2), "Pending")
```

- If Day 1 weight (J) and Week 8 weight (R) are both filled in, calculates % lost
- Rounds to 2 decimal places
- Shows "Pending" if final check-in not yet submitted

---

### Check-In Streak (Column T)
Counts how many weekly check-ins have been submitted (Weeks 1–8).

```
=COUNTA(K2:R2)
```

- Returns a number from 0–8
- Day 1 check-in is tracked separately via Codeword Verified (Column U)

---

### Prize Eligible (Column X)
A participant is prize eligible if:
- Day 1 check-in is verified (codeword confirmed)
- Final check-in (Week 8) is submitted
- At least 6 of 8 weekly check-ins completed (streak ≥ 6)

```
=IF(AND(U2="Y", R2<>"", T2>=6), "YES", "NO")
```

Adjust the streak minimum (currently 6) as needed before launch.

---

## SHEET 2: PUBLIC LEADERBOARD (Shareable View)

Create a second sheet that pulls ONLY anonymized data from Sheet 1.
This is the version you copy/paste into Skool each week.

### Columns for Public Sheet

| Col | Header | Formula (pulls from Sheet 1) |
|---|---|---|
| A | Rank | Manual — sort by % lost each week |
| B | Display Name | =IF(Sheet1.E2<>"", Sheet1.E2, Sheet1.F2) — shows Instagram handle, or TikTok if no Instagram |
| C | % Lost (so far) | =Sheet1.S2 |
| D | Check-In Streak | =Sheet1.T2 |

**NEVER include:** actual weight, full name, email, or any column from Sheet 1 that contains sensitive data.

---

### How to Publish Leaderboard Weekly (VA Instructions)

1. Open Sheet 1 and filter by Prize Eligible = YES
2. Sort by Column S (% Body Weight Lost) — highest to lowest
3. Copy the top 10–20 rows into Sheet 2 (public view)
4. Double-check: confirm NO weights, full names, or emails are visible
5. Copy the Sheet 2 table and paste it into Skool as the weekly leaderboard post
6. Use the leaderboard post format from skool-setup.md

---

## SHEET 3: VOTE TRACKER

Used during the Fan Vote window (final week only).

| Col | Header | Notes |
|---|---|---|
| A | Participant ID | Links to Sheet 1 |
| B | Display Name | Handle only |
| C | Finalist Story Link | Link to their Skool finalist post |
| D | Vote Count | Manually tallied from Skool voting thread |
| E | Verified Votes | Cross-check for duplicate votes |
| F | Fan Vote Winner | Y/N |

**How voting works:**
- Post each finalist's story on Skool
- Community members reply with the finalist's handle or number to vote
- VA tallies votes manually (or use a Google Form for voting)
- One vote per member — VA cross-checks against member list

---

## TIE-BREAKER RULES

If two participants have the same % body weight lost:
1. Higher check-in streak wins
2. If still tied — earlier registration date wins (they showed more commitment)
3. If still tied — Nico makes final call

---

## ELIGIBILITY RULES (Reference)

- Must have registered within the first 30 days of the challenge
- Must have a verified Day 1 codeword check-in
- Must have completed at least 6 of 8 weekly check-ins
- Final check-in (Week 8) is mandatory for prize consideration
- One entry per person (duplicate emails = disqualified)

---

## PRIVACY RULES (Non-Negotiable)

- Sheet 1 (full data) is accessible to Admin + VA only — never share the link
- Sheet 2 (public leaderboard) shows handles and % only — no weights, no full names
- Photos submitted via check-in form are stored in Formspree/email — do not upload to shared drives
- If a participant requests data deletion, remove their row from Sheet 1 and notify Nico

---

## WEEKLY ADMIN CHECKLIST (For VA)

**Every Monday (Check-In Day):**
- [ ] Post codeword to Skool + send codeword email
- [ ] Open check-in submissions for the week

**Every Friday (Leaderboard Day):**
- [ ] Review new check-in submissions from Formspree
- [ ] Enter weights into Sheet 1 for verified submissions
- [ ] Mark Codeword Verified (Y/N) after reviewing photos
- [ ] Update public leaderboard (Sheet 2)
- [ ] Post leaderboard to Skool using the template
- [ ] Flag any suspicious or missing submissions in Notes column

**End of Challenge:**
- [ ] Collect all Week 8 final submissions
- [ ] Calculate final % body weight lost for all eligible participants
- [ ] Sort leaderboard — identify top 3 + finalists for Fan Vote
- [ ] Send finalist list to Nico for approval
- [ ] Post finalist stories to Skool and open voting
- [ ] Tally votes and confirm Fan Vote Winner
- [ ] Send winner list to Nico for announcement
