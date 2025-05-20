"use client";
import { useState } from "react";
import Image from "next/image";

const eventos = {
  realizados: [
  ],
  proximos: [
    {
      id: 3,
      title: "Seminario de Estética Avanzada",
      date: "Marzo 20, 2024",
      image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1746630583/ACICME_cp0jfs.png",
    },
    {
      id: 4,
      title: "Workshop de Skincare",
      date: "Abril 10, 2024",
      image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1746630608/BELLEZA_Y_SALUD_s4nlgs.png",
    },
  ],
};

export default function EventosSection() {
  const [activeTab, setActiveTab] = useState<"proximos" | "realizados">("proximos");

  return (
    <div className="w-full max-w-[90%] md:max-w-4xl lg:max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Nuestros Eventos</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-md transition ${
            activeTab === "proximos" ? "bg-black text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("proximos")}
        >
          Próximos Eventos
        </button>
        <button
          className={`hidden px-4 py-2 rounded-md transition ${
            activeTab === "realizados" ? "bg-black text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("realizados")}
        >
          Eventos Realizados
        </button>
      </div>

      {/* Contenido de los eventos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventos[activeTab].map((evento) => (
          <div
            key={evento.id}
            className="rounded-xl overflow-hidden shadow-lg relative"
          >
            <Image
              src={evento.image}
              alt={evento.title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <p className="text-sm">{evento.date}</p>
              <h3 className="text-lg font-semibold">{evento.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
