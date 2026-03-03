import { useCart } from '../context/CartContext';  
import { Link } from 'react-router-dom';
export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotal } = useCart();
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Your cart is empty</h2>
        <p className="text-lg text-gray-600 mb-8">Looks like you haven't added anything yet.</p>
        <Link
          to="/products"
          className="inline-block bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-orange-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-gray-900">Your Cart</h1>

      <div className="space-y-8">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6 last:border-b-0"
          >
            {/* Image */}
            <div className="w-32 h-32 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            {/* Details */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
              <p className="text-lg font-bold text-orange-600 mt-1">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 mt-1">Unit price: ${item.price.toFixed(2)}</p>
            </div>
            {/* Quantity & Remove */}
            <div className="flex items-center gap-6">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Total & Checkout */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center text-2xl font-bold">
          <span>Total:</span>
          <span>${getTotal().toFixed(2)}</span>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
          <Link
            to="/products"
            className="px-10 py-4 border border-gray-300 rounded-lg text-center font-semibold hover:bg-gray-50 transition"
          >
            Continue Shopping
          </Link>
          <button
            onClick={() => alert('Checkout not implemented yet – coming soon!')}
            className="px-10 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}