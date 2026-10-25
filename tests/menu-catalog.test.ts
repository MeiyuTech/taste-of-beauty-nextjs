import test from "node:test";
import assert from "node:assert/strict";
import { MENU_CATALOG } from "../src/lib/menu-catalog.ts";
import { buildMenuViews, menuKeys } from "../src/lib/menu-views.ts";
import { menuSchema } from "../src/lib/structured-data.ts";

const entries = (views: ReturnType<typeof buildMenuViews>, id: string) =>
  views.sections.find((section) => section.id === id)!.groups.flatMap((group) => group.entries);

test("one tasting price change reaches labels, calls to action, metadata and campaign copy", () => {
  const catalog = structuredClone(MENU_CATALOG);
  catalog.dining.fairytale.price = 61;
  catalog.dining.tasting.price = 103;
  const views = buildMenuViews(catalog);
  assert.equal(views.menus["59"].displayPrice, "$61");
  assert.equal(views.menus["59"].tabLabel, "$61 Special Tasting");
  assert.equal(views.menus["59"].cta, "Reserve the $61 menu");
  assert.equal(views.menus["99"].displayPrice, "$103");
  assert.equal(views.menus["99"].tabLabel, "$103 Tasting Menu");
  assert.equal(views.menus["99"].cta, "Reserve the $103 menu");
  for (const text of Object.values(views.copy)) {
    assert.ok(text.includes("$61"));
    assert.ok(text.includes("$103"));
  }
  assert.match(views.sections[0].intro[0].paragraphs[0], /\$103 per person/);
  assert.match(views.sections[0].groups[0].entries[0].paragraphs[0], /\$61 per person/);
  assert.deepEqual(Object.keys(views.menus), menuKeys);
});

test("a la carte pricing never leaks into an unpriced tasting presentation", () => {
  const catalog = structuredClone(MENU_CATALOG);
  catalog.items["the-island"].presentations["a-la-carte"].price = { amount: 21 };
  const views = buildMenuViews(catalog);
  assert.equal(entries(views, "a-la-carte").find((entry) => entry.title === "The Island (v, gf)")!.price, "$21");
  assert.equal(entries(views, "tasting-courses").find((entry) => entry.title === "The Island (v, gf)")!.price, undefined);
  assert.ok(entries(views, "drink").every((entry) => entry.price === undefined));
  assert.ok(views.xiaolongbaoFillings.every((entry) => !("price" in entry)));
  assert.equal(views.menus.lunch.price, undefined);
  assert.equal(views.menus.xlb.price, undefined);
  assert.equal(views.menus.lunch.displayPrice, "A la carte");
  assert.equal(views.menus.xlb.displayPrice, "By selection");
});

test("shared dish names update menu summaries, full menus and photo-wall captions together", () => {
  const catalog = structuredClone(MENU_CATALOG);
  catalog.items["the-island"].name = "Example Island";
  const views = buildMenuViews(catalog);
  assert.equal(views.menus["99"].courses[0][0], "Example Island");
  assert.ok(entries(views, "tasting-courses").some((entry) => entry.title === "Example Island (v, gf)"));
  assert.ok(entries(views, "a-la-carte").some((entry) => entry.title === "Example Island (v, gf)"));
  assert.ok(views.dishWallRows.flat().some((dish) => dish.name === "Example Island"));
});

test("portion labels and zero prices are explicit, and schema offers use catalog prices", () => {
  const catalog = structuredClone(MENU_CATALOG);
  catalog.items["the-island"].presentations["a-la-carte"].price = { amount: 0 };
  const views = buildMenuViews(catalog);
  assert.equal(entries(views, "a-la-carte").find((entry) => entry.title === "The Island (v, gf)")!.price, "$0");
  assert.deepEqual(entries(views, "takeout").filter((entry) => entry.title === "House Buns").map((entry) => entry.price), ["$14 (4 pcs)", "$7 (4 pcs)"]);
  assert.deepEqual(menuSchema.hasMenuSection.map((section) => section.offers?.price), [
    String(MENU_CATALOG.dining.fairytale.price), String(MENU_CATALOG.dining.tasting.price), String(MENU_CATALOG.dining.tasting.price), undefined,
  ]);
});
