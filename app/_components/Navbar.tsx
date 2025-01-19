import Link from "next/link";
import Meun from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

export default function Navbar() {
  return (
    <header className=" h-20 px-4 md:px-8 lg:px-16 xl:px-32  2xl:px-64 relative">
      <div className=" flex justify-between items-center md:hidden">
        {/* MOBILE */}
        <Link href={"/"} className=" tracking-wide uppercase text-2xl ">
          ShopIfy
        </Link>
        <Meun />
      </div>
      {/* BIG SCREENS */}
      <div className=" hidden md:flex items-center justify-between gap-8 h-full ">
        {/* LEFT  */}
        <div className=" w-1/3 xl:w-1/2 flex  items-center gap-12">
          <Link href={"/"} className=" flex items-center gap-3">
            <Image src={"/logo.png"} alt=" logo" width={20} height={20} />
            <span className=" block tracking-wide uppercase text-2xl ">
              ShopIfy
            </span>
          </Link>
          <div className=" hidden xl:flex gap-4 ">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/"}>Deals</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>
        {/* RIGHT  */}
        <div className=" w-2/3  xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </header>
  );
}
