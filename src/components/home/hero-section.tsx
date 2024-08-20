// import React from "react";

// export default function HeroSection() {
//   return <div>HeroSection</div>;
// }
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="container py-20 mx-auto">
      <div className="flex flex-col items-center md:flex-row">
        {/* Content and Button */}
        <div className="mb-12 md:w-1/2 md:mb-0 md:pr-8">
          <h1 className="mb-8 font-bold leading-snug text-left text-7xl">
            Ricepty Made Fun and Easy: Unleash Your Inner Chef
          </h1>
          <p className="mb-12 text-xl text-left">
            Over 10,000 recipes right at your fingertips with the best recipe
            guide. Let us help you find the simplest way to cook delicious meals
            effortlessly.
          </p>
          <div className="flex justify-start">
            <Button className="px-4 py-2 font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-600">
              Explore Recipes
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/main.png" // Replace with your image path
            alt="Delicious food"
            width={700}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
