"use client";
import ProductLinesGridReusable from "@/components/productLineCard";

const productLines = [
    {
        title: "Dermafill®",
        description: "Rellena, hidrata y redefine tu piel con nuestra línea de ácido hialurónico.",
        image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381907/DERMAFILL_d3lykz.png",
        bgColor: "bg-[#FCE8DB]",
        link: "/productos/dermafill",
        infoLink: "/dermafill"
      },
];

export default function ProductLinesPage() {
  return <ProductLinesGridReusable productLines={productLines} />;
}
