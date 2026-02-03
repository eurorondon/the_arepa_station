"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CobrarPage() {
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
            COBRAR
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-white opacity-90">
            Charge
          </p>
        </div>
        <div
          className={`${orangeTAS} w-24 h-8 rounded-full shadow-lg border border-white/10 mt-2`}
        ></div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative z-10 max-w-7xl mx-auto min-h-[60vh]">
        {/* TARJETA DE COBRO (IZQUIERDA) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className={`${orangeTAS} w-full md:w-[450px] p-10 md:p-14 rounded-[4rem] shadow-2xl flex flex-col items-center border border-white/10`}
        >
          <div className="flex flex-col gap-8 w-full text-center">
            <ChargePhrase en="Your total is $__." es="(Tu total es $__.)" />
            <ChargePhrase en="It will be $__." es="(Serían $__.)" />
            <ChargePhrase en="Cash or card?" es="(¿Efectivo o tarjeta?)" />
            <ChargePhrase en="You can pay here." es="(Puedes pagar aquí.)" />
            <ChargePhrase
              en="Please insert or tap your card."
              es="(Por favor inserta o acerca tu tarjeta.)"
            />
            <ChargePhrase
              en="I'll bring your change."
              es="(Ya te traigo tu cambio.)"
            />
          </div>
        </motion.div>

        {/* LOGO TAS DOBLE (DERECHA) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-center justify-center leading-[0.8]"
        >
          <div className="flex flex-col">
            <span className="text-[10rem] md:text-[14rem] font-black text-white tracking-tighter border-b-[12px] border-white pb-2">
              TAS
            </span>
            <span className="text-[10rem] md:text-[14rem] font-black text-[#E99623] tracking-tighter border-b-[12px] border-[#E99623] pb-2">
              TAS
            </span>
          </div>
        </motion.div>
      </div>

      {/* BOTÓN REGRESAR */}
      <div className="mt-16 flex justify-center pb-10">
        <Link href="/#menu-grid">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#C21E3A] px-12 py-4 font-black rounded-full uppercase tracking-tighter shadow-2xl flex items-center gap-2"
          >
            <ArrowLeft size={20} /> Volver al Inicio
          </motion.button>
        </Link>
      </div>

      {/* DECORACIÓN SUTIL */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[40rem] font-black italic">TAS</span>
      </div>
    </main>
  );
}

// Componente auxiliar para las frases de cobro
function ChargePhrase({ en, es }: { en: string; es: string }) {
  return (
    <div className="flex flex-col gap-1 group">
      <p className="text-[1.2rem] font-bold leading-tight text-white group-hover:text-[#C21E3A] transition-colors duration-300">
        {en}
      </p>
      <p className="text-[1rem] font-medium text-white/90 italic">{es}</p>
    </div>
  );
}
