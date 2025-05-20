"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "@/components/modal";


const pdf = [{ title: "Casos exito", file: "/docs/Evidenciahair.pdf" }];
export default function SkingenuitySkinBeneficts() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const timelineItems = [
    "SKINGENUITY HAIR BUSCA DISMINUIR LA FASE TELOGENA DE LOS PACIENTES Y AUMENTAR EL PORCENTAJE DE LA FASE ANAGENA",
    "Factores de crecimiento recombinantes humanos factores específicos y concentrados.",
  ];
  const timelineItemsSection = [
    "Factores de crecimiento recombinantes humanos Específicos y Concentrados.",
    "Mejora la calidad, textura y apariencia del Cabello",
    "Detiene la caída del cabello",
    "Activa las células de los folículos pilosos para el crecimiento de nuevo cabello de forma natural.",
  ];
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-white">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745219484/SKINGENUITY_HAIR_LOGO_qcw6vi.png"
          alt="Skingenuity Skin Banner"
          width={400}
          height={80}
          className="w-[90%] max-w-[700px] object-contain"
        />
      </div>

      {/* Sección principal */}
      <div className="w-full bg-white relative mt-8">
        {/* Título morado */}
        <div className="absolute top-0 left-0 bg-[#041E46] h-[80px] w-full md:w-[40%] text-white text-lg md:text-2xl rounded-none md:rounded-r-lg flex items-center justify-center px-4">
          SOLUCIÓN PARA LA RESTAURACIÓN CAPILAR
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-end pt-24 md:pt-8">
          {/* Timeline de texto con animación */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 ">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745246958/SKINGENUITY_HAIR_HOMMBRE_BENEFICIOS_g4dozp.png"
              alt="Hombre tratamiento capilar"
              width={440}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
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
                <p className="w-full md:w-[420px] bg-[#041E46] px-4 py-2 font-medium text-sm md:text-base text-left text-white rounded-md shadow">
                  {item}
                </p>
              </motion.div>
            ))}
            <p className="max-w-[420px]">
              <strong>11 factores</strong> concentrados y específicos que
              activaran las células del cuero cabelludo, generado nuevas hebras
              capilares y fortaleciendo el cabello existente.
            </p>
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745248909/SKINGENUITY_HAIR_BENEFICIOS_CICLO_CABELLO_ne3nyf.png"
              alt="Hombre tratamiento capilar"
              width={440}
              height={500}
              className="w-full md:w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Texto principal */}
      <section className="w-full flex flex-col items-center px-4 py-16 bg-white gap-8 text-center">
        {timelineItemsSection.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="flex flex-col items-start"
          >
            <p className="w-full md:w-[420px] bg-gray-500 px-4 py-2 font-medium text-sm md:text-base text-left text-white rounded-md shadow">
              {item}
            </p>
          </motion.div>
        ))}

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
                <iframe src={selectedPdf} className="w-[600px] h-[80vh]" />
              </div>
            </div>
          </Modal>
        )}
        {/* Pregunta */}
        <button
          className="bg-[#041E46] text-white px-6 py-2  text-xl hover:bg-[#041E46] transition"
          onClick={() => (window.location.href = "/skinhair/aplicacion")}
        >
          ¿QUIERES CONOCER SU APLICACIÓN?
        </button>

        {/* Botones */}
        <div className="flex gap-6 flex-wrap justify-center">
          <button
            onClick={() =>
              (window.location.href = "https://wa.me/573185797100")
            }
            className="bg-[#041E46] text-white px-6 py-2  text-lg hover:bg-[#041E46] transition"
          >
            Comprar
          </button>
          <button
            onClick={() => setSelectedPdf(pdf[0]?.file)}
            className="bg-[#041E46] text-white px-6 py-2  text-lg hover:bg-[#041E46] transition"
          >
            Casos de Éxito
          </button>
        </div>

        {/* Línea inferior */}
        <p className="uppercase text-[#041E46] font-bold text-sm md:text-xl pt-4">
          MEDICINA REGENERATIVA PREMIUM
        </p>
      </section>
    </div>
  );
}
