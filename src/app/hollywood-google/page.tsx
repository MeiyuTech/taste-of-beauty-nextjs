import HollywoodLanding, { landingMetadata } from "@/components/hollywood-landing";

export const metadata = landingMetadata("hollywood-google");

export default function Page() {
  return <HollywoodLanding slug="hollywood-google" />;
}
