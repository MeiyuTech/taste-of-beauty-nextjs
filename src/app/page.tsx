import type { Metadata } from "next";
import HomeContent from "@/components/home-content";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
};
export default function HomePage() {
  return <HomeContent />;
}
