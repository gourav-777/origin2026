
# Remove Dual-Track Selection Model — Unstop Only

All 70 teams will now be selected exclusively from Unstop-registered Round 1 participants. No more internal college / MOU track references.

## Changes Across 3 Files

### 1. RegistrationModal.tsx — Selection Process Step
- Replace the dual-model description ("Internal Hackathons" + "Open Registration" as two separate cards) with a single unified message
- New text: All 70 teams are selected from Unstop Round 1 submissions based on PPT + Demo evaluation
- Remove "dual selection model" wording

### 2. RulesModal.tsx — Selection Process Section
- Remove the "Internal College Hackathons" and "Open Registration (Unstop)" dual-track blocks
- Replace with a single selection description: 70 teams shortlisted from Unstop Round 1 submissions based on evaluation
- Remove "dual selection model" phrasing

### 3. DynamicJourney.tsx — Timeline Selection Gate
- Update the SELECTION GATE phase description from "35 Internal + 35 Open teams selected" to "70 teams selected from Round 1 via Unstop"
- Update the SelectionGateDivider text from "35 INTERNAL + 35 OPEN TEAMS SELECTED" to "70 TEAMS SELECTED VIA UNSTOP"

## Technical Details

| File | Lines | Current Text | New Text |
|------|-------|-------------|----------|
| `RegistrationModal.tsx` | 37-48 | Dual model with 2 cards (Internal + Open) | Single card: "All 70 teams selected from Unstop Round 1" |
| `RulesModal.tsx` | 95-104 | Dual track blocks (Internal College + Open Registration) | Single block: "70 teams shortlisted from Unstop registrations" |
| `DynamicJourney.tsx` | 55 | "35 Internal + 35 Open teams selected..." | "70 teams selected from Round 1 via Unstop" |
| `DynamicJourney.tsx` | 251 | "35 INTERNAL + 35 OPEN TEAMS SELECTED" | "70 TEAMS SELECTED VIA UNSTOP" |
