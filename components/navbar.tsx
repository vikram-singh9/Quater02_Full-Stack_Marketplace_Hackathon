"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BiCart } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navItems = [
    { name: "Ceramics", href: "/ceramics" },
    { name: "Chairs", href: "/chairs" },
    { name: "Register", href: "/register" },
    { name: "About", href: "/about" },
  ];

  return (
    <div className="p-4 w-full h-auto sticky top-0 z-50 bg-white">
      {/* Top Section */}
      <div className="flex justify-between items-center py-2">
        {/* Search Icon */}
        <div className="hidden md:block">
          <CiSearch size={25} className="text-[#2A254B]" />
        </div>

        {/* Logo */}
        <Link
          href={"/"}
          className="text-[#2A254B] text-xl md:text-2xl md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
        >
          Avion
        </Link>

        {/* Icons for large screens */}
        <div className="hidden md:flex gap-4">
          <Link href={"/wishlist"}>
            <BiHeart size={25} className="text-[#2A254B]" />
          </Link>
          <Link href={"/cart"}>
            <BiCart size={25} className="text-[#2A254B]" />
          </Link>

          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton>
                <button className="">Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <CiSearch size={25} className="text-[#2A254B]" />
          <button
            className="text-2xl focus:outline-none z-30"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      <hr />

      {/* Navigation Links */}
      <header
        className={`fixed top-0 right-0 py-6 h-full w-3/4 bg-white transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:w-auto md:translate-x-0 md:bg-transparent z-20`}
      >
        <nav>
          <ul className="flex flex-col md:flex-row justify-center items-start md:items-center gap-7 md:gap-8 text-gray-700 text-base">
            {navItems.map((item) => (
              <li key={item.name} className="hover:text-black transition">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}

            {/* Mobile: Cart, Wishlist, and Sign-In */}
            <div className="md:hidden flex flex-col gap-4">
              <li className="hover:text-black transition">
                <Link href={"/wishlist"} className="flex items-center gap-2">
                  <BiHeart size={20} className="text-[#2A254B]" />
                 
                </Link>
              </li>
              <li className="hover:text-black transition">
                <Link href={"/cart"} className="flex items-center gap-2">
                  <BiCart size={20} className="text-[#2A254B]" />
                  
                </Link>
              </li>
              <li className="hover:text-black transition">
                <SignedOut>
                  <SignInButton>
                    <button className="flex items-center gap-2">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;