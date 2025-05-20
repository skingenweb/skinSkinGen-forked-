interface ProductTabsProps {
  products: { id: string; name: string; bannerColor: string }[];
  selectedProduct: { id: string };
  setSelectedProduct: (product: any) => void;
}

export default function ProductTabs({
  products,
  selectedProduct,
  setSelectedProduct,
}: ProductTabsProps) {
  return (
    <div className="flex justify-center overflow-auto pb-2">
      {products.map((product) => {
        const isActive = selectedProduct.id === product.id;
        return (
          <button
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className={`px-1 py-2 text-xs md:text-lg md:px-4 max-w-[100px] md:max-w-[100%] border  transition`}
            style={{
              backgroundColor: isActive ? product.bannerColor : "transparent",
              color: isActive ? "#fff" : "#4B5563", // text-white o text-gray-600
              borderColor: isActive ? product.bannerColor : "#D1D5DB", // border-gray-300
            }}
          >
            {product.name}
          </button>
        );
      })}
    </div>
  );
}
