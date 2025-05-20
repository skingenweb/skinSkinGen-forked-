"use client";
import ProductLinesGridReusable from "@/components/productLineCard";

const productLines = [
    {
        title: "Skingenuity Hair",
        description: "Solución para el crecimiento capilar.",
        image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381907/Skingenuity_hair_wslnxj.png",
        bgColor: "bg-[#F4E5E7]",
        link: "/skinhair",
        infoLink: "/skinhair"
      },
];

export default function ProductLinesPage() {
  return <ProductLinesGridReusable productLines={productLines} />;
}
