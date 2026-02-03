"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SaludosBasicos() {
  const redTAS = "bg-[#C21E3A]";
  const orangeTAS = "bg-[#E99623]";

  return (
    <main
      className={`${redTAS} min-h-screen font-sans text-white p-6 md:p-12 relative overflow-hidden`}
    >
      {/* HEADER SEGÚN IMAGEN */}
      <header className="flex justify-between items-start mb-12 max-w-7xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#E99623] leading-none">
            SALUDOS BASICOS
          </h1>
          <p className="text-xl md:text-2xl font-light italic opacity-90">
            Basic Greetings
          </p>
        </div>
        <div
          className={`${orangeTAS} px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase shadow-lg border border-white/20 mt-2`}
        >
          THE AREPA STATION
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL: FLUJO DE TARJETAS */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 relative z-10 max-w-full mx-auto">
        {/* INDICADOR LATERAL "S" (ESTILO PESTAÑA) */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-[#E99623] w-28 h-72 rounded-r-[3.5rem] -ml-24 mr-6 shadow-2xl border-y border-r border-white/10">
          <span className="text-8xl font-black border-b-[10px] border-white pb-2 leading-none">
            S
          </span>
        </div>

        {/* TARJETA 1: FÁCIL */}
        <GreetingCard
          level="(FÁCIL)"
          phrases={[
            { en: "Hi, welcome!", es: "(Hola, ¡bienvenido!)" },
            { en: "Hello, how are you today?", es: "(Hola, ¿cómo estás hoy?)" },
            {
              en: "Welcome to Arepa Station!",
              es: "(¡Bienvenido/a a Arepa Station!)",
            },
            { en: "Hi there!", es: "(¡Hola! – casual y friendly)" },
          ]}
        />

        <ArrowSeparator />

        {/* TARJETA 2: ATENCIÓN AL CLIENTE */}
        <GreetingCard
          level="atención al cliente"
          subLevel="(FÁCIL-MEDIO)"
          phrases={[
            {
              en: "Welcome! How can I help you today?",
              es: "(¡Bienvenido! ¿Cómo puedo ayudarte hoy?)",
            },
            {
              en: "Hello, are you dining in or taking out?",
              es: "(Hola, ¿para comer aquí o para llevar?)",
            },
            {
              en: "Hi! Is this your first time here?",
              es: "(¡Hola! ¿Es tu primera vez aquí?)",
            },
          ]}
        />

        <ArrowSeparator />

        {/* TARJETA 3: MEDIO */}
        <GreetingCard
          level="(MEDIO)"
          phrases={[
            {
              en: "Welcome to Arepa Station, let me know if you need any help.",
              es: "(Bienvenido/a a Arepa Station, avísame si necesitas ayuda.)",
            },
            {
              en: "Hi! I'll be happy to help you with the menu.",
              es: "(¡Hola! Con gusto te ayudo con el menú.)",
            },
            {
              en: "Hello, take your time and let me know when you're ready.",
              es: "(Hola, tómate tu tiempo y avísame cuando estés listo/a.)",
            },
          ]}
        />
      </div>

      {/* BOTÓN PARA REGRESAR AL GRID */}
      <div className="mt-16 flex justify-center pb-10">
        <Link href="/#menu-grid">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#C21E3A] px-12 py-4 font-black rounded-full uppercase tracking-tighter shadow-2xl flex items-center gap-2"
          >
            ← Volver al Menú
          </motion.button>
        </Link>
      </div>

      {/* DECORACIÓN DE FONDO */}
      <div className="absolute -bottom-32 -left-20 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[50rem] font-black italic">TAS</span>
      </div>
    </main>
  );
}

// Componente de Tarjeta optimizado
function GreetingCard({ level, subLevel, phrases }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#D36037] w-full md:w-[340px] p-10 rounded-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col items-center min-h-[580px] border border-white/5"
    >
      <h3 className="text-[1.7rem] font-black uppercase mb-1 tracking-tighter text-white">
        {level}
      </h3>
      {subLevel && (
        <p className="text-xs font-bold uppercase mb-10 text-white/80 tracking-widest">
          {subLevel}
        </p>
      )}

      <div className="flex flex-col gap-9 w-full text-center">
        {phrases.map((item: any, index: number) => (
          <div key={index} className="flex flex-col gap-1 px-2">
            <p className="text-[1.15rem] font-bold leading-tight text-white drop-shadow-sm">
              {item.en}
            </p>
            <p className="text-[0.95rem] font-medium text-white/90 italic">
              {item.es}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Separador con Icono de Lucide
function ArrowSeparator() {
  return (
    <div className="hidden md:flex items-center justify-center text-[#E99623]">
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowRight size={40} strokeWidth={3} />
      </motion.div>
    </div>
  );
}
