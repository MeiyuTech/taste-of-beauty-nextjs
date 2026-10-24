# Taste of Beauty

A Next.js App Router website based on the approved `TOB_B_Designer_Package` (October 15, 2026). The site uses the B design's warm stone palette and photography, with dedicated pages for menus and Xiaolongbao, with the full story, reservation form, gatherings and visit details on the homepage. The owner requested a multi-page adaptation and an English-only edition with larger type and more compact spacing.

## Routes and content

- `/`: B-style hero, four menu entry links, the complete brand story, reservation form, full gathering section, photo-led restaurant philosophy, and visitor details in the footer.
- `/menus`: full menus and dietary selection.
- `/#our-story`: the complete brand story on the homepage; `/our-story` redirects here.
- `/#gatherings`: private dining and gathering enquiries on the homepage, between reservations and visit details; `/gatherings` redirects here.
- `/#visit`: restaurant philosophy over a dining-room photo with Buddha hand artwork at the bottom of the homepage; `/visit` redirects here. Address, hours, directions, phone and dietary guidance are in the shared footer.
- `/#booking`: menu preference and booking handoff on the homepage; `/reservations` redirects here. Booking links use `?booking=lunch#booking` (or another menu key) to retain the selected menu.
- `/vegan-xiaolongbao`: handmade Xiaolongbao page and FAQ, using the shared site navigation and footer.
- `/menus?menu=59`, `/menus?menu=99`, `/menus?menu=lunch`, `/menus?menu=xlb`: direct menu entry points. Switching menus preserves existing query parameters such as UTM tags. Internal navigation carries UTM and advertising click IDs; menu-to-booking links carry the menu preference. Old homepage menu queries redirect to `/menus`; old section bookmarks forward to their current page or homepage section.
- `/index.html`, `/version-b.html` and `/xiaolongbao.html`: permanent redirects from the handoff's legacy URLs; query parameters are retained.
- `/robots.txt` and `/sitemap.xml`: generated metadata routes.

Edit menu data in `src/lib/menus.ts`, external booking/ordering destinations in `src/lib/booking.ts`, and homepage content in `src/components/home-content.tsx`. Approved CSS is scoped separately to each page to prevent cross-page style leakage. Images are served locally from `public/images`; the story panels use responsive Next.js images from the supplied media library, cream gradients and dark typography; no remote image dependency or font request is needed.

## Reservations

The booking form validates dates against the Los Angeles calendar and blocks Mondays and past dates. Lunch and dinner expose different preferred-time choices. A valid submission opens the supplied OpenTable destination with date, time and guest count. Actual availability and confirmation are handled by OpenTable. A menu selection is a browsing preference and is not sent as a confirmed meal selection. Pickup and delivery use the supplied Uber Eats link. No booking, email, order or payment backend is included.

## Verification

```sh
npm run typecheck
npm test
```

Completed on October 15, 2026:

- TypeScript validation and seven booking/query-parameter and multi-page navigation tests.
- Codex in-app browser checks of the homepage, menus, story, gatherings, visit, reservations and Xiaolongbao at desktop and 390 × 844 mobile size.
- Menu selection, eight-course dietary switch, keyboard navigation, lunch time options, Monday rejection, menu deep links and campaign-parameter preservation.
- Xiaolongbao mobile navigation, Escape dismissal and FAQ expansion.
- HTTP route, local image and legacy redirect checks, including old homepage menu queries and section bookmarks.

The English-only edition was checked on October 16, 2026: all seven pages at desktop and mobile widths, menu and dietary switching, lunch reservation options, English closed-day validation, and the Xiaolongbao navigation and FAQ. Source text and rendered pages were checked for remaining Chinese text and horizontal overflow.

Screenshots are stored in `output/playwright/` and are excluded from Git. No production build or Vercel deployment was performed. Availability, checkout and final reservation completion on third-party platforms were not tested.

## Source review before launch

Menus, pricing, hours, contact details, dietary notes and images come from the supplied designer package. Its own handoff asks the restaurant to confirm these details, image rights and the bilingual production arrangement before launch. Xiaolongbao preparation claims were confirmed by the owner on October 19, 2026. Four filling descriptions and dietary labels were checked against the restaurant’s Uber Eats menu on that date. Dumpling-specific testimonials are still pending and are not displayed. Designer-only footer links and preview labels have been removed from visitor-facing pages.

