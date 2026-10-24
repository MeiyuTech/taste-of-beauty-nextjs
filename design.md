# Taste of Beauty Design Guidelines

These rules apply to every Taste of Beauty page, including shared navigation, menus, press coverage, cards, media logos, and calls to action.

## Rounded corners — required across the entire website

- All cards and buttons must have clearly visible rounded corners. Sharp rectangular cards and buttons are not allowed, including at mobile breakpoints and in hover, focus, active, selected, and disabled states.
- This applies to native buttons, links styled as buttons, clickable image cards, menu selectors, booking controls, icon buttons, navigation toggles, dialog close controls, media cards, and campaign calls to action.
- Use a shared radius scale instead of choosing unrelated values in individual pages:

| Element | Shared token | Radius |
| --- | --- | --- |
| Small thumbnails and compact badges | `--radius-sm` | `8px` |
| Standard buttons, icon-button surfaces, inputs, and selects | `--radius-control` | `12px` |
| Standalone content images and inset media | `--radius-media` | `16px` |
| Dining choices, dish cards, review cards, and press cards | `--radius-card` | `20px` |
| Large feature cards, inset feature images, and dialogs | `--radius-feature` | `28px` |
| Short filter chips and compact segmented choices | `--radius-pill` | `999px` |

- Keep ordinary calls to action softly rounded at `12px`; use pill shapes for short selectors. Circular icon controls may remain circular.
- Round the outer card and clip its image and overlays to the same outer contour. Images that touch a card edge inherit that edge's radius; inset images use a smaller radius with consistent padding.
- Apply clipping to the media wrapper when clipping the entire card would hide keyboard focus outlines, menus, or popovers. Focus indicators must remain fully visible.
- Text-only links do not need a filled container. Transparent buttons still use the control radius so hover, active, and focus treatments follow a rounded contour.
- Our Story and Our Philosophy use background photography with a soft gradient fade into the reading area. Preserve this immersive treatment on desktop and mobile; do not convert these backgrounds into isolated rounded image cards. The background sections extend to both viewport edges without horizontal outer margins, while the copy retains the shared page gutters. Buttons inside these sections still follow the shared rounded-control rules.
- Page backgrounds, full-width section bands, dividers, and the header/footer shell are structural surfaces rather than cards. Keep their normal edge-to-edge geometry; round the cards and controls inside them.
- Remove existing `border-radius: 0` rules from cards and controls during implementation. Do not apply a universal radius to every HTML element.

## Sitewide visual direction

The visual direction is warm, natural, and refined: cream backgrounds, terracotta actions, generous spacing, expressive serif headings, and real food photography. The shared implementation lives in `src/app/design-system.css`, imported by the root layout and scoped to `.theme-b.tob-design` on both the main site and campaign shells. This scope gives the shared design rules precedence over legacy page styles without relying on stylesheet load order. Local verification is recorded separately from production deployment.

### Color and surface hierarchy

- Build on the current palette: cream `#f3f0e8`, warm charcoal `#302e29`, muted text `#706b61`, terracotta `#90452f`, and sand `#e9e4d8`. Use the existing deep green `#293127` for the footer and occasional supporting surfaces.
- Use terracotta consistently for the primary action. Secondary actions use a pale surface or a quiet outline with equivalent sizing and corner treatment.
- Use slightly lighter card surfaces, a restrained border, and a soft shadow where separation is needed. Reserve stronger elevation for floating menus and dialogs.
- Verify text and control contrast in every state. Treat the palette as a starting point, not a guarantee that every possible foreground/background pair is accessible.

### Typography and spacing

- Keep serif display headings and a readable sans-serif for descriptions, navigation, and controls. Begin with the existing fonts and refine their sizes, line heights, and wrapping.
- Target body text at `16–18px`, with approximately `1.5–1.7` line height. Use smaller type for secondary metadata only; avoid shrinking essential menu details or button labels to make a layout fit.
- Keep heading levels meaningful and scale display text responsively. Avoid forced line breaks that leave isolated words on narrower screens.
- Use an `8px` spacing rhythm, card gaps around `20–24px` on desktop and `12–16px` on mobile, and card padding around `24px` on desktop and `16–20px` on mobile.
- Use a centered content width around `1200–1280px`; allow deliberately full-width image sections. Target section spacing of `72–96px` on desktop and `40–56px` on mobile, adjusting to content density.

