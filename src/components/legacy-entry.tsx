"use client";
import { useEffect } from "react";
import { legacySections } from "@/lib/navigation";
export default function LegacyEntry() {
  useEffect(() => {
    const destination = legacySections[window.location.hash];
    if (destination)
      window.location.replace(destination + window.location.search);
  }, []);
  return null;
}
