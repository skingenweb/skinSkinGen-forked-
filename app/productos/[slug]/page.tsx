// components/productos/ProductLinePage.tsx
"use client";

import { useState, use } from "react";
import Image from "next/image";
import ProductTabs from "@/components/productos/productTabs";




const productLines: Record<string, { name: string; products: any[] }> = {
  dermafill: {
    name: "Dermafill",
    products: [
      {
        id: "global-xtra",
        name: "DERMAFILL® GLOBAL XTRA",
        bannerColor: "#53AB9A",
        headerImage:
          "https://res.cloudinary.com/dli9xljyz/image/upload/v1743389672/MUJER_GLOBAL_XTRA_espm3a.png",
        productImage:
          "https://res.cloudinary.com/dli9xljyz/image/upload/v1743389670/CAJA_GLOBAL_kcukmj.png",
        successPdf: "/docs/EVIDENCIA CLÍNICA DERMAFILL® GLOBAL XTRA.pdf",
        buyLink: "https://wa.me/573185797100",
        description:
          "Mejor utilizado para rellenar imperfecciones superficiales en la dermis. Su profundidad de inyección es en la Dermis media a superficial.",
        attributes: {
          volumen: "1x1 ml",
          duracion: "9 meses",
          aguja: "27G 1/2",
          viscosidad: "+ + +",
        },
      },
      {
        id: "volume-ultra",
        name: "DERMAFILL® VOLUME ULTRA",
        bannerColor: "#BD1823",
        headerImage:
          "https://res.cloudinary.com/dli9xljyz/image/upload/v1743389673/MUJER_VOLUME_ULTRA_u9ekwx.png",
        productImage:
          "https://res.cloudinary.com/dli9xljyz/image/upload/v1743389671/CAJA_VOLUME_bivcw5.png",
        successPdf: "/pdfs/volume-ultra.pdf",
        buyLink: "https://wa.me/573185797100",
        description:
          "Proporciona una apariencia voluminosa a las mejillas y el tercio medio. Inyección en dermis profunda o subcutánea.",
        attributes: {
          volumen: "1x1 ml",
          duracion: "12 meses",
          aguja: "27G 1/2",
          viscosidad: "+ + + + +",
        },
      },
      {
        id: "lips",
        name: "DERMAFILL® LIPS",
        bannerColor: "#81358A",
        headerImage:
          "https://res.cloudinary.com/dli9xljyz/image/upload/v1746413886/WhatsApp_Image_2025-04-26_at_18.10.10_1_fsmpeu.jpg",
        productImage:
          "https://res.cloudinary.com/dli9xljyz/image/upload/v1743389670/CAJA_LIPS_ulf3q7.png",
        successPdf: "/pdfs/lips.pdf",
        buyLink: "https://wa.me/573185797100",
        description: "Proporciona definición, hidratación y volumen en los labios.",
        attributes: {
          volumen: "1x1 ml",
          duracion: "9 meses",
          aguja: "27G 1/2",
          viscosidad: "+ + + +",
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
      <div className="w-100 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center">
        {/* Texto */}
        <div className="space-y-4 max-w-[40%] mx-auto">
          <h2 className="text-xl font-bold " style={{ color: selectedProduct.bannerColor }}>
            {selectedProduct.name}
          </h2>
          <p className="text-sm text-black text-justify">{selectedProduct.description}</p>
          <div className="text-sm space-y-1" style={{ color: selectedProduct.bannerColor }}>
            <p>
              <strong>Volumen del gel:</strong> {selectedProduct.attributes.volumen}
            </p>
            <p>
              <strong>Duración:</strong> {selectedProduct.attributes.duracion}
            </p>
            <p>
              <strong>Aguja:</strong> {selectedProduct.attributes.aguja}
            </p>
            <p>
              <strong>Viscosidad:</strong> {selectedProduct.attributes.viscosidad}
            </p>
          </div>
        </div>

        {/* Imagen producto */}
        <div className="flex justify-center max-w-[60%]">
          <Image
            src={selectedProduct.productImage}
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

      {/* Separador jeringa */}
      <div className="w-full flex justify-center py-6">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1743389671/JERINGA_NG_zswtfg.png"
          alt="Separador"
          width={50}
          height={50}
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
