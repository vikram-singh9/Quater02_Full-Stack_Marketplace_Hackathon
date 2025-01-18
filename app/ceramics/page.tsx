"use client";
import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

const steelChair: Product = {
  _id: "D24vb8qimRxTY37EypIGz4",
  name: "Steel Chair",
  price: 250,
  description:
    "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery",
  image_url: "https://cdn.sanity.io/images/z8wu2f77/production/b3bbbd269d31ce9b57b7a867bf0b7f6fdc5b3208-721x759.png",
};


const Ceramics = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const fetchdata = await client.fetch(`
          *[_type == "product"][8..31]{
  _id,
  name,
  price,
  description,
  "image_url":image.asset->url,
}`);
        const result = fetchdata;
        setdata(result);
      } catch (error) {
        console.log("error", error);
      }
    }
    getData();
  });

  return (
    <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
      {/* Title */}
      <h1 className="text-3xl font-semibold">New Ceramics</h1>

      {/* Product Items */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {/* Product 1 */}

        {data.map((item: Product) => (
          <div className="w-full h-auto" key={item._id}>
            <Image
              src={item.image_url}
              height={500}
              width={700}
              alt="chair"
              className="w-full h-[80%] object-cover"
            />
            <div className="mt-4 text-[#2A254B]">
              <p className="py-2 font-bold">{item.name}</p>
              <p>${item.price}</p>
              {/* <p className="text-[15px]">{item.description}</p> */}
            </div>
          </div>
        ))}
      </div>

      {/* View Collection Button */}
      <div className="my-10 flex justify-center items-center">
        <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
          View collection
        </button>
      </div>
    </div>
  );
};

export default Ceramics;
