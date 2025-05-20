"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import DermafillBenefits from "@/components/dermafillBenefits";


export default function DermafillPage() {
  const [showBenefits, setShowBenefits] = useState(false);
  const benefitsRef = useRef<HTMLDivElement>(null);

  const handleShowBenefits = () => {
    setShowBenefits(true);
    setTimeout(() => {
      benefitsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="relative  bg-[url('https://res.cloudinary.com/dli9xljyz/image/upload/v1745414208/BURBUJAS_1_wvc0gd.png')] bg-cover bg-center text-black overflow-hidden">
      {/* Fondo de burbujas animadas */}
      <div className="bubbles-background" />

      <div className="relative z-10">
        {/* Encabezado */}
        <section className="bg-black text-white text-center py-6">
          <h1 className="text-4xl font-bold">DERMAFILL<sup>®</sup></h1>
          <p className="mt-2 text-sm tracking-wide uppercase">GLOBAL XTRA | VOLUME ULTRA | LIPS</p>
        </section>

        {/* Imagen principal */}
        <section className="relative w-full h-[1200px]">
          <Image
            src="https://res.cloudinary.com/dli9xljyz/image/upload/v1743389673/MUJER_PRESENTACIO%CC%81N_qpwnpp.png"
            alt="Dermafill modelo"
            fill
            className="object-cover object-[40%_20%]"
          />
          <div className="absolute bottom-5 right-6 flex flex-col gap-2 items-end">
            <Image src="https://res.cloudinary.com/dli9xljyz/image/upload/v1743389670/BANDERA_FRANCIA_snjizq.png" alt="Francia" width={50} height={50} />
            <Image src="https://res.cloudinary.com/dli9xljyz/image/upload/v1743389671/CERTIFICACIO%CC%81N_EUROPEA_djcnpp.png" alt="CE" width={50} height={50} />
          </div>
        </section>

        {/* Descripción del producto */}
        <section className="text-center max-w-[400px] px-6 py-10 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold">
            Ácido Hialurónico<br />
            <span className="italic font-bold">PUREZA NATURAL</span>
          </h2>
          <p className="mt-3 text-sm text-justify">
            La línea de Ácido Hialurónico que rellena las arrugas, restaura los volúmenes perdidos y reafirma la piel.
          </p>

          <h3 className="mt-8 text-lg font-bold italic">TECNOLOGÍA X-LAB</h3>
          <p className="text-sm font-medium">Molécula de AH de Alta Pureza</p>
          <p className="mt-2 text-sm text-justify">
            La tecnología X-LAB utiliza hebras de HA más largas que permiten crear entrecruzamiento de manera natural (física) disminuyendo la cantidad de BDDE en menos del 1%.
          </p>
        </section>

        {/* Imagen explicativa */}
        <section className="flex justify-center px-4 mb-8">
          <Image
            src="https://res.cloudinary.com/dli9xljyz/image/upload/v1743390804/Captura_de_pantalla_2025-03-30_a_la_s_10.13.12_p.m._fiukcy.png"
            alt="Gráfico enlaces físicos"
            width={600}
            height={300}
            className="object-contain"
          />
        </section>

        {/* Botón que activa beneficios */}
        <div className="flex justify-center mb-12">
          <button
            className="bg-black text-white px-6 py-3 hover:bg-gray-900 transition"
            onClick={handleShowBenefits}
          >
            CONOCE SUS BENEFICIOS
          </button>
        </div>

        {showBenefits && (
          <div ref={benefitsRef}>
            <DermafillBenefits />
          </div>
        )}
      </div>
    </div>
  );
}
