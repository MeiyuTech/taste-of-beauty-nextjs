import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/site";
import "./globals.css";
import "./home.css";
export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Taste of Beauty | Vegan & Vegetarian Dining in West Hollywood",
    template: "%s | Taste of Beauty",
  },
  description:
    "Discover five-course dinners, eight-course tasting menus, lunch and handmade xiaolongbao at Taste of Beauty, West Hollywood.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Taste of Beauty",
    title: "Taste of Beauty",
    description:
      "Good food. Beautiful plans. Vegan and vegetarian dining in West Hollywood.",
    ...(siteUrl
      ? {
          images: [
            {
              url: "/assets/garden.webp",
              alt: "The Secret Garden at Taste of Beauty",
            },
          ],
        }
      : {}),
  },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = {
  themeColor: "#f3f0e8",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
