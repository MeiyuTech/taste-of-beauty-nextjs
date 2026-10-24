# Interaction Design Guidelines

These rules apply to every Taste of Beauty page, including shared navigation, menus, press coverage, cards, media logos, and calls to action.

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
