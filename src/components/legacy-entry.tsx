"use client";
import { useEffect } from "react";
import { legacySections } from "@/lib/navigation";
export default function LegacyEntry() {
  useEffect(() => {
    const destination = legacySections[window.location.hash];
    if (destination) {
      const target = new URL(destination, window.location.href);
      target.search = window.location.search;
      window.location.replace(target.href);
    }
  }, []);
  return null;
}
