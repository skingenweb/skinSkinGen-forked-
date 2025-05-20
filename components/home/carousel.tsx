"use client";;
import { useState, useEffect, useRef } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface SlideData {
  title: string;
  src: string;
}

interface CarouselProps {
  slides: SlideData[];
  autoPlay?: boolean;
  interval?: number;
}

export default function CarouselHero({
  slides,
  autoPlay = true,
  interval = 8000,
}: CarouselProps) {
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

  // AutoPlay Effect
  useEffect(() => {
    if (autoPlay) {
      timeoutRef.current = setInterval(goToNextSlide, interval);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-[350px] sm:h-[400px] md:h-[800px] flex items-center justify-center relative"
          >
            <video
              src={slide.src}
              loop
              autoPlay
              muted
              playsInline
            />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
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

      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
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
