import { MENU_CATALOG } from "./menu-catalog";
import type { CatalogEntry, Course, DiningId, DiningMenu, EntryReference, MenuCatalog, MenuEntry, MenuKey, MenuSection } from "./menu-types";

// Legacy URL keys and dish anchors remain stable when a price changes.
export const diningIds: Record<MenuKey, DiningId> = {
  "59": "fairytale", "99": "tasting", lunch: "lunch", xlb: "xiaolongbao",
};
export const menuKeys: MenuKey[] = ["59", "99", "lunch", "xlb"];
export function formatMenuPrice(amount?: number) {
  return amount === undefined ? undefined : `$${amount}`;
}

export function buildMenuViews(catalog: MenuCatalog) {
  const courses = (ids: string[]): Course[] => ids.map((id) => {
    const item = catalog.items[id];
    if (!item) throw new Error(`Missing menu course: ${id}`);
    const tasting = item.presentations["tasting-courses"];
    if (tasting && item.summary === undefined) return [item.name, tasting.paragraphs[0], tasting.paragraphs[1]];
    if (item.summary === undefined) throw new Error(`Missing menu summary: ${id}`);
    return [item.name, item.summary];
  });
  const menus = Object.fromEntries(menuKeys.map((key) => {
    const definition = catalog.dining[diningIds[key]];
    const displayPrice = formatMenuPrice(definition.price) ?? definition.priceLabel ?? "";
    return [key, {
      ...definition,
      displayPrice,
      cta: definition.cta.replaceAll("{{price}}", displayPrice),
      tabLabel: definition.tabLabel.replaceAll("{{price}}", displayPrice),
      courses: courses(definition.courses),
      ...(definition.vegetarian ? { vegetarian: courses(definition.vegetarian) } : {}),
    }];
  })) as Record<MenuKey, DiningMenu>;
  const fairytalePrice = menus["59"].displayPrice;
  const tastingPrice = menus["99"].displayPrice;
  const interpolate = (text: string) => text
    .replaceAll("{{fairytalePrice}}", fairytalePrice)
    .replaceAll("{{tastingPrice}}", tastingPrice);
  const entry = (source: CatalogEntry | EntryReference): MenuEntry => {
    let value: CatalogEntry;
    if ("itemId" in source) {
      const item = catalog.items[source.itemId];
      const presentation = item?.presentations[source.presentation];
      if (!presentation) throw new Error(`Missing menu presentation: ${JSON.stringify(source)}`);
      value = { ...presentation, title: `${item.name}${presentation.titleSuffix ?? ""}` };
    } else {
      value = source;
    }
    return {
      title: value.title,
      paragraphs: value.paragraphs.map(interpolate),
      ...(value.price ? { price: `${formatMenuPrice(value.price.amount)}${value.price.suffix ?? ""}` } : {}),
    };
  };
  const sections: MenuSection<MenuEntry>[] = catalog.sections.map((section) => ({
    ...section,
    intro: section.intro.map(entry),
    groups: section.groups.map((group) => ({ ...group, entries: group.entries.map(entry) })),
  }));
  const xiaolongbaoFillings = catalog.xiaolongbaoFillings.map((id) => {
    const value = catalog.items[id]?.presentations.xiaolongbao;
    if (!value) throw new Error(`Missing xiaolongbao filling: ${id}`);
    return { name: catalog.items[id].name, description: value.paragraphs[0], diet: value.diet!, label: value.label! };
  });
  const dishWallRows = catalog.dishWall.map((row) => row.map(({ itemId, label, ...selection }) => {
    const name = itemId ? catalog.items[itemId]?.name : label;
    if (!name) throw new Error(`Missing dish wall item: ${itemId}`);
    return { ...selection, name };
  }));
  const copy = {
    homeIntro: `Six courses for ${fairytalePrice}. An eight-course tasting menu, vegan or vegetarian, for ${tastingPrice}.`,
    homeDescription: `Vegan and vegetarian fine dining in West Hollywood, Los Angeles. Six courses for ${fairytalePrice}, eight for ${tastingPrice}. Book your table.`,
    menusDescription: `See every course: a ${fairytalePrice} six-course vegan dinner, a ${tastingPrice} tasting menu, lunch and xiaolongbao in West Hollywood.`,
  };
  return { menus, sections, xiaolongbaoFillings, dishWallRows, copy };
}
export const { menus, sections: menuSections, xiaolongbaoFillings, dishWallRows, copy: menuCopy } = buildMenuViews(MENU_CATALOG);
