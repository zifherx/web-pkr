"use client";

import Link from "next/link";
import { NAVIGATION_ITEM_PROPS } from "@/types";

export function NavigationItem({ item }: NAVIGATION_ITEM_PROPS) {
  const { slug, label } = item;

  return (
    <li>
      <Link
        href={slug}
        className="text-white/60 text-sm hover:text-gold400 transition-colors flex items-center gap-2 group"
      >
        <span className="w-0 h-px bg-gold400 group-hover:w-4 transition-all duration-200" />
        {label}
      </Link>
    </li>
  );
}
