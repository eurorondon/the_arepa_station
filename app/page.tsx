import React from "react";

export default function LandingPage() {
  const redTAS = "bg-[#C21E3A]";
  const orangeTAS = "bg-[#E99623]";
  const textRedTAS = "text-[#C21E3A]";

  return (
    <main className="min-h-screen font-sans text-white overflow-x-hidden">
      {/* SECCIÓN 1: HERO (Igual que la imagen) */}
      <section
        className={`${redTAS} h-screen flex flex-col items-center justify-center text-center p-6 relative`}
      >
        <h2 className="text-xl tracking-[0.4em] mb-4 font-light">
          GUÍA COSTOMER SERVICE
        </h2>
        <h1 className="text-[12rem] md:text-[18rem] font-black leading-none text-[#E99623]">
          TAS
        </h1>
        <button className="mt-8 bg-white text-[#C21E3A] px-12 py-3 font-bold rounded-sm hover:bg-gray-100 transition shadow-lg">
          INICIAR
        </button>
        <p className="absolute bottom-10 right-10 text-xs italic opacity-80">
          SERVICIO QUE DEJA HUELLA
        </p>
      </section>

      {/* SECCIÓN 2: BIENVENIDA */}
      <section
        className={`${orangeTAS} py-20 px-10 md:px-24 grid md:grid-cols-2 gap-10`}
      >
        <div className="max-w-xl">
          <p
            className={`${textRedTAS} font-bold mb-4 uppercase tracking-wider text-lg`}
          >
            Hola, ¿cómo puedo ayudarte?
          </p>
          <h2 className="text-6xl md:text-8xl font-black leading-tight text-white uppercase">
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
      </section>

      {/* SECCIÓN 3: GALERÍA DE IMÁGENES (Manteniendo los cuadros de la imagen) */}
      <section
        className={`${redTAS} py-12 px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-4`}
      >
        {/* Imágenes superiores */}
        <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=400&h=400&fit=crop"
            alt="Arepas"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&h=400&fit=crop"
            alt="Food"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1619194617062-5a61b9c6a049?q=80&w=400&h=400&fit=crop"
            alt="Service"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&h=400&fit=crop"
            alt="Detail"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Logos/Gráficos inferiores (Fiel a la imagen) */}
        <div
          className={`${orangeTAS} aspect-square rounded-[2rem] flex items-center justify-center font-black text-7xl shadow-lg`}
        >
          S
        </div>
        <div className="bg-white text-[#E99623] aspect-square rounded-[2rem] flex flex-col items-center justify-center p-4 shadow-lg border border-gray-100">
          <span className="text-[10px] md:text-xs font-bold border-b border-[#E99623] mb-1">
            THE AREPA
          </span>
          <span className="text-lg md:text-2xl font-black text-center leading-none">
            STATION
          </span>
        </div>
        <div className="bg-white text-[#C21E3A] aspect-square rounded-[2rem] flex flex-col items-center justify-center p-4 shadow-lg border border-gray-100">
          <span className="text-[10px] md:text-xs font-bold border-b border-[#C21E3A] mb-1">
            THE AREPA
          </span>
          <span className="text-lg md:text-2xl font-black text-center leading-none">
            STATION
          </span>
        </div>
        <div
          className={`${orangeTAS} aspect-square rounded-[2rem] flex items-center justify-center font-black text-5xl shadow-lg uppercase`}
        >
          TAS
        </div>
      </section>

      {/* SECCIÓN 4: LO QUE HAGO (Estructura EXACTA de la imagen) */}
      <section
        className={`${orangeTAS} py-20 px-10 md:px-24 grid md:grid-cols-3 gap-12`}
      >
        {/* Título a la izquierda */}
        <div className="flex items-center">
          <h2
            className={`text-6xl md:text-7xl font-black ${textRedTAS} uppercase leading-[0.85]`}
          >
            Lo que <br /> hago
          </h2>
        </div>

        {/* Dos columnas de texto a la derecha */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-x-12 gap-y-12">
          <StepOriginal
            title="Greeting the customer"
            desc="Mis cartas captan la atención con gráficas alineadas, trato con garra y elementos visuales actuales."
          />
          <StepOriginal
            title="Responding to customers"
            desc="¡Haz que vivan! Creo espectáculos visuales de colores e imágenes más grandes que la vida."
          />
          <StepOriginal
            title="Offering the menu"
            desc="Mis mensajes contienen los espacios en blanco necesarios visuales que hablan por sí solos."
          />
          <StepOriginal
            title="Explaining the arepas"
            desc="El medio es el mensaje. Gestionamos cada pedido con precisión y claridad visual."
          />
          <StepOriginal
            title="Confirming the order"
            desc="Mis cartas captan la atención con gráficas alineadas, trato con garra y elementos visuales actuales."
          />
          <StepOriginal
            title="Saying goodbye properly"
            desc="Mis carteles captan la atención con gráficos alineados, trato con garra y elementos visuales actuales."
          />
        </div>
      </section>

      {/* SECCIÓN 5: FOOTER (Estructura de la imagen) */}
      <footer
        className={`${redTAS} py-16 px-10 md:px-24 relative overflow-hidden`}
      >
        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          <div
            className={`${orangeTAS} p-10 rounded-2xl shadow-xl flex flex-col justify-center`}
          >
            <h3 className="font-black text-3xl mb-4 uppercase">Contacto</h3>
            <p className="text-sm font-bold opacity-90">EMAIL@EMAIL.COM</p>
            <p className="text-sm font-bold opacity-90">@INSTAGRAM</p>
          </div>
          <div
            className={`${orangeTAS} p-10 rounded-2xl shadow-xl flex flex-col justify-center`}
          >
            <h3 className="font-black text-3xl mb-4 uppercase">Seguir</h3>
            <p className="text-sm font-bold opacity-90 uppercase tracking-widest">
              The Arepa Station en Instagram
            </p>
          </div>
        </div>
        {/* TAS Gigante de fondo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <span className="text-[20rem] md:text-[35rem] font-black leading-none text-white select-none">
            TAS
          </span>
        </div>
      </footer>
    </main>
  );
}

// Subcomponente para los pasos con el diseño original
function StepOriginal({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-xl text-white uppercase tracking-tight leading-tight border-b-2 border-white/20 pb-1 mb-1">
        {title}
      </h3>
      <p className="text-sm md:text-base font-medium opacity-90 leading-tight">
        {desc}
      </p>
    </div>
  );
}
