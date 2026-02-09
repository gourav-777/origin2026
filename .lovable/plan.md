

# Interstellar Dual-Round Timeline Enhancement

## Overview

Transform the existing ORIGIN Hackathon timeline into a continuous interstellar mission journey that seamlessly integrates the **Online Round (Orbital Innovation)** and **Offline Round (Deep Space Mission)** as distinct but connected phases of a single cosmic voyage.

---

## Mission Architecture

The enhanced timeline will treat the hackathon as a complete space mission:

```text
MISSION CONTROL (ORIGIN)
        │
        ▼
┌───────────────────────────────────────┐
│  PHASE I: ORBITAL INNOVATION          │
│  ═══════════════════════════════════  │
│  • Free entry, open to all explorers  │
│  • Online innovation testing          │
│  • Participation certificate earned   │
│  • Pre-launch orbit before landing    │
└───────────────────┬───────────────────┘
                    │
            ┌───────┴───────┐
            │ SELECTION GATE │
            └───────┬───────┘
                    │
                    ▼
┌───────────────────────────────────────┐
│  PHASE II: DEEP SPACE MISSION         │
│  ═══════════════════════════════════  │
│  • March 30-31, 2026                  │
│  • Entry: Rs 150 (includes F&B,       │
│    goodies, event pass)               │
│  • Physical mission at launch site    │
│  • Live evaluations & collaboration   │
└───────────────────────────────────────┘
```

---

## Implementation Strategy

### 1. Phase Header Cards

Add two prominent phase indicator cards at the top of the timeline that clearly distinguish the two mission phases:

- **Phase I Card**: "ORBITAL INNOVATION" (Online Round)
  - Tagline: "Enter the orbit freely"
  - Icon: Satellite/Globe
  - Mode: Online
  - Fee: FREE
  - Recognition: Participation Certificate

- **Phase II Card**: "DEEP SPACE MISSION" (Offline Round)
  - Tagline: "Land at the launch facility"
  - Icon: Rocket
  - Mode: Offline (March 30-31)
  - Fee: Rs 150
  - Includes: Food, Goodies, Event Pass

### 2. Timeline Restructure

Reorganize the phases data to clearly flow from online to offline:

| Sequence | Phase ID | Title | Subtitle | Date | Round |
|----------|----------|-------|----------|------|-------|
| 1 | origin | ORIGIN | Mission Announcement | FEB 2026 | Pre-Mission |
| 2 | orbital-entry | ORBITAL ENTRY | Phase I Opens | FEB 2026 | Online |
| 3 | orbital-innovation | ORBITAL INNOVATION | Open Innovation Sprint | FEB-MAR 2026 | Online |
| 4 | selection-gate | SELECTION GATE | Crew Finalization | MAR 28, 2026 | Transition |
| 5 | landing-prep | LANDING PREP | Pre-Launch Briefing | MAR 29, 2026 | Offline |
| 6 | ignition | IGNITION | Mission Begins | MAR 30, 09:00 | Offline |
| 7 | deep-space | DEEP SPACE | 24-Hour Build | MAR 30-31 | Offline |
| 8 | evolution | EVOLUTION | Mentorship & Refinement | During Event | Offline |
| 9 | transmission | TRANSMISSION | Final Presentations | MAR 31 | Offline |
| 10 | arrival | ARRIVAL | Results & Celebration | MAR 31, 2026 | Offline |

### 3. Visual Differentiation

Add visual cues to distinguish round types:

- **Online phases**: Subtle dotted border, satellite icon accent, "ORBITAL" badge
- **Transition phase**: Special "GATE" styling with a horizontal divider across the timeline
- **Offline phases**: Solid border with glow effect, rocket icon accent, "DEEP SPACE" badge

### 4. Phase Grouping Dividers

Insert visual section breaks between round types:

- After ORBITAL INNOVATION: A horizontal "Selection Gate" divider showing the transition from online to offline
- Style: A glowing line with a central node and text "ENTERING DEEP SPACE"

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/DynamicJourney.tsx` | Complete restructure with new phases, phase header cards, and visual grouping |

---

## Technical Details

### New Phases Data Structure

```typescript
interface Phase {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  round: 'online' | 'transition' | 'offline';
  badge?: string;
  details?: {
    fee?: string;
    mode?: string;
    includes?: string[];
    recognition?: string;
  };
}
```

### Phase Header Cards Component

Two cards displayed above the timeline that summarize each round:

- Left card: Online Round details
- Right card: Offline Round details
- Responsive: Stack vertically on mobile

### Selection Gate Divider

A full-width visual separator between online and offline phases:

- Animated horizontal line with pulse effect
- Central icon (Gateway/Portal)
- Text: "SELECTION GATE" with "35 Internal + 35 Open Teams"

### Timeline Icons

Updated icon set to match the interstellar theme:

| Phase | Icon |
|-------|------|
| ORIGIN | Sparkles |
| ORBITAL ENTRY | Satellite |
| ORBITAL INNOVATION | Globe |
| SELECTION GATE | Waypoints/Filter |
| LANDING PREP | MapPin |
| IGNITION | Flame |
| DEEP SPACE | Rocket |
| EVOLUTION | Brain |
| TRANSMISSION | Radio |
| ARRIVAL | Flag |

---

## Expected Outcome

Users will experience a single continuous mission narrative:

1. **Discovery**: The mission is announced (ORIGIN)
2. **Orbital Phase**: Free entry to test ideas online (ORBITAL ENTRY, ORBITAL INNOVATION)
3. **Selection**: Teams are chosen for the physical mission (SELECTION GATE)
4. **Landing Phase**: Preparation and briefing (LANDING PREP)
5. **Deep Space Mission**: The 24-hour hackathon at the venue (IGNITION through ARRIVAL)

The design maintains the clean monochromatic interstellar aesthetic while clearly communicating the dual-round structure without breaking the mission metaphor.

