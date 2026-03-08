"use client";

import { motion } from "framer-motion";

import { SERVICE_CARD_PROPS } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ServiceCard({ service, inView }: SERVICE_CARD_PROPS) {
  const { benefits, cta, description, href, icon: Icon, id, label } = service;

  const IconCTA = cta.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (id - 1) * 0.1 }}
      className={cn(
        "relative bg-navyMid shadow-sm border border-gold/10 p-8 group cursor-pointer transition-shadow duration-300 ease-in hover:border-gold/60 hover:shadow-md hover:shadow-gold",
        id === 5 ? "sm:col-span-2 md:col-span-1" : "",
      )}
    >
      <span className="absolute top-6 right-6 font-mono text-xs text-gold/30 group-hover:text-gold/60 transition-colors">
        0{id}
      </span>

      <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-goldLight mb-6 group-hover:bg-goldLight group-hover:border-goldLight group-hover:text-black transition-all duration-300">
        <Icon size={24} />
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-goldText transition-colors">
        {label}
      </h3>

      <p className="text-amber-50 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-goldLight/60 text-xs tracking-widest uppercase hover:text-goldLight hover:font-semibold transition-colors group/link"
      >
        {cta.label}
        <IconCTA
          size={16}
          className="group-hover/link:translate-x-1 transition-transform"
        />
      </Link>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-goldLight/0 via-goldLight/60 to-goldLight/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
    </motion.div>
  );
}
