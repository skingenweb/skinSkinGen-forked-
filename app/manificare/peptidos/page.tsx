"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SkingenuitySkinPage() {
  const timelineItemsSection = [
    "Péptidos reafirmantes (refuerzan las fibras elásticas).",
    "Péptidos adelgazantes (estimulas la lipolisis por varios mecanismos).",
    "Péptidos reductores del dolor (actúan sobre neuronas sensitivas de la piel).",
    "Péptidos antiinflamatorios.",
    "Péptidos anticaída de pelo (refuerzan la capacidad de anclaje del folículo piloso).",
    "Péptidos aclarantes (actúan sobre la melanogenesis).",
    "Péptidos protectores de células madre y matriz extracelular.",
  ];
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-[url('https://res.cloudinary.com/dli9xljyz/image/upload/v1745348910/FONDO_MANIFICAE_Transparencia_90__k7shxo.png')] bg-cover bg-center">
      {/* Sección principal */}
      <div className="flex flex-row">
        <div className="bg-[#041E46] h-[80px] w-[20%] left-0 absolute text-white text-lg md:text-2xl rounded-none md:rounded-r-lg flex items-center justify-start mt-12 px-4">
          PÉPTIDOS <p className="text-gray-400 ml-5">¿QUÉ SON?</p>
        </div>
      </div>

      <div className="w-full bg-white relative mt-40"></div>

      <p className="mt-12 max-w-[600px] text-[24px]">
        Los péptidos son moléculas con propiedades regeneradoras que surgen de
        la unión de diferentes aminoácidos.
      </p>

      <p className="mt-12 max-w-[600px] text-[24px]">
        Estas moleculas se encuentran dentro de nuestro organismo. Los péptidos
        son esenciales en el cuidado de la piel, pues regulan funciones
        biológicas y favorecen la recuperación celular.
      </p>
      <p className="mt-12 max-w-[600px] text-[24px]">
        Contribuyen al control del envejecimiento y la reparación de la piel y
        otros tejidos.
      </p>
      <div className="flex mx-auto mt-6">
        <div className="flex flex-col justify-center mx-auto bg-[#C7DFF5] rounded-lg">
          <Image
            src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745350074/IMG_PE%CC%81PTIDOS_1_rcjcv5.png"
            alt="Peptidos"
            width={400}
            height={80}
            className="w-full max-w-[900px] h-[300px] object-contain"
          />
        </div>
      </div>

      {timelineItemsSection.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          className="flex flex-col items-start"
        >
          <div className="m-4">
            <p className="w-full md:w-[420px] bg-[#28285A] px-4 py-2 font-medium text-sm md:text-base text-left text-white rounded-md shadow">
              {item}
            </p>
          </div>
        </motion.div>
      ))}

      {/* Botones */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex gap-4 flex-wrap justify-center mb-10 px-4 mt-8"
      >
        <button
          onClick={() => (window.location.href = "https://wa.me/573185797100")}
          className="bg-[#28285A] text-white px-6 py-2  text-sm hover:bg-[#28285A] transition"
        >
          Comprar
        </button>
        <button
          onClick={() => {
            window.location.href = "/manificare/lineas/manificare";
          }}
          className="bg-[#28285A] text-white px-6 py-2  text-sm hover:bg-[#28285A] transition"
        >
          Productos
        </button>
      </motion.div>
    </div>
  );
}
