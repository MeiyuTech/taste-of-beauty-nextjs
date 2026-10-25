export type MenuKey = "59" | "99" | "lunch" | "xlb";
export type DiningId = "fairytale" | "tasting" | "lunch" | "xiaolongbao";
export type Course = [name: string, description: string];
export interface MenuPrice { amount: number; suffix?: string }
export interface CatalogEntry {
  title: string;
  paragraphs: string[];
  price?: MenuPrice;
  diet?: string;
  label?: string;
}
export interface MenuItem {
  name: string;
  summary?: string;
  presentations: Record<string, Omit<CatalogEntry, "title"> & { titleSuffix?: string }>;
}
export interface EntryReference { itemId: string; presentation: string }
export interface MenuImage { src: string; alt: string; caption?: string }
export interface MenuGroup<T> { label: string; entries: T[]; images: MenuImage[] }
export interface MenuSection<T> {
  id: string;
  label: string;
  intro: T[];
  groups: MenuGroup<T>[];
  images: MenuImage[];
}
export interface DiningDefinition {
  title: string;
  price?: number;
  priceLabel?: string;
  unit: string;
  eyebrow: string;
  image: string;
  alt: string;
  intro: string;
  cta: string;
  tabLabel: string;
  dinner: boolean;
  courses: string[];
  vegetarian?: string[];
}
export interface MenuCatalog {
  currency: "USD";
  dining: Record<DiningId, DiningDefinition>;
  items: Record<string, MenuItem>;
  sections: MenuSection<CatalogEntry | EntryReference>[];
  xiaolongbaoFillings: string[];
  dishWall: { itemId?: string; label?: string; menu: MenuKey; diet?: "vegetarian" }[][];
}
export interface MenuEntry { title: string; paragraphs: string[]; price?: string }
export interface DiningMenu extends Omit<DiningDefinition, "courses" | "vegetarian"> {
  displayPrice: string;
  courses: Course[];
  vegetarian?: Course[];
}
