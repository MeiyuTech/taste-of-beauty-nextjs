# Image library

Organized on October 24, 2026. All website image URLs start with `/images/`; their files live under `public/images/`.

## Folder conventions

| Folder | Files | Contents |
| --- | ---: | --- |
| `public/images/brand/` | 2 | Taste of Beauty identity and storefront sign |
| `public/images/dishes/` | 58 | Named menu dishes, editorial dishes and original image variants |
| `public/images/xiaolongbao/` | 3 | Steamer, overhead and hand-pleating photography |
| `public/images/drinks/` | 3 | Citrus drinks and cocktail flight |
| `public/images/desserts/` | 2 | Dessert photography |
| `public/images/restaurant/` | 9 | Dining rooms, windows, artwork and interior photographs |
| `public/images/experience/` | 5 | Tea service, tasting table and plating photography |
| `public/images/people/` | 1 | Existing portrait of George Guo |
| `public/images/press/` | 20 | Publication marks in logos/ and article-specific images in photos/ |
| `public/images/icons/` | 4 | Facebook, Instagram, Yelp and Google marks |
| `public/images/textures/` | 1 | Reusable background textures |
| `public/images/reviews/` | 48 | Reviewer folders containing avatar.jpg and photo-01.jpg, photo-02.jpg, etc. |

## Naming and preservation

- Use descriptive lowercase English names with hyphens. Name confirmed menu dishes after their established menu titles. Use visual descriptions or publication names when a dish identity is unconfirmed.
- Existing image variants include dimensions or a meaningful view such as `landscape`, `overhead` or `hand-pleating`. Extensions retain the actual file format.
- The 19 optimized menu images keep their existing stable paths in `public/images/dishes/`; `src/lib/dish-images.json` remains the canonical dish-to-photo mapping.
- All original bytes, dimensions, formats, captions and cropping behavior are preserved. The identical vegetable-noodles PNG copies now share `/images/dishes/black-pepper-vegetable-noodles.png`.
- Application icons remain at `src/app/icon.png` and `src/app/apple-icon.png`, as required by Next.js file conventions.
- The 199 WordPress archival images remain under `public/images/wordpress-backup/` with original filenames and year/month paths. Their existing manifest retains upload URLs, attachment IDs and hashes. They are provenance sources; prefer organized website assets for page content.

## Page assignments

| Page or component | Image location and source of truth |
| --- | --- |
| Shared header and footer | `/images/brand/taste-of-beauty-logo.png` and `/images/icons/` |
| Homepage and global sharing image | `/images/dishes/the-secret-garden-900x1200.webp`; dish, noodle and xiaolongbao cards use their subject folders |
| Menus | Full public paths in `src/lib/menus.ts`; canonical dish images in `src/lib/dish-images.json` |
| Dish walls and A la carte | `/images/dishes/`, using the existing canonical dish mapping |
| Xiaolongbao | `/images/xiaolongbao/` |
| Homepage story and visit | `/images/dishes/the-island-landscape.png` and `/images/restaurant/` |
| Hollywood campaign pages | `src/lib/landing-pages.json`, `/images/restaurant/dining-room-wall-art.jpg`, `/images/dishes/` and `/images/experience/` |
| Press and homepage media strip | `src/lib/press.ts`, `/images/press/logos/`, `/images/press/photos/`, and shared subject photos |
| Gift card | `/images/drinks/citrus-drinks-2560x1707.jpg` |
| Google review cards and photo viewer | `src/lib/google-reviews.json`, `/images/reviews/<reviewer>/`, and `/images/icons/google.svg` |
| Press background | `/images/textures/beige-paper.jpg` |

## Traceability

[image-path-map.json](image-path-map.json) contains every former website asset path, current public path, SHA-256, dimensions, size and direct source reference. An empty `referenced_by` list means the existing file is retained as a library asset. It does not mean the image should be placed on a page automatically.

[landing-image-sources.json](landing-image-sources.json), [dish-image-sources.json](dish-image-sources.json), and [google-reviews-sources.json](google-reviews-sources.json) retain the original external provenance URLs while pointing to the organized local files. Google review `file` entries are relative to `public/images/reviews/`.
