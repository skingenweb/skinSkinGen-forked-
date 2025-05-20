"use client";;
import Image from "next/image";

export default function SkingenuitySkinPage() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-[url('https://res.cloudinary.com/dli9xljyz/image/upload/v1745348910/FONDO_MANIFICAE_Transparencia_90__k7shxo.png')] bg-repeat bg-center">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745955534/HV_TITULO_njwsac.png"
          alt="Skingenuity Hair Banner"
          width={400}
          height={80}
          className="w-full max-w-[80%] h-[300px]object-cover"
        />
      </div>

      {/* Sección principal */}
      <div className="w-full bg-white relative mt-8 shadow-lg">
        <div className="w-full flex flex-col md:flex-row justify-between items-end pt-24 md:pt-8">
          {/* Lado izquierdo con producto y texto */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 my-auto">
            <div className="mt-4 text-center md:text-left text-xs text-gray-800 leading-snug max-w-xs md:max-w-lg md:pl-8">
              <p className="text-black font-semibold text-[24px] md:text-[32px]">
                Hair Vitalizer es una técnica muy eficaz para tratar la caída
                del cabello y puede utilizarse para ayudar a la restauración del
                cabello.
              </p>
              <p className="text-[#27357B] font-semibold text-[24px] md:text-[32px] mt-8">
                La infusión se compone de diversos péptidos, factores de
                crecimiento, aminoácidos y vitaminas que permiten la penetración
                de los ingredientes en el cuero cabelludo, casi 400 veces más de
                lo habitual.
              </p>
            </div>
          </div>

          {/* Imagen mujer lado derecho */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 ">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745955535/Presentacio%CC%81n_Hair_vitalizer_iulklv.png"
              alt="Hombre con abundante cabello"
              width={440}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      <Image
        src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745958899/Encuentralo_aqui%CC%81_hair_zkwkoq.png"
        alt="Skingenuity Solución"
        width={400}
        height={160}
        className="w-full object-cover"
      />

    </div>
  );
}
