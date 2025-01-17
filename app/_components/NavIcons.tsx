"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

export default function NavIcons() {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();
  const isLogin = false;

  function handleProfile() {
    if (!isLogin) {
      router.push("/login");
    }
    setIsOpenProfile((isOpenProfile) => !isOpenProfile);
  }

  return (
    <div className="flex gap-4 items-center xl:gap-6 relative">
      <Image
        src={"/profile.png"}
        alt="profile"
        width={22}
        height={22}
        className=" cursor-pointer"
        onClick={handleProfile}
      />
      {isOpenProfile && (
        <div className=" absolute p-4 rounded-md left-0 top-12 text-sm shadow-2xl z-20">
          <Link href={"/"}>Profile</Link>
          <div className=" mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src={"/notification.png"}
        alt="profile"
        width={22}
        height={22}
        className=" cursor-pointer"
      />{" "}
      <div className=" relative">
        <Image
          src={"/cart.png"}
          alt="profile"
          width={22}
          height={22}
          className=" cursor-pointer"
          onClick={() => setIsCartOpen((open) => !open)}
        />
        <span className=" absolute -top-6 -right-2 bg-p1 w-6 h-6 text-white text-center rounded-full">
          2
        </span>
        {isCartOpen && <CartModal />}
      </div>
    </div>
  );
}
