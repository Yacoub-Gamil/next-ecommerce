"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Meun() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src={"/menu.png"}
        alt="menu"
        width={25}
        height={25}
        onClick={() => setOpen((open) => !open)}
        className="cursor-pointer"
      />
      {open && (
        <div className=" absolute bg-black text-white left-0 h-[calc(100vh-80px)] z-10 flex flex-col items-center w-full justify-center gap-8 text-xl">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>Deals</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>logout</Link>
          <Link href={"/"}>Cart(1)</Link>
        </div>
      )}
    </div>
  );
}
