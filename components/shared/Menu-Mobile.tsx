"use client";

import { AnimatePresence, motion } from "framer-motion";

import { MENU_MOBILE_PROPS } from "@/types";
import Link from "next/link";

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
            {navLink.map(({ href, id, label }) => (
              <li key={id}>
                {href.startsWith("/") ? (
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-widest uppercase font-medium text-ink200 hover:text-gold400"
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    href={href}
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
