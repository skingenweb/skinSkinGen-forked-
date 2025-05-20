"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SkingenuitySkinPage() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-[url('https://res.cloudinary.com/dli9xljyz/image/upload/v1745348910/FONDO_MANIFICAE_Transparencia_90__k7shxo.png')] bg-cover bg-center">
      {/* Sección principal */}
      <div className="w-full bg-white relative ">
        <div className="w-full flex justify-center mx-auto mt-20">
          <Image
            src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745348909/CARRUSEL_MANIFICARE_zbx9yx.png"
            alt=""
            width={440}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <p className="mt-12 max-w-[600px] text-[24px]">
        Manificare es una gama de cocteles Biorevitalizantes orientada hacia los
        péptidos y los ingredientes activos para brindar una solución total en
        el cuidado de la piel de los pacientes.
      </p>
      <div className="flex mx-auto mt-6">
        <div className="flex flex-col justify-center mx-auto">
          <Image
            src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745349454/MANIFICARE_FRASCOS_PRESENTACIO%CC%81N_srqneh.png"
            alt="Skingenuity Hair Banner"
            width={400}
            height={80}
            className="w-[500px] max-w-[700px] h-[300px] object-contain"
          />
        </div>
      </div>

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
          onClick={() => (window.location.href = "/manificare/peptidos")}
          className="bg-[#28285A] text-white px-6 py-2  text-sm hover:bbg-[#28285A] transition"
        >
          Conoce sobre peptidos
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
