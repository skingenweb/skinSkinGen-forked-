"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "@/components/modal";
import { useState } from "react";


const pdf = [{ title: "Casos exito", file: "/docs/EvidenciaHematix.pdf" }];

export default function SkingenuitySkinPage() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-white">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745336128/HEMATIX_LOGO_yyv2sl.png"
          alt="Skingenuity Hair Banner"
          width={400}
          height={80}
          className="w-[300px] max-w-[700px] object-contain"
        />
      </div>

      {/* Sección principal */}
      <div className="w-full bg-white relative mt-8">
        {/* Título morado */}
        <div className="absolute top-0 left-0 bg-gray-400 h-[80px] w-full md:w-[40%] text-white text-lg md:text-2xl rounded-none md:rounded-r-lg flex items-center justify-center px-4">
          MODO DE USO
        </div>

        <div className="w-full flex justify-center mx-auto mt-20">
          <Image
            src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745338130/WhatsApp_Image_2025-04-22_at_11.03.52_vvlhay.jpg"
            alt="Hombre con abundante cabello"
            width={440}
            height={500}
            className="w-[80%] h-auto object-contain"
          />
        </div>
      </div>

      <div className="w-full bg-white relative mt-8">
        <div className="w-full flex flex-col md:flex-row justify-between items-end pt-24 md:pt-8">
          {/* Lado izquierdo con producto y texto */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 my-auto">
            <div className="mt-4 text-center md:text-left text-xs text-gray-800 leading-snug max-w-xs md:max-w-lg md:pl-8">
              <p className="text-[#AE182C] font-semibold text-[24px] md:text-[32px]">
                FRECUENCIA DE USO
              </p>
              <p className="text-black font-semibold text-[24px] md:text-[32px]">
                Para obtener resultados máximos,aplicar sobre la zona cada 2
                horas.
              </p>
            </div>
          </div>

          {/* Imagen mujer lado derecho */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 ">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745336123/HEMATIX_CASO_DE_EXITO_xcvq6t.png"
              alt="Hombre con abundante cabello"
              width={440}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
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
      {selectedPdf && (
        <Modal onClose={() => setSelectedPdf(null)}>
          <div className="p-4 bg-white rounded-lg shadow-lg w-full  h-[90vh] relative flex flex-col">
            <button
              onClick={() => setSelectedPdf(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            {/* Área de PDF scrollable */}
            <div className="flex overflow-auto mt-6">
              <div className="flex overflow-auto mt-6">
                <iframe src={selectedPdf} className="w-[600px] h-[80vh]" />
              </div>
            </div>
          </div>
        </Modal>
      )}
      {/* Botones */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex gap-4 flex-wrap justify-center mb-10 px-4 mt-8"
      >
        <button
          onClick={() => (window.location.href = "https://wa.me/573185797100")}
          className="bg-[#AE182C] text-white px-6 py-2  text-sm hover:bg-[#AE182C] transition"
        >
          Comprar
        </button>
        <button
          onClick={() => setSelectedPdf(pdf[0]?.file)}
          className="bg-[#AE182C] text-white px-6 py-2  text-sm hover:bbg-[#AE182C] transition"
        >
          Casos de exito
        </button>
      </motion.div>
    </div>
  );
}
