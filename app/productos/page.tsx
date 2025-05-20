import ProductLineCard from "@/components/productos/productLineCard";

const productLines = [
  {
    title: "Dermafill®",
    description: "Rellena, hidrata y redefine tu piel con nuestra línea de ácido hialurónico.",
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381907/DERMAFILL_d3lykz.png",
    bgColor: "bg-[#FCE8DB]",
    link: "/productos/dermafill",
    infoLink: "/dermafill"
  },
  {
    title: "Manificare",
    description: "Cocteles de biorevitalización de la piel. Hidrata, revitaliza, aclara.",
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1745349454/MANIFICARE_FRASCOS_PRESENTACIO%CC%81N_srqneh.png",
    bgColor: "bg-[#FFF3E0]",
    link: "/manificare/lineas/manificare",
    infoLink: "/manificare"
  },
  {
    title: "Skingenuity Hair",
    description: "Solución para el crecimiento capilar.",
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381907/Skingenuity_hair_wslnxj.png",
    bgColor: "bg-[#F4E5E7]",
    link: "/skinhair",
    infoLink: "/skinhair"
  },
  {
    title: "Skingenuity Skin",
    description: "Mejora los signos del envejecimiento y la salud general de tu rostro.",
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381907/SKINGENUITY_SKIN_mrfd9p.png",
    bgColor: "bg-[#E3F2FD]",
    link: "/skinrejuvenation",
    infoLink: "/skinrejuvenation"
  },
  {
    title: "Skingenuity VR",
    description: "Rejuvenece tu zona íntima",
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381908/SKINGENUITY_VR_iylejc.png",
    bgColor: "bg-[#E8F5E9]",
    link: "/skingenuityV",
    infoLink: "/skingenuityV"
  },
  {
    title: "XXtralash",
    description: "Serum para el crecimiento de tus pestañas.",
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381908/XXTRA_LASH_mjzj9c.png",
    bgColor: "bg-[#FFF3E0]",
    link: "/xxtralash",
    infoLink: "/xxtralash"
  },
  {
    title: "ScarMD®",
    description: "Mejora la apariencia de tus cicatrices",
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381907/SCAR_MD_ujukaa.png",
    bgColor: "bg-[#FFF3E0]",
    link: "/scarmd",
    infoLink: "/scarmd"
  },
  {
    title: "Hematix ™",
    description: "Previene y elimina los hematomas.",
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381907/HEMATIX_fwwsv8.png",
    bgColor: "bg-[#FFF3E0]",
    link: "hematix",
    infoLink: "/hematix"
  },
  {
    title: "Dermadol",
    description: "Efecto calmante del dolor.Protege, hidrata, refresca y suaviza la piel maltratada.",
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381907/DERMADOL_vi0mpu.png",
    bgColor: "bg-[#FFF3E0]",
    link: "dermadol  ",
    infoLink: "/dermadol"
  },
  {
    title: "Xtaz",
    description: "Mascarilla regeneradora de hidratación intensa y profunda.",
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1745345769/X-TAZ_CAJA_hdz3g3.png",
    bgColor: "bg-[#FFF3E0]",
    link: "/xtaz",
    infoLink: "/xtaz"
  },
];

export default function ProductLinesPage() {
  return (
    <section className="w-full px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {productLines.map((product, index) => (
          <ProductLineCard
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
            link={product.link}
            infoLink={product.infoLink}
          />
        ))}
      </div>
    </section>
  );
}
