"use client"; // Importante para usar animaciones en Next.js App Router

import React from "react";
import { motion } from "framer-motion";

// Configuración de animación reutilizable
const fadeInProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function LandingPage() {
  const redTAS = "bg-[#C21E3A]";
  const orangeTAS = "bg-[#E99623]";
  const textRedTAS = "text-[#C21E3A]";

  return (
    <main className="min-h-screen font-sans text-white overflow-x-hidden">
      {/* SECCIÓN 1: HERO (Entrada dramática) */}
      <section
        className={`${redTAS} h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h2 className="text-xl tracking-[0.4em] mb-4 font-light">
            GUÍA COSTOMER SERVICE
          </h2>
          <h1 className="text-[12rem] md:text-[18rem] font-black leading-none text-[#E99623] drop-shadow-2xl">
            TAS
          </h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-8 bg-white text-[#C21E3A] px-12 py-3 font-bold rounded-sm shadow-lg"
          >
            INICIAR
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 right-10 text-xs italic"
        >
          SERVICIO QUE DEJA HUELLA
        </motion.p>
      </section>

      {/* SECCIÓN 2: BIENVENIDA (Aparece al bajar) */}
      <section
        className={`${orangeTAS} py-24 px-10 md:px-24 grid md:grid-cols-2 gap-10`}
      >
        <motion.div {...fadeInProps} className="max-w-xl">
          <p
            className={`${textRedTAS} font-bold mb-4 uppercase tracking-wider text-lg`}
          >
            Hola, ¿cómo puedo ayudarte?
          </p>
          <h2 className="text-6xl md:text-8xl font-black leading-tight text-white uppercase italic">
            Hi, how can I help you?
          </h2>
        </motion.div>
        <motion.div
          {...fadeInProps}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col justify-center gap-8 max-w-lg"
        >
          <p className="text-lg md:text-xl leading-relaxed font-medium">
            "Sabemos que hablar inglés puede ser un desafío, especialmente en el
            servicio al cliente... Aquí encontrarás las herramientas que
            necesitas para comunicarte con confianza y facilidad."
          </p>
          <button className="border-2 border-white w-fit px-8 py-3 font-bold rounded-lg hover:bg-white hover:text-[#E99623] transition-all uppercase tracking-tighter">
            Mira lo que he hecho
          </button>
        </motion.div>
      </section>

      {/* SECCIÓN 3: GALERÍA (Efecto cascada/Stagger) */}
      <section
        className={`${redTAS} py-12 px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-4`}
      >
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${item.bg || "bg-transparent"} aspect-square rounded-[2rem] overflow-hidden shadow-xl flex flex-col items-center justify-center p-4`}
          >
            {item.type === "img" ? (
              <img
                src={item.src}
                alt="TAS"
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
              />
            ) : (
              item.content
            )}
          </motion.div>
        ))}
      </section>

      {/* SECCIÓN 4: LO QUE HAGO */}
      <section
        className={`${orangeTAS} py-24 px-10 md:px-24 grid md:grid-cols-3 gap-12`}
      >
        <motion.div {...fadeInProps} className="flex items-center">
          <h2
            className={`text-6xl md:text-7xl font-black ${textRedTAS} uppercase leading-[0.85]`}
          >
            Lo que <br /> hago
          </h2>
        </motion.div>

        <div className="md:col-span-2 grid md:grid-cols-2 gap-x-12 gap-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <StepOriginal title={step.title} desc={step.desc} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 5: FOOTER */}
      <footer
        className={`${redTAS} py-20 px-10 md:px-24 relative overflow-hidden`}
      >
        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          <motion.div
            whileInView={{ x: [-50, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            className={`${orangeTAS} p-10 rounded-2xl shadow-xl`}
          >
            <h3 className="font-black text-3xl mb-4 uppercase tracking-tighter">
              Contacto
            </h3>
            <p className="text-sm font-bold opacity-90">EMAIL@EMAIL.COM</p>
          </motion.div>
          <motion.div
            whileInView={{ x: [50, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            className={`${orangeTAS} p-10 rounded-2xl shadow-xl`}
          >
            <h3 className="font-black text-3xl mb-4 uppercase tracking-tighter">
              Seguir
            </h3>
            <p className="text-sm font-bold opacity-90 uppercase tracking-widest">
              @THEAREPASTATION
            </p>
          </motion.div>
        </div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10"
        >
          <span className="text-[25rem] md:text-[40rem] font-black text-white select-none">
            TAS
          </span>
        </motion.div>
      </footer>
    </main>
  );
}

function StepOriginal({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-2 group cursor-default">
      <h3 className="font-bold text-xl text-white uppercase tracking-tight leading-tight border-b-2 border-white/20 pb-1 mb-1 group-hover:border-white transition-colors">
        {title}
      </h3>
      <p className="text-sm md:text-base font-medium opacity-90 leading-tight">
        {desc}
      </p>
    </div>
  );
}

// Datos para mapear y animar más fácil
const galleryItems = [
  {
    type: "img",
    src: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=400&h=400&fit=crop",
  },
  {
    type: "img",
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&h=400&fit=crop",
  },
  {
    type: "img",
    src: "https://images.unsplash.com/photo-1619194617062-5a61b9c6a049?q=80&w=400&h=400&fit=crop",
  },
  {
    type: "img",
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&h=400&fit=crop",
  },
  {
    type: "text",
    content: <span className="font-black text-7 shadow-lg">S</span>,
    bg: "bg-[#E99623]",
  },
  {
    type: "text",
    content: (
      <div className="text-center">
        <span className="text-[10px] font-bold border-b border-[#E99623] mb-1 block">
          THE AREPA
        </span>
        <span className="text-2xl font-black">STATION</span>
      </div>
    ),
    bg: "bg-white text-[#E99623]",
  },
  {
    type: "text",
    content: (
      <div className="text-center">
        <span className="text-[10px] font-bold border-b border-[#C21E3A] mb-1 block">
          THE AREPA
        </span>
        <span className="text-2xl font-black">STATION</span>
      </div>
    ),
    bg: "bg-white text-[#C21E3A]",
  },
  {
    type: "text",
    content: <span className="font-black text-5xl uppercase">TAS</span>,
    bg: "bg-[#E99623]",
  },
];

const steps = [
  {
    title: "Greeting the customer",
    desc: "Mis cartas captan la atención con gráficas alineadas...",
  },
  {
    title: "Responding to customers",
    desc: "¡Haz que vivan! Creo espectáculos visuales de colores...",
  },
  {
    title: "Offering the menu",
    desc: "Mis mensajes contienen los espacios en blanco necesarios...",
  },
  {
    title: "Explaining the arepas",
    desc: "El medio es el mensaje. Gestionamos cada pedido...",
  },
  {
    title: "Confirming the order",
    desc: "Verificamos cada detalle para un servicio perfecto.",
  },
  {
    title: "Saying goodbye properly",
    desc: "Un cierre con energía para que siempre vuelvan.",
  },
];