### Photography and interaction

- Give food and the restaurant space visual priority. Keep consistent aspect ratios within each card group and choose focal positions that preserve the dish instead of cutting off the plate.
- Preserve authentic photography, existing dish identities, and the image-only default of the dish wall. Do not substitute invented food images or permanent labels for that interaction.
- Use approximately `180ms` color, border, and shadow transitions. Interactive cards may lift by at most `2px`; static informational cards should not imply that they are clickable.
- Provide comfortable touch targets, targeting at least `44px` for standalone controls. Keep long labels readable and allow layouts to wrap.
- Retain the existing no-decorative-arrows rule, visible keyboard focus, touch feedback, and reduced-motion behavior.

## Navigation design

### Desktop header

- Use `20px`, medium-weight sans-serif navigation (`18px` between `960–1150px`) and a `16px` reservation label. Keep the existing `80px` header height.
- The Menus dropdown is a full-width cream band, flush with the bottom of the header. Use a minimum height of `132px`, centered horizontal links, and `18px` regular-weight sans-serif labels. Do not turn this structural band into an inset floating card.
- Keep link hit areas and controls rounded, with visible focus feedback.

### Mobile navigation

- Below `960px`, open a full-width cream sheet with rounded lower corners and a soft backdrop. Center the inner content within `640px` on tablets.
- Use Arial/sans-serif consistently: every destination link is `18px`, weight `500`, with `1.4` line height; section labels are `12px` uppercase; the reservation button is `16px`. Do not use serif display headings for navigation.
- Group destinations under **Menus** (All menus, Xiaolongbao, A la carte) and **Explore** (Gatherings, Gift cards, Our story, Press, Visit us, Pickup & delivery). Use a single-column menu card and a two-column Explore grid.
- Navigation links have no underlines in default, visited, hover, focus, active, or current-page states. This is an explicit exception to the general text-link treatment; use rounded hit areas and surface/color feedback instead.
- Give links at least `48px` touch height, `12px` horizontal inner padding, and `12px` corners. Let long labels wrap rather than shrinking their font.
- Mark the current page with `aria-current="page"`, a pale sand background, a subtle border, terracotta text, and a small status dot.
- Keep the brand and `44px` close control in the top row. Place the full-width Book a table action and compact West Hollywood location label in a separate footer.
- Constrain the sheet to the dynamic viewport height. On short screens, only the middle link area scrolls; the close and reservation controls remain reachable. Respect the bottom safe area and reset the link area to the top when reopening.
- Preserve native modal focus containment, Escape/backdrop dismissal, focus return to the trigger, body scroll locking, link dismissal, and automatic close at the desktop breakpoint.
- Keep these styles in `src/app/design-system.css`; remove superseded mobile navigation rules from `src/components/site-chrome.css` instead of stacking competing font and underline overrides.

## Page and section design

| Area | Design treatment |
| --- | --- |
| Shared header and footer | Consistent rounded reservation and navigation controls; the full-width desktop dropdown and compact mobile sheet specified above; preserve readable footer link groups and contact information. |
| Homepage `/` | Refine the existing text-and-food opening composition; turn the four dining choices into cohesive rounded cards with aligned text areas, consistent image crops, and more breathing room. Preserve the media strip directly below the hero and the image-only dish wall. |
| Menus `/menus` | Replace the rigid rectangular tab strip with spaced rounded selectors; keep menu names and prices easy to scan; soften the dish gallery and thumbnails while maintaining a clear menu-reading order. |
| À la carte `/a-la-carte` and xiaolongbao `/vegan-xiaolongbao` | Apply the same button, card, image, and typography rules across both page themes. Let dish imagery and menu groups establish hierarchy. |
| Homepage story `/#our-story` and philosophy `/#visit` | Preserve the background photographs and soft gradient transitions into the cream reading area. Use horizontal fades on desktop and vertical fades on mobile, without separate rounded photo cards. |
| Homepage gatherings `/#gatherings` | Use spacious copy, rounded information cards, and a focused action for gathering enquiries. |
| Gift cards `/gift-card` | Give the introduction and gift presentation a clear visual hierarchy; round first-party controls and the checkout container where supported without obscuring the purchase flow. |
| Press `/press` | Use consistent rounded article cards, balanced logo areas, and readable titles; preserve original publisher logos and authentic coverage links. |
| Homepage visitor information `/#restaurant-info` and reservations `/#booking` | Use the shared footer for practical information and a rounded booking panel for form controls; prioritize readable hours, directions, form labels, and validation feedback. |
| Hollywood campaign pages | Reuse the same visual tokens while preserving each campaign's content, menu selection, photo-wall behavior, query parameters, and attributed booking destinations. |
| Dialogs, review galleries, and mobile navigation | Match the radius scale, spacing, focus treatment, and control sizes; check opened states as carefully as the default pages. |

