import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl
    ? [
        { url: siteUrl, changeFrequency: "weekly", priority: 1 },
        {
          url: `${siteUrl}/xiaolongbao`,
          changeFrequency: "monthly",
          priority: 0.8,
        },
      ]
    : [];
}
