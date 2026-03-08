"use client";

import Link from "next/link";

export function BottomBar() {
  return (
    <div className="border-t border-[#b8892a]/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-grayText text-xs">
        &copy; {new Date().getFullYear()} PKR Tributarios. Todos los derechos
        reservados.
      </p>
      <div className="flex gap-6">
        <Link
          href={`#`}
          className="text-grayText text-xs hover:text-goldText transition-colors"
        >
          Política de Privacidad
        </Link>
        <Link
          href={`#`}
          className="text-grayText text-xs hover:text-goldText transition-colors"
        >
          Términos de Uso
        </Link>
      </div>
    </div>
  );
}
