import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

export default function ProductCard({ image, title, description, price }: ProductCardProps) {
  return (
    <div className="bg-white rounded-[32px] p-4 shadow-sm flex flex-col w-full">
      <div className="bg-[#f0f2f5] rounded-[24px] aspect-square relative overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-6"
        />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-sm text-gray-500 mb-4 flex-grow">{description}</p>
      
      <div className="flex flex-col items-start mt-auto">
        <span className="text-lg text-gray-800 mb-4">{price} ₽</span>
        <button className="bg-[#004b87] text-white text-xs font-semibold uppercase tracking-wider rounded-full px-6 py-3 hover:bg-[#003866] transition-colors duration-200">
          в корзину
        </button>
      </div>
    </div>
  );
}