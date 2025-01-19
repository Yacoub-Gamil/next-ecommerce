"use client";
import { useState } from "react";

export default function Add() {
  const [quantity, setQuantity] = useState(1);
  const stock = 4;

  function handleQuantity(type: "i" | "d") {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  }
  return (
    <div className="flex flex-col gap-4">
      <h1>Choose Quantity</h1>
      <div className=" flex justify-between">
        <div className="flex items-center gap-4">
          <div className=" bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button onClick={() => handleQuantity("d")} className=" text-xl">
              -
            </button>
            <h1>{quantity}</h1>
            <button onClick={() => handleQuantity("i")} className=" text-xl">
              +
            </button>
          </div>
          <div className=" text-xs">
            Only <span className="text-orange-500">4 items </span> left!
            <br /> Don&apos;t miss it
          </div>
        </div>
        <button className=" w-36 text-sm rounded-3xl ring-1 ring-p1 text-p1 py-2 px-4 hover:bg-p1 hover:text-white duration-300">
          Add to cart
        </button>
      </div>
    </div>
  );
}
