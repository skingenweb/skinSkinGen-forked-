"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "@/components/modal";
import { useState } from "react";

const pdf = [{ title: "Casos exito", file: "/docs/EvidenciaSkin.pdf" }];

export default function SkingenuitySkinBeneficts() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const timelineItems = [
    "Mejora la calidad, textura y apariencia de la piel",
    "Reducción en tiempo de recuperación pos tratamiento. Minimiza inflamación, dolor y enrojecimiento.",
    "Acelera el proceso de cicatrización pos tratamiento",
  ];
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
        <div className="absolute top-0 left-0 bg-gray-400 h-[80px] w-full md:w-[40%] text-white text-lg md:text-2xl rounded-none md:rounded-r-lg flex items-center justify-center px-4">
          Factores de crecimiento recombinantes humanos Específicos y
          Concentrados.
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-end pt-24 md:pt-8">
          {/* Timeline de texto con animación */}
          <div className="flex flex-col md:basis-1/2 items-center gap-6 px-4 my-auto">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="flex flex-col items-start"
              >
                <p className="w-full md:w-[420px] bg-gray-200 px-4 py-2 font-medium text-sm md:text-base text-left text-gray-800 rounded-md shadow">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
          {/* Imagen mujer lado derecho */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 ">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745212825/MUJER_2_SKINGENUITY_SKIN_BENEFICIOS_zgnnlg.png"
              alt="Mujer rejuvenecimiento"
              width={440}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Texto principal */}
      <section className="w-full flex flex-col items-center px-4 py-16 bg-white gap-8 text-center">
        {/* Pregunta */}
        <button
          className="bg-purple-800 text-white px-6 py-2  text-xl hover:bg-purple-900 transition"
          onClick={() =>
            (window.location.href = "/skinrejuvenation/aplicacion")
          }
        >
          ¿QUIERES CONOCER SU APLICACIÓN?
        </button>

        {/* Imagen del producto */}
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/t_banner/v1744295652/SKINGENUITY_SKIN_CAJA_kt1rc4.png"
          alt="Skingenuity Solución"
          width={400}
          height={160}
          className="object-contain"
        />

        {/* Título y descripción */}
        <div className="text-center leading-snug">
          <h2 className="text-xl md:text-2xl text-purple-800 font-bold">
            SKINGENUITY SOLUCIÓN
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            Regeneración facial
            <br />
            Caja x 6 Viales de 2 ml
          </p>
        </div>
        {selectedPdf && (
          <Modal onClose={() => setSelectedPdf(null)}>
            <div className="p-4 bg-white rounded-lg shadow-lg w-full h-[90vh] relative flex flex-col">
              <button
                onClick={() => setSelectedPdf(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-black"
              >
                ✕
              </button>

              {/* Área de PDF scrollable */}
              <div className="flex overflow-auto mt-6">
              <div className="flex overflow-auto mt-6">
                <iframe src={selectedPdf} className="w-[700px] h-[80vh]" />
              </div>
              </div>

            </div>
          </Modal>
        )}

        <div className="flex gap-6 flex-wrap justify-center">
          <button
            onClick={() =>
              (window.location.href = "https://wa.me/573185797100")
            }
            className="bg-purple-800 text-white px-6 py-2  text-lg hover:bg-purple-900 transition"
          >
            Comprar
          </button>
          <button
            onClick={() => setSelectedPdf(pdf[0]?.file)}
            className="bg-purple-800 text-white px-6 py-2  text-lg hover:bg-purple-900 transition"
          >
            Casos de Éxito
          </button>
        </div>

        {/* Línea inferior */}
        <p className="uppercase text-purple-800 font-bold text-sm md:text-xl pt-4">
          MEDICINA REGENERATIVA PREMIUM
        </p>
      </section>
    </div>
  );
}
