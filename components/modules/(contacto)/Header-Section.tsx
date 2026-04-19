"use client";

import { motion } from "framer-motion";

export function HeaderSection() {
  return (
    <section className="pt-40 pb-20 relative overflow-hidden bg-navy">
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold400" />
            <span className="text-gold400 text-xs tracking-[0.3em] uppercase">
              Estamos aquí para ayudarte
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-14">
            Hablemos de tu <br />
            <span className="text-gold400">empresa</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
