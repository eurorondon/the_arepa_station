import React from "react";

export default function LandingPage() {
  // Definimos los colores en variables para que sea más fácil de leer
  const redTAS = "bg-[#C21E3A]";
  const orangeTAS = "bg-[#E99623]";
  const textRedTAS = "text-[#C21E3A]";
  const textOrangeTAS = "text-[#E99623]";

  return (
    <main className="min-h-screen font-sans text-white overflow-x-hidden">
      {/* SECCIÓN 1: HERO */}
      <section
        className={`${redTAS} h-screen flex flex-col items-center justify-center text-center p-6 relative`}
      >
        <h2 className="text-xl tracking-[0.3em] mb-4 font-light">
          GUÍA COSTOMER SERVICE
        </h2>
        <h1
          className={`text-[10rem] md:text-[15rem] font-black leading-none ${textOrangeTAS}`}
        >
          TAS
        </h1>
        <button className="mt-8 bg-white text-[#C21E3A] px-12 py-3 font-bold text-lg hover:scale-105 transition-transform">
          INICIAR
        </button>
        <p className="absolute bottom-10 right-10 text-xs italic tracking-widest">
          SERVICIO QUE DEJA HUELLA
        </p>
      </section>

      {/* SECCIÓN 2: BIENVENIDA */}
      <section
        className={`${orangeTAS} p-12 md:p-24 grid md:grid-cols-2 gap-10 items-center`}
      >
        <div>
          <p className={`${textRedTAS} font-black mb-2 text-lg`}>
            HOLA, CÓMO PUEDO AYUDARTE
          </p>
          <h2 className="text-5xl md:text-7xl font-black leading-tight text-white">
            HI, HOW CAN I HELP YOU?
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-6 border-l-2 border-white/30 pl-8">
          <p className="text-lg leading-relaxed text-white">
            "Sabemos que hablar inglés puede ser un desafío, especialmente en el
            servicio al cliente... Aquí encontrarás las herramientas que
            necesitas para comunicarte con confianza y facilidad."
          </p>
          <button className="border-2 border-white w-fit px-8 py-3 font-bold hover:bg-white hover:text-[#E99623] transition-all">
            MIRA LO QUE HE HECHO
          </button>
        </div>
      </section>

      {/* SECCIÓN 3: GALERÍA Y LOGOS */}
      <section
        className={`${redTAS} p-4 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-4`}
      >
        {/* Imagen 1 */}
        <div className="aspect-square relative overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500&auto=format&fit=crop"
            alt="Arepa 1"
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* Imagen 2 */}
        <div className="aspect-square relative overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=500&auto=format&fit=crop"
            alt="Arepa 2"
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* Imagen 3 */}
        <div className="aspect-square relative overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1619194617062-5a61b9c6a049?q=80&w=500&auto=format&fit=crop"
            alt="Service"
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* Imagen 4 */}
        <div className="aspect-square relative overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500&auto=format&fit=crop"
            alt="Arepa 4"
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Logos Inferiores */}
        <div
          className={`${orangeTAS} aspect-square flex items-center justify-center font-black text-7xl md:text-8xl`}
        >
          S
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center p-4">
          <span
            className={`${textOrangeTAS} text-[10px] md:text-xs font-bold border-b-2 border-[#E99623] mb-1`}
          >
            THE AREPA
          </span>
          <span className={`${textOrangeTAS} text-xl md:text-3xl font-black`}>
            STATION
          </span>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center p-4">
          <span
            className={`${textRedTAS} text-[10px] md:text-xs font-bold border-b-2 border-[#C21E3A] mb-1`}
          >
            THE AREPA
          </span>
          <span className={`${textRedTAS} text-xl md:text-3xl font-black`}>
            STATION
          </span>
        </div>
        <div
          className={`${orangeTAS} aspect-square flex items-center justify-center font-black text-5xl md:text-6xl`}
        >
          TAS
        </div>
      </section>

      {/* SECCIÓN 4: PASOS / LO QUE HAGO */}
      <section className={`${orangeTAS} p-12 md:p-24`}>
        <div className="grid md:grid-cols-3 gap-12">
          <h2
            className={`text-6xl md:text-8xl font-black ${textRedTAS} uppercase leading-none`}
          >
            Lo que <br /> hago
          </h2>
          <div className="md:col-span-2 grid md:grid-cols-2 gap-x-12 gap-y-16">
            <Step
              title="Greeting the customer"
              desc="Mis cartas captan la atención con gráficas alineadas, trato con garra y elementos visuales actuales."
            />
            <Step
              title="Responding to customers"
              desc="¡Haz que vivan! Creo espectáculos visuales de colores e imágenes más grandes que la vida."
            />
            <Step
              title="Offering the menu"
              desc="Mis mensajes contienen los espacios en blanco necesarios visuales que hablan por sí solos."
            />
            <Step
              title="Confirming the order"
              desc="El medio es el mensaje. Gestionamos cada pedido con precisión y claridad visual."
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: FOOTER */}
      <footer
        className={`${redTAS} p-12 md:p-20 relative overflow-hidden min-h-[400px] flex items-center`}
      >
        <div className="relative z-10 grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className={`${orangeTAS} p-8 flex flex-col gap-2`}>
            <h3 className="font-black text-2xl">CONTACTO</h3>
            <p className="text-sm font-medium uppercase">
              email@thearepastation.com
            </p>
          </div>
          <div className={`${orangeTAS} p-8 flex flex-col gap-2`}>
            <h3 className="font-black text-2xl">SEGUIR</h3>
            <p className="text-sm font-medium uppercase">@thearepastation</p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <span className="text-[25rem] md:text-[40rem] font-black leading-none">
            TAS
          </span>
        </div>
      </footer>
    </main>
  );
}

function Step({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border-t border-white/40 pt-4">
      <h3 className="font-black text-xl mb-3 uppercase">{title}</h3>
      <p className="text-sm leading-relaxed font-medium opacity-90">{desc}</p>
    </div>
  );
}
