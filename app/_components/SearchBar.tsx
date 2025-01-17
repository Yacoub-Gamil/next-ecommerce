"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchInput = formData.get("searchInput") as string;
    if (searchInput) {
      router.push(`/list?name=${searchInput}`);
    }
  };
  return (
    <form
      onSubmit={handleSearch}
      className=" flex items-center justify-between bg-gray-100 p-2 rounded-md flex-1 gap-2"
    >
      <input
        type="search"
        placeholder="Search"
        name="searchInput"
        className=" flex-1 bg-transparent outline-none"
      />
      <button className=" cursor-pointer">
        <Image src={"/search.png"} alt="" width={16} height={16} />
      </button>
    </form>
  );
}
