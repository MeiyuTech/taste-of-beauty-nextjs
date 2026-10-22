import HollywoodLanding, { landingMetadata } from "@/components/hollywood-landing";

export const metadata = landingMetadata("hollywood-meta");

export default function Page() {
  return <HollywoodLanding slug="hollywood-meta" />;
}
