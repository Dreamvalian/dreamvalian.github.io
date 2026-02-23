"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type CounterResponse = { count: number };

type CountApiResponse = {
  value: number;
};

const DEFAULT_COUNTER_NAMESPACE = "dreamvalian-github-io";

function fmt(n: number, compact?: boolean) {
  if (compact && n >= 1000) {
    const v = n / 1000;
    return `${v.toFixed(v < 10 ? 1 : 0)}K`;
  }
  return n.toLocaleString();
}

function normalizePath(pathname: string) {
  return pathname.replace(/^\/+|\/+$/g, "") || "home";
}

export function ViewCounter({
  className,
  compact,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [views, setViews] = useState<number | null>(null);
  const pathname = usePathname();
  const isStatic = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";

  useEffect(() => {
    const track = async () => {
      try {
        if (isStatic) {
          const namespace =
            process.env.NEXT_PUBLIC_COUNTER_NAMESPACE ?? DEFAULT_COUNTER_NAMESPACE;
          const key = normalizePath(pathname);
          const res = await fetch(
            `https://api.countapi.xyz/hit/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}`
          );
          if (!res.ok) return;
          const data = (await res.json()) as CountApiResponse;
          setViews(data.value);
          return;
        }

        const res = await fetch(`/api/views?path=${encodeURIComponent(pathname)}`, {
          method: "POST",
        });
        if (!res.ok) return;
        const data = (await res.json()) as CounterResponse;
        setViews(data.count);
      } catch {
        setViews(null);
      }
    };
    track();
  }, [pathname, isStatic]);

  if (views === null) return null;

  return (
    <span
      className={className ?? "text-[11px] sm:text-xs text-subtle"}
      aria-live='polite'>
      {fmt(views, compact)} views
    </span>
  );
}
