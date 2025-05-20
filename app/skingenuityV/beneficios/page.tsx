"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SkingenuitySkinBeneficts() {
  const timelineItems = [
    "SKINGENUITY HAIR BUSCA DISMINUIR LA FASE TELOGENA DE LOS PACIENTES Y AUMENTAR EL PORCENTAJE DE LA FASE ANAGENA",
    "Factores de crecimiento recombinantes humanos factores específicos y concentrados.",
  ];
  const timelineItemsSection = [
    "Regenera y repara la mucosa vaginal.",
    "Aumenta el grosor del tejido de las paredes vaginales.",
    "Mejora la hidratación de la zona vaginal.",
    "Alivia los síntomas incomodos como la resequedad, comezón, irritación y ardor.",
  ];
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-white">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745257494/SKINGENUITY_GEL_VAGINAL_LOGO_lrjdwd.png"
          alt="Skingenuity V Banner"
          width={400}
          height={80}
          className="w-[90%] max-w-[700px] object-contain"
        />
      </div>

      {/* Sección principal */}
      <div className="w-full bg-white relative mt-8">
        {/* Título morado */}
        <div className="absolute top-0 left-0 bg-[#5A2D68] h-[80px] w-full md:w-[40%] text-white text-lg md:text-2xl rounded-none md:rounded-r-lg flex items-center justify-center px-4">
          GEL DE REJUVENECIMIENTO VAGINAL
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-end pt-24 md:pt-8">
          {/* Timeline de texto con animación */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 mb-8 ">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745414935/IMAGEN_CHICAS_SKINGENUITY_VR_tbwxbb.png"
              alt="4 factores de crecimiento"
              width={440}
              height={500}
              className="w-full h-[800px] object-contain"
            />
          </div>
          <div className="flex flex-col md:basis-1/2 items-center gap-6 px-4 my-auto xs:mt-8">
            {timelineItemsSection.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="flex flex-col items-start"
              >
                <p className="w-full md:w-[420px] bg-purple-400 px-4 py-2 font-medium text-sm md:text-base text-left text-white rounded-md shadow">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Texto principal */}
      <section className="w-full flex flex-col items-center px-4 py-16 bg-white gap-8 text-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745253232/SKINGENUITY_VR_CAJA_BENEFICIOS-APLICACIO%CC%81N_j8iuwb.png"
          alt="Skingenuity Solución"
          width={400}
          height={160}
          className="object-contain"
        />

        {/* Título y descripción */}
        <div className="text-center leading-snug">
          <h2 className="text-xl md:text-2xl text-[#041E46] font-bold">
            SKINGENUITY GEL VAGINAL
          </h2>
        </div>
        {/* Pregunta */}
        <button
          className="bg-[#5A2D68] text-white px-6 py-2  text-xl hover:bg-[#041E46] transition"
          onClick={() =>
            (window.location.href = "/skingenuityV/aplicacion")
          }
        >
          ¿QUIERES CONOCER SU APLICACIÓN?
        </button>

        <div className="flex gap-6 flex-wrap justify-center">
          <button onClick={() => window.location.href = "https://wa.me/573185797100"} className="bg-[#5A2D68] text-white px-6 py-2  text-lg hover:bg-[#5A2D68] transition">
            Comprar
          </button>
        </div>

        {/* Línea inferior */}
        <p className="uppercase text-[#5A2D68] font-bold text-sm md:text-xl pt-4">
          MEDICINA REGENERATIVA PREMIUM
        </p>
      </section>
    </div>
  );
}
