# Hollywood campaign landing pages

Implemented on October 22, 2026 in `taste-of-beauty-nextjs`.

## Source authority

- https://tob260615.wpenginepowered.com/hollywood-google/
- https://tob260615.wpenginepowered.com/hollywood-meta/
- https://tob260615.wpenginepowered.com/hollywood-romantic-google/

The three matching routes preserve the source copy, menu descriptions, prices, dietary/allergen text, location details, map and original photography. The Google and Meta pages share copy and differ in OpenTable attribution. The romantic page keeps its own introduction, occasion list, About Us copy and section order. Whitespace around inline markup is normalized.

`src/lib/landing-pages.json` contains page-specific source content. `src/lib/landing-menus.json` contains the complete seven-category menu shared by all three originals. It is separate from the redesigned site's abbreviated menu data so the original descriptions are retained. Source inconsistencies, including the takeout menu's 9:30 PM closing time versus the visit section's 10:30 PM, are preserved rather than silently rewritten.

The 23 local original images are recorded in `landing-image-sources.json`, including original URLs and SHA-256 hashes. The Desert uses the original full-resolution upload in place of the source page's 300-pixel thumbnail. Next Image supplies responsive versions. Old Elementor styling, texture backgrounds and decorative icons are replaced by the current site's design.

## Design and behavior

- Dedicated campaign header: non-linked logo/restaurant name, a campaign-specific Reserve Now button and an accessible telephone button. Uses the current site typography, palette and button treatments.
- Dedicated footer: embedded map on the left, hours, takeout, address, telephone and booking on the right; stacks on mobile. No general site navigation or duplicate footer.
- Original content arranged as a split hero, image-and-copy story, reviews, four-step experience, complete menus, About Us and location section.
- The site's existing sourced Google review component is reused with the original landing-page section heading.
- Seven keyboard-accessible menu tabs; expandable tasting and takeout groups; scrollable original photo galleries.
- Existing menu hashes (`#tasting-courses`, `#a-la-carte`, `#dessert`, `#drink`, `#wine`, `#takeout`, `#lunch`) select the corresponding category. Tab changes preserve query parameters.
- All direct campaign reservation links retain `ot_campaign=GTcampaign` and the page's `ot_source=Google` or `ot_source=Meta`. Header and footer reservation buttons open the campaign booking destination. The review reservation link leads to the landing page’s location footer.
- Source page titles/descriptions and social titles retained, with canonical URLs and sitemap entries on the new domain.
- Existing shared components retain their default behavior on other pages.

## Verification

- TypeScript check and existing 8 tests passed; no production build run.
- All three routes returned HTTP 200 in an isolated local development server.
- All 281 source menu text blocks per page were found in the rendered HTML; original image hashes matched.
- Codex in-app browser checks passed at desktop (1440 px) and mobile (390 px), with an additional 320 px overflow check.
- Checked category selection, keyboard navigation, expanded vegetarian menu/allergens, mobile menu layout, legacy hashes, campaign query preservation, reservation destinations and map display.
- The existing port-3000 process did not discover the new Meta route. A fresh isolated copy on port 3033 served it successfully; restart the user's existing development process to refresh its route inventory.
- Screenshots and the content audit are saved under `/Users/plusone/Desktop/Websites/ToB/output/playwright/`.

The verification above covers local development, not production deployment.

## Campaign header and footer revision

- All three campaign pages use a non-linked brand and exactly two header links: attributed OpenTable reservation and telephone.
- Desktop map and restaurant information are side by side; mobile stacks the map above the information. Original business information is retained.
- TypeScript and the 8 existing tests passed. In-app browser checks covered all three routes, the Google/Meta booking destinations, loaded map, review-to-footer navigation, desktop at 1440 px, mobile at 390 px and a 320 px overflow check.
- The scoped revision is verified locally; no production build or deployment was performed.

## Campaign dish photo wall

- Reuses the homepage's 14-photo wall between the restaurant story and customer reviews on all three campaign pages.
- Keeps the default image-only presentation, hover/focus labels, touch-to-reveal interaction, native mobile swiping, motion controls, and reduced-motion support. No decorative arrows.
- Photo links select the matching menu tab on the same campaign page, open the relevant tasting group, and focus the matching dish. Xiaolongbao links to the lunch menu's XIAO LONG BAO section.
- Same-page navigation preserves the complete campaign query string and all existing attributed booking destinations. Homepage links continue to use the standalone menus page.
- Verified all three pages in the Codex in-app browser at desktop and mobile sizes, including 320 px overflow checks, same-page dish links, expanded vegan/vegetarian groups, lunch, direct dish URLs, and legacy menu hashes. All 14 wall targets per campaign page exist; homepage menu links and campaign booking attribution remain correct.
- TypeScript, the existing 8 tests, and whitespace checks passed. Used an isolated port-3033 preview because the user's port-3000 development process was serving stale campaign pages; restart that process to load the changes. No production build or deployment was performed.
