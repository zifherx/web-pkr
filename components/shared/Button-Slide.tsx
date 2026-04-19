import { BUTTON_SLIDE_PROP } from "@/types";
import Link from "next/link";

export function ButtonSlide({ children, href, className }: BUTTON_SLIDE_PROP) {
  return (
    <Link
      href={href}
      className={`relative inline-flex items-center gap-2 px-9 py-3.5 border border-gold400 font-body text-sm font-semibold uppercase rounded-xs cursor-pointer overflow-hidden text-navy bg-gold400 transition-colors duration-300 group ${className}`}
    >
      <span
        className="absolute inset-0 bg-navy translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
        aria-hidden="true"
      />
      <span className="relative z-10 flex items-center gap-2 group-hover:text-gold400 transition-colors duration-300">
        {children}
      </span>
    </Link>
  );
}
