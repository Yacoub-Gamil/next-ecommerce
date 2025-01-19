"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slider = [
  {
    id: 1,
    title: "The best of the best",
    description: "Sale! Up to 50%  off! ",
    url: "/",
    image:
      "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 2,
    title: "The best of the best",
    description: "Sale! Up to 50%  off! ",
    url: "/",
    image:
      "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "The best of the best",
    description: "Sale! Up to 50% off! ",
    url: "/",
    image:
      "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((cur) => (cur === slider.length - 1 ? 0 : cur + 1));
    }, 10000);
    return () => clearInterval(slide);
  }, []);

  return (
    <div className=" h-[calc(100vh-120px)] overflow-hidden">
      <div
        className=" w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw` }}
      >
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
            <div className=" h-1/2 xl:w-1/2 xl:h-full aspect-square relative">
              <Image src={slide.image} alt={slide.image} fill sizes="100%" />
            </div>
          </div>
        ))}
      </div>
      <div className=" absolute m-auto left-1/2 flex bottom-12 gap-4">
        {slider.map((slide, index) => (
          <div
            key={slide.id}
            className={` w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full transition-all duration-700"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
