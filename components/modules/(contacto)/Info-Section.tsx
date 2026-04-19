"use client";

import { infoContacto } from "@/data/public.data";
import { motion } from "framer-motion";

export function InfoSection() {
  const inView = true;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="md:col-span-2"
    >
      <div className="bg-navy border border-gold400/15 p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">
          Tu primera consulta es sin costo
        </h2>
        <p className="text-ink200 leading-relaxed text-sm">
          Cuéntanos sobre tu empresa y los desafíos que enfrentas. Nuestros
          especialistas analizarán tu situación y te presentarán un plan
          personalizado.
        </p>

        <div className="space-y-5 mt-10">
          {infoContacto.map(({ icon: Icon, id, label, value }) => (
            <div key={id} className="flex gap-4 items-start group">
              <div className="w-10 h-10 border border-gold500/20 flex items-center justify-center text-gold400 shrink-0 mt-0.5 group-hover:border-gold400 transition-colors">
                <Icon size={16} />
              </div>
              <div>
                <p className="text-xs text-gold500/70 tracking-widest uppercase mb-0.5">
                  {label}
                </p>
                <p className="text-ink200 text-sm">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border border-gold500/20 bg-ink800/40 mt-10">
          <p className="font-bold text-2xl mb-2 text-gold500">
            &quot;Cada empresa merece estrategia de primer nivel&#34;
          </p>
          <p className="text-xs text-ink200 tracking-widest uppercase">
            — Equipo, PKR
          </p>
        </div>
      </div>
    </motion.div>
  );
}
