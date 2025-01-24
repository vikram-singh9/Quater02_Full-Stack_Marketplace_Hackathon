'use client';
import { useCart } from "@/context/CartContext"; // Import useCart hook
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [loading, setLoading] = useState<boolean>(true); // Loader state

  useEffect(() => {
    // Simulating a delay for loading (like fetching data)
    setTimeout(() => {
      setLoading(false); // Set loading to false once data is ready
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <div className="cart-page p-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      
      {/* Conditional Rendering based on loading state */}
      {loading ? (
        <div className="flex justify-center items-center mt-40">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-gradient animate-spin"></div>
          </div>
        </div>
      ) : cart.length === 0 ? (
        <p className="text-lg text-center text-gray-600">Your cart is empty!</p>
      ) : (
        <div className="space-y-8">
          {cart.map((item) => (
            <div
              key={item._id}
              className="cart-item flex flex-col md:flex-row items-center rounded-lg p-6 gap-6"
            >
              {/* Left Side: Product Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={item.image_url}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="w-[400px] h-[300px] object-cover rounded-lg border"
                />
              </div>

              {/* Right Side: Product Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
                  <p className="text-lg font-semibold text-gray-700">
                    Price: ${item.price}
                  </p>
          
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => removeFromCart(item._id)}
                    className="bg-red-500 text-white text-sm px-6 py-2 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </Button>
                  <Link href={'/checkout'}
                    className="bg-[#2A254B] text-white text-sm px-6 py-2 rounded-lg"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
