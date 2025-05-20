"use client";
import ProductLinesGrid from "@/components/home/productsLines";
import CarouselHero from "@/components/home/carousel";
import InfoCards from "@/components/home/infoCards";
import InfiniteTextCarousel from "@/components/home/infinityKeyWords";
import { useRef } from "react";
import Hero from "@/components/home/hero";
import { SlideData } from "@/lib/types";

export default function UnderConstruction() {
  const newLaunches = [
    {
      title: "dia de la madre",
      src: "https://res.cloudinary.com/dli9xljyz/video/upload/v1746635080/promocio%CC%81n_mayo_pa%CC%81gina_web_1920x720_px_ih9s6b.mp4",
    },
  ];

  
  const slides : SlideData[] = [
    {
      title: "MANIFICARE®",
      description:
        "Biorevitalización Inteligente para una Belleza Duradera.Tecnología de péptidos innovadora",
      src: "https://res.cloudinary.com/dli9xljyz/video/upload/v1741645763/20250310_1704_Golden_Glow_Moment_storyboard_01jp11cdz1ft4sn4zhmqsxx0tm_qjs6ju.mp4",
      type: "video",
      ctaText: "Conoce Más",
      ctaLink: "/manificare",
      textColor: "white",
      button: "primary",
      logo:"/images/productosLogos/LOGOBMANIFICARE.svg"
    },
    {
      title: "DERMAFILL®",
      description:
        "La nueva generación de ácido hialurónico de alta pureza.",
      src: "https://res.cloudinary.com/dli9xljyz/video/upload/v1741645734/background-v4_1_gueaw1.mp4",
      type: "video",
      ctaText: "Conoce más",
      ctaLink: "/dermafill",
      textColor: "black",
      button: "secondary",
      logo:"/images/productosLogos/dermafill.svg"
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="flex flex-col items-center w-full mx-auto">
        {/* Sección Hero + Carrusel */}
        <div className="w-full mb-12">
          <div className="w-full mx-auto ">
            <div className=" w-full">
              <Hero slides={slides} autoPlay interval={15000} />
            </div>
          </div>
        </div>

        {/* Sección de Líneas de Producto */}
        <div className="w-full max-w-[90%] md:max-w-[75%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 mt-12 mb-24">
          <div className="w-full col-span-5 mb-5">
            <ProductLinesGrid />
          </div>
        </div>
        <div ref={carouselRef} className="w-full  mx-auto mb-10">
          <CarouselHero slides={newLaunches} autoPlay={true} interval={4000} />
        </div>
        <InfiniteTextCarousel />
        <div className="w-full max-w-[90%] md:max-w-[75%] mx-auto ">
          <InfoCards />
        </div>
      </div>
    </>
  );
}
