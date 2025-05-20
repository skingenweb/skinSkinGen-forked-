"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

// Asegúrate de tener las imágenes en /public/images/keywords/
const images = [
  { src: "/images/productosLogos/LOGODERMAFILL.svg", alt: "dermafill producto" },
  { src: "/images/productosLogos/LOGOSCARMD.svg", alt: "scardm" },
  { src: "/images/productosLogos/LOGOXXTRALASH.svg", alt: "xxtralash" },
  { src: "/images/productosLogos/LOGOHEMATIX.svg", alt: "hematix" },
  { src: "/images/productosLogos/LOGODERMADOL.svg", alt: "dermadol" },
  { src: "/images/productosLogos/LOGOX-TAZ.svg", alt: "x-taz" },
  { src: "/images/productosLogos/LOGOSKINGENU.svg", alt: "skingenuity" },
  { src: "/images/productosLogos/LOGOMANIFICARE.svg", alt: "manificare"}
];

export default function InfiniteImageCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animation = container.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      {
        duration: 10000,
        iterations: Infinity,
        easing: "linear",
      }
    );

    return () => animation.cancel();
  }, []);

  return (
    <div className="w-screen overflow-hidden bg-white py-6">
      <div
        ref={containerRef}
        className="flex items-center space-x-16 whitespace-nowrap"
      >
        {[...images, ...images, ...images, ...images].map((img, index) => (
          <div key={index} className="min-w-[230px] h-[150px] relative">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
