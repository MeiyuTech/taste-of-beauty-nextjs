export { menus, menuKeys, menuCopy } from "./menu-views";
export type { MenuKey, Course, DiningMenu } from "./menu-types";
import { menuKeys } from "./menu-views";
import type { MenuKey } from "./menu-types";

export function menuDishId(menu: MenuKey, diet: "vegan" | "vegetarian", name: string) {
  return `dish-${menu}-${diet}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}
export function isMenuKey(value: string | null): value is MenuKey {
  return value !== null && menuKeys.includes(value as MenuKey);
}
