"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ConfirmarOrden() {
  const redTAS = "bg-[#C21E3A]";
  const orangeTAS = "bg-[#E99623]";

  return (
    <main
      className={`${orangeTAS} min-h-screen font-sans text-white p-6 md:p-12 relative overflow-hidden`}
    >
      {/* HEADER SEGÚN IMAGEN */}
      <header className="flex justify-between items-start mb-12 max-w-7xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#C21E3A] leading-none">
            COMFIRMAR ORDEN
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-[#C21E3A] opacity-90">
            Comfirming the order
          </p>
        </div>
        <div
          className={`${redTAS} w-24 h-8 rounded-full shadow-lg border border-white/10 mt-2`}
        ></div>
      </header>

      {/* CONTENIDO CENTRAL: TARJETAS Y "S" INDICADORA */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10 max-w-7xl mx-auto min-h-[60vh]">
        {/* TARJETA IZQUIERDA: (FÁCIL) */}
        <ConfirmCard
          level="(FÁCIL)"
          phrases={[
            {
              en: "Let me confirm your order.",
              es: "(Déjame confirmar tu orden.)",
            },
            { en: "So, you ordered...", es: "(Entonces, pediste...)" },
            { en: "Just to make sure...", es: "(Solo para asegurarme...)" },
            { en: "Is this correct?", es: "(¿Es correcto?)" },
          ]}
        />

        {/* INDICADOR CENTRAL "S" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center"
        >
          <span className="text-[12rem] md:text-[18rem] font-black leading-none text-white border-b-[15px] border-white pb-4">
            S
          </span>
        </motion.div>

        {/* TARJETA DERECHA: (MEDIO) */}
        <ConfirmCard
          level="(MEDIO)"
          phrases={[
            {
              en: "That's for here or to go?",
              es: "(¿Para comer aquí o para llevar?)",
            },
            { en: "Any changes or extras?", es: "(¿Algún cambio o extra?)" },
            {
              en: "Let me repeat your order, please.",
              es: "(Permíteme repetir tu orden.)",
            },
            { en: "Everything looks good?", es: "(¿Todo está bien?)" },
          ]}
        />
      </div>

      {/* BOTÓN REGRESAR */}
      <div className="mt-16 flex justify-center pb-10">
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

      {/* MARCA DE AGUA SUTIL */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-[45rem] font-black italic text-white uppercase tracking-tighter">
          ORDER
        </span>
      </div>
    </main>
  );
}

// Componente de Tarjeta Rojo TAS para confirmación
function ConfirmCard({ level, phrases }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#C21E3A] w-full md:w-[360px] p-10 rounded-[4rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex flex-col items-center min-h-[520px] border border-white/5"
    >
      <h3 className="text-[1.8rem] font-black uppercase mb-10 tracking-tighter text-white border-b-2 border-white/10 pb-2">
        {level}
      </h3>

      <div className="flex flex-col gap-8 w-full text-center">
        {phrases.map((item: any, index: number) => (
          <div key={index} className="flex flex-col gap-1 px-2 group">
            <p className="text-[1.15rem] font-bold leading-tight text-white group-hover:text-[#E99623] transition-colors">
              {item.en}
            </p>
            <p className="text-[0.95rem] font-medium text-white/80 italic">
              {item.es}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
