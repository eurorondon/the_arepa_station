"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";

export default function LlamadaTelefonica() {
  const redTAS = "bg-[#C21E3A]";
  const orangeTAS = "bg-[#E99623]";

  return (
    <main
      className={`${orangeTAS} min-h-screen font-sans text-white p-4 md:p-10 relative overflow-hidden`}
    >
      {/* HEADER */}
      <header className="flex justify-between items-start mb-10 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#C21E3A] leading-none">
            LLAMADA TELEFONICA
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-[#C21E3A] opacity-90">
            Phone Call
          </p>
        </div>
        <div
          className={`${redTAS} p-3 rounded-full shadow-lg border border-white/10 mt-2`}
        >
          <Phone size={24} className="text-white" />
        </div>
      </header>

      {/* GRID DE TARJETAS (3 COLUMNAS EN DESKTOP) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 max-w-[1600px] mx-auto">
        <PhoneCard
          title="RECIBIR LA LLAMADA"
          phrases={[
            {
              en: "Thank you for calling Arepa Station. How can I help you today?",
              es: "(Gracias por llamar a Arepa Station, ¿en qué puedo ayudarte hoy?)",
            },
            {
              en: "Are you calling to place an order?",
              es: "(¿Llamas para hacer un pedido?)",
            },
            {
              en: "May I have your name, please?",
              es: "(¿Me indicas tu nombre, por favor?)",
            },
            {
              en: "Is this order for pickup or delivery?",
              es: "(¿Este pedido es para recoger o para delivery?)",
            },
          ]}
        />

        <PhoneCard
          title="TOMAR Y CONFIRMAR LA ORDEN"
          phrases={[
            {
              en: "Let me repeat your order to make sure it's correct.",
              es: "(Déjame repetir tu orden para asegurarme de que esté correcta.)",
            },
            {
              en: "So, you ordered one chicken arepa and two empanadas, correct?",
              es: "(Entonces, ordenaste una arepa de pollo y dos empanadas, ¿correcto?)",
            },
            {
              en: "Any special instructions?",
              es: "(¿Alguna instrucción especial?)",
            },
          ]}
        />

        <PhoneCard
          title="OFRECER CAMBIOS / SUGERENCIAS"
          phrases={[
            {
              en: "Would you like to replace it with something else?",
              es: "(¿Te gustaría cambiarlo por otra cosa?)",
            },
            {
              en: "I can suggest a similar option.",
              es: "(Puedo sugerirte una opción similar.)",
            },
            {
              en: "Instead, we have chicken or cheese available.",
              es: "(En su lugar, tenemos pollo o queso disponibles.)",
            },
            {
              en: "Would you like to upgrade or change the filling?",
              es: "(¿Te gustaría mejorar o cambiar el relleno?)",
            },
          ]}
        />

        <PhoneCard
          title="CERRAR LA LLAMADA"
          phrases={[
            { en: "Thank you for your order.", es: "(Gracias por tu pedido.)" },
            { en: "We appreciate your call.", es: "(Agradecemos tu llamada.)" },
            {
              en: "See you soon at Arepa Station.",
              es: "(Te esperamos pronto en Arepa Station.)",
            },
            { en: "Have a great day!", es: "(¡Que tengas un excelente día!)" },
          ]}
        />
      </div>

      {/* FILA INFERIOR (CENTRADAS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto relative z-10">
        <PhoneCard
          title="CUANDO NO HAY ALGO DISPONIBLE"
          phrases={[
            {
              en: "I'm sorry, we don't have that available right now.",
              es: "(Lo siento, no tenemos eso disponible en este momento.)",
            },
            {
              en: "That item is currently unavailable.",
              es: "(Ese producto no está disponible por ahora.)",
            },
            { en: "We are out of that today.", es: "(Hoy no tenemos eso.)" },
          ]}
        />

        <PhoneCard
          title="TIEMPO DE PREPARACIÓN"
          phrases={[
            {
              en: "Your order will be ready in about 15 minutes.",
              es: "(Tu orden estará lista en aproximadamente 15 minutos.)",
            },
            {
              en: "We'll call you when it's ready.",
              es: "(Te llamaremos cuando esté lista.)",
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

      {/* DECORACIÓN SUTIL */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <Phone size={800} strokeWidth={1} />
      </div>
    </main>
  );
}

function PhoneCard({ title, phrases }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-[#C21E3A] p-6 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center border border-white/5"
    >
      <h3 className="text-sm md:text-base font-black uppercase mb-6 tracking-tight text-white border-b border-white/20 pb-2 text-center w-full">
        {title}
      </h3>

      <div className="flex flex-col gap-5 w-full text-center">
        {phrases.map((item: any, index: number) => (
          <div key={index} className="flex flex-col gap-1">
            <p className="text-[0.95rem] font-bold leading-tight text-white">
              {item.en}
            </p>
            <p className="text-[0.85rem] font-medium text-white/80 italic">
              {item.es}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
