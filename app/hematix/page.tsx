"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SkingenuitySkinPage() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-[url('https://res.cloudinary.com/dli9xljyz/image/upload/v1745336124/HEMATIX_FONDO_TRANSPARENCIA_97__co1scn.png')] bg-cover bg-center">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745336128/HEMATIX_LOGO_yyv2sl.png"
          alt="Skingenuity Hair Banner"
          width={400}
          height={80}
          className="w-[90%] max-w-[700px] h-[300px] object-contain"
        />
      </div>

      {/* Sección principal */}
      <div className="w-full bg-white relative mt-8">
        <div className="w-full flex flex-col md:flex-row justify-between items-end pt-24 md:pt-8">
          {/* Lado izquierdo con producto y texto */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 my-auto">
            <div className="mt-4 text-center md:text-left text-xs text-gray-800 leading-snug max-w-xs md:max-w-lg md:pl-8 mx-auto">
              <p className="text-black font-semibold text-[24px] md:text-[32px]">
                Hematix™ , Es una mezcla de moléculas naturales y sintéticas
                <p className="text-[#AE182C]">clínicamente probadas.</p>
              </p>
              <p>
                <p className="text-[#AE182C] text-[24px] md:text-[32px] mt-8">
                  Ayuda a la prevención de hematomas leves y el drenaje de
                  equimosis,
                </p>{" "}
                después de procedimientos quirúrgicos y estéticos.
              </p>
            </div>
            <div className="flex mx-auto mt-6">
            <div className="flex flex-col justify-center mx-auto">
            <Image
                src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745336134/HEMATIX_PRESENTACIO%CC%81N_15g_xsm7qs.png"
                alt="Skingenuity Hair Banner"
                width={400}
                height={80}
                className="w-[250px] max-w-[700px] h-[300px] object-contain"
              />
              <p className="text-center">15G - Tubo</p>
            </div>
            <div className="flex flex-col justify-center mx-auto">
            <Image
                src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745336135/HEMATIX_PRESENTACIO%CC%81N_30g_w4qfjx.png"
                alt="Skingenuity Hair Banner"
                width={400}
                height={80}
                className="w-[250px] max-w-[700px] h-[300px] object-contain"
              />
              <p className="text-center">30G - Tubo</p>
            </div>
              
            </div>
          </div>

          {/* Imagen mujer lado derecho */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 ">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745336290/HEMATIX_MUJER_PRESENTACIO%CC%81N_vlony4.png"
              alt="Hombre con abundante cabello"
              width={440}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>



      {/* Botones */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex gap-4 flex-wrap justify-center mb-10 px-4 mt-8"
      >
        <button onClick={() => window.location.href = "https://wa.me/573185797100"} className="bg-[#AE182C] text-white px-6 py-2  text-sm hover:bg-[#AE182C] transition">
          Comprar
        </button>
        <button
          onClick={() => (window.location.href = "/hematix/aplicacion")}
          className="bg-[#AE182C] text-white px-6 py-2  text-sm hover:bbg-[#AE182C] transition"
        >
          Conoce su modo de aplicacion
        </button>
      </motion.div>
    </div>
  );
}
