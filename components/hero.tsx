import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center my-16 space-y-10 md:space-y-0">
      {/* Text Section */}
      <div className="w-[90%] md:w-[450px] h-auto bg-[#2a254b] text-white py-9 px-9 space-y-3">
        <h2 className="text-[24px] md:text-[28px] leading-relaxed">
          The furniture brand for the future, with timeless designs
        </h2>
        <Button variant={"vikram"}>View Collection</Button>
        <p className="leading-7 text-[16px] md:text-[18px] pt-8 md:pt-32 font-thin">
          A new era in eco-friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors, and a beautiful way to
          display things digitally using modern web technologies.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-[90%] md:w-auto">
        <Image
          src={"/images/chair.png"}
          alt="img"
          width={354}
          height={0}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;