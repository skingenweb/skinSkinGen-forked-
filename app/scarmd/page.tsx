"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SkingenuitySkinPage() {
  return (
    <div className="w-full flex flex-col items-center  bg-[url('https://res.cloudinary.com/dli9xljyz/image/upload/v1745303764/SCAR_MD_MOLECULAS_FONDO_hlz76a.png')] bg-cover bg-center">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745303975/SCAR_MD_LOGO_nwkhke.png"
          alt="Skingenuity Hair Banner"
          width={400}
          height={80}
          className="w-[400px] max-w-[700px] object-contain"
        />
      </div>

      {/* Sección principal */}
      <div className="w-full bg-white relative mt-8">
        {/* Título morado */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end pt-24 md:pt-8">
          {/* Lado izquierdo con producto y texto */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 my-auto">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745303736/SCAR_MD_ESFERAS_waej79.png"
              alt="Hombre con abundante cabello"
              width={440}
              height={500}
              className="w-[300px] h-auto object-contain mx-auto"
            />
            <div className="mt-4 mx-auto text-center md:text-left text-xs text-gray-800 leading-snug max-w-xs md:max-w-lg md:pl-8">
              <p className="text-black font-semibold text-[18px] md:text-[24px]">
                ScarMD™ es una tecnología de siliconas refinadas y de secado
                rápido, clínicamente probadas para el tratamiento de cicatrices.
              </p>
            </div>
          </div>

          {/* Imagen mujer lado derecho */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 ">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745303738/SCAR_MD_HERIDA_yoxfki.png"
              alt="Hombre con abundante cabello"
              width={440}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      

      {/* Título y descripción */}
      <div className="text-center leading-snug flex mt-8">
        <div>
        <h2 className="text-xl md:text-2xl text-[#041E46] font-bold">
        ScarMD Gel
        </h2>
        <Image
        src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745303765/SCAR_MD_PRESENTACIO%CC%81N_GEL_r5zb8f.png"
        alt="Skingenuity Solución"
        width={400}
        height={160}
        className="object-contain"
      />
        <p className="text-sm md:text-base text-gray-700">
        Ideal para todo tipo de
        Cicatrices.
        </p>
        </div>
        <div>
        <h2 className="text-xl md:text-2xl text-[#041E46] font-bold">
        ScarMD Glide
        </h2>
        <Image
        src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745303950/SCAR_MD_PRESENTACIO%CC%81N_GLIDE_uvl1el.png"
        alt="Skingenuity Solución"
        width={400}
        height={160}
        className="object-contain"
      />
        <p className="text-sm md:text-base text-gray-700">
        Ideal para cicatrices
        hipertróficas - Queloides
        </p>
        </div>
        
      </div>

      {/* Botones */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex gap-4 flex-wrap justify-center mb-10 px-4 mt-8"
      >
        <button onClick={() => window.location.href = "https://wa.me/573185797100"} className="bg-[#009C86] text-white px-6 py-2  text-sm hover:bg-[#009C86] transition">
          Comprar
        </button>
        <button
          onClick={() => (window.location.href = "/scarmd/beneficios")}
          className="bg-[#009C86] text-white px-6 py-2  text-sm hover:bbg-[#009C86] transition"
        >
          Conoce sus Beneficios
        </button>
      </motion.div>
    </div>
  );
}
