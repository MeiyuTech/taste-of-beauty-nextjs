export const legacySections: Record<string, string> = {
  "#menus": "/menus",
  "#story": "/#our-story",
  "#gatherings": "/gatherings",
  "#gather": "/gatherings",
};

export function homeSectionUrl(
  section: "our-story" | "booking" | "visit",
  params: Record<string, string | string[] | undefined>,
) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    const name = key === "menu" ? "booking" : key;
    if (key === "menu" && params.booking !== undefined) continue;
    for (const item of Array.isArray(value) ? value : [value]) {
      query.append(name, item);
    }
  }
  const search = query.toString();
  return `/${search ? `?${search}` : ""}#${section}`;
}

export function internalUrl(href: string, currentHref: string) {
  const current = new URL(currentHref);
  const target = new URL(href, current);
  const booking = target.pathname === "/" && target.hash === "#booking";
  current.searchParams.forEach((value, key) => {
    if (/^utm_[a-z_]+$/.test(key) || ["fbclid", "gclid"].includes(key)) {
      if (!target.searchParams.has(key)) target.searchParams.set(key, value);
    }
  });
  if (booking && !target.searchParams.has("booking")) {
    const menu = current.searchParams.get(current.pathname === "/" ? "booking" : "menu");
    if (menu) target.searchParams.set("booking", menu);
  }
  return target.pathname + target.search + target.hash;
}
