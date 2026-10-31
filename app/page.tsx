 import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf0f0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-[#004b87] text-white text-sm font-semibold uppercase tracking-wider rounded-full px-12 py-4 hover:bg-[#003866] transition-colors duration-200">
            Смотреть всю коллекцию
          </button>
        </div>

      </div>
    </main>
  );
}