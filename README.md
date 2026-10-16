# Taste of Beauty

A Next.js App Router website based on the approved `TOB_B_Designer_Package` (October 15, 2026). The implementation preserves the B design, its bilingual content, warm stone palette, four menu entry points, bilingual source material and separate Xiaolongbao page. Following the owner's clarification, the homepage now introduces the restaurant and links to dedicated content pages. The designer package supplies the visual and content reference; the multi-page architecture is an explicitly requested adaptation.

## Run locally

Use Node.js 22 LTS and npm. Dependencies and a lockfile are included in the project setup.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run the development server in your own terminal when working on the site.

## Deploy to Vercel

1. Add this project to a Git repository and import it into Vercel.
2. Choose the **Next.js** framework preset and this folder as the project root.
3. Select Node.js **22.x**. Keep the default output directory; the build script is `next build`.
4. Set `NEXT_PUBLIC_SITE_URL` to the final public origin, such as `https://your-domain.com`, when your production domain is known.
5. Deploy. No database, API keys, or custom server are required.

Vercel's `VERCEL_PROJECT_PRODUCTION_URL` is used for canonical URLs and the sitemap when an explicit site URL is not provided. Without either value, local development omits canonical URLs and returns an empty sitemap. Preview deployment access and indexing should be managed in Vercel.

Official setup reference: https://vercel.com/docs/frameworks/full-stack/nextjs

## Routes and content

- `/`: B-style hero, four menu entry links and concise story, gathering and visit introductions.
- `/menus`: full menus and dietary selection.
- `/our-story`: the complete brand story.
- `/gatherings`: private dining and gathering enquiries.
- `/visit`: address, hours, directions and contact details.
- `/reservations`: menu preference and booking handoff.
- `/xiaolongbao`: handmade Xiaolongbao page, mobile navigation and FAQ.
- `/menus?menu=59`, `/menus?menu=99`, `/menus?menu=lunch`, `/menus?menu=xlb`: direct menu entry points. Switching menus preserves existing query parameters such as UTM tags. Internal navigation carries UTM and advertising click IDs; menu-to-booking links carry the menu preference. Old homepage menu queries redirect to `/menus`; old section bookmarks forward to their dedicated pages.
- `/index.html`, `/version-b.html` and `/xiaolongbao.html`: permanent redirects from the handoff's legacy URLs; query parameters are retained.
- `/robots.txt` and `/sitemap.xml`: generated metadata routes.

Edit menu data in `src/lib/menus.ts`, external booking/ordering destinations in `src/lib/booking.ts`, and homepage content in `src/components/home-content.tsx`. Approved CSS is scoped separately to each page to prevent cross-page style leakage. Images are served locally from `public/assets`; no remote image dependency or font request is needed.

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

Screenshots are stored in `output/playwright/` and are excluded from Git. No production build or Vercel deployment was performed. Availability, checkout and final reservation completion on third-party platforms were not tested.

## Source review before launch

Menus, pricing, hours, contact details, dietary notes and images come from the supplied designer package. Its own handoff asks the restaurant to confirm these details, image rights and the bilingual production arrangement before launch. No new flavors, testimonials or business claims have been added. Designer-only footer links and preview labels have been removed from visitor-facing pages.
