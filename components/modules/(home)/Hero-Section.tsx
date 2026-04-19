/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { SlideCard } from "@/components/shared/Slide-Card";
import { cn } from "@/lib/utils";
import { HOME_HERO_SECTION_PROPS } from "@/types";
import { Shield } from "lucide-react";
import Image from "next/image";

export function HeroSection({ slides }: HOME_HERO_SECTION_PROPS) {
  const [[current, direction], setSlide] = useState([0, 1]);
  const [autoplay, setAutoplay] = useState(true);

  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const paginate = useCallback((dir: number) => {
    setSlide(([prev]) => [(prev + dir + slides.length) % slides.length, dir]);
  }, []);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => paginate(1), 5500);
    return () => clearInterval(timer);
  }, [autoplay, paginate]);

  const goTo = (index: number) => {
    clearTimeout(resumeTimer.current);

    const dir = index > current ? 1 : -1;
    setSlide([index, dir]);
    setAutoplay(false);

    resumeTimer.current = setTimeout(() => setAutoplay(true), 10000);
  };

  useEffect(() => {
    return () => clearTimeout(resumeTimer.current);
  }, []);

  const slide = slides[current];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,168,67,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <SlideCard slide={slide} direction={direction} current={current} total={slides.length} goTo={goTo} />
          </div>

          {/* Right Content */}
          <div
            className={cn(
              "relative hidden md:block md:col-span-5 transition-all duration-500",
              autoplay ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-6 scale-[0.98]"
            )}
          >
            {/* Decorative Frames */}
            <div className="absolute -top-4 -left-4 w-[55%] h-[55%] border border-gold400/25 pointer-events-none z-20" />
            <div className="absolute -bottom-4 -right-4 w-[55%] h-[55%] border border-gold400/15 pointer-events-none z-20" />

            {/* Gold corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 z-20 overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-0.5 bg-gold400" />
              <div className="absolute top-0 right-0 w-full h-0.5 bg-gold400" />
            </div>

            {/* Image container */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4", maxHeight: "600px" }}>
              <Image
                src={slide.imageUrl}
                alt={slide.imageAlt}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 0px, 480px"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-black/30 to-transparent" />

              {/* Floating badge on image */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="bg-black/50 backdrop-blur-sm border border-gold400/30 py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gold400/15 flex items-center justify-center shrink-0">
                      <Shield strokeWidth={2} className="text-gold400" />
                    </div>
                    <div>
                      <p className="text-white text-[0.78rem] font-semibold leading-tight">Soluciones certificadas</p>
                      <p className="text-white/45 text-[0.7rem] mt-0.5">Cumplimiento normativo garantizado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        key={current}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 right-8 z-20 hidden md:flex flex-col items-center gap-2 text-white/30 text-sm tracking-[0.2em] uppercase"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-linear-to-b from-transparent to-gold400 animate-pulse"
        />
        Explorar
      </motion.div>
    </section>
  );
}
