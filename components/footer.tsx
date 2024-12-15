'use client'
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CiLinkedin, CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { BsSkype, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <section className="w-full px-6 md:px-20 py-9 bg-[#2A254B] flex flex-wrap justify-between text-white">
        {/* Links Section */}
        <div className="flex flex-wrap gap-16 mb-8 text-sm">
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">Recently Viewed</a>
              </li>
              <li>
                <a href="#">Popular This Week</a>
              </li>
              <li>
                <a href="#">All Products</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Furniture</a>
              </li>
              <li>
                <a href="#">Home Ware</a>
              </li>
              <li>
                <a href="#">Plant Pots</a>
              </li>
              <li>
                <a href="#">Chairs</a>
              </li>
              <li>
                <a href="#">Crockery</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li>
                <a href="#">Our Company</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">Vacancies</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4 w-full md:w-auto">
          <span className="block text-lg">Join Our Mailing List</span>
          <div className="flex items-center">
            <Input
              type="email"
              placeholder="Your@gmail.com"
              className="h-12 text-black w-full md:w-auto"

            />
            <Button className="h-12 px-6" variant="vikram" onClick={() => alert('sign up successflly')}>
              Sign up
            </Button>
          </div>
        </div>
      </section>

      <hr className="bg-[#726e8d]" />

      {/* Footer Bottom Section */}
      <div className="w-full px-6 md:px-20 py-3 flex flex-wrap justify-between items-center bg-[#2A254B] text-white text-sm">
        <p className="mb-2 md:mb-0">Copyright 2022 Avion LTD</p>
        <div className="flex gap-4">
          <a href="#" aria-label="LinkedIn">
            <CiLinkedin size={24} />
          </a>
          <a href="#" aria-label="Facebook">
            <CiFacebook size={24} />
          </a>
          <a href="#" aria-label="Instagram">
            <CiInstagram size={24} />
          </a>
          <a href="#" aria-label="Skype">
            <BsSkype size={24} />
          </a>
          <a href="#" aria-label="Twitter">
            <CiTwitter size={24} />
          </a>
          <a href="#" aria-label="Pinterest">
            <BsPinterest size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
