"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Configuración de animación
const fadeIn: any = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

// Datos del Grid para facilitar el mantenimiento
const GRID_ITEMS = [
  {
    id: 1,
    type: "image",
    src: "/images/1.png",
    alt: "Greetings",
    href: "/menu/greetings",
    delay: 0,
  },
  {
    id: 2,
    type: "image",
    src: "/images/2.png",
    alt: "Food",
    href: "/menu/offeringMenu",
    delay: 0.1,
  },
  {
    id: 3,
    type: "image",
    src: "/images/3.png",
    alt: "Service",
    href: "/menu/explaining",
    delay: 0.2,
  },
  {
    id: 4,
    type: "image",
    src: "/images/4.png",
    alt: "Detail",
    href: "/menu/comfirming",
    delay: 0.3,
  },
  {
    id: 5,
    type: "image",
    src: "/images/5.png",
    alt: "Detail",
    href: "/menu/charge",
    delay: 0.3,
  },
  {
    id: 6,
    type: "image",
    src: "/images/6.png",
    alt: "Detail",
    href: "/menu/thank",
    delay: 0.3,
  },
  {
    id: 7,
    type: "image",
    src: "/images/7.png",
    alt: "Detail",
    href: "/menu/dismiss",
    delay: 0.3,
  },
  {
    id: 8,
    type: "image",
    src: "/images/8.png",
    alt: "Detail",
    href: "/menu/phone-call",
    delay: 0.3,
  },
];

export default function LandingPage() {
  const redTAS = "bg-[#C21E3A]";
  const orangeTAS = "bg-[#E99623]";
  const textRedTAS = "text-[#C21E3A]";
  const textOrangeTAS = "text-[#E99623]";

  return (
    <main className="min-h-screen font-sans text-white overflow-x-hidden bg-white">
      {/* SECCIÓN 1: HERO */}
      <section
        className={`${redTAS} h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 relative overflow-hidden`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-full"
        >
          <h2 className="text-lg md:text-xl tracking-[0.4em] mb-4 font-light italic uppercase">
            Guía Customer Service
          </h2>
          <h1
            className={`text-[10rem] md:text-[18rem] font-black leading-none ${textOrangeTAS} drop-shadow-2xl select-none break-words px-2`}
          >
            TAS
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-white text-[#C21E3A] px-12 py-3 font-bold rounded-sm shadow-lg uppercase tracking-tight"
          >
            Iniciar
          </motion.button>
        </motion.div>
        <p className="absolute bottom-10 right-10 text-[10px] md:text-xs italic opacity-80 tracking-widest uppercase">
          Servicio que deja huella
        </p>
      </section>

      {/* SECCIÓN 2: BIENVENIDA */}
      <motion.section
        {...fadeIn}
        className={`${orangeTAS} py-24 px-10 md:px-24 grid md:grid-cols-2 gap-10`}
      >
        <div className="max-w-xl">
          <p
            className={`${textRedTAS} font-black mb-4 uppercase tracking-wider text-lg`}
          >
            Hola, ¿cómo puedo ayudarte?
          </p>
          <h2 className="text-5xl md:text-8xl font-black leading-tight text-white uppercase italic">
            Hi, how can I help you?
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-8 max-w-lg">
          <p className="text-lg md:text-xl leading-relaxed font-medium">
            "Sabemos que hablar inglés puede ser un desafío, especialmente en el
            servicio al cliente... Aquí encontrarás las herramientas que
            necesitas para comunicarte con confianza y facilidad."
          </p>
          <button className="border-2 border-white w-fit px-8 py-3 font-bold rounded-lg hover:bg-white hover:text-[#E99623] transition-all uppercase tracking-tighter">
            Mira lo que he hecho
          </button>
        </div>
      </motion.section>

      {/* SECCIÓN 3: GALERÍA DE IMÁGENES DINÁMICA CON LINKS */}
      <section
        id="menu-grid"
        className={`${redTAS} py-12 px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6`}
      >
        {/* Mapeo de imágenes con Link */}
        {GRID_ITEMS.map((item) => (
          <Link key={item.id} href={item.href} className="group cursor-pointer">
            <motion.div
              {...fadeIn}
              transition={{ delay: item.delay }}
              className="aspect-square rounded-[2rem] overflow-hidden shadow-xl"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </Link>
        ))}
      </section>

      {/* SECCIÓN 4: LO QUE HAGO */}
      <section
        className={`${orangeTAS} py-24 px-10 md:px-24 grid md:grid-cols-3 gap-12`}
      >
        <motion.div {...fadeIn} className="flex items-start">
          <h2
            className={`text-6xl md:text-7xl font-black ${textRedTAS} uppercase leading-[0.85]`}
          >
            Lo que <br /> hago
          </h2>
        </motion.div>

        <div className="md:col-span-2 grid md:grid-cols-2 gap-x-12 gap-y-12">
          <StepOriginal
            title="Greeting the customer"
            desc="Mis cartas captan la atención con gráficas alineadas..."
            delay={0.1}
          />
          <StepOriginal
            title="Responding to customers"
            desc="¡Haz que vivan! Creo espectáculos visuales de colores..."
            delay={0.2}
          />
          <StepOriginal
            title="Offering the menu"
            desc="Mis mensajes contienen los espacios en blanco necesarios..."
            delay={0.3}
          />
          <StepOriginal
            title="Explaining the arepas"
            desc="El medio es el mensaje. Gestionamos cada pedido..."
            delay={0.4}
          />
          <StepOriginal
            title="Confirming the order"
            desc="Mis cartas captan la atención con gráficas alineadas..."
            delay={0.5}
          />
          <StepOriginal
            title="Saying goodbye properly"
            desc="Mis carteles captan la atención con gráficos alineados..."
            delay={0.6}
          />
        </div>
      </section>

      {/* SECCIÓN 5: FOOTER */}
      <footer
        className={`${redTAS} py-20 px-10 md:px-24 relative overflow-hidden`}
      >
        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          <motion.div
            {...fadeIn}
            className={`${orangeTAS} p-12 rounded-[2.5rem] shadow-xl flex flex-col justify-center`}
          >
            <h3 className="font-black text-4xl mb-4 uppercase tracking-tighter italic">
              Contacto
            </h3>
            <p className="text-sm md:text-lg font-bold opacity-90 uppercase tracking-widest">
              hola@thearepastation.com
            </p>
          </motion.div>
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className={`${orangeTAS} p-12 rounded-[2.5rem] shadow-xl flex flex-col justify-center`}
          >
            <h3 className="font-black text-4xl mb-4 uppercase tracking-tighter italic">
              Seguir
            </h3>
            <p className="text-sm md:text-lg font-bold opacity-90 uppercase tracking-widest">
              @thearepastation
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <span className="text-[20rem] md:text-[45rem] font-black leading-none text-white select-none uppercase">
            TAS
          </span>
        </div>
      </footer>
    </main>
  );
}

function StepOriginal({
  title,
  desc,
  delay,
}: {
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col gap-2"
    >
      <h3 className="font-bold text-xl text-white uppercase tracking-tight leading-tight border-b-2 border-white/20 pb-1 mb-1">
        {title}
      </h3>
      <p className="text-sm md:text-base font-medium opacity-90 leading-tight">
        {desc}
      </p>
    </motion.div>
  );
}
