"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ExplicarProductos() {
  const redTAS = "bg-[#C21E3A]";
  const orangeTAS = "bg-[#E99623]";

  return (
    <main
      className={`${redTAS} min-h-screen font-sans text-white p-6 md:p-12 relative overflow-hidden`}
    >
      {/* HEADER */}
      <header className="flex justify-between items-start mb-12 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#E99623] leading-none">
            EXPLICAR AREPAS / EMPANADAS / OPERADAS
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-white opacity-90">
            Explaining the Arepas / Empanadas
          </p>
        </div>
        <div
          className={`${orangeTAS} px-6 py-2 rounded-full text-[10px] md:text-xs font-black uppercase shadow-lg border border-white/10 mt-2`}
        >
          THE AREPA STATION
        </div>
      </header>

      {/* CONTENIDO DE PRODUCTOS */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 relative z-10 max-w-[1400px] mx-auto">
        {/* COLUMNA 1: AREPAS */}
        <ProductCard
          title="Explicando AREPAS"
          phrases={[
            {
              en: "An arepa is made from corn dough.",
              es: "(Una arepa está hecha de masa de maíz.)",
            },
            {
              en: "It's like a corn cake, grilled and crispy.",
              es: "(Es como una torta de maíz, asada y crujiente.)",
            },
            {
              en: "We open the arepa and fill it with meat, cheese, or veggies.",
              es: "(Abrimos la arepa y la rellenamos con carne, queso o vegetales.)",
            },
            {
              en: "You can choose the filling you like.",
              es: "(Puedes escoger el relleno que prefieras.)",
            },
            {
              en: "Our arepas are gluten-free. (si aplica)",
              es: "(Nuestras arepas no tienen gluten.)",
            },
          ]}
        />

        <TASDivider />

        {/* COLUMNA 2: EMPANADAS */}
        <ProductCard
          title="Explicando EMPANADAS"
          phrases={[
            {
              en: "An empanada is fried and made with corn dough.",
              es: "(La empanada es frita y hecha de masa de maíz.)",
            },
            {
              en: "It comes already filled inside.",
              es: "(Ya viene rellena por dentro.)",
            },
            {
              en: "We have chicken, beef, and cheese empanadas.",
              es: "(Tenemos empanadas de pollo, carne y queso.)",
            },
          ]}
        />

        <TASDivider />

        {/* COLUMNA 3: OPERADAS */}
        <ProductCard
          title="Empanadas OPERADAS"
          phrases={[
            {
              en: 'We also have "operated empanadas."',
              es: '(También tenemos empanadas "operadas".)',
            },
            {
              en: "It's a regular empanada, then we open it and add extra filling on top.",
              es: "(Es una empanada normal, luego la abrimos y le agregamos más relleno encima.)",
            },
            {
              en: "You choose the empanada, and we add an extra portion of the filling you want.",
              es: "(Tú eliges la empanada y le agregamos una porción extra del relleno que quieras.)",
            },
            {
              en: "It has more filling and more flavor.",
              es: "(Tiene más relleno y más sabor.)",
            },
          ]}
        />
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

      {/* MARCA DE AGUA */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[35rem] font-black italic">TAS</span>
      </div>
    </main>
  );
}

// Tarjeta de Producto (Estilo Naranja con texto blanco)
function ProductCard({ title, phrases }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#E99623] w-full lg:w-[420px] p-8 md:p-10 rounded-[3rem] shadow-2xl flex flex-col items-center min-h-[650px] border border-white/10"
    >
      <h3 className="text-[1.5rem] font-black uppercase mb-10 tracking-tight text-white border-b-2 border-white/30 pb-2 text-center">
        {title}
      </h3>

      <div className="flex flex-col gap-7 w-full text-center">
        {phrases.map((item: any, index: number) => (
          <div key={index} className="flex flex-col gap-1">
            <p className="text-[1.05rem] font-bold leading-tight text-white">
              {item.en}
            </p>
            <p className="text-[0.9rem] font-medium text-white/90 italic leading-snug">
              {item.es}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Separador sutil con el texto "TAS"
function TASDivider() {
  return (
    <div className="hidden lg:flex items-center justify-center px-2">
      <span className="text-[#E99623] font-black text-4xl transform rotate-90 lg:rotate-0 tracking-tighter opacity-80">
        TAS
      </span>
    </div>
  );
}
