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
