"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { navLinks } from "@/data/public.data";

export function MenuDesktop() {
  return (
    <ul className="hidden md:flex items-center gap-8">
      {navLinks.map(({ href, id, label }, i) => (
        <motion.li
          key={id}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 * i + 0.3 }}
        >
          {href.startsWith("/") ? (
            <Link
              href={href}
              className={cn(
                "text-sm tracking-widest uppercase font-medium transition-colors duration-200",
                label === "Contacto"
                  ? "bg-gold400 text-black px-5 py-2.5 hover:bg-gold300 font-semibold"
                  : "text-white hover:text-gold300",
              )}
            >
              {label}
            </Link>
          ) : (
            <a
              href={href}
              className="text-sm tracking-widest uppercase font-medium text-white hover:text-gold400 transition-colors duration-200"
            >
              {label}
            </a>
          )}
        </motion.li>
      ))}
    </ul>
  );
}
