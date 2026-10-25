import { menuCopy } from "@/lib/menus";
import type { Metadata } from "next";
import HomeContent from "@/components/home-content";
import JsonLd from "@/components/json-ld";
import { restaurantSchema } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: { absolute: "Vegan Fine Dining in West Hollywood | Taste of Beauty" },
  description: menuCopy.homeDescription,
  openGraph: { title: "Taste of Beauty — Vegan Fine Dining in West Hollywood", description: menuCopy.homeDescription },
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
};
export default function HomePage() {
  return <><JsonLd data={restaurantSchema} /><HomeContent /></>;
}
