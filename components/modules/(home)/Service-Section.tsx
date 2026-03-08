import { ServiceCard } from "@/components/shared/Service-Card";
import { SERVICE_SECTION_PROPS } from "@/types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ServiceSection({ services }: SERVICE_SECTION_PROPS) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="relative py-32">
      <div className="absolute inset-0 bg-linear-to-br from-navyMid to-navy" />
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Nuestros Servicios
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-8 justify-between">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Soluciones integrales
              <br />
              <span className="text-gold">para tu empresa</span>
            </h2>
            <p className="text-[#F5F0ED] max-w-xs text-sm leading-relaxed">
              Cada servicio está diseñado para entregar resultados concretos y
              medibles que impulsen tu crecimiento.
            </p>
          </div>
        </motion.div>

        {/* Servicios Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((item, id) => (
            <ServiceCard key={id} inView={inView} service={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
