# ModusTel Design System

A comprehensive design system built with Tailwind CSS, featuring a warm professional color palette, semantic color variables, and reusable spacing and typography scales.

## 🎨 Color Palette

### Primary Colors: Terracotta
- **Primary Dark** `--color-primary-dark`: `#4a2410` — Deep terracotta for high-contrast accents
- **Primary** `--color-primary`: `#7c2d12` — Main primary brand color
- **Primary Light** `--color-primary-light`: `#b85c2f` — Lighter variant for highlights

### Secondary Colors: Warm Amber
- **Secondary Dark** `--color-secondary-dark`: `#c17f1a` — Rich warm amber
- **Secondary** `--color-secondary`: `#d97706` — Primary action color (buttons, links)
- **Secondary Light** `--color-secondary-light`: `#f5a623` — Light variant for hover/active states

### Accent Colors: Sage Gray
- **Accent Dark** `--color-accent-dark`: `#6b7280` — Muted sage for subtle UI
- **Accent** `--color-accent`: `#9ca3af` — Mid-tone sage for borders and dividers
- **Accent Light** `--color-accent-light`: `#d1d5db` — Light sage for inactive states

### Neutral Colors: Dark Warm Browns
- **Background Dark** `--color-bg-dark`: `#1a1612` — Main body background
- **Background Muted** `--color-bg-muted`: `#2d2520` — Cards and elevated surfaces
- **Background Lighter** `--color-bg-lighter`: `#3d3530` — Slightly lighter backgrounds for depth

### Text Colors
- **Text Primary** `--color-text-primary`: `#faf5f0` — Main text and headings
- **Text Secondary** `--color-text-secondary`: `#d1c7bc` — Body copy and secondary headings
- **Text Tertiary** `--color-text-tertiary`: `#9ca3af` — Muted text and captions

---

## 🎯 Opacity Scale

Use these opacity values for consistent transparency across the design system:

| Variable | Value | Usage |
|----------|-------|-------|
| `--opacity-xs` | 0.15 | Subtle hover states |
| `--opacity-sm` | 0.3 | Borders, dividers |
| `--opacity-md` | 0.5 | Semi-transparent overlays |
| `--opacity-lg` | 0.6 | Strong transparency |
| `--opacity-xl` | 0.75 | Prominent transparency |
| `--opacity-full` | 0.85 | Maximum opacity below full |

**Usage Example:**
```css
background: rgba(217, 119, 6, var(--opacity-sm)); /* 30% opacity */
```

---

## 📏 Spacing Scale

A modular spacing scale based on increments for consistent alignment:

| Variable | Value | Usage |
|----------|-------|-------|
| `--spacing-2xs` | 0.25rem (4px) | Fine spacing (gaps, margins) |
| `--spacing-xs` | 0.5rem (8px) | Small spacing (padding, gaps) |
| `--spacing-sm` | 0.75rem (12px) | Small padding and gaps |
| `--spacing-md` | 1rem (16px) | Default padding and gaps |
| `--spacing-lg` | 1.5rem (24px) | Section padding, larger gaps |
| `--spacing-xl` | 2rem (32px) | Card padding, spacing between sections |
| `--spacing-2xl` | 2.5rem (40px) | Large spacing between elements |
| `--spacing-3xl` | 3rem (48px) | Footer padding, hero spacing |
| `--spacing-4xl` | 4rem (64px) | Main content padding |
| `--spacing-5xl` | 5rem (80px) | Major sections |
| `--spacing-6xl` | 6rem (96px) | Bottom padding for main content |

**Usage Example:**
```css
padding: var(--spacing-xl); /* 32px padding */
gap: var(--spacing-md); /* 16px gap between flex items */
```

---

## 🔤 Typography Scale

### Font Sizes
| Variable | Value | Usage |
|----------|-------|-------|
| `--font-size-xs` | 0.75rem (12px) | Captions, small labels |
| `--font-size-sm` | 0.875rem (14px) | Navigation, small text |
| `--font-size-base` | 1rem (16px) | Body text, buttons |
| `--font-size-md` | 1.05rem (16.8px) | Default prose text |
| `--font-size-lg` | 1.25rem (20px) | Headings (h3), large text |
| `--font-size-xl` | 1.375rem (22px) | Card headings, subheadings |
| `--font-size-2xl` | 1.8rem (28.8px) | Medium headings (h2) |
| `--font-size-3xl` | 2.4rem (38.4px) | Large headings (h2) responsive |
| `--font-size-4xl` | 3.75rem (60px) | Hero headings (h1) |

### Line Heights
| Variable | Value | Usage |
|----------|-------|-------|
| `--line-height-tight` | 1.1 | Headings |
| `--line-height-normal` | 1.5 | Short paragraphs |
| `--line-height-relaxed` | 1.7 | Lists, slightly larger text |
| `--line-height-loose` | 1.8 | Hero paragraphs, emphasis |
| `--line-height-prose` | 1.75 | Body copy (prose blocks) |

**Usage Example:**
```css
h1 {
  font-size: var(--font-size-4xl);
  line-height: var(--line-height-tight);
}

.prose {
  font-size: var(--font-size-md);
  line-height: var(--line-height-prose);
}
```

---

## 🔲 Border Radius Scale

| Variable | Value | Usage |
|----------|-------|-------|
| `--radius-sm` | 0.5rem (8px) | Subtle rounding |
| `--radius-md` | 1rem (16px) | Default for cards, buttons |
| `--radius-lg` | 1.125rem (18px) | Cards, larger components |
| `--radius-xl` | 1.25rem (20px) | Featured cards, sections |
| `--radius-2xl` | 1.5rem (24px) | Large sections, overlays |
| `--radius-full` | 999px | Pills, full rounding (nav items, buttons) |

