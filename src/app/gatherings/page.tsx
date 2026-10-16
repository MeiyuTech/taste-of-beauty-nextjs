import { permanentRedirect } from "next/navigation";
import { homeSectionUrl } from "@/lib/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  permanentRedirect(homeSectionUrl("gatherings", await searchParams));
}
