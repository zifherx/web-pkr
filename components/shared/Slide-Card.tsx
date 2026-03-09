"use client";

import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { SLIDE_CARD_PROPS } from "@/types";

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
};

export function SlideCard({
  slide,
  direction,
  current,
  total,
  goTo,
}: SLIDE_CARD_PROPS) {
  const { label, headline, headlineItalic, subHeadline, accent, cta, id } =
    slide;

  return (
    <>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-gold400 text-xs tracking-tight uppercase font-medium">
              {label}
            </span>
            <span className="w-8 h-px bg-gold400 opacity-60" />
            <span className="text-gold400 text-xs font-medium tracking-widest uppercase">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>

          <motion.h1
            className="text-5xl md:text-8xl font-light tracking-tighter text-white mb-8"
            initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.05,
            }}
          >
            {headline}
            <br />
            <span className="italic text-gold400">{headlineItalic}</span>
          </motion.h1>

          <motion.p
            className="text-[#F5F0ED] text-lg leading-relaxed max-w-xl mb-10 font-light"
            initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {subHeadline}
          </motion.p>

          <motion.p
            className="text-gold400 text-sm italic mb-10 flex items-center gap-2"
            initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
          >
            <span className="w-5 h-px bg-gold400" />
            {accent}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="flex flex-wrap items-center gap-4"
      >
        <Link
          href="/contact"
          className="bg-gold400 text-navy font-semibold tracking-wide hover:scale-110 hover:text-black transition-all duration-200 px-7 py-3.5 text-sm rounded-sm inline-block"
        >
          {cta}
        </Link>
        <Link
          href="#servicios"
          className="text-white text-sm tracking-widest uppercase hover:text-gold400 transition-colors duration-200 flex items-center gap-2 group"
        >
          Ver servicios
          <span className="w-6 h-px bg-gold400 group-hover:w-10 transition-all duration-300" />
        </Link>
      </motion.div>

      <div className="flex items-center gap-2 mt-14">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir a slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            className={`h-1.5 rounded-sm cursor-pointer transition-all duration-300 ${i === current ? "w-6 bg-gold400" : "w-1.5 bg-white"}`}
          />
        ))}
      </div>
    </>
  );
}
