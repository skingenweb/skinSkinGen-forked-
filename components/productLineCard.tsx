"use client";

import ProductLineCard from "@/components/productos/productLineCard";

interface ProductLine {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  link: string;
  infoLink: string;
}

interface ProductLinesGridReusableProps {
  productLines: ProductLine[];
}

export default function ProductLinesGridReusable({
  productLines,
}: ProductLinesGridReusableProps) {
  return (
    <section className="w-full px-4 py-10">
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
