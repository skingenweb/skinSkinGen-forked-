"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  {
    value: 1,
    suffix: "",
    label: "No.",
    description:
      "SKINGENUITY, Tecnología Premium de Factores de Crecimiento No.1 a nivel mundial.",
  },
  {
    value: 15,
    suffix: "",
    label: "Países",
    description:
      "Presencia de SKINGENUITY en más de 15 países a nivel mundial.",
  },
  {
    value: 23,
    suffix: "",
    label: "Estudios",
    description: "Con + de 23 estudios clínicos a nivel mundial de SKINGENUITY",
  },
  {
    value: 10,
    suffix: "",
    label: "Años",
    description:
      "Con + de 10 años de Experiencia en el mercado con SKINGENUITY",
  },
];

export default function SkingenuityStats() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <div className="relative w-full py-16 px-6 bg-white text-center overflow-hidden">
      {/* Fondo de mapa mundi */}
      <div className="absolute inset-0 opacity-15 z-0">
        <Image
          src="https://res.cloudinary.com/dli9xljyz/image/upload/v1742871940/Mapa_Fondo_sin_transparencia_rlrfnr.png"
          alt="Mapa Mundi"
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido */}
      <div
        ref={ref}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: index * 0.5 }}
            className="text-black"
          >
            <h3 className="text-3xl font-extrabold flex justify-center items-center gap-1">
              {item.label === "No." ? (
                <>
                  <span className="text-xl">{item.label}</span>
                  {startCount ? (
                    <CountUp end={item.value} duration={2} />
                  ) : (
                    item.value
                  )}
                </>
              ) : (
                <>
                  {startCount ? (
                    <CountUp end={item.value} duration={2} />
                  ) : (
                    item.value
                  )}
                  <span className="text-xl">{item.label}</span>
                </>
              )}
            </h3>
            <p className="mt-2 text-sm md:text-base px-4">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
