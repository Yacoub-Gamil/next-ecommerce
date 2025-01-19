import Image from "next/image";
import Link from "next/link";

export default function ProductList() {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap mt-8">
      <Link
        href={"/test"}
        className=" w-full  flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80 aspect-square">
          <Image
            src="https://media.istockphoto.com/id/854677216/photo/white-t-shirt-on-brick-background.jpg?b=1&s=612x612&w=0&k=20&c=OHj5nSDpVdHANOfdTS2mNQ5xCEvqMrTW2NIHjGE66hA="
            alt="item"
            fill
            sizes="25vw"
            className=" absolute z-10 hover:opacity-0  rounded-md transition-opacity ease-in duration-500 "
          />
          <Image
            src="https://media.istockphoto.com/id/1324095626/photo/white-flying-cotton-t-shirt-isolated-on-blue-background-clean-white-t-shirt-for-women-or-men.jpg?b=1&s=612x612&w=0&k=20&c=6-7A98lkQvXJWUz71bHLYWlc6wxn125p2R6XvFJgKTg="
            alt="item"
            fill
            sizes="25vw"
            className=" absolute  rounded-md "
          />
        </div>
        <div className=" flex justify-between">
          <span className=" font-medium">Product name</span>
          <span className=" font-semibold">$49</span>
        </div>
        <div className=" text-sm text-gray-500"> My Description</div>
        <button className=" rounded-2xl ring-1 w-max ring-p1 text-p1 py-2 px-4 text-xs transition-colors ease-in duration-100 hover:bg-p1 hover:text-white">
          Add To Cart
        </button>
      </Link>
      <Link
        href={"/test"}
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80 aspect-square">
          <Image
            src="https://media.istockphoto.com/id/854677216/photo/white-t-shirt-on-brick-background.jpg?b=1&s=612x612&w=0&k=20&c=OHj5nSDpVdHANOfdTS2mNQ5xCEvqMrTW2NIHjGE66hA="
            alt="item"
            fill
            sizes="25vw"
            className=" absolute z-10 hover:opacity-0  rounded-md transition-opacity ease-in duration-500 "
          />
          <Image
            src="https://media.istockphoto.com/id/1324095626/photo/white-flying-cotton-t-shirt-isolated-on-blue-background-clean-white-t-shirt-for-women-or-men.jpg?b=1&s=612x612&w=0&k=20&c=6-7A98lkQvXJWUz71bHLYWlc6wxn125p2R6XvFJgKTg="
            alt="item"
            fill
            sizes="25vw"
            className=" absolute  rounded-md "
          />
        </div>
        <div className=" flex justify-between">
          <span className=" font-medium">Product name</span>
          <span className=" font-semibold">$49</span>
        </div>
        <div className=" text-sm text-gray-500"> My Description</div>
        <button className=" rounded-2xl ring-1 w-max ring-p1 text-p1 py-2 px-4 text-xs transition-colors ease-in duration-100 hover:bg-p1 hover:text-white">
          Add To Cart
        </button>
      </Link>
      <Link
        href={"/test"}
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80 aspect-square">
          <Image
            src="https://media.istockphoto.com/id/854677216/photo/white-t-shirt-on-brick-background.jpg?b=1&s=612x612&w=0&k=20&c=OHj5nSDpVdHANOfdTS2mNQ5xCEvqMrTW2NIHjGE66hA="
            alt="item"
            fill
            sizes="25vw"
            className=" absolute z-10 hover:opacity-0  rounded-md transition-opacity ease-in duration-500 "
          />
          <Image
            src="https://media.istockphoto.com/id/1324095626/photo/white-flying-cotton-t-shirt-isolated-on-blue-background-clean-white-t-shirt-for-women-or-men.jpg?b=1&s=612x612&w=0&k=20&c=6-7A98lkQvXJWUz71bHLYWlc6wxn125p2R6XvFJgKTg="
            alt="item"
            fill
            sizes="25vw"
            className=" absolute  rounded-md "
          />
        </div>
        <div className=" flex justify-between">
          <span className=" font-medium">Product name</span>
          <span className=" font-semibold">$49</span>
        </div>
        <div className=" text-sm text-gray-500"> My Description</div>
        <button className=" rounded-2xl ring-1 w-max ring-p1 text-p1 py-2 px-4 text-xs transition-colors ease-in duration-100 hover:bg-p1 hover:text-white">
          Add To Cart
        </button>
      </Link>
      <Link
        href={"/test"}
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80 aspect-square">
          <Image
            src="https://media.istockphoto.com/id/854677216/photo/white-t-shirt-on-brick-background.jpg?b=1&s=612x612&w=0&k=20&c=OHj5nSDpVdHANOfdTS2mNQ5xCEvqMrTW2NIHjGE66hA="
            alt="item"
            fill
            sizes="25vw"
            className=" absolute z-10 hover:opacity-0  rounded-md transition-opacity ease-in duration-500 "
          />
          <Image
            src="https://media.istockphoto.com/id/1324095626/photo/white-flying-cotton-t-shirt-isolated-on-blue-background-clean-white-t-shirt-for-women-or-men.jpg?b=1&s=612x612&w=0&k=20&c=6-7A98lkQvXJWUz71bHLYWlc6wxn125p2R6XvFJgKTg="
            alt="item"
            fill
            sizes="25vw"
            className=" absolute  rounded-md "
          />
        </div>
        <div className=" flex justify-between">
          <span className=" font-medium">Product name</span>
          <span className=" font-semibold">$49</span>
        </div>
        <div className=" text-sm text-gray-500"> My Description</div>
        <button className=" rounded-2xl ring-1 w-max ring-p1 text-p1 py-2 px-4 text-xs transition-colors ease-in duration-100 hover:bg-p1 hover:text-white">
          Add To Cart
        </button>
      </Link>
    </div>
  );
}
