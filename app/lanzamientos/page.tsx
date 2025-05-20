import ProductLineCard from "@/components/productos/productLineCard";

const productLines = [
  {
    title: "HAIR VITALIZER",
    description: "Promueve y acelera el crecimiento y la restauranción del cabello.",
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1745955776/Hair_vitalizer_eqy4rz.png",
    bgColor: "bg-[#FCE8DB]",
    link: "/manificare/peptidos",
    infoLink: "/lanzamientos/hairvitalizer"
  },
  {
    title: "EYE CONTOUR",
    description: "indicado en bolsas, ojeras y antienvejecimiento del contorno de ojos: ptas de gallo, líneas de expresión.",
    image: "https://res.cloudinary.com/dli9xljyz/image/upload/v1745955801/Eye_contour_paxbq2.png",
    bgColor: "bg-[#FFF3E0]",
    link: "/manificare/peptidos",
    infoLink: "/lanzamientos//eyecontour"
  },
];

export default function ProductLinesPage() {
  return (
    <section className="w-full px-4 py-10 my-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {productLines.map((product, index) => (
          <ProductLineCard
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
            link={product.link}
            infoLink={product.infoLink}
          />
        ))}
      </div>
    </section>
  );
}
