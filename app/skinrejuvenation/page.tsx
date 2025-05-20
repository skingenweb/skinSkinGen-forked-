"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SkingenuitySkinPage() {
  
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-white">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1744296905/SKINGENUITY_SKIN_LOGO_jyrzwk.png"
          alt="Skingenuity Skin Banner"
          width={400}
          height={80}
          className="w-[90%] max-w-[700px] object-contain"
        />
      </div>

      {/* Sección principal */}
      <div className="w-full bg-white relative mt-8">
        {/* Título morado */}
        <div className="absolute top-0 left-0 bg-[#5A2D68] h-[80px] w-full md:w-[40%] text-white text-lg md:text-2xl rounded-none md:rounded-r-lg flex items-center justify-center px-4">
          SOLUCIÓN PARA LA REGENERACIÓN FACIAL
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-end pt-24 md:pt-8">
          {/* Lado izquierdo con producto y texto */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 my-auto">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/t_banner/v1744295652/SKINGENUITY_SKIN_CAJA_kt1rc4.png"
              alt="Producto Skin"
              width={320}
              height={180}
              className="w-[70%] max-w-[250px] md:max-w-[800px] object-contain"
            />
            <div className="mt-4 text-center md:text-left text-xs text-gray-800 leading-snug max-w-xs md:max-w-lg md:pl-8">
              <p className="text-[#5A2D68] font-semibold text-[24px] md:text-[32px]">
                SKINGENUITY SOLUCIÓN
              </p>
              <p>Regeneración facial</p>
              <p>Caja x 6 viales de 2ml</p>
              <p className="text-[#5A2D68] font-semibold mt-1">
                CLÍNICAMENTE PROBADO
              </p>
            </div>
          </div>

          {/* Imagen mujer lado derecho */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 ">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1744295652/SKINGENUITY_SKIN_MUJER_PRESENTACIO%CC%81N_nwchoh.png"
              alt="Mujer rejuvenecimiento"
              width={440}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Texto principal */}
      <div className="text-center px-6 py-10 max-w-xl">
        <p className="uppercase text-black tracking-wide text-sm md:text-2xl mb-4">
          REPARA, REGENERA Y MEJORA LOS SIGNOS DEL ENVEJECIMIENTO Y LA SALUD
          GENERAL DE LA PIEL.
        </p>

        <p className="text-sm md:text-lg mt-8 text-gray-700">
          <strong className="text-[#5A2D68]">SkinGenuity Skin</strong> puede
          hacer parte de sus Procedimientos como microagujas y/o tratamientos
          con láser.
        </p>
      </div>

      <p className="uppercase text-[#5A2D68] tracking-wide font-bold text-sm md:text-2xl mb-4">
      MEDICINA REGENERATIVA PREMIUM
        </p>
      {/* Botones */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex gap-4 flex-wrap justify-center mb-10 px-4"
      >
        <button onClick={() => window.location.href = "https://wa.me/573185797100"} className="bg-[#5A2D68] text-white px-6 py-2  text-sm hover:bg-[#5A2D68] transition">
          Comprar
        </button>
        <button onClick={() => window.location.href = "/skinrejuvenation/beneficios"} className="bg-[#5A2D68] text-white px-6 py-2  text-sm hover:bg-[#5A2D68] transition">
          Conoce sus Beneficios
        </button>
        <button onClick={() => window.location.href = "/skingenuity"} className="border border-[#5A2D68] text-[#5A2D68] px-6 py-2  text-sm hover:bg-purple-100 transition">
          Acerca de Skingenuity
        </button>
      </motion.div>
    </div>
  );
}
