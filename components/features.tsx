import React from 'react';
import { FaRecycle } from 'react-icons/fa6';
import { BsTruck } from 'react-icons/bs';
import { GiCheckMark } from 'react-icons/gi';
import { BiCreditCard } from 'react-icons/bi';

const Brand = () => {
  return (
    <>
      <section>
        <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          {/* Title */}
          <h1 className="text-center text-xl md:text-2xl font-semibold">
            What makes our brand different
          </h1>

          {/* Features */}
          <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
            {/* Feature 1 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
              <BsTruck size={30} className="text-[#2A254B]" />
              <p className="py-4 font-semibold">Next day as standard</p>
              <p>Order before 3pm and get your order the next day as standard.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <GiCheckMark  size={30} className="text-[#2A254B]"/>
              <p className="py-4 font-semibold">Made by true artisans</p>
              <p>Hand-crafted goods made with real passion and craftsmanship.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <BiCreditCard size={30} className="text-[#2A254B]"/>
              <p className="py-4 font-semibold">Unbeatable prices</p>
              <p>For our material and quality, you won&rsquo;t find better prices anywhere.</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <FaRecycle size={30} className="text-[#2A254B]"/>
              <p className="py-4 font-semibold">Recycled packaging</p>
              <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;