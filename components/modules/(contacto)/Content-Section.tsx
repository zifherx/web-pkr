"use client";

import { FormularioSection } from "./Formulario-Section";
import { InfoSection } from "./Info-Section";

export function ContentSection() {
  return (
    <section className="py-14 bg-pastel">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-16">
          {/* Info */}
          <InfoSection />

          {/* Form */}
          <FormularioSection />
        </div>
      </div>
    </section>
  );
}
