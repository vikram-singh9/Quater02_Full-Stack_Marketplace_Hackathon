"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import type { Product } from "@/types/product"
import { addToCart } from "@/actions/action"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Truck } from "lucide-react"
import { groq } from "next-sanity"
import Swal from "sweetalert2"

export default function Chairs() {
  const [data, setData] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Product[] = await client.fetch(groq`
          *[_type == "product"][10..15]{
            _id,
            name,
            "slug": slug.current,
            price,
            description,
            "image_url": image.asset->url,
            ratingCount,
          }
        `)
        setData(response)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    addToCart(product)
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    })
  }

  if (loading) {
    return <LoadingSkeleton />
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Latest Chairs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.map((item: Product) => (
            <ProductCard key={item._id} item={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProductCard({
  item,
  onAddToCart,
}: {
  item: Product
  onAddToCart: (e: React.MouseEvent, product: Product) => void
}) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200">
      <Link href={`/product/${item.slug}`} className="block">
        <div className="relative h-64 w-full">
          <img
            src={item.image_url || "/placeholder.svg"}
            alt={item.name}
           
            className="transition-transform duration-300 hover:scale-105 w-full h-full object-cover"
          />
          {Math.random() > 0.5 && (
            <Badge className="absolute top-2 left-2 bg-yellow-400 text-yellow-900">Best Seller</Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">{item.name}</h3>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(item.ratingCount) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">{item.ratingCount}/5</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-2">${item.price.toFixed(2)}</p>
          {item.price > 35 && (
            <p className="text-sm text-green-600 flex items-center mb-2">
              <Truck className="h-4 w-4 mr-1" /> Free Shipping
            </p>
          )}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button
          variant="default"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
          onClick={(e) => onAddToCart(e, item)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Product Catalogue</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="overflow-hidden animate-pulse border border-gray-200">
              <div className="h-64 bg-gray-300" />
              <CardContent className="p-4">
                <div className="h-6 bg-gray-300 rounded mb-2" />
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-4 w-4 bg-gray-300 rounded-full mr-1" />
                  ))}
                </div>
                <div className="h-8 w-24 bg-gray-300 rounded mb-2" />
                <div className="h-4 w-32 bg-gray-300 rounded mb-2" />
                <div className="h-4 bg-gray-300 rounded mb-3" />
                <div className="h-4 bg-gray-300 rounded mb-3" />
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="h-10 w-full bg-gray-300 rounded" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

