import Image from "next/image";
import Link from "next/link";

interface ProductLineProps {
  title: string;
  description: string;
  image: string;
  link: string;
  infoLink?: string; // Enlace del botón "Conoce más"
}

export default function ProductLineCard({
  title,
  description,
  image,
  link,
  infoLink = "#",
}: ProductLineProps) {
  return (
    <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg w-full max-w-5xl mx-auto bg-white">
      {/* Lado izquierdo: Texto */}
      <div className="w-full md:w-1/2 bg-black p-6 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h2>
        <p className="text-sm text-gray-300 mt-2">{description}</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Link href={infoLink}>
            <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition">
              Conoce más
            </button>
          </Link>
          <Link href={link}>
            <button className="border border-white text-white px-4 py-2 rounded-md font-medium hover:bg-white hover:text-black transition">
              Productos
            </button>
          </Link>
        </div>
      </div>

      {/* Lado derecho: Imagen */}
      <div className="w-full md:w-1/2 relative">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-contain bg-white"
        />
      </div>
    </div>
  );
}
