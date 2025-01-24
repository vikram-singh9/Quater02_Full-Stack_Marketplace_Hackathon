"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useWishlist } from "@/context/WishListContext";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

const Chairs = () => {
  const [data, setData] = useState<Product[]>([]);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { cart, addToCart, removeFromCart } = useCart();
  const router = useRouter(); // Use the router

  useEffect(() => {
    async function getData() {
      try {
        const fetchdata = await client.fetch(`
          *[_type == "product"][15..22]{
            _id,
            name,
            price,
            description,
            "image_url":image.asset->url,
          }
        `);
        setData(fetchdata);
      } catch (error) {
        console.log("error", error);
      }
    }
    getData();
  }, []);

  return (
    <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
      <h1 className="text-4xl font-semibold">Check out our latest Chairs</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {data.map((item) => (
          <div
            key={item._id}
            className="w-full h-auto cursor-pointer"
            onClick={() => router.push(`/products/${item._id}`)} // Navigate to product page
          >
            <Image
              src={item.image_url}
              alt={item.name}
              width={400}
              height={400}
              className="w-full h-[80%] object-cover"
            />
            <div className="mt-4 text-[#2A254B]">
              <p className="py-2 font-bold">{item.name}</p>
              <p>${item.price}</p>
            </div>
            <div>
              
            </div>
            <Button size={'sm'}
              className={`px-2 ${
                wishlist.some((wishlistItem) => wishlistItem._id === item._id)
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent navigation
                wishlist.some((wishlistItem) => wishlistItem._id === item._id)
                  ? removeFromWishlist(item._id)
                  : addToWishlist(item);
              }}
            >
              {wishlist.some((wishlistItem) => wishlistItem._id === item._id)
                ? "Remove from Wishlist"
                : "Add to Wishlist"}
            </Button>
            <Button size={'sm'}
              className={`mt-2 mx-1 px-2 ${
                cart.some((cartItem) => cartItem._id === item._id)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent navigation
                cart.some((cartItem) => cartItem._id === item._id)
                  ? removeFromCart(item._id)
                  : addToCart(item);
              }}
            >
              {cart.some((cartItem) => cartItem._id === item._id)
                ? "Remove from Cart"
                : "Add to Cart"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chairs;
