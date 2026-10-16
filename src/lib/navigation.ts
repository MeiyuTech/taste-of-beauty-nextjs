export const legacySections: Record<string, string> = {
  "#menus": "/menus",
  "#our-story": "/our-story",
  "#story": "/our-story",
  "#gatherings": "/gatherings",
  "#gather": "/gatherings",
  "#visit": "/visit",
  "#booking": "/reservations",
};
export function internalUrl(href: string, currentHref: string) {
  const current = new URL(currentHref);
  const target = new URL(href, current);
  current.searchParams.forEach((value, key) => {
    if (
      /^utm_[a-z_]+$/.test(key) ||
      ["fbclid", "gclid"].includes(key) ||
      (key === "menu" && target.pathname === "/reservations")
    ) {
      if (!target.searchParams.has(key)) target.searchParams.set(key, value);
    }
  });
  return target.pathname + target.search + target.hash;
}
