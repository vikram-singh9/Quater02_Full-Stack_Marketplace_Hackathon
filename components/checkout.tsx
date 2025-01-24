'use client';

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
const Checkout = () => {
  const { cart } = useCart(); // Access cart from context
  const [isCheckout, setIsCheckout] = useState(false); // Toggle between product list and form

  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  // Render user details form
  const renderCheckoutForm = () => (
    <div className="w-full lg:w-2/3">
      <h1 className="text-xl font-semibold mb-6">User Details</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-600 mb-2">
            Full Name
          </label>
          <Input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-lg p-3"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email
          </label>
          <Input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg p-3"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-gray-600 mb-2">
            Shipping Address
          </label>
          <Textarea
            id="address"
            className="w-full border border-gray-300 rounded-lg p-3"
            placeholder="Enter your shipping address"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 rounded-lg"
        >
          Place Order
        </button>
      </form>
    </div>
  );

  return (
    <section>
      <div className="py-12 mt-12">
        <div className="w-[90%] mx-auto border border-gray-300 rounded-lg p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            {/* Product List or Checkout Form */}
            {!isCheckout ? (
              <div className="w-full lg:w-2/3">
                <h1 className="text-xl font-semibold mb-6">Products</h1>

                {cart.map((item) => (
                  <div key={item._id} className="flex items-center gap-4 mb-6">
                    <Image
                      src={item.image_url}
                      width={100}
                      height={100}
                      alt={item.name}
                      className="rounded-md"
                    />
                    <div>
                      <h1 className="text-lg font-semibold">{item.name}</h1>
                      {/* <p className="text-gray-600 text-sm">{item.description}</p> */}
                      <h1 className="text-sm font-bold">${item.price}</h1>
                    </div>
                  </div>
                ))}

                <p className="text-sm text-gray-500">
                  Taxes and shipping are calculated at checkout.
                </p>
              </div>
            ) : (
              renderCheckoutForm()
            )}

            {/* Summary Section */}
            <div className="w-full lg:w-1/3 bg-gray-50 rounded-lg p-6">
              <h1 className="text-xl font-semibold mb-6">Order Summary</h1>

              <div className="flex justify-between mb-4">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-bold">${subtotal.toFixed(2)}</p>
              </div>

              <div className="flex justify-between mb-4">
                <p className="text-gray-600">Total</p>
                <p className="font-bold">${subtotal.toFixed(2)}</p>
              </div>

              {/* Checkout Button */}
              {!isCheckout && (
                <button
                  className="w-full bg-gray-800 text-white py-3 rounded-lg"
                  onClick={() => setIsCheckout(true)} // Toggle to checkout form
                >
                  Go to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