Story, reservations, gatherings and visit details were consolidated into the homepage on October 16, 2026. Their old routes return permanent redirects, preserving campaign parameters and converting the old menu preference to the homepage booking parameter. The sitemap lists the current content pages.


## October 19 SEO rewrite

Applied `TOB New Site Rewrite.docx` to the homepage, menus and Xiaolongbao page. The visual display lines remain paragraphs, with one descriptive H1 per page. All menu courses, including both tasting diets, render in the initial HTML; tab controls only change visibility. Restaurant, Menu and FAQPage JSON-LD use the same menu/FAQ data as the page content. The canonical Xiaolongbao route is `/vegan-xiaolongbao`; `/xiaolongbao`, `/xiaolongbao.html` and `/los-angeles` redirect permanently to their current destinations. The configured site origin takes precedence; otherwise canonical URLs use `https://thetasteofbeauty.com`.

The owner confirmed the preparation claims. The filling list uses the restaurant’s [Uber Eats menu](https://www.ubereats.com/store/tob-vegan-kitchen-616-n-robertson-blvd/ZX301TfMQO2EqEOCgYbAUA) pending the owner's final list. No dumpling-specific reviews have been added; three attributable reviews are still needed. The ingredient FAQ describes the individual fillings instead of presenting the draft's single example as the recipe for every filling.

Validation for the October 19 rewrite: TypeScript and all eight existing tests passed. Raw HTTP responses include all 27 menu courses and all 12 FAQ answers; FAQ JSON-LD matches the visible answers. Titles and descriptions meet the document's length limits, canonicals resolve to the expected URLs, and permanent redirects retain campaign parameters. Codex in-app browser checks passed at the default desktop viewport and 390 × 844 for the three pages, menu/diet switching and FAQ expansion. Screenshots for this session are in the ToB workspace at `../ToB/output/playwright/`. No build or deployment was run.


All content pages and the not-found page now use `SiteShell` for the header, footer and sticky booking actions. Both header and footer link to Menus, Xiaolongbao, Our story, Gatherings, Press and Visit. Xiaolongbao remains the fourth menu tab, with an explicit “Explore our xiaolongbao” link immediately below its introduction. It has not moved into Lunch.


## Press archive

`/press` preserves the original WordPress page's 11 article titles, dates, outbound links, photographs and publication logos, two Iframely embeds, location notice and media assets. Original assets are stored in `public/images/press/`; shared footer icons retain the original Yelp, Instagram and Facebook artwork and destinations. Videos depend on the original publishers and Iframely.

The press enquiry form and accompanying chef portrait section were removed at the owner’s request on October 20, 2026. No submission endpoint is implemented. The homepage now shows all 13 unique press logos immediately after the hero. It reuses the archive data, links each logo to its coverage, supports manual horizontal scrolling without a pause button, pauses on hover or keyboard focus, and disables automatic motion when reduced motion is preferred.

Visual interaction rules are documented in [design.md](design.md). Follow these rules for all new and updated UI.


## Gift cards

`/gift-card` uses the shared warm stone theme, navigation and footer. It preserves the original [WordPress gift card page](https://tob260615.wpenginepowered.com/gift-card/)'s drinks photograph and Square merchant destination (`MLW8KJMXKTTVM`). The photograph is stored in `public/images/drinks/citrus-drinks-2560x1707.jpg` and was sourced from `/wp-content/uploads/2025/08/DSCF3120-Edit-scaled.jpg` on the old site.

Square hosts the embedded purchase form, available amounts, delivery options and checkout. Direct checkout, reload and balance links remain available outside the embed. No payment data is collected by this Next.js site. The page is linked in the shared header and footer and included in the sitemap.

## Image library

Website images are organized by subject under `public/images/`. See [Image library](docs/image-library.md) for folder conventions and page assignments, and [Path map](docs/image-path-map.json) for every previous path, current path, dimensions and SHA-256. Original WordPress backups retain their original upload paths for provenance.
