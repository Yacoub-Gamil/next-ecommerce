"use client";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Slider from "./_components/Slider";
import { useWixCleint } from "./_hooks/useWixClient";

export default function Home() {
  const wixClient = useWixCleint();

  async function getProduct() {
    const items = await wixClient.products.queryProducts().find();
    console.log(items);
  }
  getProduct();
  return (
    <div>
      <Slider />
      <div className=" mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className=" text-2xl mb-12"> Featured Products</h1>
        <ProductList />
      </div>
      <div className=" mt-24">
        <h1 className=" text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categores
        </h1>
        <CategoryList />
      </div>
      <div className=" mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className=" text-2xl mb-12"> Featured Products</h1>
        <ProductList />
      </div>
    </div>
  );
}
