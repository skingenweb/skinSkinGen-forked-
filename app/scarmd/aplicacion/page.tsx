"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "@/components/modal";
import { useState } from "react";

const pdf = [{ title: "Casos exito", file: "/docs/EvidenciaScarmd.pdf" }];

export default function SkingenuitySkinPage() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-white">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745303975/SCAR_MD_LOGO_nwkhke.png"
          alt="Skingenuity Hair Banner"
          width={400}
          height={80}
          className="w-[90%] max-w-[700px] h-[200px] object-contain"
        />
      </div>

      {/* Sección principal */}
      <div className="flex flex-col">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745307750/SCAR_MD_APL_GEL_o4yops.png"
          alt="Skingenuity Hair Banner"
          width={400}
          height={80}
          className="w-[90%] max-w-[700px] h-[200px] object-contain"
        />
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745307771/SCAR_MD_APL_SPRAY_qla7cg.png"
          alt="Skingenuity Hair Banner"
          width={400}
          height={80}
          className="w-[90%] max-w-[700px] h-[200px] object-contain"
        />
      </div>
      <Image
        src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745303737/SCAR_MD_EVIDENCIA_APLICACIO%CC%81N_s3cv5h.png"
        alt="Skingenuity Hair Banner"
        width={400}
        height={80}
        className="w-full h-[300px] object-contain"
      />

      <div className="bg-[#009C86] text-white max-w-xs p-4 text-center shadow-md mx-auto">
        <h3 className="text-sm font-semibold mb-2 tracking-wide">
          Clínicamente Probado.
        </h3>
        <p className="text-xs leading-relaxed">
          Se ha comprobado que ScarMD® es efectivo en tratar las cicatrices, con
          más del 80% de los pacientes calificando la mejora de la cicatriz como
          buena o muy buena.
        </p>
      </div>

      {/* Título y descripción */}

      <div className="text-center leading-snug flex mt-8">
        <div>
          <h2 className="text-xl md:text-2xl text-[#309F93] font-bold">
            ScarMD Gel
          </h2>
          <Image
            src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745303765/SCAR_MD_PRESENTACIO%CC%81N_GEL_r5zb8f.png"
            alt="Skingenuity Solución"
            width={400}
            height={160}
            className="object-contain"
          />
          <p className="text-sm md:text-base text-gray-700">
            Ideal para todo tipo de Cicatrices.
          </p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl text-[#309F93] font-bold">
            ScarMD Glide
          </h2>
          <Image
            src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745303950/SCAR_MD_PRESENTACIO%CC%81N_GLIDE_uvl1el.png"
            alt="Skingenuity Solución"
            width={400}
            height={160}
            className="object-contain"
          />
          <p className="text-sm md:text-base text-gray-700">
            Ideal para cicatrices hipertróficas - Queloides
          </p>
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
          className="bg-[#009C86] text-white px-6 py-2  text-sm hover:bg-[#009C86] transition"
        >
          Comprar
        </button>
        <button
          onClick={() => setSelectedPdf(pdf[0]?.file)}
          className="bg-[#009C86] text-white px-6 py-2  text-sm hover:bbg-[#009C86] transition"
        >
          Casos de exito
        </button>
      </motion.div>

      <p className="uppercase text-[#009C86] tracking-wide font-bold text-sm md:text-2xl mb-4">
        MEDICINA REGENERATIVA PREMIUM
      </p>
    </div>
  );
}
