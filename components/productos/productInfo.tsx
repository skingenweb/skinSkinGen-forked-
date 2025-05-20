interface ProductInfoProps {
    product: {
      name: string;
      description: string;
      properties: Record<string, string>;
    };
  }
  
  export default function ProductInfo({ product }: ProductInfoProps) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
  
        <div className="border-t pt-4">
          <h3 className="font-semibold">Características:</h3>
          <ul className="list-disc list-inside">
            {Object.entries(product.properties).map(([key, value]) => (
              <li key={key}>
                <strong className="capitalize">{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={() => window.location.href = "/contacto" }className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
          Contacto Ventas
        </button>
      </div>
    );
  }
  