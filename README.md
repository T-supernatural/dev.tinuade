# DEV TINUADE website source code

Latest version: white animated loader, five pages and five portfolio projects.

## Included pages
- Home: index.html
- Services: services/index.html
- Work: work/index.html
- About: about/index.html
- Contact: contact/index.html

## Technology
Plain HTML, CSS and JavaScript, served and built with Vite.
All page content is editable. Shared styles are in public/assets/style.css and shared
behavior (intro, replay, skip, menu and motion controls) is in public/assets/app.js.
Google Fonts loads online; system fonts are provided as fallbacks.

## Preview locally
Open a terminal in the project folder and run:

    npm install
    npm run dev

Open the localhost URL printed by Vite. Stop the server with Ctrl+C.
Run `npm run build` to generate all five pages in `dist`.
Use a local server rather than double-clicking index.html because links and
assets use paths starting from the site root.
VS Code Live Server also works when this folder is the workspace root.

## Publish on Netlify
For manual deployment, run `npm run build` and upload the `dist` folder.
For a Git-connected site, use `npm run build` as the build command and
`dist` as the publish directory. The included netlify.toml supplies these settings.
All five routes have their own index.html, so an SPA redirect is unnecessary.

## Before replacing your current website
Update the canonical URL in each HTML page and the website origin in
sitemap.xml and robots.txt to your final domain (for example,
https://devtinuade.netlify.app). Review contact details and project URLs.
No contact form, database, API keys or backend are needed: the buttons open
WhatsApp, email, phone and Instagram directly.

## Intro
The Home page plays the five-second animated introduction. Other pages open
directly; Replay intro is available in every footer. Skip intro and Escape end
it early. The intro is made with the browser Web Animations API.
The supplied GIF contains a still frame used as a moving background texture.

## Portfolio
RealJoy Schools, StudyPal AI, RealJoy Lesson Note Portal, ATAS-LASU and
Yakoyo Restaurant. Descriptions and project links live in work/index.html.
The Home page has two featured projects.

## Editing
Change content in the page HTML files. Shared navigation and footer markup
appear in all five files, so update every page when changing either.
Change the cache version on the stylesheet and script URLs when necessary.
The build copies public/assets into dist/assets automatically.

The previous React UI remains in src as an inactive reference. The local
ui-backup-*.zip archive preserves the previous source, assets, and configuration.
Only the root HTML pages and public assets are used by the active site.
