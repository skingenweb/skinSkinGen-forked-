"use client";

import AplicacionTratamiento from "@/components/aplicaciones";
import Image from "next/image";

export default function AplicacionSkinPage() {
  return (
    <>
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745219484/SKINGENUITY_HAIR_LOGO_qcw6vi.png"
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
              "https://res.cloudinary.com/dli9xljyz/image/upload/v1745250250/SKINGENUITY_HAIR_TRATAMIENTO_MICRO_AGUJAS_e7gzq5.png",
          },
          {
            key: "laser",
            title: "TRATAMIENTO-Pos Implante capilar",
            image:
              "https://res.cloudinary.com/dli9xljyz/image/upload/v1745250280/SKINGENUITY_HAIR_TRATAMIENTO_IMPLANTE_CAPILAR_ywi39q.png",
          },
        ]}
      >
        {/* Contenido para Micro Agujas */}
        <div className="flex flex-col items-center gap-6 text-sm text-gray-900 w-full max-w-xl px-4">
          {/* Bullets numerados */}
          <div className="flex flex-col gap-4 text-left">
            {[
              "Aplique Skingenuity Hair por medio de microagujas, profundidad sugerida - 0,5 a 1,0 ml.",
              "Para obtener máximo efecto, Skingenuity Hair debe ser aplicado cada <strong>21 días</strong> o según la recomendación del especialista tratante.",
              "Skingenuity Hair debe ser utilizado como mínimo durante <strong>6 sesiones</strong>.",
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="bg-black text-white w-6 h-6 min-w-6 rounded-full text-center content-center font-bold pt-[2px] text-xs">
                  {idx + 1}
                </div>
                <p dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            ))}
          </div>

          {/* Imagen de aplicación */}
          <video
                src="https://res.cloudinary.com/dli9xljyz/video/upload/v1745417015/Aplicacio%CC%81n_Skingenuity_Hair_Micro_Agujas_nf1k9a.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />

          {/* Cuadros de resultado */}
          <div className="flex flex-col gap-3 w-full items-center">
            <div className="bg-gray-800 text-white px-6 py-3 rounded-full text-center text-sm font-medium w-full max-w-xs">
              Detienes en un 45% la caída del Cabello!
            </div>
            <div className="bg-gray-500 text-white px-6 py-3 rounded-full text-center text-sm font-medium w-full max-w-xs">
              Mejoras la calidad y estructura de la fibra capilar!
            </div>
          </div>
        </div>

        {/* Contenido para Láser */}
        <div className="flex flex-col items-center gap-6 text-sm text-gray-900 w-full max-w-xl px-4">
          {/* Bullets numerados */}
          <div className="flex flex-col gap-4 text-left">
            {[
              "Aplique Skingenuity Hair por medio de microagujas, profundidad sugerida - 0,5 a 1,0 ml.",
              "Aplicar 2 sesiones de Skingenuity Hair antes de realizar el implante.",
              "Después de 1 mes de cicatrizado el implante.Realizar 4 sesiones pos implante, para fortalecer el nuevo cabello .",
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="bg-black text-white w-6 h-6 min-w-6 rounded-full text-center content-center font-bold pt-[2px] text-xs">
                  {idx + 1}
                </div>
                <p dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            ))}
          </div>
          
          {/* Imagen de aplicación */}
          <video
                src="https://res.cloudinary.com/dli9xljyz/video/upload/v1745417015/Aplicacio%CC%81n_Skingenuity_Hair_Micro_Agujas_nf1k9a.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />


          {/* Cuadros de resultado */}
          <div className="flex flex-col gap-3 w-full items-center">
            <div className="bg-gray-800 text-white px-6 py-3 rounded-full text-center text-sm font-medium w-full max-w-xs">
            Mejoras la calidad y estructura
            de la fibra capilar!
            </div>
          </div>
        </div>
      </AplicacionTratamiento>
    </>
  );
}
