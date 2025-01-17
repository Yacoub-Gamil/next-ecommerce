"use client";

import Image from "next/image";

export default function CartModal() {
  const cartItems = true;
  return (
    <div className="w-max absolute top-12 right-0 flex flex-col p-4 bg-white shadow-lg ">
      {!cartItems ? (
        <div>Cart Is Empty</div>
      ) : (
        <>
          <div className=" flex flex-col gap-8">
            {/* ITEM */}
            <div className=" flex gap-4">
              <Image
                src={
                  "https://images.pexels.com/photos/30218480/pexels-photo-30218480/free-photo-of-charming-alleyway-market-with-textiles.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                }
                alt="image"
                width={72}
                height={96}
                className=" object-cover rounded-md"
              />
              <div className=" flex flex-col justify-between">
                {/* TOP */}
                <div className=" flex flex-col justify-between w-full">
                  {/* TITEL */}
                  <div className=" flex items-center justify-between gap-8">
                    <h3 className=" font-semibold">Product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* DES */}
                  <p className=" text-sm text-gray-500">availbe</p>
                </div>
                {/* BOTTOM */}
                <div className=" flex justify-between text-sm">
                  <span className=" text-gray-500">Qty. 1</span>
                  <button className=" text-blue-500">Remove</button>
                </div>
              </div>
            </div>
          </div>
          {/* // BOTTOM */}
          <div className="mt-4">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className=" text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout .
            </p>
            <div className=" flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
