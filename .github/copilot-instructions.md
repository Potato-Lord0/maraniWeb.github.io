# Copilot / AI Agent Instructions for MaraniWeb

Purpose: quickly orient AI coding agents to be productive in this small static site repository.

High-level overview
- This is a static single-page site (SPA-like) composed of HTML, CSS, and client-side JS.
- Main files: `index.html`, `styles.css`, `scripts.js`, and the `images/` folder.
- No build system, server, or tests present; changes are validated by serving the folder locally.

Key files & patterns
- `index.html`: section-based layout using anchor ids (`#home`, `#about`, `#donate`, etc.). Navigation is pure anchor links and relies on `scroll-margin-top` in `styles.css`.
- `styles.css`: central design tokens are declared in `:root` (e.g. `--terracotta`, `--amber`). Modify color and spacing here rather than sprinkling values in HTML.
- `scripts.js`: contains a Stripe test key placeholder and simple donation helpers (`donate()`, `customDonate()`). It currently uses an alert stub; no backend Checkout integration is present.
- `images/`: site assets referenced by `index.html`. Keep image sizes reasonable; hero uses `background: url("images/great-falls.jpg")`.

Important repo-specific notes
- Script filename mismatch: `index.html` references `script.js` (singular) but the repo contains `scripts.js` (plural). Decide whether to rename the file or update the `index.html` `<script>` tag when making JS changes.
- Payments: `scripts.js` uses a placeholder Stripe public key and only shows alerts. Real Stripe Checkout requires a server-side session — do not expose live secret keys in this repo.
- Contact form is static HTML; there is no form handler. Adding a backend or a third-party form provider is necessary to make it functional.

Developer workflows
- Serve locally (quick check):
  - Python 3: `python -m http.server 8000` then open `http://localhost:8000`.
  - VS Code: use Live Server extension to preview changes with auto-reload.
- Lint/format: no project linter configured. Follow simple HTML/CSS/JS best practices and run manual validation in the browser.

Change guidance and examples
- To update styles: change tokens in `styles.css`'s `:root` block so updates propagate site-wide.
- To change donation behavior: update `scripts.js` and either rename the file or fix `index.html` to reference `scripts.js`. Example safe change: replace the `alert` in `donate()` with a console log or open a modal; keep the Stripe public key placeholder until a backend is provided.
- To add server-side features (contact form / real payments): add a new `server/` folder or external service integration and document API endpoints in a new README section.

Safety & privacy
- Do not commit real Stripe secret keys. Keep any credentials out of the repo; use environment variables or a vault for server-side code.

If something is unclear
- Ask which behavior is desired for the `script.js` vs `scripts.js` mismatch, and whether the user wants a real payment/contact integration scaffolded.

Small, iterative tasks I can do next:
- Fix the script tag mismatch (update `index.html` or rename file).
- Scaffold a minimal backend sample to demonstrate Stripe Checkout server integration (needs user confirmation).

End of instructions.
