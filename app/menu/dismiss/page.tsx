"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DespedirPage() {
  const redTAS = "bg-[#C21E3A]";
  const orangeTAS = "bg-[#E99623]";

  return (
    <main
      className={`${redTAS} min-h-screen font-sans text-white p-6 md:p-12 relative overflow-hidden`}
    >
      {/* HEADER */}
      <header className="flex justify-between items-start mb-12 max-w-7xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#E99623] leading-none">
            DESPEDIR
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-white opacity-90">
            Dismiss
          </p>
        </div>
        <div
          className={`${orangeTAS} w-24 h-8 rounded-full shadow-lg border border-white/10 mt-2`}
        ></div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative z-10 max-w-7xl mx-auto min-h-[60vh]">
        {/* TEXTO DE MARCA (IZQUIERDA) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-start order-2 lg:order-1"
        >
          <div className="flex items-center gap-2">
            <span className="text-5xl md:text-7xl font-black text-[#E99623] tracking-tighter uppercase leading-none">
              THE AREPA
            </span>
            <div className="flex flex-col">
              <span className="text-5xl md:text-7xl font-black text-[#E99623] tracking-tighter uppercase leading-none border-b-[8px] border-[#E99623] pb-1">
                STATION
              </span>
            </div>
          </div>
        </motion.div>

        {/* TARJETA DE DESPEDIDA (DERECHA) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className={`${orangeTAS} w-full md:w-[480px] p-10 md:p-14 rounded-[4rem] shadow-2xl flex flex-col items-center border border-white/10 order-1 lg:order-2`}
        >
          <h3 className="text-2xl md:text-3xl font-black uppercase mb-10 tracking-tight text-white text-center">
            PARA DESPEDIRSE
          </h3>

          <div className="flex flex-col gap-7 w-full text-center">
            <DismissPhrase
              en="Have a great day!"
              es="(¡Que tengas un excelente día!)"
            />
            <DismissPhrase en="Enjoy your meal!" es="(¡Disfruta tu comida!)" />
            <DismissPhrase en="See you next time!" es="(¡Hasta la próxima!)" />
            <DismissPhrase en="Take care!" es="(¡Cuídate!)" />
            <DismissPhrase
              en="Have a nice evening!"
              es="(¡Que tengas una linda tarde/noche!)"
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
            className="bg-white text-[#C21E3A] px-12 py-4 font-black rounded-full uppercase tracking-tighter shadow-2xl flex items-center gap-2 transition-transform"
          >
            <ArrowLeft size={20} /> Volver al Inicio
          </motion.button>
        </Link>
      </div>

      {/* MARCA DE AGUA */}
      <div className="absolute -bottom-20 -left-20 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[40rem] font-black italic">TAS</span>
      </div>
    </main>
  );
}

// Componente para las frases de despedida
function DismissPhrase({ en, es }: { en: string; es: string }) {
  return (
    <div className="flex flex-col gap-1 group">
      <p className="text-[1.2rem] font-bold leading-tight text-white group-hover:text-[#C21E3A] transition-colors duration-300">
        {en}
      </p>
      <p className="text-[0.95rem] font-medium text-white/90 italic">{es}</p>
    </div>
  );
}
