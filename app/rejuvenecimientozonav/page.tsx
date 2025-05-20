"use client";
import ProductLinesGridReusable from "@/components/productLineCard";

const productLines = [
    {
        title: "Skingenuity VR",
        description: "Rejuvenece tu zona íntima",
        image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381908/SKINGENUITY_VR_iylejc.png",
        bgColor: "bg-[#E8F5E9]",
        link: "/skingenuityV",
        infoLink: "/skingenuityV"
      },
];

export default function ProductLinesPage() {
  return <ProductLinesGridReusable productLines={productLines} />;
}
