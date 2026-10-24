import photos from "./dish-images.json";

export type DishImage = (typeof photos)[keyof typeof photos];

// Match complete dish names, allowing only the menu's dietary suffix to vary.
// Unknown dishes deliberately have no fallback photo.
export function getDishImage(name: string): DishImage | undefined {
  const key = name.replace(/\s*\((?:v|vg|gf|vegan|vegetarian)(?:\s*,\s*(?:v|vg|gf|vegan|vegetarian))*\)\s*$/i, "").trim().toLowerCase();
  return (photos as Record<string, DishImage>)[key];
}
