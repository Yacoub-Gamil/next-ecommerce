"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24 py-24">
      {/* TOP  */}
      <div className=" flex flex-col md:flex-row justify-between gap-24 ">
        {/* LEFT  */}
        <div className=" w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href={"/"}>
            <div className=" text-2xl tracking-wide"> SHOPIFY</div>
          </Link>
          <p>
            3252 Winding Way,central plaze, willowbrook, ca 90219, united states
          </p>
          <span className="font-semibold">yacoub-gamil@hotmail.com</span>
          <span className="font-semibold">(+02) 1210955561</span>
          <div className=" flex gap-6">
            <Image src={"/facebook.png"} alt="" width={16} height={16} />
            <Image src={"/instagram.png"} alt="" width={16} height={16} />
            <Image src={"/pinterest.png"} alt="" width={16} height={16} />
            <Image src={"/x.png"} alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER  */}
        <div className=" hidden lg:flex justify-between w-1/2">
          <div className=" flex flex-col justify-between">
            <h1 className=" capitalize font-medium text-lg">Comany</h1>
            <div className=" flex flex-col gap-6">
              <Link href="">About us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact us</Link>
            </div>
          </div>
          <div className=" flex flex-col justify-between">
            <h1 className=" capitalize font-medium text-lg">Shop</h1>
            <div className=" flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessorise</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className=" flex flex-col justify-between">
            <h1 className=" capitalize font-medium text-lg">help</h1>
            <div className=" flex flex-col gap-6">
              <Link href="">Customer sevice</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT  */}
        <div className=" w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className=" font-medium text-lg">See More</h1>
          <p>
            Be the first one to get latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="email address"
              className=" p-4 w-3/4"
            />
            <button className=" w-1/4 bg-p1 text-white capitalize">join</button>
          </div>
          <span className=" font-semibold">Secure Payment</span>
          <div className=" flex justify-between">
            <Image src={"/discover.png"} alt="" width={40} height={20} />
            <Image src={"/skrill.png"} alt="" width={40} height={20} />
            <Image src={"/mastercard.png"} alt="" width={40} height={20} />
            <Image src={"/visa.png"} alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM  */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div>2024 SHOPIFY-YACOUB</div>
        <div className=" flex  flex-col md:flex-row gap-8 ">
          <div>
            <span className=" text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | ENglish</span>
          </div>
          <div>
            <span className=" text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$USD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
