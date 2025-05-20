// components/productos/ProductLinePage.tsx
"use client";

import { useState, use } from "react";
import Image from "next/image";
import ProductTabs from "@/components/productos/productTabs";




const productLines: Record<string, { name: string; products: any[] }> = {
  manificare: {
    name: "dermabooster",
    products: [
      {
        id: "dermabooster",
        name: "DermaBooster 50",
        bannerColor: "#F39237",
        headerImage:
          "https://res.cloudinary.com/dli9xljyz/image/upload/v1745348903/BENEGICIOS_DermaBooster_50_h1cwnr.png",
        productImage:
          "https://res.cloudinary.com/dli9xljyz/image/upload/v1745348907/CAJA_DermaBooster_50_tv8pl9.png",
        productBanner: "https://res.cloudinary.com/dli9xljyz/image/upload/v1745353004/DB_50_PRESENTACIO%CC%81N_ewmqpc.png",
        molecula:"https://res.cloudinary.com/dli9xljyz/image/upload/v1745348921/Mole%CC%81cula_DermaBooster_50_wsh9g1.png",
        successPdf: "/docs/EVIDENCIA CLÍNICA DERMAFILL® GLOBAL XTRA.pdf",
        buyLink: "https://wa.me/573185797100",
        description:
          "Mejor utilizado para rellenar imperfecciones superficiales en la dermis. Su profundidad de inyección es en la Dermis media a superficial.",
        attributes: {
          volumen: "23 Aminoácidos Monopéptidos,Tripéptidos",
          duracion: "12 Vitaminas",
          aguja: "3 Coenzimas",
          viscosidad: "2 Antioxidantes",
          componente:"+ Ácido Hialurónico"
        },
        presentacion:"CAJA DE 5 VIALES X 5ML Producto estéril"
      },
      {
        id: "Whitening & Brightening",
        name: "Whitening & Brightening",
        bannerColor: "#000000",
        headerImage:
          "https://res.cloudinary.com/dli9xljyz/image/upload/v1745348902/Beneficios_Whitening_Brightening_e0refs.png",
        productImage:
          "https://res.cloudinary.com/dli9xljyz/image/upload/v1745348905/CAJA_Whitening_Brightening_iekiau.png",
        productBanner: "https://res.cloudinary.com/dli9xljyz/image/upload/v1745352999/WB_PRESENTACIO%CC%81N_chxovz.png",
        molecula:"https://res.cloudinary.com/dli9xljyz/image/upload/v1745348923/Mole%CC%81cula_Whitening_Brightening_wr3qh3.png",
        successPdf: "/pdfs/volume-ultra.pdf",
        buyLink: "https://wa.link/xyz456",
        description:
          "Proporciona una apariencia voluminosa a las mejillas y el tercio medio. Inyección en dermis profunda o subcutánea.",
        attributes: {
          volumen: "",
          duracion: "",
          aguja: "",
          viscosidad: "",
          componente:""
        },
      },
    ],
  },
};

export default function ProductLinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const line = productLines[slug];
  const [selectedProduct, setSelectedProduct] = useState(line.products[0]);
  const [showModal, setShowModal] = useState(false);

  if (!line || !selectedProduct) return <div>No se encontró la línea de productos.</div>;

  

  return (
    <div className="w-full  mx-auto">
      <div className="w-full flex justify-start">
        <Image
          src={selectedProduct.productBanner}
          alt="Header"
          width={100}
          height={100}
          className="w-full h-[150px] object-contain"
        />
      </div>
      {/* Imagen superior */}
      <div className="w-full h-full">
        <Image
          src={selectedProduct.headerImage}
          alt="Header"
          width={100}
          height={1000}
          className="w-full h-screen object-cover object-top"
        />
      </div>

      {/* Banner con color */}
      <div
        className="text-white font-semibold text-center py-6 w-full"
        style={{ backgroundColor: selectedProduct.bannerColor }}
      >
        {selectedProduct.name}
      </div>

      {/* Info principal */}
      <div className="w-100 flex justify-center gap-6 mt-6 items-center ">
      <div className="flex justify-center">
      <div className="space-y-4 mx-auto mt-8">
          <div className="text-sm md:text-lg space-y-1" style={{ color: selectedProduct.bannerColor }}>
            <p>
              {selectedProduct.attributes.volumen}
            </p>
            <p>
              {selectedProduct.attributes.duracion}
            </p>
            <p>
              {selectedProduct.attributes.aguja}
            </p>
            <p>
               {selectedProduct.attributes.viscosidad}
            </p>
          </div>
          <Image
            src={selectedProduct.productImage}
            alt="Producto"
            width={500}
            height={600}
            className="object-cover"
          />
        </div>
        <Image
            src={selectedProduct.molecula}
            alt="Producto"
            width={500}
            height={600}
            className="object-cover"
          />
      </div>
      </div>


      {/* Tabs */}
      <div className="my-8">
        <ProductTabs
          products={line.products}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      </div>


      {/* Botones finales */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
        <a
          href={selectedProduct.buyLink}
          target="_blank"
          className={`px-6 py-3  w-[180px] text-white text-center  transition`}
          style={{ backgroundColor: selectedProduct.bannerColor }}
        >
          Comprar
        </a>
      </div>
    </div>
  );
}
