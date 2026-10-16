# Taste of Beauty

A Next.js App Router website based on the approved `TOB_B_Designer_Package` (October 15, 2026). The site uses the B design's warm stone palette and photography, with dedicated pages for menus and Xiaolongbao, with the full story, reservation form, gatherings and visit details on the homepage. The owner requested a multi-page adaptation and an English-only edition with larger type and more compact spacing.

## Routes and content

- `/`: B-style hero, four menu entry links, the complete brand story, reservation form, full gathering section, photo-led restaurant philosophy, and visitor details in the footer.
- `/menus`: full menus and dietary selection.
- `/#our-story`: the complete brand story on the homepage; `/our-story` redirects here.
- `/#gatherings`: private dining and gathering enquiries on the homepage, between reservations and visit details; `/gatherings` redirects here.
- `/#visit`: restaurant philosophy over a dining-room photo with Buddha hand artwork at the bottom of the homepage; `/visit` redirects here. Address, hours, directions, phone and dietary guidance are in the shared footer.
- `/#booking`: menu preference and booking handoff on the homepage; `/reservations` redirects here. Booking links use `?booking=lunch#booking` (or another menu key) to retain the selected menu.
- `/xiaolongbao`: handmade Xiaolongbao page, mobile navigation and FAQ.
- `/menus?menu=59`, `/menus?menu=99`, `/menus?menu=lunch`, `/menus?menu=xlb`: direct menu entry points. Switching menus preserves existing query parameters such as UTM tags. Internal navigation carries UTM and advertising click IDs; menu-to-booking links carry the menu preference. Old homepage menu queries redirect to `/menus`; old section bookmarks forward to their current page or homepage section.
- `/index.html`, `/version-b.html` and `/xiaolongbao.html`: permanent redirects from the handoff's legacy URLs; query parameters are retained.
- `/robots.txt` and `/sitemap.xml`: generated metadata routes.

Edit menu data in `src/lib/menus.ts`, external booking/ordering destinations in `src/lib/booking.ts`, and homepage content in `src/components/home-content.tsx`. Approved CSS is scoped separately to each page to prevent cross-page style leakage. Images are served locally from `public/assets` and `public/images`; the story panels use responsive Next.js images from the supplied media library, cream gradients and dark typography; no remote image dependency or font request is needed.

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

Menus, pricing, hours, contact details, dietary notes and images come from the supplied designer package. Its own handoff asks the restaurant to confirm these details, image rights and the bilingual production arrangement before launch. No new flavors, testimonials or business claims have been added. Designer-only footer links and preview labels have been removed from visitor-facing pages.

Story, reservations, gatherings and visit details were consolidated into the homepage on October 16, 2026. Their old routes return permanent redirects, preserving campaign parameters and converting the old menu preference to the homepage booking parameter. The sitemap lists only the three content pages.
