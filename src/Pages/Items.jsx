import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products as originalProducts } from '../data/products';
import { useCart } from '../context/CartContext'; 
export default function Items() {
  const { addToCart } = useCart();
  const [sortOption, setSortOption] = useState('az'); 
  const sortedProducts = [...originalProducts].sort((a, b) => {
    switch (sortOption) {
      case 'az':
        return a.name.localeCompare(b.name);
      case 'za':
        return b.name.localeCompare(a.name);
      case 'lohi':
        return a.price - b.price;
      case 'hilo':
        return b.price - a.price;
      default:
        return 0;
    }
  });
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header with title + sort dropdown */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 sm:mb-0">Products</h1>
        {/* Sort Dropdown */}
        <div className="w-full sm:w-auto">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm"
          >
            <option value="az">Name (A to Z)</option>
            <option value="za">Name (Z to A)</option>
            <option value="lohi">Price (low to high)</option>
            <option value="hilo">Price (high to low)</option>
          </select>
        </div>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <Link to={`/product/${product.id}`} className="block">
              <div className="h-80 bg-gray-50 flex items-center justify-center p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-base mb-6 line-clamp-3 flex-grow">
                  {product.description}
                </p>
              </div>
            </Link>
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-orange-600">
                  ${product.price.toFixed(2)}
                </span>
                <button
  onClick={() => {
    addToCart(product);
    console.log('Added to cart:', product.name); 
  }}
  className="bg-orange-600 text-white px-8 py-1 rounded-lg hover:bg-orange-700 transition"
>
  Add to Cart
</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}