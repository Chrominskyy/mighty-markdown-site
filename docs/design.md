# Mighty Markdown website design

Editorial static site: a reading room rather than a product page. Three pages (`index.html`, `support.html`, `privacy.html`), one stylesheet (`assets/site.css`) and one small optional script (`assets/site.js`).

## System

- Light "paper" scheme by default, dark scheme through `prefers-color-scheme`. Tokens are CSS custom properties at the top of `site.css`.
- Accent: the violet of the app's mode control and Markdown highlighting (`--accent`). Text meets 4.5:1 contrast in both schemes.
- Type: Newsreader (variable `opsz`, `wght`, italic) for everything that reads; Fragment Mono for labels, UI names, keys and Markdown syntax.
- Signature: headings show their Markdown syntax (`#`, `##`, `*`) in the accent color, as if the page were its own source. The hero uses real screenshots with a Read / Edit / Split control that mirrors the app; without JavaScript the Split screenshot is shown.
- Background: faint ruled lines and, on wide screens, a margin line, like a notebook page.
- Motion: one staggered load sequence in the hero and a short cross-fade when switching modes, both off under `prefers-reduced-motion`.

## Assets

- `assets/shots/*`: the App Store screenshots of the app (Read, Split, Edit), resized to 1600×1000, as WebP with JPEG fallback.
- `assets/icon.png`: app icon. `assets/og-image.png`: social preview built from the hero and the Split screenshot.

## Content rules

Describe implemented behavior only. No App Store link, price or rating until the app is public. Unsupported Markdown features stay listed as "Not yet".

## Backup

The previous site is kept under `_old/` with its own stylesheet, script and images. Its pages carry `noindex` and a canonical URL under `_old/`; `scripts/check_site.py` verifies this.
