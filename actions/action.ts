



import { Product } from "@/types/product";

// Add to Cart
export const addToCart = (product: Product) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  if (!Array.isArray(cart)) {
    console.error("Cart is corrupted, resetting...");
    localStorage.setItem("cart", JSON.stringify([])); // Reset cart
    return;
  }

  const existingProductIndex = cart.findIndex((item) => item._id === product._id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

// Remove from Cart
export const removeFromCart = (productId: string) => {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  if (!Array.isArray(cart)) {
    console.error("Cart is corrupted, resetting...");
    localStorage.setItem("cart", JSON.stringify([]));
    return;
  }

  cart = cart.filter((item) => item._id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Update Cart Quantity
export const updateCartQuantity = (productId: string, quantity: number) => {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  if (!Array.isArray(cart)) {
    console.error("Cart is corrupted, resetting...");
    localStorage.setItem("cart", JSON.stringify([]));
    return;
  }

  const productIndex = cart.findIndex((item) => item._id === productId);

  if (productIndex > -1) {
    cart[productIndex].quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// Get Cart Items
export const getCartItems = (): Product[] => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  return Array.isArray(cart) ? cart : [];
};
