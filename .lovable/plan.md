

# Fix Uneven Card Heights in Team Section

## Problem Analysis

The team lead cards have inconsistent heights on mobile view because:
- Names like "Harsh Limkar N" wrap to 2 lines
- Names like "Gourav Sharma" or "Aswath S" fit on 1 line  
- The card height is determined by content, causing visual imbalance

## Solution Approach

Apply a **fixed minimum height** strategy to the name container, ensuring all cards maintain uniform height regardless of name length.

### Changes to `src/components/DynamicTeam.tsx`

#### 1. Fix the Name Element (Line 193)

Add `min-h-[48px]` to ensure the name always reserves space for 2 lines:

```tsx
// Before
<h3 className="font-display font-bold text-foreground text-base">{member.name}</h3>

// After
<h3 className="font-display font-bold text-foreground text-base min-h-[48px] flex items-center justify-center">
  {member.name}
</h3>
```

#### 2. Alternative: Line Clamping Approach

If truncation is preferred for very long names:

```tsx
<h3 className="font-display font-bold text-foreground text-base min-h-[48px] line-clamp-2">
  {member.name}
</h3>
```

---

## Technical Details

| Property | Purpose |
|----------|---------|
| `min-h-[48px]` | Reserves space for 2 lines of text (~24px per line) |
| `flex items-center justify-center` | Centers single-line names vertically within the reserved space |
| `line-clamp-2` | Limits text to 2 lines with ellipsis for overflow (optional) |

## Result

All 4 team lead cards will have identical heights, creating a clean, balanced grid layout on both mobile and desktop views.

