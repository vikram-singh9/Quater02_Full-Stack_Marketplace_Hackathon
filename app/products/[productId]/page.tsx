// File: app/products/[productId]/page.tsx
'use client'
import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      <h1>Product ID: {productId}</h1>
      <p>Details about the product will go here.</p>
    </div>
  );
}
