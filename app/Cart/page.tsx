"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Trash2, MinusCircle, PlusCircle, ArrowLeft, ShoppingBag, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/types/product"

// Assuming you have these actions defined
import { removeFromCart, updateCartQuantity } from "@/actions/action"

export default function CartPage() {
  const [cartItems, setCartItems] = useState<(Product & { quantity: number })[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const fetchCartItems = () => {
      try {
        const storedCart = localStorage.getItem("cart")
        if (storedCart) {
          setCartItems(JSON.parse(storedCart))
        }
      } catch (error) {
        console.error("Error fetching cart items:", error)
        toast({
          title: "Error",
          description: "Failed to load cart items. Please try again.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchCartItems()
  }, [toast])

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateCartQuantity(productId, newQuantity)
      setCartItems((prevItems) =>
        prevItems.map((item) => (item._id === productId ? { ...item, quantity: newQuantity } : item)),
      )
      localStorage.setItem("cart", JSON.stringify(cartItems))
      toast({
        title: "Cart Updated",
        description: "Item quantity has been updated.",
      })
    }
  }

  const removeItem = (productId: string) => {
    removeFromCart(productId)
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== productId))
    localStorage.setItem("cart", JSON.stringify(cartItems.filter((item) => item._id !== productId)))
    toast({
      title: "Item Removed",
      description: "The item has been removed from your cart.",
    })
  }

  const handleClearCart = () => {
    // clearCart()
    setCartItems([])
    localStorage.removeItem("cart")
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    })
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center h-screen bg-gray-50"
      >
        <ShoppingBag className="w-24 h-24 text-gray-400 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h1>
        <p className="text-gray-600 mb-4">Looks like you haven't added any items to your cart yet.</p>
        <Link href="/">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
          </Button>
        </Link>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Your Shopping Cart</h1>
        <AnimatePresence>
          {cartItems.map((item) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
            
              <Card className="mb-4 overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/4 relative aspect-square">
                    <img src={item.image_url || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full sm:w-3/4 p-4 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                      <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item._id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <MinusCircle className="h-4 w-4" />
                        </Button>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item._id, Number.parseInt(e.target.value))}
                          className="w-16 mx-2 text-center"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        >
                          <PlusCircle className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center">
                        <p className="font-semibold mr-4">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                        <Button variant="destructive" size="icon" onClick={() => removeItem(item._id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Total</h2>
            <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Button variant="outline" className="w-full sm:w-1/3" onClick={handleClearCart}>
              Clear Cart
            </Button>
            <Link href="/checkout" className="w-full sm:w-2/3">
              <Button className="w-full">Proceed to Checkout</Button>
            </Link>
          </div>
          <Link href="/">
            <Button variant="link" className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

