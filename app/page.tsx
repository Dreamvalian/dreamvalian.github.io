"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    const forceLegacy = process.env.NEXT_PUBLIC_USE_LEGACY_INDEX === "1";
    const supportsModern =
      typeof window !== "undefined" &&
      "fetch" in window &&
      "Promise" in window &&
      "IntersectionObserver" in window &&
      typeof CSS !== "undefined" &&
      !!CSS.supports &&
      CSS.supports("color", "var(--x)");
    if (forceLegacy || !supportsModern) {
      const target = `${base}/legacy-index.html`;
      window.location.assign(target);
      return;
    }
    window.location.assign(`${base}/profile`);
  }, []);
  return null;
}
