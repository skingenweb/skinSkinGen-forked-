"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SkingenuitySkinPage() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-white">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745219484/SKINGENUITY_HAIR_LOGO_qcw6vi.png"
          alt="Skingenuity Hair Banner"
          width={400}
          height={80}
          className="w-[90%] max-w-[700px] object-contain"
        />
      </div>

      {/* Sección principal */}
      <div className="w-full bg-white relative mt-8">
        {/* Título morado */}
        <div className="absolute top-0 left-0 bg-[#041E46] h-[80px] w-full md:w-[40%] text-white text-lg md:text-2xl rounded-none md:rounded-r-lg flex items-center justify-center px-4">
          SOLUCIÓN PARA LA REGENERACIÓN FACIAL
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-end pt-24 md:pt-8">
          {/* Lado izquierdo con producto y texto */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 my-auto">
            <div className="mt-4 text-center md:text-left text-xs text-gray-800 leading-snug max-w-xs md:max-w-lg md:pl-8">
              <p className="text-[#041E46] font-semibold text-[24px] md:text-[32px]">
                DETIENE LA CAÍDA Y MEJORA DEL CABELLO NUEVO EN MÁS DEL 45%
                DURANTE UN PERIODO DE TRES MESES (6 SESIONES).
              </p>
            </div>
          </div>

          {/* Imagen mujer lado derecho */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 ">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745219484/SKINGENUITY_HAIR_HOMBRE_PRESENTACIO%CC%81N_k3d8eu.png"
              alt="Hombre con abundante cabello"
              width={440}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <Image
                src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745219484/SKINGENUITY_HAIR_CAJA_ct3wsg.png"
                alt="Skingenuity Solución"
                width={400}
                height={160}
                className="object-contain"
              />
      
              {/* Título y descripción */}
              <div className="text-center leading-snug">
                <h2 className="text-xl md:text-2xl text-[#041E46] font-bold">
                SKINGENUITY HAIR
                </h2>
                <p className="text-sm md:text-base text-gray-700">
                Restauración Capilar
                  <br />
                  Caja x 6 Viales de 2 ml
                </p>
              </div>
      
      {/* Botones */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex gap-4 flex-wrap justify-center mb-10 px-4 mt-8"
      >
        <button onClick={() => window.location.href = "https://wa.me/573185797100"} className="bg-[#041E46] text-white px-6 py-2  text-sm hover:bg-[#041E46] transition">
          Comprar
        </button>
        <button onClick={() => window.location.href = "/skinhair/beneficios"} className="bg-[#041E46] text-white px-6 py-2  text-sm hover:bbg-[#041E46] transition">
          Conoce sus Beneficios
        </button>
        <button onClick={() => window.location.href = "/skingenuity"} className="border border-[#041E46] text-[#041E46] px-6 py-2  text-sm hover:bg-purple-100 transition">
          Acerca de Skingenuity
        </button>
      </motion.div>
    </div>
  );
}
