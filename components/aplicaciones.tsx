"use client";

import { useState, ReactElement } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface AplicacionTratamientoProps {
  tabs: {
    key: string;
    title: string;
    image: string;
  }[];
  children: ReactElement[];
}

export default function AplicacionTratamiento({ tabs, children }: AplicacionTratamientoProps) {
  const [selected, setSelected] = useState<string>(tabs[0].key);

  return (
    <section className="w-full flex flex-col items-center gap-10 py-12 bg-white px-4">
      {/* BOTONES */}
      <div className="flex  flex-row  gap-6">
        {tabs.map(({ key, title, image }) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`relative group transition hover:scale-105 ${
              selected === key ? "opacity-100" : "opacity-40"
            }`}
          >
            <Image
              src={image}
              alt={title}
              width={300}
              height={200}
              className="rounded w-[340px] md:w-[500px]"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gray-700 bg-opacity-80 text-white text-sm font-semibold py-2 text-center">
              {title}
            </div>
          </button>
        ))}
      </div>

      {/* CONTENIDO DINÁMICO */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-5xl flex flex-col items-center gap-6"
        >
          {children[tabs.findIndex((t) => t.key === selected)]}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
