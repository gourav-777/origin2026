
# Image Optimization Plan for Team Section

## Overview
Apply Cloudinary URL transformations and native lazy loading to compress team member images, reducing load times and bandwidth usage significantly.

## What Will Change

### 1. Create a Helper Function
Add a utility function to transform Cloudinary URLs with optimization parameters:
- Resize images to appropriate dimensions (128px for leads, 80px for crew)
- Auto-format to WebP/AVIF for modern browsers
- Auto-quality for optimal compression
- Face-detection cropping for better avatar framing

### 2. Update Image URLs

**Team Leads (4 members):**
- Transform URLs with `w_256,h_256,c_fill,g_face,f_auto,q_auto` (256px for retina displays)

**Supporting Crew (8 members):**
- Transform URLs with `w_160,h_160,c_fill,g_face,f_auto,q_auto` (160px for retina displays)

### 3. Add Lazy Loading
Add `loading="lazy"` attribute to all team member images so they load only when scrolling near them.

## Technical Details

**Cloudinary URL Transformation:**
```
Before: https://res.cloudinary.com/duoigqhsw/image/upload/v1770398333/harsh.jpg_owdpgy.jpg

After:  https://res.cloudinary.com/duoigqhsw/image/upload/w_256,h_256,c_fill,g_face,f_auto,q_auto/v1770398333/harsh.jpg_owdpgy.jpg
```

**Parameters explained:**
- `w_256,h_256` - Resize to exact dimensions needed
- `c_fill` - Crop to fill the dimensions
- `g_face` - Focus on faces when cropping
- `f_auto` - Automatically serve WebP/AVIF based on browser support
- `q_auto` - Automatic quality optimization

**File to modify:** `src/components/DynamicTeam.tsx`

## Expected Benefits
- **50-80% reduction** in image file sizes
- **Faster page load** with lazy loading
- **Modern format support** (WebP/AVIF) automatically served
- **Better cropping** with face detection
