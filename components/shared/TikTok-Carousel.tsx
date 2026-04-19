"use client";

import { EmbedItem } from "@/interfaces";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { TikTokEmbed } from "./TikTok-Embed";

export function TikTokCarousel({ embeds }: { embeds: EmbedItem[] }) {
  const [current, setCurrent] = useState(0);
  const total = embeds.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getVisible = () => {
    if (total === 1) return [{ index: 0, position: 1 }];
    if (total === 2)
      return [
        { index: 0, position: 0 },
        { index: 1, position: 1 },
      ];

    return [
      { index: (current - 1 + total) % total, position: 0 },
      { index: current, position: 1 },
      { index: (current + 1) % total, position: 2 },
    ];
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {getVisible().map(({ index, position }) => (
          <motion.div
            key={embeds[index].id}
            animate={{
              opacity: position === 1 ? 1 : 0.4,
              scale: position === 1 ? 1 : 0.93,
            }}
            transition={{ duration: 0.4 }}
          >
            <TikTokEmbed videId={embeds[index].id} />
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={prev}
          aria-label="Anterior"
          className="w-11 h-11 border border-gold400/30 text-gold400 flex items-center justify-center hover:bg-gold400/10 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2 items-center">
          {embeds.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir al video ${i + 1}`}
              className={`h-px transition-all duration-300 ${i === current ? "w-8 bg-gold400" : "w-4 bg-gold400/30"}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Siguiente"
          className="w-11 h-11 border border-gold400/30 text-gold400 flex items-center justify-center hover:bg-gold400/10 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
