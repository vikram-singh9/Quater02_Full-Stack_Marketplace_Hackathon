"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useWishlist } from "@/context/WishListContext";
import { useCart } from "@/context/CartContext";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

const Chairs = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { cart, addToCart, removeFromCart } = useCart();
  const router = useRouter();

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
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
      <h1 className="text-4xl font-semibold">Chairs</h1>
      {loading ? (
        <div className="flex justify-center items-center mt-12">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-gradient animate-spin"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 gap-y-16 my-20">
          {data.map((item) => (
            <div
              key={item._id}
              className="w-full h-auto cursor-pointer"
              onClick={() => router.push(`/products/${item._id}`)}
            >
              <img
                src={item.image_url}
                alt={item.name}
                width={100}
                height={100}
                className="w-full h-[80%] object-cover rounded-lg"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 font-bold">{item.name}</p>
                <p>${item.price}</p>
              </div>
               <div className="mt-4 flex gap-2">
                              <Button
                                size={'sm'}
                                className={`rounded-lg px-4 py-2 w-full transition-all duration-300 ease-in-out shadow-md hover:shadow-lg 
                                  ${wishlist.some((wishlistItem) => wishlistItem._id === item._id)
                                    ? "bg-red-500 text-white hover:bg-red-600"
                                    : "bg-gray-200 text-black hover:bg-gray-300"}
                                `}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  wishlist.some((wishlistItem) => wishlistItem._id === item._id)
                                    ? removeFromWishlist(item._id)
                                    : addToWishlist(item);
                                }}
                              >
                                {wishlist.some((wishlistItem) => wishlistItem._id === item._id)
                                  ? "❤️ Wishlisted"
                                  : "🤍 Add to Wishlist"}
                              </Button>
                              <Button
                                size={'sm'}
                                className={`rounded-lg px-4 py-2 w-full transition-all duration-300 ease-in-out shadow-md hover:shadow-lg 
                                  ${cart.some((cartItem) => cartItem._id === item._id)
                                    ? "bg-[#2A254B] text-white bg-[#2a254be6]"
                                    : "bg-gray-200 text-black hover:bg-gray-300"}
                                `}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  cart.some((cartItem) => cartItem._id === item._id)
                                    ? removeFromCart(item._id)
                                    : addToCart(item);
                                }}
                              >
                                {cart.some((cartItem) => cartItem._id === item._id)
                                  ? "🛒 Added"
                                  : "🛍 Add to Cart"}
                              </Button>
                            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chairs;
