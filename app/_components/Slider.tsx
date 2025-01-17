"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slider = [
  {
    id: 1,
    title: "The best of the best",
    description: "Sale! Up to 50%  off! ",
    url: "/",
    image:
      "https://images.pexels.com/photos/30218480/pexels-photo-30218480/free-photo-of-charming-alleyway-market-with-textiles.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 2,
    title: "The best of the best",
    description: "Sale! Up to 50%  off! ",
    url: "/",
    image:
      "https://images.pexels.com/photos/30218480/pexels-photo-30218480/free-photo-of-charming-alleyway-market-with-textiles.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "The best of the best",
    description: "Sale! Up to 50% off! ",
    url: "/",
    image:
      "https://images.pexels.com/photos/30218480/pexels-photo-30218480/free-photo-of-charming-alleyway-market-with-textiles.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  return (
    <div className=" h-[calc(100vh-80px)] overflow-hidden">
      <div className=" w-max h-full flex transition-all ease-in-out duration-1000">
        {slider.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16
           xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER  */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center 2xl:gap-12 gap-8  text-center">
              <h2 className=" text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className=" text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link
                href={slide.url}
                className=" rounded-md bg-black text-white py-3 px-4"
              >
                Shop Now
              </Link>
            </div>
            {/* IMAGE CONTAINER  */}
            <div className=" h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.image}
                alt={slide.image}
                fill
                sizes="100%"
                className=" object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
