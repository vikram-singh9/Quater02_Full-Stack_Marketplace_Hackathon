"use client";
import React from "react";

import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";

const Ceramics = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const fetchdata = await client.fetch(`
          *[_type == "product"][1..8]{
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
    <>
      <section>
        <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          {/* Title */}
          <h1 className="text-3xl font-semibold">New Ceramics</h1>

          {/* Product Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {/* Product 1 */}

            {data.map((item: any) => (
              <div className="w-full h-auto" key={item._id}>
                <img
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
      </section>
    </>
  );
};

export default Ceramics;
