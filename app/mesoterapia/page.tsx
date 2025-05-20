"use client";
import ProductLinesGridReusable from "@/components/productLineCard";

const productLines = [
    {
        title: "Manificare",
        description: "Cocteles de biorevitalización de la piel. Hidrata, revitaliza, aclara.",
        image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1745349454/MANIFICARE_FRASCOS_PRESENTACIO%CC%81N_srqneh.png",
        bgColor: "bg-[#FFF3E0]",
        link: "/manificare/lineas/manificare",
        infoLink: "/manificare"
      },
];

export default function ProductLinesPage() {
  return <ProductLinesGridReusable productLines={productLines} />;
}
