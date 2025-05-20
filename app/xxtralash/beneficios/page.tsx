"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "@/components/modal";
import { useState } from "react";


const pdf = [{ title: "Casos exito", file: "/docs/EvidenciaXtralash.pdf" }];

export default function XtralashSection() {
  const beneficios = [
    "Regenera a nivel celular para el crecimiento natural de tus pestañas.",
    "Mejora la calidad y textura de tus pestañas.",
    "Logra en más del 82% volumen, longitud y grosor de tus pestañas.",
    "Sin límite de uso.",
  ];
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <section className="w-full flex flex-col items-center overflow-hidden bg-white">
      <Image
        src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745298601/XXTRALASH_LOGO_w3itda.png"
        alt="Skingenuity Hair Banner"
        width={400}
        height={80}
        className="w-[90%] max-w-[700px] object-contain"
      />
      <div className="relative w-full">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745298058/XXTRALASH_BANNER_BENEFICIOS_d4pkrp.png"
          alt="Xtralash Ojos"
          width={1200}
          height={400}
          className="w-full h-auto object-cover"
        />
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745301513/SKINGENUITY_VR_4_FACTORES_DE_CRECIMIENTO_1_sqije5.png"
          alt="4 Factores de Crecimiento"
          width={300}
          height={100}
          className="object-cover absolute md:top-[96%] md:w-[50%] md:h-[100px]"
        />
      </div>

      {/* Banner factores de crecimiento */}
      <div className="w-full flex justify-center mt-4"></div>

      {/* Beneficios con animación scroll */}
      <div className="flex flex-col gap-6 mt-10 text-center text-gray-800 text-sm md:text-2xl relative">
        {beneficios.map((beneficio, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.3 }}
            className="max-w-md mx-auto text-justify"
          >
            {beneficio}
          </motion.p>
        ))}

        {/* Imagen gotero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: beneficios.length * 0.3 }}
          className="flex justify-center"
        ></motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: beneficios.length * 0.3 + 0.2 }}
        className="flex flex-col items-center gap-2 text-blue-700 text-sm font-medium mt-10"
      >
        <div className="flex">
          <Image
            src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745298060/XXTRALASH_PESTAN%CC%83INA_VECTOR_ewxais.png"
            alt="Gotero Xtralash"
            width={60}
            height={60}
            className="object-cover w-[300px]"
          />
          <div className="flex gap-4 items-center">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745298059/XXTRALASH_LUNA_amvzrn.png" // Cambia esta URL
              alt="Luna"
              width={120}
              height={120}
            />
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745298061/XXTRALASH_SOL_inv2er.png" // Cambia esta URL
              alt="Sol"
              width={120}
              height={120}
            />
          </div>
        </div>

        <p className="text-center max-w-xs">
          Aplicalo en la mañana y en la noche con la zona completamente limpia.
        </p>
      </motion.div>
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
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: beneficios.length * 0.3 + 0.3 }}
        className="flex gap-4 flex-wrap justify-center mt-10 mb-12 px-4"
      >
        <button
          onClick={() => (window.location.href = "https://wa.me/573185797100")}
          className="bg-purple-800 text-white px-6 py-2 text-sm hover:bg-purple-900 transition"
        >
          Comprar
        </button>
        <button
          onClick={() => setSelectedPdf(pdf[0]?.file)}
          className="bg-purple-800 text-white px-6 py-2 text-sm hover:bg-purple-900 transition"
        >
          Conoce casos de éxito
        </button>
      </motion.div>
    </section>
  );
}
