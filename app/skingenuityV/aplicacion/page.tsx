"use client";
import Image from "next/image";

export default function SkingenuitySkinBeneficts() {
  const timelineItems = [
    "SKINGENUITY HAIR BUSCA DISMINUIR LA FASE TELOGENA DE LOS PACIENTES Y AUMENTAR EL PORCENTAJE DE LA FASE ANAGENA",
    "Factores de crecimiento recombinantes humanos factores específicos y concentrados.",
  ];
  return (
    <div className="w-full flex flex-col items-center overflow-hidden bg-white">
      {/* Banner superior */}
      <div className="w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745257494/SKINGENUITY_GEL_VAGINAL_LOGO_lrjdwd.png"
          alt="Skingenuity Skin Banner"
          width={400}
          height={80}
          className="w-[90%] max-w-[700px] object-contain"
        />
      </div>

      {/* Sección principal */}
      <div className="w-full bg-white relative mt-8">
        {/* Título morado */}
        <div className="absolute top-0 left-0 bg-[#5A2D68] h-[80px] w-full md:w-[40%] text-white text-lg md:text-2xl rounded-none md:rounded-r-lg flex items-center justify-center px-4">
          CONOCE SU MODO DE APLICACIÓN
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-end pt-24 md:pt-8">
          {/* Timeline de texto con animación */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 ">
            <video
              src="https://res.cloudinary.com/dli9xljyz/video/upload/v1745253239/Video_Aplicacio%CC%81n_Skingenuity_VR_nrcivi.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full     object-cover mt-20"
            />
          </div>
          <div className="flex flex-col md:basis-1/2 items-center gap-6 px-4 my-auto">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745295739/TRATAMIENTO_REGULAR_VR_ykxw3c.png"
              alt="Tratamiento Regular"
              width={400}
              height={80}
              className="w-[90%] max-w-[700px] object-contain"
            />
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745296084/TRATAMIENTO_INTENSIVO_VR_qfo4nj.png"
              alt="Tratamiento Intensivo"
              width={400}
              height={80}
              className="w-[90%] max-w-[700px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Texto principal */}
      <section className="w-full flex flex-col items-center px-4 py-16 bg-white gap-8 text-center">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1745253232/SKINGENUITY_VR_CAJA_BENEFICIOS-APLICACIO%CC%81N_j8iuwb.png"
          alt="Skingenuity Solución"
          width={400}
          height={160}
          className="object-contain"
        />

        {/* Título y descripción */}
        <div className="text-center leading-snug">
          <h2 className="text-xl md:text-2xl text-purple-800 font-bold">
            SKINGENUITY VR
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            Restauración Capilar
            <br />
            Caja x 6 Viales de 2 ml
          </p>
        </div>

        {/* Botones */}
        <div className="flex gap-6 flex-wrap justify-center">
          <button onClick={() => window.location.href = "https://wa.me/573185797100"} className="bg-[#5A2D68] text-white px-6 py-2  text-lg hover:bg-[#5A2D68] transition">
            Comprar
          </button>
        </div>

        {/* Línea inferior */}
        <p className="uppercase text-[#5A2D68] font-bold text-sm md:text-xl pt-4">
          MEDICINA REGENERATIVA PREMIUM
        </p>
      </section>
    </div>
  );
}
