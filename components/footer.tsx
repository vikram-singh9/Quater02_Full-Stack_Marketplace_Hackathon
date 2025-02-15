"use client"

import type React from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { CiLinkedin, CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci"
import { BsSkype, BsPinterest } from "react-icons/bs"
import { Separator } from "./ui/separator"
import Link from "next/link"
// import { useToast } from "./ui/use-toast"

const Footer = () => {
  // const { toast } = useToast()

  const handleNewsletterSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Subscribed! You've successfully signed up for our newsletter.")
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Avion</h2>
            <p className="text-sm">Elevating your home with curated, high-quality furniture and decor.</p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="LinkedIn">
                <CiLinkedin size={24} />
              </Link>
              <Link href="#" aria-label="Facebook">
                <CiFacebook size={24} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <CiInstagram size={24} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <CiTwitter size={24} />
              </Link>
              <Link href="#" aria-label="Skype">
                <BsSkype size={24} />
              </Link>
              <Link href="#" aria-label="Pinterest">
                <BsPinterest size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">New Arrivals</Link>
              </li>
              <li>
                <Link href="#">Best Sellers</Link>
              </li>
              <li>
                <Link href="#">Sale</Link>
              </li>
              <li>
                <Link href="#">Furniture</Link>
              </li>
              <li>
                <Link href="#">Home Decor</Link>
              </li>
              <li>
                <Link href="#">Lighting</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Shipping & Returns</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Track Your Order</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Join Our Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest offers, new arrivals, and exclusive discounts.</p>
            <form onSubmit={handleNewsletterSignup} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
              <Button type="submit" className="w-full bg-white text-gray-900 hover:bg-gray-200">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        <div className="py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; 2023 Avion LTD. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

