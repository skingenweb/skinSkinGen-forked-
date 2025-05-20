"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SkingenuitySkinPage() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-[url('https://res.cloudinary.com/dli9xljyz/image/upload/v1745298058/XXTRALASH_BURBUJAS_TRANSPARENCIA_80__n40hh5.png')] bg-cover bg-center">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745298601/XXTRALASH_LOGO_w3itda.png"
          alt="Skingenuity Hair Banner"
          width={400}
          height={80}
          className="w-[90%] max-w-[700px] object-contain"
        />
      </div>

      {/* Sección principal */}
      <div className="w-full bg-white relative">
        {/* Título morado */}
        <div className="flex justify-end">
          <Image
            src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745298177/EL_SECRETO_PARA_UNAS_PESTAN%CC%83AS_MAS_BONITAS_SANAS_Y_BIVRANTES_1_w99jct.png"
            alt="Skingenuity Hair Banner"
            width={400}
            height={80}
            className="w-[90%] max-w-[700px] object-contain"
          />
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-end">
          {/* Lado izquierdo con producto y texto */}

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745299112/XXTRALASH_MUJER_PRESENTACIO%CC%81N_gzsdzy.png"
              alt="Mujer saludable"
              width={440}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 my-auto">
            <div className="mt-4 text-center md:text-left text-xs text-gray-800 leading-snug max-w-xs md:max-w-lg md:pl-8">
              <p className="text-black font-semibold text-[20px] md:text-[32px]">
                Fortalecimiento, nutrición y estimulación de las pestañas,con&nbsp;
                <strong className="text-[#35204F] text-[24px]">FACTORES DE CRECIMIENTO</strong>
              </p>
              <p className="text-[20px] mt-6 mb-6">Tendrás Pestañas más voluminosas,
              rizadas, brillantes, largas y gruesas.</p>
              <p className="text-[#35204F]  font-semibold mt-4 text-[24px]">
                CLÍNICAMENTE PROBADO
              </p>
            </div>
          </div>

          {/* Imagen mujer lado derecho */}
        </div>
      </div>

      <Image
        src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745300514/XXTRALASH_CAJA_ijioar.png"
        alt="Skingenuity Solución"
        width={400}
        height={160}
        className="object-contain mt-10"
      />

      {/* Título y descripción */}
      <div className="text-center leading-snug">
        <h2 className="text-xl md:text-2xl text-[#0F44AF] font-bold">
          XXTRALASH
        </h2>
        <p className="text-sm md:text-base text-gray-700">
        Factores de crecimiento para
        pestañas 1 x 3 ml
        </p>
      </div>

      {/* Botones */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex gap-4 flex-wrap justify-center mb-10 px-4 mt-8"
      >
        <button onClick={() => window.location.href = "https://wa.me/573185797100"} className="bg-[#35204F]  text-white px-6 py-2  text-sm hover:bg-[#35204F]  transition">
          Comprar
        </button>
        <button
          onClick={() => (window.location.href = "/xxtralash/beneficios")}
          className="bg-[#35204F]  text-white px-6 py-2  text-sm hover:bbg-[#35204F]  transition"
        >
          Conoce sus Beneficios
        </button>
      </motion.div>
    </div>
  );
}
