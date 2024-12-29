"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function UnderConstruction() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-30T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((difference % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 text-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <div className="mb-6">
          <Image
            src="/logoSkin.svg"
            alt="SkinGen Colombia"
            width={200}
            height={100}
            className="mx-auto"
          />
        </div>
        <h1 className="text-2xl font-bold text-red-700 mb-4">
          ¡Estamos trabajando en algo increíble!
        </h1>
        <p className="text-gray-600 mb-6">
          Nuestra página web estará disponible muy pronto. ¡Mantente atento para
          descubrir todo lo que tenemos preparado para ti!
        </p>
        <div className="flex justify-center gap-4 text-gray-800 text-lg font-semibold">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.days}</span>
            <span>Días</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.hours}</span>
            <span>Horas</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.minutes}</span>
            <span>Minutos</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.seconds}</span>
            <span>Segundos</span>
          </div>
        </div>
        <footer className="mt-6 text-gray-500 text-sm">
          &copy; 2024 SkinGen Colombia. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
}
