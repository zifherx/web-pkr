"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="relative py-24 bg-navyMid overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,168,67,0.4) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-gold400" />
            <span className="text-gold400 text-xs tracking-[0.3em] uppercase">
              ¿Listo para crecer?
            </span>
            <span className="w-10 h-px bg-gold400" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Agenda tu consulta <br />
            <em className="text-gold400 not-italic font-light">gratuita hoy</em>
          </h2>

          <p className="text-ink200 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Hablemos de tu empresa y descubre cómo podemos impulsar tu
            crecimiento con estrategias tributarias y contables a medida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-3 bg-gold400 text-ink900 px-10 py-4 font-semibold tracking-widest uppercase text-sm hover:bg-gold300 transition-colors group"
            >
              Agenda tu consulta
            </Link>

            <a
              href="tel:+51999999999"
              className="inline-flex items-center justify-center gap-3 border border-gold500/30 text-gold400 px-10 py-4 font-medium tracking-widest uppercase text-sm hover:border-gold400 hover:bg-gold400/5 transition-all"
            >
              +51 999 999 999
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
