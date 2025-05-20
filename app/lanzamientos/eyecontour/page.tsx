"use client";
import Image from "next/image";

export default function SkingenuitySkinPage() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-[url('https://res.cloudinary.com/dli9xljyz/image/upload/v1745348910/FONDO_MANIFICAE_Transparencia_90__k7shxo.png')] bg-repeat bg-center">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745959803/EC_TITULO_b4f3cq.png"
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
                Tratamiento específico indicado en bolsas, ojeras y
                envejecimiento del contorno de ojos: patas de gallo, líneas de
                expresión.
              </p>
              <p className="text-[#27357B] font-semibold text-[24px] md:text-[32px] mt-8">
                Los ingredientes activos de la solución CONTORNO DE OJOS
                disuelven la pared de las células grasas y mejoran l a
                circulación en la zona.
              </p>
            </div>
          </div>

          {/* Imagen mujer lado derecho */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 ">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745955534/Presentacio%CC%81n_Eye_Contour_ywfdt6.png"
              alt="Hombre con abundante cabello"
              width={440}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      <Image
        src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745959171/Encuentralo_aqui%CC%81_eye_mabxl5.png"
        alt="Skingenuity Solución"
        width={400}
        height={160}
        className="w-full object-cover"
      />
    </div>
  );
}
