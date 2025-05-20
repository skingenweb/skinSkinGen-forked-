"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const skingenuityBlocks = [
  {
    id: 1,
    content:
      "Skingenuity es una línea de productos regenerativos en estética, con la avanzada Tecnología Inter-Cell Messenger Technology (ICM) basada en tecnologías ganadoras del Premio Nobel.",
    highlight: "Inter-Cell Messenger Technology",
  },
  {
    id: 2,
    content:
      "Emplea Factores de crecimiento, bioingeniería y enzimas de reparación del ADN para la piel, cabello, pestañas y salud vaginal, para la regeneración y restauración de cada zona.",
    highlight: "Factores de crecimiento, enzimas de reparación del ADN",
  },
];

const infoBlocks = [
  "Múltiples mensajes intercelulares (FC) para imitar el proceso regenerativo del cuerpo.",
  "Factores de Crecimiento Nano encapsulados para ayudar a la absorción.",
  "Enfocado y dirigido a indicaciones específicas.",
  "Biotecnología avanzada. Uso de Escherichia Coli para sintetizar los factores de crecimiento.",
];

const lineLogos = [
  "https://res.cloudinary.com/dli9xljyz/image/upload/v1743558889/SKINGENUITY_BENEFICIOS_LI%CC%81NEA_1_SKIN_evxuyh.png",
  "https://res.cloudinary.com/dli9xljyz/image/upload/v1743558890/SKINGENUITY_BENEFICIOS_LI%CC%81NEA_2_HAIR_pnhy9m.png",
  "https://res.cloudinary.com/dli9xljyz/image/upload/v1743558891/SKINGENUITY_BENEFICIOS_LI%CC%81NEA_3_VR_hxmgrn.png",
  "https://res.cloudinary.com/dli9xljyz/image/upload/v1743558892/SKINGENUITY_BENEFICIOS_LI%CC%81NEA_4_XXTRALASH_tpnswi.png",
];

const circleImages = [
  {
    src: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743558887/Skingenuity_Beneficios_BOLA_REGENERAR_duh1gf.png",
    alt: "regenerar",
  },
  {
    src: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743558888/SKINGENUITY_BENEFICIOS_BOLA_REPARAR_eka8tu.png",
    alt: "reparar",
  },
  {
    src: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743558886/SKINGENUITY_BENEFICIOS_BOLA_MEJORAR_il5h9r.png",
    alt: "mejorar",
  },
];

export default function SkingenuityPage() {
  const [showSecondBlock, setShowSecondBlock] = useState(false);

  if (!showSecondBlock) {
    return (
      <div className="w-full overflow-hidden">
        {/* Banner con logo */}
        <div className="w-full flex justify-center bg-white">
          <Image
            src="https://res.cloudinary.com/dli9xljyz/image/upload/v1743549246/SKINGENUITY_LOGO_abei2m.png"
            alt="Skingenuity logo"
            width={600}
            height={100}
            className="object-contain w-[50%]"
          />
        </div>

        {/* Imagen principal */}
        <div className="w-full flex">
          <Image
            src="https://res.cloudinary.com/dli9xljyz/image/upload/v1743548776/MUJER_SKINGENUITY_PRESENTACIO%CC%81N_dgb730.png"
            alt="Mujer Skingenuity"
            width={1200}
            height={400}
            className="object-cover w-full h-[1240px] object-top"
          />
        </div>

        {/* Scroll progresivo sin ocultar bloques anteriores */}
        <div className="w-full flex flex-col items-center px-6 py-10 space-y-20">
          {skingenuityBlocks.map((block) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl text-center"
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                {block.content.split(block.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="text-purple-700 font-semibold">
                        {block.highlight}
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}

          {/* Botón final */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-purple-800 text-white text-sm tracking-wide hover:bg-purple-900 transition"
            onClick={() => setShowSecondBlock(true)}
          >
            CONOCE SUS BENEFICIOS
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center px-4 pt-10 space-y-12">
      {/* Logo y banner gris */}
      <div className="flex w-full justify-evenly items-center">
        <Image src="https://res.cloudinary.com/dli9xljyz/image/upload/v1743549246/SKINGENUITY_LOGO_abei2m.png" alt="Logo" width={200} height={50} />
        <Image src="https://res.cloudinary.com/dli9xljyz/image/upload/v1743548775/INTERCELL_MESSENGER_LOGO_fon8mf.png" alt="ICM Banner" width={220} height={40} className="mt-2" />
      </div>

      {/* Círculos: regenerar - reparar - mejorar */}
      <div className="flex flex-wrap justify-center gap-6">
        {circleImages.map((circle, i) => (
          <motion.div
            key={circle.alt}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <Image
              src={circle.src}
              alt={circle.alt}
              width={250}
              height={250}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* Bloques de info */}
      <div className="flex flex-col gap-4 items-center">
        {infoBlocks.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-purple-100 text-sm text-gray-800 px-4 py-3 rounded-full max-w-lg text-center"
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Botón final */}
      <motion.button
        onClick={() => (window.location.href = "/productos")}
        className="px-6 py-3 bg-purple-800 text-white text-sm tracking-wide hover:bg-purple-900 transition"
      >
        Nuestras líneas
      </motion.button>

      {/* Logos finales */}
      <div className="flex flex-wrap justify-center items-center gap-4">
        {lineLogos.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`linea-${i}`}
            width={300}
            height={300}
            className="object-contain"
            onClick={()=>{}}
          />
        ))}
      </div>
    </div>
  );
}
