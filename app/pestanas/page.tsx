"use client";
import ProductLinesGridReusable from "@/components/productLineCard";

const productLines = [
    {
        title: "XXtralash",
        description: "Serum para el crecimiento de tus pestañas.",
        image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1743381908/XXTRA_LASH_mjzj9c.png",
        bgColor: "bg-[#FFF3E0]",
        link: "/xxtralash",
        infoLink: "/xxtralash"
      },
];

export default function ProductLinesPage() {
  return <ProductLinesGridReusable productLines={productLines} />;
}
