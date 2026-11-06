# Mighty Markdown website

Public product website, support guide, and privacy policy. The macOS app source is maintained separately.

Hosted at https://mightymarkdown.chrominsky.dev/ using GitHub Pages.

This site uses plain HTML, CSS and a few lines of optional JavaScript, with local assets (including self-hosted fonts) and no build step, analytics, tracking or third-party fonts.

Preview: `python3 -m http.server 8765`

Check before publishing: `python3 scripts/check_site.py` (metadata, links, anchors, headings, forbidden claims, `noindex` on the `_old/` backup).

| Path | Purpose |
| --- | --- |
| `index.html`, `support.html`, `privacy.html` | The three pages |
| `assets/site.css`, `assets/site.js` | Styles and the Read / Edit / Split switch |
| `assets/fonts/` | Newsreader and Fragment Mono (SIL OFL 1.1) |
| `assets/shots/` | App screenshots (WebP and JPEG) |
| `docs/design.md` | Design notes |
| `_old/` | Previous site, kept as a `noindex` backup |

Publish: repository Settings > Pages, deploy from the `main` branch, root directory.

The product is not yet available on the Mac App Store. Update the availability copy and add the official App Store link after its public release.

## Support and community

Use [Issues](https://github.com/Chrominskyy/mighty-markdown-site/issues/new/choose) for bugs, feature requests, and questions. Changes to main or master require a pull request and approval from @Chrominskyy through CODEOWNERS; the owner retains a direct-push bypass.

- [Contribution and support guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security policy and private vulnerability reporting](SECURITY.md)
- [Copyright and licensing](LICENSE)

Original website materials are all rights reserved; this repository does not license the application source. Third-party materials retain their attributed licenses.
