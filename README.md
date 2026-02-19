# LandingPage/ HomePage Project 

> A static studio landing page. Started as a learning exercise, rebuilt with intention and as a way of me trying to strength or improve my ui skills.

---

## Background

This project was initial done **two years ago** as one of my first real attempts at building a polished UI from scratch that with no frameworks, no templates, just HTML, CSS, and vanilla JS. The goal was simple: master the fundamentals of frontend design by actually building something that looked and felt considered.

Back then it was rough around the edges. The layout worked, but the design language wasn't there yet.

**Recently, I came back to it in my final year and gave it a full design overhaul refined the visual system, introduced a proper typographic scale using Cormorant Garamond and DM Mono both are font styles from different font families, tightened the colour palette to a warm dark theme with intentional accent usage, and cleaned up every interaction and animation. The goal this time wasn't to learn — it was to execute.

The difference between the two versions is the clearest way I can show how much my eye and craft have developed.

---

## What This Project Demonstrates

- **Design thinking** — cohesive visual system with a defined colour palette, type scale, and spacing rhythm
- **CSS architecture** — custom properties (design tokens), responsive layout, scroll-driven animations via IntersectionObserver
- **Vanilla JS** — no dependencies; scroll behaviour, active nav highlighting, keyboard navigation, all hand-written
- **Attention to detail** — animated logo dot, smooth header state transitions, staggered hero fade-ins, subtle section reveals
- **Responsive design** — mobile-first considerations, nav collapses gracefully on small screens

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Markup | HTML5 (semantic) |
| Styling | Pure CSS (custom properties, grid, flexbox) |
| Behaviour | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Cormorant Garamond, DM Mono |
| Build tool | None — zero dependencies |

---

## Project Structure

```
vi-studio/
├── index.html      # Markup & page structure
├── style.css       # All styles — reset, layout, components, animations
├── script.js       # Scroll behaviour, IntersectionObserver, nav state
└── README.md
```

---

## How to Run

No build step. No npm install. Just open it.

**Option 1 — Direct open**
```bash
# Clone or download the repo, then:
open index.html
```
Double-clicking `index.html` in your file explorer works too.

**Option 2 — Local dev server (recommended for smooth font loading)**

If you have VS Code, use the **Live Server** extension — right-click `index.html` → *Open with Live Server*.

Or with Python:
```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

Or with Node:
```bash
npx serve .
# then open the URL it gives you
```

---

## Sections

| # | Section | Notes |
|---|---------|-------|
| 01 | **Hero** | Staggered fade-up animations, scroll indicator |
| 02 | **About** | Stat counters, scroll-reveal on enter |
| 03 | **Services** | 3-column grid with hover states |
| 04 | **Contact** | Minimal CTA with animated email link |

---

## Design Decisions Worth Noting

- **`--accent: #c9a96e`** — warm gold used sparingly to draw the eye without shouting
- **`--accent2: #8fb8ad`** — muted teal for secondary labels, creates depth without clutter
- **Cormorant Garamond** for display text — editorial, refined, pairs well with the mono for UI elements
- **`cubic-bezier(0.25, 0.46, 0.45, 0.94)`** — a single easing curve used consistently across all transitions for a cohesive feel
- **No JavaScript frameworks** — a deliberate choice to prove the fundamentals are solid

---

## Status

Final year student project. Actively maintained.  
The gap between the original version and this one represents two years of learning — and that's the point.

---

*Built by hand — with care.*
