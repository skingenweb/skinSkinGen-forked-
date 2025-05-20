"use client";
import ProductLinesGridReusable from "@/components/productLineCard";

const productLines = [
    {
        title: "Dermadol",
        description: "Efecto calmante del dolor.Protege, hidrata, refresca y suaviza la piel maltratada.",
        image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381907/DERMADOL_vi0mpu.png",
        bgColor: "bg-[#FFF3E0]",
        link: "dermadol  ",
        infoLink: "/dermadol"
      },
];

export default function ProductLinesPage() {
  return <ProductLinesGridReusable productLines={productLines} />;
}