**Usage Example:**
```css
.card {
  border-radius: var(--radius-xl); /* 20px */
}

.btn {
  border-radius: var(--radius-full); /* Pill shape */
}
```

---

## 🌟 Shadow Scale

Semantic shadow variables for consistent depth:

| Variable | Value | Usage |
|----------|-------|-------|
| `--shadow-sm` | `0 4px 6px` | Subtle elevation |
| `--shadow-md` | `0 8px 16px` | Medium elevation |
| `--shadow-lg` | `0 16px 30px` | Strong elevation (default buttons) |
| `--shadow-xl` | `0 20px 40px` | Prominent elevation (cards) |
| `--shadow-2xl` | `0 24px 48px` | Maximum elevation (hover states) |

**Usage with Color:**
```css
box-shadow: var(--shadow-lg) rgba(217, 119, 6, var(--opacity-sm));
/* Creates a 30px shadow in warm amber with 30% opacity */
```

---

## 📦 Component Classes

### Buttons (`.btn`)
Primary action button with warm amber gradient and shadow.

```html
<button class="btn">Click Me</button>
<a href="#" class="btn">Link Button</a>
<button class="btn btn-secondary">Secondary</button>
```

**Styles:**
- Background: Linear gradient from `--color-secondary` → `--color-secondary-light`
- Text: White
- Padding: `--spacing-sm` × `--spacing-xl` (12px × 32px)
- Border Radius: `--radius-full` (pill shape)
- Shadow: `--shadow-lg` with amber opacity
- Hover: Transform up 2px, increase shadow

### Cards (`.card`)
Elevated surface for content with hover effect.

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

**Styles:**
- Background: `--color-bg-muted` (semi-transparent)
- Border: 1px `--color-accent-dark`
- Padding: `--spacing-xl` (32px)
- Border Radius: `--radius-xl` (20px)
- Shadow: `--shadow-xl`
- Hover: Border brightens to `--color-secondary`, shadow increases

### Navigation Links (`.navLink`, `.navLinkActive`)
Navigation item styling with active state.

```html
<a href="/" class="navLink">Home</a>
<a href="/about" class="navLink navLinkActive">About</a>
```

**Styles:**
- Text: `--color-text-secondary` (muted)
- Hover: Bright text + subtle background
- Active: Warm amber-to-terracotta gradient with shadow

### Typography
- **Headings**: Use `--color-text-primary` for h1, `--color-text-secondary` for h2/h3
- **Body**: `--color-text-secondary`
- **Muted**: `--color-text-tertiary`

---

## 🎨 Usage Examples

### Creating a New Component
```css
.my-component {
  padding: var(--spacing-lg);
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-md);
  background: var(--color-bg-muted);
  color: var(--color-text-secondary);
  transition: all 0.2s ease;
}

.my-component:hover {
  border-color: var(--color-secondary);
  box-shadow: var(--shadow-md) rgba(217, 119, 6, var(--opacity-sm));
  transform: translateY(-2px);
}
```

### Responsive Padding
```css
.section {
  padding: var(--spacing-3xl);
}

@media (max-width: 768px) {
  .section {
    padding: var(--spacing-xl);
  }
}
```

### Text Hierarchy
```html
<h1 style="color: var(--color-text-primary); font-size: var(--font-size-4xl);">
  Main Heading
</h1>
<p style="color: var(--color-text-secondary); font-size: var(--font-size-md);">
  Body text with proper contrast
</p>
<small style="color: var(--color-text-tertiary); font-size: var(--font-size-sm);">
  Muted caption
</small>
```

---

## ♿ Accessibility Notes

- **Color Contrast**: All text colors meet WCAG AA standards against their background colors
- **Focus States**: Interactive elements use `--color-secondary` highlight on focus
- **Semantic HTML**: Use proper heading hierarchy (h1 → h6) with corresponding font sizes
- **Touch Targets**: Buttons and links have minimum 44px height for mobile accessibility

---

## 🔄 Migration Guide from Old Palette

If updating existing components from the previous blue/slate palette:

| Old | New |
|-----|-----|
| `#0b1020` (dark bg) | `var(--color-bg-dark)` |
| `#e2e8f0` (text) | `var(--color-text-secondary)` |
| `#f8fafc` (bright text) | `var(--color-text-primary)` |
| `#7dd3fc` (cyan links) | `var(--color-secondary)` |
| `#38bdf8` → `#818cf8` (blue gradient) | `var(--color-secondary)` → `var(--color-secondary-light)` |
| `rgba(148, 163, 184, 0.2)` (border) | `rgba(156, 163, 175, var(--opacity-sm))` |

---

## 📱 Responsive Design

All spacing and font size values adapt responsively through:
- CSS variables for consistent scaling
- `clamp()` functions for fluid typography
- Media queries at `768px` and `480px` breakpoints

Example:
```css
.prose h1 {
  font-size: clamp(2.5rem, 4vw, 3.75rem); /* Responsive scaling */
}
```

---

## 🚀 Best Practices

1. **Always use CSS variables** instead of hardcoded hex values
2. **Use semantic variable names** (`--color-primary` not `--color-orange`)
3. **Stick to the spacing scale** — avoid random pixel values
4. **Use opacity scale** for transparency instead of hardcoded rgba values
5. **Test contrast ratios** when adding new text colors
6. **Mobile-first approach** — define mobile styles first, then override at `@media`
7. **Document new utilities** as you add them to this guide

---

**Last Updated:** January 15, 2026  
**Version:** 1.0.0 — Warm Professional Palette (Dark Mode)
