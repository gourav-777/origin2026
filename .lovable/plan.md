

# Swap Images: Vinnarasu and Nittyendren JS

## Overview
Swap the profile images between two supporting crew members in the team section.

## What Will Change

In `src/components/DynamicTeam.tsx`, the image URLs for these two members will be swapped:

- **Vinnarasu** will get Nittyendren's current image:
  `https://res.cloudinary.com/duoigqhsw/image/upload/v1770398081/vinay_epkpeq.jpg`

- **Nittyendren JS** will get Vinnarasu's current image:
  `https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop`

## File to Modify
`src/components/DynamicTeam.tsx` -- two lines changed (image URLs swapped in the `supportingCrew` array).

