# RED DUST LAB — RDL-001 website update

A responsive static research website for the preliminary Earth-based dust-analogue / photovoltaic voltage experiment.

## Files
- `index.html` — page content, research sections, experiment record, source register
- `styles.css` — responsive visual system, illustrations and motion effects
- `script.js` — dust animation, reveal/count-up effects, interactive conceptual coverage explorer, voltage chart and CSV export

## Run locally
Open `index.html` in a modern browser. The website can also be served using VS Code Live Server. No build step or package installation is required.

## Publish with GitHub Pages
1. Make a backup or create a branch in your existing repository.
2. Replace the existing `index.html`, `styles.css` and `script.js` with the files in this package.
3. Keep all three files in the same repository folder (the repository root if Pages currently publishes from `/(root)`).
4. Commit the changes and allow GitHub Pages to deploy.

## Important data-handling notes
- The chart includes only observations with confirmed timestamps: 2:50 p.m., 3:03 p.m. and 3:06 p.m.
- The second observation (9.0 V, 4.6 V and an unquantified very small main-panel output) is included in the table and CSV, but its timestamp must be checked against the video before it is plotted.
- “No measurable output” is displayed as a zero point for chart comparison only; it is not represented as a precision reading of exactly 0.000 V.
- The 3:06 p.m. main-panel value was not separately supplied and is not plotted.
- Voltage is reported; current, power, energy and efficiency are not calculated because current and load information were not provided.
- The 0.01% Mars dust-mass fraction is explicitly treated as a simplifying assumption, not an established constant or a NASA-reported value.
- The Martian chamber estimate is not a measurement of airborne concentration or deposited dust in the laboratory tank.
- The conceptual surface-coverage slider from the starter website has been retained; it is an illustration only.
- Placeholder evidence panels are diagrams, not experiment photographs. Add original photographs in an `assets/` folder and replace the evidence slots or link the files before final publication.
- No NASA endorsement or affiliation is claimed.

## Evidence images
Suggested filenames shown on the website:
- `assets/experiment-setup.jpg`
- `assets/voltage-readings.jpg`
- `assets/chamber-exposure.jpg`

These files are not included because the original experiment photographs/video were not attached with this coding request.

## Browser compatibility
Uses standard HTML, CSS and JavaScript. The chart is rendered using inline SVG. Google Fonts are optional; system fallbacks are included. The dust canvas and scroll animations are disabled or simplified when the visitor requests reduced motion.
