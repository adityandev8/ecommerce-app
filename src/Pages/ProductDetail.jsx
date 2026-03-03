import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
export default function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find(p => p.id === productId);
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-red-600 mb-6">Product Not Found</h1>
          <Link
            to="/products"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <Link
          to="/products"
          className="inline-flex items-center text-orange-100 hover:text-orange-800 font-medium text-lg"
        >
          ← Back to Products
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Image column */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex items-center justify-center border border-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[500px] w-full object-contain"
          />
        </div>

        {/* Details column */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <div className="text-5xl font-extrabold text-orange-600 mb-6">
            ${product.price.toFixed(2)}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            {product.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-orange-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-orange-700 transition shadow-md">
              Add to Cart
            </button>
            <button className="flex-1 border-2 border-orange-600 text-orange-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-orange-50 transition">
              Add to Wishlist
            </button>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-600 space-y-2">
            <p>• Free shipping on orders over $50</p>
            <p>• 30-day money-back guarantee</p>
            <p>• In stock – ships within 1–2 business days</p>
          </div>
        </div>
      </div>
    </div>
  );
}