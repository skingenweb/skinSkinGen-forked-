"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Button from "../buttom";

interface SlideData {
  title: string;
  description: string;
  src: string;
  type: "image" | "video";
  ctaText?: string;
  ctaLink?: string;
  textColor:string;
  button: "primary" | "secondary",
  logo:string
}

interface CarouselHeroProps {
  slides: SlideData[];
  autoPlay?: boolean;
  interval?: number;
}

export default function CarouselHero({
  slides,
  autoPlay = true,
  interval = 8000,
}: CarouselHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (autoPlay) {
      timeoutRef.current = setInterval(goToNextSlide, interval);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-[800px] flex items-center justify-center relative"
          >
            {slide.type === "image" ? (
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
                className=" shadow-md"
              />
            ) : (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            )}
            <div className={`absolute bottom-70 left-[120px] text-${slide.textColor} max-w-lg`}>
              <Image alt={slide.title} src={slide.logo} width={300} height={100} className="w-full h-[120px] object-cover"/>
              {/* <h2 className="text-8xl font-bold mb-10">{slide.title}</h2> */}
              <p className="mb-10 text-2xl">{slide.description}</p>
              {slide.ctaText && slide.ctaLink && (
                <Button text={slide.ctaText} link={slide.ctaLink} variant={slide.button} />
              )}
            </div>
            <div className="absolute top-[700px] right-10 flex">
            <Image alt={slide.title} src="/images/productosLogos/BANDERA.svg" width={300} height={100} className="w-[50px] h-[50px] object-cover"/>
            <Image alt={slide.title} src="https://res.cloudinary.com/dli9xljyz/image/upload/v1743389671/CERTIFICACIO%CC%81N_EUROPEA_djcnpp.png" width={300} height={100} className="w-[50px] invert h-[50px] object-cover"/>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
        onClick={goToPrevSlide}
      >
        <IconChevronLeft size={24} />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
        onClick={goToNextSlide}
      >
        <IconChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