## Implementation notes

- `src/app/design-system.css` owns the shared tokens, visual component rules, and responsive adjustments. Update this file for sitewide design changes instead of appending competing overrides to legacy page styles.
- `SiteShell` and `HollywoodLanding` opt into the same `tob-design` scope. The nested xiaolongbao page maps its legacy palette variables to the shared palette.
- Homepage story and philosophy retain the original `.image-story` background-photo layout and gradient overlays in `src/app/home.css`. On desktop the photograph fades horizontally into the text area; on mobile it fades vertically into the reading surface. The shared design stylesheet removes the main-site shell width cap and horizontal section margins, so backgrounds reach the viewport edges even on wide displays; content keeps its shared page gutters. Responsive image sizes match the full-width layout: `100vw` for both mobile backgrounds and the philosophy background, and `70vw` for the desktop story photograph. Do not apply rounded inset-image styling to these backgrounds.
- Long menu names use rounded rectangular tabs with a two-column mobile layout. Short dietary and category selectors use pill shapes. Keep selected, hover, focus, and active states distinct.
- Review cards retain their compact density while adopting the shared radius and surface treatment.
- `/our-story`, `/gatherings`, `/visit`, and `/reservations` are compatibility redirects into homepage sections. Preserve these redirects; the destination sections receive the updated design.
- Third-party checkout, map, and media content is not restyled internally. Apply the shared radius only to the first-party frame or wrapper.

## Implementation and acceptance

1. Establish shared color, radius, spacing, and control styles for both `.theme-b` and `.xlb-page`. Review existing CSS overrides before changing them so legacy rules do not undo the new system.
2. Apply the system to shared navigation, buttons, selectors, cards, images, form controls, and dialogs. Use the homepage and menus page as the first visual references.
3. Extend the verified styling to every remaining public page and all three campaign landing pages. Preserve menu names, prices, descriptions, dietary labels, booking behavior, and tracking parameters.
4. Inspect the affected pages in the Codex in-app browser using the existing local development server. Check desktop, tablet, and mobile layouts, including approximately `1440px`, `768px`, and `390px`, plus a narrow `320px` overflow check.
5. Verify hover, keyboard focus, touch/active, selected tabs, open navigation, and open dialogs. Check that rounded media clips correctly, focus rings remain visible, and sticky elements do not obscure content.
6. Confirm that all first-party cards and buttons follow the radius scale and that shared components remain consistent across routes. Check third-party embeds separately; style their surrounding first-party containers without assuming access to the embedded UI.
7. Report the pages and states actually verified and any verification limits. Do not run `pnpm build`.

## Clickable elements

- Do not append decorative arrows, such as ↗ or →, to links, buttons, or cards to suggest that they can be clicked. Do not replace them with arrow SVGs, icons, or CSS pseudo-elements.
- Communicate interactivity through clear labels and visual treatment: accent color, underlines for text links, button fills or borders, and defined card surfaces.
- Every interactive link and button must have clear hover and keyboard focus feedback. Use color or background highlighting, border emphasis, a subtle shadow, or a small lift where appropriate.
- Keep a visible `:focus-visible` outline. Keyboard users must receive feedback equivalent to hover; never remove the focus indicator without an equally visible replacement.
- Touch interfaces must remain understandable without hover. Preserve the default clickable styling and provide `:active` feedback.
- Keep transitions subtle, generally 150–200 ms. Respect `prefers-reduced-motion` by removing movement while retaining color, border, and focus feedback.
- External links may retain accessible wording such as “opens in a new tab”; do not use a decorative arrow as their visual cue.
- Functional direction controls, such as a carousel's previous/next controls, are distinct from decorative click indicators. Only use them when navigation itself requires a directional control.

