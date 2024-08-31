import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="w-64 rounded-lg shadow-lg overflow-hidden bg-gray-100 mb-12 border border-gray-200">
      <div className="relative ">
        <Image src={product.image} alt={product.name} width={400} height={400} className="object-cover p-3 rounded-3xl   w-full h-48" />
        <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold rounded-br-lg py-1 px-3">
          10% Off
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-green-600 text-sm">{product.genericName}</p>
        <p className="text-gray-600 text-xs mb-2">{product.manufacturer}</p>
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-gray-800">৳ {product.price}
            <br/>
          <div className="text-sm line-through text-gray-500">৳ {product.originalPrice}</div>
          </div>
          <button className="mt-3 w-25 px-2 bg-green-900 text-white text-sm font-semibold py-1 rounded-md hover:bg-blue-600">
          Add to cart
        </button>
        </div>
        
      </div>
    </div>
  );
}
