"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function SkingenuitySkinPage() {
  
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-white">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745303975/SCAR_MD_LOGO_nwkhke.png"
          alt="Skingenuity Hair Banner"
          width={400}
          height={80}
          className="w-[90%] max-w-[700px] h-[200px] object-contain"
        />
      </div>

      {/* Sección principal */}
      <div className="w-full flex flex-col md:flex-row justify-between items-end pt-24 md:pt-8">
        {/* Lado izquierdo con producto y texto */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 my-auto">
          <div className="mt-4 text-center md:text-left text-xs text-gray-800 leading-snug max-w-xs md:max-w-lg md:pl-8 mx-auto">
            <div className="flex flex-col gap-3 text-gray-800 text-sm text-start md:text-2xl p-10 ">
              {[
                "Reduce el enrojecimiento.",
                "Reduce el prurito.",
                "Reduce el dolor.",
                "Aplana cicatrices.",
                "Ablanda el tejido cicatrizal.",
                "Previene la cicatrización Anormal.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-[6px]" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Imagen mujer lado derecho */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 ">
          <Image
            src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745306328/SCAR_MD_BENEFICIOS_MUJER_hj50om.png"
            alt="Mujer saludable"
            width={440}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Título y descripción */}
      <button
          className="bg-[#009C86] max-w-[300px] text-white px-6 py-2 mt-8 text-xl hover:bg-[#009C86] transition"
          onClick={() =>
            (window.location.href = "/scarmd/aplicacion")
          }
        >
          ¿QUIERES CONOCER SU APLICACIÓN?
        </button>
      <div className="text-center leading-snug flex mt-8">
        <div>
          <h2 className="text-xl md:text-2xl text-[#009C86] font-bold">
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
            Ideal para todo tipo de Cicatrices.
          </p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl text-[#009C86] font-bold">
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
            Ideal para cicatrices hipertróficas - Queloides
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
      </motion.div>
    </div>
  );
}
