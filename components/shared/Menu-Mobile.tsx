"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { MENU_MOBILE_PROPS } from "@/types";

export function MenuMobile({ open, setOpen, navLink }: MENU_MOBILE_PROPS) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="fixed top-24 left-0 right-0 z-40 bg-ink800/90 backdrop-blur-md border-b border-gold500/20 md:hidden"
        >
          <ul className="flex flex-col py-6 px-6 gap-5">
            {navLink.map(({ slug, id, label }) => (
              <li key={id}>
                {slug.startsWith("/") ? (
                  <Link
                    href={slug}
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-widest uppercase font-medium text-ink200 hover:text-gold400"
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    href={slug}
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-widest uppercase font-medium text-ink200 hover:text-gold400 transition-colors"
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
