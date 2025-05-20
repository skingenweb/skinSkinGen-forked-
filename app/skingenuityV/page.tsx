"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SkingenuitySkinPage() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-white">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745257494/SKINGENUITY_GEL_VAGINAL_LOGO_lrjdwd.png"
          alt="Skingenuity Hair Banner"
          width={400}
          height={80}
          className="w-[90%] max-w-[700px] object-contain"
        />
      </div>

      {/* Sección principal */}
      <div className="w-full bg-white relative mt-8">
        {/* Título morado */}
        <div className="absolute top-0 left-0 bg-[#5A2D68] h-[80px] w-full md:w-[45%] text-white text-lg md:text-2xl rounded-none md:rounded-r-lg flex items-center justify-center px-4">
        GEL DE REJUVENECIMIENTO VAGINAL
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-end pt-24 md:pt-8">
          {/* Lado izquierdo con producto y texto */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 my-auto">
            <div className="mt-4 text-center md:text-left text-xs text-gray-800 leading-snug max-w-xs md:max-w-lg md:pl-8">
              <p className="text-black font-semibold w-[500px] text-[24px] md:text-[32px]">
                El producto <strong className="text-[#5A2D68]">SKINGENUITY® VR  </strong>es un gel con factores de 
                crecimiento y Acido Hialuronico, diseñado para ser el
                tratamiento de primera línea en el rejuvenecimiento vaginal.
              </p>
              <p className="text-[#5A2D68] font-semibold mt-4 text-[24px]">
                CLÍNICAMENTE PROBADO
              </p>
            </div>
          </div>

          {/* Imagen mujer lado derecho */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 ">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745253762/SKINGENUITY_VR_MUJER_PRESENTACIO%CC%81N_rxcmbv.png"
              alt="Mujer saludable"
              width={440}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <Image
        src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745254282/SKINGENUITY_VR_CAJA_PRESENTACIO%CC%81N_w39zry.png"
        alt="Skingenuity Solución"
        width={400}
        height={160}
        className="object-contain mt-10"
      />

      {/* Título y descripción */}
      <div className="text-center leading-snug">
        <h2 className="text-xl md:text-2xl text-[#5A2D68] font-bold">
          SKINGENUITY VR
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Rejuvenecimiento vaginal
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
        <button onClick={() => window.location.href = "https://wa.me/573185797100"} className="bg-[#5A2D68]  text-white px-6 py-2  text-sm hover:bg-[#5A2D68]  transition">
          Comprar
        </button>
        <button onClick={() => window.location.href = "/skingenuityV/beneficios"} className="bg-[#5A2D68]  text-white px-6 py-2  text-sm hover:bbg-[#5A2D68]  transition">
          Conoce sus Beneficios
        </button>
        <button onClick={() => window.location.href = "/skingenuity"} className="border border-[#5A2D68] text-[#5A2D68] px-6 py-2  text-sm hover:bg-purple-100 transition">
          Acerca de Skingenuity
        </button>
      </motion.div>
    </div>
  );
}
