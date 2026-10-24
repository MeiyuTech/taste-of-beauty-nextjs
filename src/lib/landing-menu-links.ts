export function landingDishId(section: string, group: number, title: string) {
  const name = title.replace(/\s*\([^)]*\)\s*$/, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `campaign-dish-${section}-${group}-${name}`;
}
