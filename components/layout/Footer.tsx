"use client";

import Image from "next/image";
import Link from "next/link";

import { NavigationItem } from "../shared/Navigation-Item";
import { BottomBar } from "../shared/BottomBar";

import { navLinks, servicesList, socialLinks } from "@/data/public.data";

export function Footer() {
  return (
    <footer className="bg-navy border-t border-gold400/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Marca PKR Tributarios */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-56 h-28 shrink-0">
                <Image
                  src="/images/logo_pkr_gris.png"
                  alt="PKR Tributarios"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-ink200 text-sm leading-relaxed mb-6">
              Especialistas en procesos tributarios y contables. Soluciones
              personalizadas para impulsar el crecimiento empresarial.
            </p>

            {/* Redes Sociales */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-gold400/20 flex items-center justify-center text-ink200 hover:border-gold400 hover:text-gold400 transition-all duration-200"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gold400" />
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <NavigationItem key={item.id} item={item} />
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gold400" />
              Servicios
            </h4>
            <ul className="space-y-3">
              {servicesList.map((item) => (
                <NavigationItem key={item.id} item={item} />
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gold400" />
              Contacto
            </h4>
            <div className="space-y-4 text-sm text-white/60">
              <p>
                <span className="text-gold400 block text-xs tracking-widest uppercase mb-1">
                  Email
                </span>
                info@pkr.com.pe
              </p>
              <p>
                <span className="text-gold400 block text-xs tracking-widest uppercase mb-1">
                  Teléfono
                </span>
                +51 908 870 708
              </p>
              <p>
                <span className="text-gold400 block text-xs tracking-widest uppercase mb-1">
                  Horario
                </span>
                Lunes a Viernes
                <br />
                8:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
        <BottomBar />
      </div>
    </footer>
  );
}
