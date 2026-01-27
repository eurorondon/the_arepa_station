import React from "react";

export default function LandingPage() {
  const redTAS = "bg-[#C21E3A]";
  const orangeTAS = "bg-[#E99623]";
  const textRedTAS = "text-[#C21E3A]";
  const textOrangeTAS = "text-[#E99623]";

  return (
    <main className="min-h-screen font-sans text-white bg-[#f8f8f8] overflow-x-hidden px-4 py-4 md:px-8 md:py-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* SECCIÓN 1: HERO MODERNO */}
        <section
          className={`${redTAS} min-h-[80vh] rounded-[2.5rem] flex flex-col items-center justify-center text-center p-8 relative shadow-2xl overflow-hidden`}
        >
          {/* Círculo decorativo de fondo */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <h2 className="text-sm md:text-lg tracking-[0.5em] mb-4 font-medium opacity-80 uppercase">
            Guía Customer Service
          </h2>
          <h1
            className={`text-[8rem] md:text-[14rem] font-black leading-none ${textOrangeTAS} drop-shadow-2xl select-none`}
          >
            TAS
          </h1>
          <button className="mt-8 bg-white text-[#C21E3A] px-10 py-4 rounded-full font-black text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 uppercase">
            Iniciar Experiencia
          </button>
          <p className="absolute bottom-10 right-10 text-[10px] md:text-xs font-bold tracking-[0.2em] opacity-60">
            SERVICIO QUE DEJA HUELLA
          </p>
        </section>

        {/* SECCIÓN 2: BIENVENIDA CON CARD ESTILO "BENTO" */}
        <section
          className={`${orangeTAS} rounded-[2.5rem] p-10 md:p-20 grid md:grid-cols-2 gap-12 items-center shadow-xl`}
        >
          <div className="space-y-6">
            <span className="bg-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Welcome
            </span>
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Hi, how can I help you?
            </h2>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-inner">
            <p className="text-lg md:text-xl leading-relaxed font-medium italic">
              "Sabemos que hablar inglés puede ser un desafío. Aquí encontrarás
              las herramientas para comunicarte con total seguridad."
            </p>
            <button className="mt-8 group flex items-center gap-3 font-bold text-white hover:underline transition-all">
              MIRA LO QUE HE HECHO
              <span className="bg-white text-[#E99623] p-2 rounded-full group-hover:translate-x-2 transition-transform">
                →
              </span>
            </button>
          </div>
        </section>

        {/* SECCIÓN 3: GALERÍA DE IMÁGENES REDONDEADAS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-[2rem] overflow-hidden shadow-lg group relative"
            >
              <img
                src={`https://images.unsplash.com/photo-${i === 1 ? "1623341214825-9f4f963727da" : i === 2 ? "1513104890138-7c749659a591" : i === 3 ? "1619194617062-5a61b9c6a049" : "1555939594-58d7cb561ad1"}?q=80&w=600&fit=crop`}
                alt="Gallery"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-xs font-bold tracking-widest">
                  TAS GALLERY
                </span>
              </div>
            </div>
          ))}

          {/* Logos con estilo moderno */}
          <div
            className={`${orangeTAS} aspect-square rounded-[2rem] flex items-center justify-center font-black text-7xl shadow-lg`}
          >
            S
          </div>
          <div className="bg-white aspect-square rounded-[2rem] flex flex-col items-center justify-center p-4 shadow-lg border border-gray-100">
            <span
              className={`${textOrangeTAS} text-xs font-bold border-b-2 border-[#E99623] mb-1`}
            >
              THE AREPA
            </span>
            <span className={`${textOrangeTAS} text-2xl font-black`}>
              STATION
            </span>
          </div>
          <div className="bg-white aspect-square rounded-[2rem] flex flex-col items-center justify-center p-4 shadow-lg border border-gray-100">
            <span
              className={`${textRedTAS} text-xs font-bold border-b-2 border-[#C21E3A] mb-1`}
            >
              THE AREPA
            </span>
            <span className={`${textRedTAS} text-2xl font-black`}>STATION</span>
          </div>
          <div
            className={`${orangeTAS} aspect-square rounded-[2rem] flex items-center justify-center font-black text-5xl shadow-lg`}
          >
            TAS
          </div>
        </section>

        {/* SECCIÓN 4: PASOS / LO QUE HAGO */}
        <section className="bg-white rounded-[2.5rem] p-12 md:p-24 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-3 gap-12">
            <h2
              className={`text-6xl md:text-7xl font-black ${textRedTAS} leading-[0.85] uppercase`}
            >
              Lo que <br />
              <span className={textOrangeTAS}>hago</span>
            </h2>
            <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
              <ModernStep
                title="Greeting"
                desc="Primer contacto con carisma y gráficas de alto impacto."
                color="#C21E3A"
              />
              <ModernStep
                title="Responding"
                desc="Espectáculos visuales que conectan emocionalmente."
                color="#E99623"
              />
              <ModernStep
                title="Menu"
                desc="Diseño limpio que permite que la comida hable sola."
                color="#C21E3A"
              />
              <ModernStep
                title="Goodbye"
                desc="Un cierre profesional que garantiza el regreso."
                color="#E99623"
              />
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: FOOTER CARDS */}
        <footer
          className={`${redTAS} rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden`}
        >
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 hover:bg-white/20 transition-colors">
              <h3 className="font-black text-3xl mb-4">Contacto</h3>
              <p className="text-lg opacity-80 underline underline-offset-4 decoration-tasOrange">
                hola@thearepastation.com
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 hover:bg-white/20 transition-colors">
              <h3 className="font-black text-3xl mb-4">Seguir</h3>
              <p className="text-lg opacity-80 underline underline-offset-4 decoration-tasOrange">
                @thearepastation
              </p>
            </div>
          </div>
          <div className="mt-12 text-center opacity-20 pointer-events-none">
            <span className="text-[12rem] font-black leading-none select-none">
              TAS
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}

function ModernStep({
  title,
  desc,
  color,
}: {
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <div className="group p-6 rounded-[2rem] bg-[#fdfdfd] border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <div
        className="w-12 h-1 mb-4 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      <h3 className="font-black text-xl mb-2 text-gray-800 uppercase tracking-tight group-hover:text-[#C21E3A] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed font-medium">
        {desc}
      </p>
    </div>
  );
}
