# Homepage Google reviews

The homepage displays a manually maintained snapshot of ten five-star reviews selected by the owner on October 20, 2026. Text, reviewer names, original ratings, publication dates, avatars and 38 review photographs were copied from the owner-provided widget. Source URLs and the capture date are recorded in `google-reviews-sources.json` for editorial reference only.

- Content: `src/lib/google-reviews.json`.
- Assets: `public/images/reviews/` (49 local files, including avatars and the Google source mark).
- UI: `src/components/google-reviews.tsx` and `google-reviews.css`.

The module uses no third-party script, API key, subscription or automatic review synchronization. It does not display the former provider's verification badge or claim an overall restaurant score. Google links lead to the source restaurant listing. The original review text is preserved, including qualifications within five-star reviews.

To update a review, verify its current source, update the local JSON and any associated assets, and record the new source/capture date. Keep publication dates absolute. The cards show excerpts; Read more opens the full text and a photo gallery. Navigation is manual, supports native touch scrolling and arrow keys, and respects reduced-motion preferences. The native dialog supports Escape, focus containment and focus return.
