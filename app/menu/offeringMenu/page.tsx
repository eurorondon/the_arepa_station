"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function OfrecerMenu() {
  const redTAS = "bg-[#C21E3A]";
  const orangeTAS = "bg-[#E99623]";

  return (
    <main
      className={`${orangeTAS} min-h-screen font-sans text-white p-6 md:p-12 relative overflow-hidden`}
    >
      {/* HEADER */}
      <header className="flex justify-between items-start mb-8 max-w-7xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#C21E3A] leading-none">
            OFRECER MENU
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-[#C21E3A] opacity-90">
            Offering the menú
          </p>
        </div>
        {/* Logo pequeño superior derecho */}
        <div
          className={`${redTAS} px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase shadow-lg border border-white/10 mt-2`}
        >
          THE AREPA STATION
        </div>
      </header>

      {/* CONTENIDO CENTRAL */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative z-10 max-w-7xl mx-auto min-h-[60vh]">
        {/* TARJETA IZQUIERDA: FÁCIL */}
        <MenuCard
          level="(FÁCIL)"
          phrases={[
            { en: "Here's our menu.", es: "(Aquí está nuestro menú.)" },
            { en: "Can I give you a menu?", es: "(¿Puedo darte un menú?)" },
            {
              en: "Here you go, this is our menu.",
              es: "(Aquí tienes, este es nuestro menú.)",
            },
            {
              en: "Would you like to see the menu?",
              es: "(¿Te gustaría ver el menú?)",
            },
          ]}
        />

        {/* LOGO CENTRAL TAS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-10"
        >
          <span className="text-[10rem] md:text-[15rem] font-black leading-none text-white border-b-[15px] border-white pb-4">
            TAS
          </span>
        </motion.div>

        {/* TARJETA DERECHA: FÁCIL-MEDIO */}
        <MenuCard
          level="(FÁCIL-MEDIO)"
          phrases={[
            {
              en: "Let me know if you have any questions about the menu.",
              es: "(Avísame si tienes preguntas sobre el menú.)",
            },
            {
              en: "I can help you choose something from the menu.",
              es: "(Puedo ayudarte a escoger algo del menú.)",
            },
            { en: "Our menu is right here.", es: "(Nuestro menú está aquí.)" },
            {
              en: "Take your time and let me know when you're ready to order.",
              es: "(Tómate tu tiempo y avísame cuando estés listo/a para ordenar.)",
            },
          ]}
        />
      </div>

      {/* BOTÓN REGRESAR */}
      <div className="mt-12 flex justify-center pb-10">
        <Link href="/#menu-grid">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${redTAS} text-white px-10 py-4 font-black rounded-full uppercase tracking-tighter shadow-2xl flex items-center gap-3`}
          >
            <ArrowLeft size={20} /> Volver al Inicio
          </motion.button>
        </Link>
      </div>

      {/* DECORACIÓN DE FONDO SUTIL */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none">
        <span className="text-[40rem] font-black italic text-white uppercase">
          MENU
        </span>
      </div>
    </main>
  );
}

// Componente de Tarjeta con estilo Rojo TAS
function MenuCard({ level, phrases }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#C21E3A] w-full md:w-[380px] p-10 rounded-[4rem] shadow-[0_25px_60px_rgba(0,0,0,0.4)] flex flex-col items-center min-h-[550px] border border-white/5"
    >
      <h3 className="text-[1.8rem] font-black uppercase mb-12 tracking-tighter text-white border-b-2 border-white/20 pb-2">
        {level}
      </h3>

      <div className="flex flex-col gap-10 w-full text-center">
        {phrases.map((item: any, index: number) => (
          <div key={index} className="flex flex-col gap-2 px-2 group">
            <p className="text-[1.1rem] font-bold leading-tight text-white group-hover:text-[#E99623] transition-colors duration-300">
              {item.en}
            </p>
            <p className="text-[0.9rem] font-medium text-white/80 italic tracking-tight">
              {item.es}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
