
import React from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

const ProductsDescription = async ({ params }: { params: { productId: string } }) => {
  const productId = params.productId;

  // Fetch product details based on the productId
  const product: Product = await client.fetch(
    `*[_type == "product" && _id == $productId][0]{
      _id,
      name,
      price,
      description,
      "image_url":image.asset->url,
    }`,
    { productId }
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="p-8 flex flex-col items-center justify-center gap-9 md:flex-row md:gap-40 ">

      <div>
      <img
        src={product.image_url}
        alt={product.name}
        width={200}
        height={200}
        className="my-4 w-full max-w-md object-cover rounded-md"
      />
      </div>

     <div className="max-w-md">
     <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
      <p className="md:text-2xl text-lg my-3">${product.price}</p>
      <p className="my-4 text-md leading-6">{product.description}</p>
      <Link href={'/'} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded text-sm md:text-lg">
        Back to home
      </Link>
     </div>
      
    </div>
  );
};

export default ProductsDescription;
