"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { SERVICE_CARD_PROPS } from "@/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SERVICE_IMAGES_CARD } from "../../data/public.data";

export function ServiceCard({ service, inView }: SERVICE_CARD_PROPS) {
  const { benefits, cardDescription, icon: Icon, id, label, slug } = service;
  const imageUrl = SERVICE_IMAGES_CARD[id] ?? SERVICE_IMAGES_CARD[1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (id - 1) * 0.12 }}
      className={cn(
        "group relative flex-col overflow-hidden rounded-sm cursor-pointer",
        "bg-pastel",
        "shadow-lg shadow-black/30",
        "border border-gold500/20",
        "transition-transform duration-300 hover:-translate-y-1",
        id === 5 ? "sm:col-span-2 md:col-span-1" : ""
      )}
    >
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={label}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="absoulte inset-0 bg-linear-to-t from-pastel via-pastel/10 to-transparent" />

        <span className="absolute top-4 right-4 font-mono text-xs text-white/70 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-sm">
          0{id}
        </span>
      </div>

      <div
        className="absolute left-6 z-20 w-11 h-11 bg-gold400 flex items-center justify-center text-ink900 shadow-md shadow-gold500/40 transition-all duration-300 group-hover:bg-navy group-hover:text-gold400"
        style={{ top: "calc(11rem - 1.375rem)" }}
      >
        <Icon size={20} />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 px-6 py-10 pb-7">
        <h3 className="text-lg font-bold text-ink900 mb-2 group-hover:text-gold600 transition-colors leading-snug">
          {label}
        </h3>

        <p className="text-ink700 text-sm leading-relaxed mb-5 line-clamp-3">{cardDescription}</p>

        <ul className="space-y-1.5 mb-7">
          {benefits.slice(0, 3).map(({ id: bId, label: bLabel }) => (
            <li key={bId} className="text-xs text-ink600 flex items-center gap-2.5">
              <span className="w-3 h-px bg-gold500 shrink-0" />
              {bLabel}
            </li>
          ))}
        </ul>

        {/* Separador decorativo */}
        <div className="mt-auto pt-5 border-t border-ink900/10">
          <Link
            href={`/servicios/${slug}`}
            className="inline-flex items-center gap-1.5 text-[11px] tracking-widest uppercase font-semibold text-ink900 hover:text-gold600 transition-colors group/link"
          >
            Ver Servicio
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-gold400/0 via-gold400 to-gold400/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
    </motion.div>
  );
}
