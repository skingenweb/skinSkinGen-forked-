"use client";
import ProductLinesGridReusable from "@/components/productLineCard";

const productLines = [
  {
    title: "Dermafill®",
    description: "Rellena, hidrata y redefine tu piel con nuestra línea de ácido hialurónico.",
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381907/DERMAFILL_d3lykz.png",
    bgColor: "bg-[#FCE8DB]",
    link: "/productos/dermafill",
    infoLink: "/dermafill",
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
    title: "Skingenuity Skin",
    description: "Mejora los signos del envejecimiento y la salud general de tu rostro.",
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381907/SKINGENUITY_SKIN_mrfd9p.png",
    bgColor: "bg-[#E3F2FD]",
    link: "/skinrejuvenation",
    infoLink: "/skinrejuvenation"
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
  return <ProductLinesGridReusable productLines={productLines} />;
}
