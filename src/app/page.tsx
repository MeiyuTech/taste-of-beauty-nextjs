import type { Metadata } from "next";
import HomeContent from "@/components/home-content";
import JsonLd from "@/components/json-ld";
import { restaurantSchema } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: { absolute: "Vegan Fine Dining in West Hollywood | Taste of Beauty" },
  description: "Vegan and vegetarian fine dining in West Hollywood, Los Angeles. Five courses for $59, eight for $99. Book your table.",
  openGraph: { title: "Taste of Beauty — Vegan Fine Dining in West Hollywood", description: "Vegan and vegetarian fine dining in West Hollywood, Los Angeles. Five courses for $59, eight for $99. Book your table." },
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
};
export default function HomePage() {
  return <><JsonLd data={restaurantSchema} /><HomeContent /></>;
}
