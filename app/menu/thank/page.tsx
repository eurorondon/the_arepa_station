"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AgradecerPage() {
  const redTAS = "bg-[#C21E3A]";
  const orangeTAS = "bg-[#E99623]";

  return (
    <main
      className={`${orangeTAS} min-h-screen font-sans text-white p-6 md:p-12 relative overflow-hidden`}
    >
      {/* HEADER */}
      <header className="flex justify-between items-start mb-12 max-w-7xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#C21E3A] leading-none">
            AGRADECER
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-[#C21E3A] opacity-90">
            Thank
          </p>
        </div>
        <div
          className={`${redTAS} w-24 h-8 rounded-full shadow-lg border border-white/10 mt-2`}
        ></div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative z-10 max-w-7xl mx-auto min-h-[60vh]">
        {/* TEXTO DE MARCA (IZQUIERDA) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-2">
            <span className="text-5xl md:text-7xl font-black text-[#C21E3A] tracking-tighter uppercase leading-none">
              THE AREPA
            </span>
            <div className="flex flex-col">
              <span className="text-5xl md:text-7xl font-black text-[#C21E3A] tracking-tighter uppercase leading-none border-b-[8px] border-[#C21E3A] pb-1">
                STATION
              </span>
            </div>
          </div>
        </motion.div>

        {/* TARJETA DE AGRADECIMIENTO (DERECHA) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className={`${redTAS} w-full md:w-[450px] p-10 md:p-16 rounded-[4rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex flex-col items-center border border-white/5`}
        >
          <div className="flex flex-col gap-8 w-full text-center">
            <ThankPhrase en="Thank you!" es="(¡Gracias!)" />
            <ThankPhrase en="Thank you so much." es="(Muchas gracias.)" />
            <ThankPhrase
              en="We appreciate your visit."
              es="(Agradecemos tu visita.)"
            />
            <ThankPhrase
              en="Thank you for coming to Arepa Station."
              es="(Gracias por venir a Arepa Station.)"
            />
          </div>
        </motion.div>
      </div>

      {/* BOTÓN REGRESAR */}
      <div className="mt-16 flex justify-center pb-10">
        <Link href="/#menu-grid">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${redTAS} text-white px-10 py-4 font-black rounded-full uppercase tracking-tighter shadow-2xl flex items-center gap-3 transition-colors hover:bg-[#A01830]`}
          >
            <ArrowLeft size={20} /> Volver al Inicio
          </motion.button>
        </Link>
      </div>

      {/* DECORACIÓN DE FONDO */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.05] pointer-events-none select-none">
        <span className="text-[35rem] font-black italic text-white uppercase">
          TAS
        </span>
      </div>
    </main>
  );
}

// Componente para las frases de agradecimiento
function ThankPhrase({ en, es }: { en: string; es: string }) {
  return (
    <div className="flex flex-col gap-1 group cursor-default">
      <p className="text-[1.3rem] font-bold leading-tight text-white group-hover:text-[#E99623] transition-colors duration-300">
        {en}
      </p>
      <p className="text-[1rem] font-medium text-white/80 italic tracking-tight">
        {es}
      </p>
    </div>
  );
}
