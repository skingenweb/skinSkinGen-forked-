"use client";
import ProductLinesGridReusable from "@/components/productLineCard";

const productLines = [
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
];

export default function ProductLinesPage() {
  return <ProductLinesGridReusable productLines={productLines} />;
}
