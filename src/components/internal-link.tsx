"use client";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { internalUrl } from "@/lib/navigation";
export default function InternalLink({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  function preserveQuery(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.href = internalUrl(href, window.location.href);
  }
  return (
    <a
      {...props}
      href={href}
      onClick={preserveQuery}
      onAuxClick={preserveQuery}
    >
      {children}
    </a>
  );
}
