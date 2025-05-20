"use client";

import Link from "next/link";

const links = [
  { title: "Política de Uso y Condiciones", path: "/politicaprivacidad" },
];

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Términos y Condiciones</h1>
      <p className="text-gray-600 text-center mb-8">
        Consulta nuestras políticas y condiciones haciendo clic en los siguientes enlaces.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {links.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
            <Link
              href={item.path}
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800  transition"
            >
              Ver página
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
