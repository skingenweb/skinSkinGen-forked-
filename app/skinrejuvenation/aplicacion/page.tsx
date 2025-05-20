"use client";

import AplicacionTratamiento from "@/components/aplicaciones";
import Image from "next/image";

export default function AplicacionSkinPage() {
  return (
    <>
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1744296905/SKINGENUITY_SKIN_LOGO_jyrzwk.png"
          alt="Skingenuity Skin Banner"
          width={400}
          height={80}
          className="w-[90%] max-w-[700px] object-contain"
        />
      </div>
      <AplicacionTratamiento
        tabs={[
          {
            key: "micro",
            title: "TRATAMIENTO-Micro Agujas",
            image:
              "https://res.cloudinary.com/dli9xljyz/image/upload/v1745216182/SKINGENUITY_SKIN_TRATAMIENTO_MICRO_AGUJAS_1_ggtcs7.png",
          },
          {
            key: "laser",
            title: "TRATAMIENTO-Pos láser",
            image:
              "https://res.cloudinary.com/dli9xljyz/image/upload/v1745216154/SKINGENUITY_SKIN_TRATAMIENTO_POS_LASER_1_pvf87r.png",
          },
        ]}
      >
        {/* Contenido para Micro Agujas */}
        <div>
          <div className="flex flex-col gap-4 items-center text-sm text-gray-800">
            <div className="bg-purple-700 text-white px-6 py-2 rounded-full">
              Aplicación por medio de micro agujas a 0.5 mm
            </div>
            <div className="bg-purple-400 text-white px-6 py-2 rounded-full">
              Aplicación de la solución Skingenuity Skin de 2 ml por sesión
            </div>
            <div className="bg-purple-200 text-black px-6 py-2 rounded-full">
              Aplicación cada 21 días
            </div>
          </div>

          <div className="flex gap-4 items-start mt-6">
            <div className="text-center text-xs mb-8">
              <Image
                src={`https://res.cloudinary.com/dli9xljyz/image/upload/v1745216718/SKINGENUITY_SKIN_CASO_DE_EXITO_MICRO_AGUJAS_gzejdx.png`}
                alt={`Evolución`}
                width={100}
                height={100}
                className="rounded w-full"
              />
            </div>
          </div>

          <video
            src='https://res.cloudinary.com/dli9xljyz/video/upload/v1745216783/SKINGENUITY_VIDEO_MICRO_AGUJAS_f6qyub.mp4'
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido para Láser */}
        <div className="text-center text-sm text-gray-600 max-w-xl">
        <div className="flex gap-4 items-start mt-6">
            <div className="text-center text-xs mb-8">
              <Image
                src={`https://res.cloudinary.com/dli9xljyz/image/upload/v1745216981/SKINGENUITY_SKIN_CASO_DE_EXITO_POS_LASER_aykuqs.png`}
                alt={`Evolución`}
                width={100}
                height={100}
                className="rounded w-full"
              />
            </div>
          </div>
        <div className="flex flex-col gap-4 items-center text-sm text-gray-800">
            <div className="bg-purple-700 text-white px-6 py-2 rounded-full w-full md:w-[420px]">
            Reduce el enrojecimiento y el dolor.
            </div>
            <div className="bg-purple-400 text-white px-6 py-2 rounded-full">
            Reduce el proceso de cicatrización hasta un 50% 
            </div>
            <div className="bg-purple-200 text-black px-6 py-2 rounded-full w-full md:w-[420px]">
            Posterior al tratamiento aplicación de solución Skingenuity Skin 2ml.
            </div>
            <div className="bg-purple-400 text-white px-6 py-2 rounded-full">
            Aplicada al finalizar cada sesión Láser.
            </div>
          </div>
        </div>
      </AplicacionTratamiento>
    </>
  );
}
