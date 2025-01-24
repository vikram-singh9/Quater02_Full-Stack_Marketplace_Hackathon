import React from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";

// Sanity Image Builder
const builder = imageUrlBuilder(client);
const urlFor = (source: string) => builder.image(source).url();

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

const ProductsDescription = async (params:any) => {
  const { productId } = params;

  // Log params for debugging
  console.log("Params:", params);

  // Return a 404 if productId is undefined
  if (!productId) {
    console.error("Product ID is missing!");
    notFound();
    return null;
  }

  try {
    // Fetch product details based on the productId
    const product: Product | null = await client.fetch(
      `*[_type == "product" && _id == $productId][0]{
        _id,
        name,
        price,
        description,
        "image_url": image.asset->url
      }`,
      { productId }
    );

    // Handle case where product is not found
    if (!product) {
      notFound(); // Redirects to a 404 page
      return null;
    }

    return (
      <div className="p-8 flex flex-col items-center justify-center gap-9 md:flex-row md:gap-40">
        {/* Product Image */}
        <div>
          <img
            src={urlFor(product.image_url)}
            alt={product.name}
            width={400}
            height={400}
            className="my-4 w-full max-w-md object-cover rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          <p className="md:text-2xl text-lg my-3">${product.price}</p>
          <p className="my-4 text-md leading-6">{product.description}</p>
          <Link
            href="/"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded text-sm md:text-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound(); // Redirect to 404 on fetch failure
    return null;
  }
};

export default ProductsDescription;
