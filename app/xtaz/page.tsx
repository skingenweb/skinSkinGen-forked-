"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SkingenuitySkinPage() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-[url('https://res.cloudinary.com/dli9xljyz/image/upload/v1745345770/X-TAZ_FONDO_TRANSPARENCIA_90__tfgekw.png')] bg-repeat bg-center">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745345826/X-TAZ_LOGO_txh0jw.png"
          alt="Skingenuity Hair Banner"
          width={400}
          height={80}
          className="w-[300px] max-w-[700px] object-contain"
        />
      </div>

      {/* Sección principal */}
      <div className="w-full bg-white relative mt-8 shadow-lg">
        {/* Título morado */}
        <div className="absolute top-0 left-0 bg-[#27357B] h-[80px] w-full md:w-[40%] text-white text-lg md:text-2xl rounded-none md:rounded-r-lg flex items-center justify-center px-4">
          UNA EXPERIENCIA FACIAL FRESCA!
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-end pt-24 md:pt-8">
          {/* Lado izquierdo con producto y texto */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 my-auto">
            <div className="mt-4 text-center md:text-left text-xs text-gray-800 leading-snug max-w-xs md:max-w-lg md:pl-8">
              <p className="text-black font-semibold text-[24px] md:text-[32px]">
                X-taz es una mascarilla que protege la piel y penetra en las
                capas más profundas para aumentar el contenido de agua en las
                células, retrasando el envejecimiento.
              </p>
              <p className="text-black font-semibold text-[24px] md:text-[32px] mt-8">
              <strong className="text-[#27357B]">CUBRE ROSTRO Y CUELLO</strong> Ofrece una experiencia facial completa y
              refrescante.
            </p>
            <p className="text-[#27357B] font-semibold text-[24px] md:text-[32px] mt-8">
            Con Vitamina B3, B5 y E,
            Hidratantes y Antioxidantes.
            </p>
            </div>
            
          </div>

          {/* Imagen mujer lado derecho */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 ">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745346014/X-TAZ_MUJER_mnrfsb.png"
              alt="Hombre con abundante cabello"
              width={440}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      <video
            src='https://res.cloudinary.com/dli9xljyz/video/upload/v1745345768/Pasos_X-TAZ_yjjrxb.mp4'
            autoPlay
            muted
            loop
            className="w-[500px] h-full object-cover mb-8"
          />
      <Image
        src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745345769/X-TAZ_CAJA_hdz3g3.png"
        alt="Skingenuity Solución"
        width={400}
        height={160}
        className="object-contain"
      />

      {/* Título y descripción */}
      <div className="text-center leading-snug">
        <h2 className="text-xl md:text-2xl text-[#27357B] font-bold">
          XTAZ
        </h2>
        <p className="text-sm md:text-base text-gray-700">
        Caja x 5 Mascarillas
        </p>
      </div>

      {/* Botones */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex gap-4 flex-wrap justify-center mb-10 px-4 mt-8"
      >
        <button onClick={() => window.location.href = "https://wa.me/573185797100"} className="bg-[#27357B] text-white px-6 py-2  text-sm hover:bg-[#27357B] transition">
          Comprar
        </button>
      </motion.div>
    </div>
  );
}
