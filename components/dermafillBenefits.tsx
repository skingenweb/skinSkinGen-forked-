"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const bloques = [
  {
    title: "Molécula de HA con alta pureza:",
    content:
      "DERMAFILL® es una colección de relleno dérmico de HA puro, con solo un 1% de modificación de la molécula de HA.",
  },
  {
    title: "PH neutro con DERMAFILL:",
    content:
      "El PH neutro y controlado con precisión de DERMAFILL puede ayudar a minimizar la irritación y el dolor potencial que podría ser el resultado de una inyección dérmica.",
  },
  {
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743389671/JERINGA_NG_zswtfg.png",
    content: "Ayuda a minimizar la irritación en el momento de la aplicación.",
  },
  {
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743389671/JERINGA_NG_zswtfg.png",
    content: "Una solución pura para una mayor biocompatibilidad.",
  },
];

export default function DermafillBenefits() {
  return (
    <section className="w-full bg-white text-black">
      {/* VIDEO */}
      <div className="w-full max-w-5xl mx-auto px-4 py-10">
        <video
          src="https://res.cloudinary.com/dli9xljyz/video/upload/v1741645734/background-v4_1_gueaw1.mp4"
          controls
          className="w-full rounded-lg shadow-md"
          autoPlay
        >
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      {/* BANNER */}
      <div className="bg-black text-white text-center py-4 text-sm font-semibold tracking-wider">
        CONOCE SUS BENEFICIOS
      </div>

      {/* SECCIÓN DE SLIDES */}
      <div className="w-full flex h-screen overflow-hidden">
        {/* Imagen izquierda solo en desktop */}
        <div className="hidden md:block w-1/2 relative sticky top-0 h-screen">
          <Image
            src="https://res.cloudinary.com/dli9xljyz/image/upload/v1743389671/GEL_AH_1__n8uyho.png"
            alt="Fondo HA"
            fill
            className="object-cover"
          />
        </div>

        {/* Slides scrollables */}
        <div
          className="w-full md:w-1/2 h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar"
          style={{ scrollSnapType: "y mandatory" }}
        >
          {/* Slide 0: Imagen introductoria solo en mobile */}
          <div className="block md:hidden h-screen flex items-center justify-center px-6 snap-start cursor-move ">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1743389671/GEL_AH_1__n8uyho.png"
              alt="Fondo HA"
              width={280}
              height={280}
              className="object-contain"
            />
          </div>

          {/* Slides de beneficios */}
          {bloques.map((bloque, index) => (
            <div
              key={index}
              className="h-screen flex items-center justify-center px-6 snap-start cursor-row-resize"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md text-justify space-y-4"
              >
                {bloque.title && (
                  <h3 className="text-3xl font-bold italic">{bloque.title}</h3>
                )}
                {bloque.image && (
                  <Image
                    src={bloque.image}
                    alt="Ilustración"
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                )}
                <p className="text-lg leading-relaxed">{bloque.content}</p>
              </motion.div>
            </div>
          ))}
          
        </div>
      </div>
      <div className="flex justify-center my-4">
      <button onClick={() => window.location.href = "https://wa.me/573185797100"} className="bg-black text-white px-6 py-2 mr-4 text-sm hover:bg-black transition">
          Comprar
      </button>
      <button onClick={() => window.location.href = "/productos/dermafill"}  className="bg-black text-white px-6 py-2  text-sm hover:bg-black transition">
          Productos
      </button>
      </div>
      
    </section>
  );
}
