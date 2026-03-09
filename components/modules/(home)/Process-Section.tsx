"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { PROCESS_SECTION_PROPS } from "@/types";

export function ProcessSection({ steps }: PROCESS_SECTION_PROPS) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proceso" className="py-32 bg-pastel relative">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold400" />
            <span className="uppercase text-gold400 text-xs tracking-[0.3em]">
              Nuestro Proceso
            </span>
            <span className="w-10 h-px bg-gold400" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Cómo <span className="text-gold400">trabajamos </span>
          </h2>

          <p className="text-[#6b6459] max-w-md mx-auto">
            Un enfoque metódico que garantiza resultados precisos y estrategias
            efectivas
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-10 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold500/30 to-transparent hidden md:block" />

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map(({ description, icon: Icon, id, title }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: id * 0.12 }}
                className="relative text-center md:text-left"
              >
                <div className="w-20 h-20 border-2 border-gold400 flex items-center justify-center mx-auto md:mx-0 mb-6 relative group">
                  <Icon size={24} className="text-ink800" />
                  <span className="absolute -top-3 -right-3 w-6 h-6 bg-gold400 text-ink800 text-xs font-bold flex items-center justify-center font-mono">
                    {id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-ink900 mb-3">{title}</h3>

                <p className="text-ink600 text-sm leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
