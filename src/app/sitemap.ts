import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl
    ? [
        "",
        "/menus",
        "/gatherings",
        "/xiaolongbao",
      ].map((path) => ({
        url: `${siteUrl}${path}`,
        changeFrequency: path === "/menus" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
      }))
    : [];
}
