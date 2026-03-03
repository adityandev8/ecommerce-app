import { createContext, useContext, useState, useEffect } from 'react';
import {
  loadCartFromStorage,
  saveCartToStorage,
  clearCartStorage,
} from '../utils/cartPersistence';  
const CartContext = createContext();
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(loadCartFromStorage);
  useEffect(() => {
    saveCartToStorage(cartItems);
    console.log('Cart updated:', cartItems); // Debug log to verify cart state changes
  }, [cartItems ]);
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };
  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const getItemCount = () =>
    cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const clearCart = () => {
    setCartItems([]);
    clearCartStorage();
  };
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotal,
    getItemCount,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};