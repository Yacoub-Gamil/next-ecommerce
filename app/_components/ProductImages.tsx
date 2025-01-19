"use client";
import Image from "next/image";
import { useState } from "react";

const Images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1510529/pexels-photo-1510529.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function ProductImages() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className=" h-[500px] relative">
        <Image
          src={Images[index].url}
          alt=""
          fill
          sizes="50vw"
          className=" object-cover rounded-md"
        />
      </div>
      <div>
        <div className="flex justify-between gap-4 mt-8">
          {Images.map((img, i) => (
            <div
              key={img.id}
              className=" cursor-pointer w-1/4 h-32 relative gap-4 mt-8"
              onClick={() => setIndex(i)}
            >
              <Image
                src={img.url}
                alt=""
                fill
                sizes="30vw"
                className=" object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
