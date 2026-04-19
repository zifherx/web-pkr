"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { SERVICE_CARD_PROPS } from "@/types";
import { ArrowRight } from "lucide-react";

export function ServiceCard({ service, inView }: SERVICE_CARD_PROPS) {
  const { benefits, cardDescription, icon: Icon, id, label, slug } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (id - 1) * 0.1 }}
      className={cn(
        "relative bg-navyMid shadow-sm border border-gold500/10 p-8 group cursor-pointer transition-shadow duration-300 ease-in hover:border-gold400/60 hover:shadow-md hover:shadow-gold400",
        id === 5 ? "sm:col-span-2 md:col-span-1" : ""
      )}
    >
      <span className="absolute top-6 right-6 font-mono text-xs text-gold500/30 group-hover:text-gold500/60 transition-colors">
        0{id}
      </span>

      <div className="w-12 h-12 border border-gold500/30 flex items-center justify-center text-gold400 mb-6 group-hover:bg-gold400 group-hover:border-gold400 group-hover:text-ink900 transition-all duration-300">
        <Icon size={24} />
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold300 transition-colors">{label}</h3>

      <p className="text-ink200 text-sm leading-relaxed mb-6">{cardDescription}</p>

      <ul className="space-y-2 mb-6">
        {benefits.slice(0, 3).map(({ id, label }) => (
          <li key={id} className="text-xs text-ink200 flex items-center gap-2">
            <span className="w-3 h-px bg-gold500/60" />
            {label}
          </li>
        ))}
      </ul>

      <Link
        href={`/servicios/${slug}`}
        className="inline-flex items-center gap-2 text-gold400/60 text-xs tracking-widest uppercase hover:text-gold400 hover:font-semibold transition-colors group/link"
      >
        Ver Servicio
        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
      </Link>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-gold400/0 via-gold400/60 to-goldLight/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
    </motion.div>
  );
}
