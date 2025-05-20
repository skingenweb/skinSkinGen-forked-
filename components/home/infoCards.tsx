import Image from "next/image";

const treatments = [
  { name: "Rejuvenecimiento facial", image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1742871052/Rejuvenecimiento_facial_ojqztw.png",link:"rejuvenecimientofacial" },
  { name: "Rejuvenecimiento zona íntima", image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1742871053/Rejuvenecimiento_zona_i%CC%81ntima_rb5g9o.png",link:"rejuvenecimientozonav" },
  { name: "Alopecia", image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1742871052/ALOPECIA_qsmffc.png",link:"alopecia" },
  { name: "Ácido Hialurónico", image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1742871052/A%CC%81cido_Hialuro%CC%81nico_ecxlvg.png" ,link:"acidohialuronico"},
  { name: "Crecimiento de pestañas", image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1742871052/Crecimiento_de_pestan%CC%83as_yl63zy.png" ,link:"pestanas"},
  { name: "Cicatrices y hematomas", image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1742871052/Cicatrices_y_Hematomas_azkipr.png",link:"cicatricesyhematomas"},
  { name: "Tratamiento del dolor", image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1747669739/chica_dermadol_gy8mi1.png",link:"tratamientodolor"},
  { name: "Mesoterapia", image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1747669739/MESOTERAPIA_oeow6i.png",link:"mesoterapia" },
];

export default function TratamientosGrid() {
  return (
    <div className="w-full">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">TRATAMIENTOS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="relative group w-full aspect-[1/1.2] overflow-hidden shadow-md"
          >
            <Image
              src={treatment.image}
              alt={treatment.name}
              fill
              className="object-cover h-100 w-100 grayscale group-hover:grayscale-0 transition duration-300 hover:cursor-pointer"
              onClick={() => window.location.href = treatment.link}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm text-center py-2 px-1">
              {treatment.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
