import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product";

interface ProductPageProps {
  params: { _id: string };  // Using `id` instead of `slug`
}

async function getProduct(_id: string): Promise<Product | null> {
  try {
    const product = await client.fetch(
      `*[_type == "product" && _id == $id][0]{
        _id,
        name,
        price,
        description,
        "imageUrl": image.asset->url
      }`,
      { _id }
    );

    console.log("Fetched Product:", product);
    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { _id } = params; // Get the product ID from URL
  const product = await getProduct(_id);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="min-h-screen py-10 px-5">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-md flex flex-col md:flex-row gap-8">
        <div>
          {/* <img src={product.imageUrl} alt={product.name} /> */}
          <h1>{product.name}</h1>
          <p>${product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
