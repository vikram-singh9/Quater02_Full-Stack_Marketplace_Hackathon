'use client'
import { createContext, useState, useEffect, useContext } from 'react';

// Define the Product type (you can put this in a types file if you want)
interface Product {
  _id: string;
  name: string;
  price: number;
  image_url: string;
}

// Define the Cart Context type
interface CartContextType {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: string) => void;
}

// Create a context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create the provider component
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // On initial load, check if there is any cart data in localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Update localStorage when the cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Add product to cart
  const addToCart = (item: Product) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((product) => product._id === item._id);
      if (!isItemInCart) {
        return [...prevCart, item];
      }
      return prevCart;
    });
  };

  // Remove product from cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
