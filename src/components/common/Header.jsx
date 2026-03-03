import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext'; 

export default function Header() {
  const location = useLocation();
  if (location.pathname === '/login') return null;

  const { getItemCount } = useCart(); 
  const itemCount = getItemCount();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left spacer – helps center the title perfectly */}
          <div className="w-20 hidden sm:block" />

          {/* left: Swag Labs – bold, Times New Roman */}
          <Link
            to="/products"
            className="text-3xl font-bold text-black-600 font-serif tracking-tight"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            Swag Labs
          </Link>

          {/* Right side: Cart icon + badge */}
          <nav className="flex items-center">
            <Link
              to="/cart"
              className="relative flex items-center text-gray-800 hover:text-orange-600 transition-colors"
            >
              <ShoppingCart className="w-8 h-8" strokeWidth={1.8} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5 shadow-sm">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}