## Homepage media strip

- Place original publisher logos directly below the homepage hero and link them to their coverage.
- Do not show a pause/resume button or an arrow beside “View all coverage”.
- Use an underlined text link with hover/focus highlighting for “View all coverage”, and subtle surface highlighting for clickable logos.
- Pause automatic motion while the strip is hovered or keyboard-focused. Allow manual horizontal scrolling; manual touch or wheel interaction pauses automatic scrolling for that mount.
- Disable automatic motion when reduced motion is preferred.

## Dish photo wall

- Keep the default wall image-only, with no heading, promotional copy, or permanent dish labels.
- Reveal the dish name and a descriptive menu link on hover, keyboard focus, or touch. Never append decorative arrows to photo overlays, menu links, or scrolling hints, including “View the $59 menu” and “Scroll to explore”. This applies on desktop and mobile; do not substitute an SVG or CSS arrow.
- Link each photo to its matching menu, dietary variant, and dish when available. Use only verified dish photos.
- On touch screens, support native horizontal swiping. The first tap reveals the dish and destination; the next tap follows the link. A swipe must not navigate.
- Keep desktop motion slow and pause it on hover or keyboard focus. Provide a motion control, disable automatic motion on mobile, and respect reduced-motion preferences.

- Reuse the photo wall on all three Hollywood campaign landing pages, between the restaurant story and customer reviews. Campaign photo links must stay on the current landing page, select the matching menu tab, and expand the matching group. Preserve campaign query parameters and attributed booking links.

## Local verification — October 24, 2026

- The pre-redesign working tree was saved in local commit `380b484` before implementation began.
- Visual inspection in the Codex in-app browser covered the homepage, menus, a la carte, xiaolongbao, gift cards, press, and all three Hollywood campaign pages, plus the homepage story, booking section, and dining-choice dialog.
- Responsive inspection covered those nine pages at `1440`, `768`, `390`, and `320px` (36 page/viewport combinations). All returned HTTP 200, with no document-level horizontal overflow, no zero-radius controls or cards in the audited component sets, and no broken images reported by the loaded-image check.
- Seventeen interaction checks passed: mobile navigation, dialog geometry and focus restoration, review-dialog shape, lunch-time selection, closed-day validation, dietary selection, menu attribution, gallery selection, keyboard tab navigation and focus visibility, mobile photo reveal/follow behavior, campaign parameter preservation, reduced-motion behavior, and desktop navigation.
- TypeScript checking and all eight existing booking/navigation tests passed. Whitespace validation passed.
- This is local development verification. Production deployment, payment completion, and reservation completion were not performed. `pnpm build` was not run.

### Story and philosophy background restoration

- Restored the original background-photo gradients for Our Story and Our Philosophy, while retaining the shared rounded CTA styling.
- Verified both sections in the Codex in-app browser and at `1440`, `768`, `390`, and `320px` using supplemental browser checks. The desktop horizontal fades and mobile vertical fades render correctly; all eight section/viewport checks passed without horizontal overflow or clipped copy.
- Follow-up edge-to-edge refinement: both background sections passed browser checks at `1920`, `1440`, `768`, `390`, and `320px`, with no horizontal overflow, readable copy gutters, and the original gradients retained.


### Mobile navigation refinement

- Replaced the mixed serif/sans-serif mobile hierarchy and underlined submenu links with consistent `18px` sans-serif destinations, two labeled groups, and rounded current-page feedback.
- Verified the homepage and a la carte navigation in the Codex in-app browser. Checked `390×844`, `320×568`, `768×1024`, `768×600`, and `768×390` layouts; the sheet stayed within the viewport with no horizontal overflow.
- Confirmed nine destination links, minimum `48px` link targets, current-page styling, visible keyboard focus, Escape and backdrop dismissal, focus return to the trigger, link navigation, body scroll restoration, and automatic dismissal when resizing to desktop.
- On short screens, the middle link area scrolls while close/reservation controls remain visible. Reopening resets that scroll position.
- At `1440×900`, verified the full-width desktop dropdown, `132px` panel height, `20px` main navigation, `18px` submenu labels, and `16px` reservation label.
- TypeScript checking, all eight existing booking/navigation tests, and whitespace validation passed. This verification used the existing local server; no production deployment or build was performed.
