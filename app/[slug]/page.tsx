import Add from "../_components/Add";
import CustomizeProducts from "../_components/CustomizeProducts";
import ProductImages from "../_components/ProductImages";

export default function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32  2xl:px-64 flex flex-col lg:flex-row gap-16">
      {/* IMG  */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium ">Product Name</h1>
        <p className=" text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam quia
          aliquid porro illo similique quisquam sequi dolore temporibus
          recusandae. Vitae, quia. Consequuntur illo alias sequi, necessitatibus
          mollitia soluta aliquam veritatis!
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className=" flex items-center gap-4">
          <h3 className="text-gray-500 text-xl line-through">$59</h3>
          <h3 className="text-2xl font-medium ">$59</h3>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className=" h-[2px] bg-gray-100" />
        <div className=" text-sm">
          <h4 className=" font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quasi
            corporis molestias natus id, commodi vitae dolorum autem ratione
            nisi explicabo maxime facilis nihil obcaecati facere cumque fugit,
            repellendus molestiae.
          </p>
        </div>
        <div className=" text-sm">
          <h4 className=" font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quasi
            corporis molestias natus id, commodi vitae dolorum autem ratione
            nisi explicabo maxime facilis nihil obcaecati facere cumque fugit,
            repellendus molestiae.
          </p>
        </div>
        <div className=" text-sm">
          <h4 className=" font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quasi
            corporis molestias natus id, commodi vitae dolorum autem ratione
            nisi explicabo maxime facilis nihil obcaecati facere cumque fugit,
            repellendus molestiae.
          </p>
        </div>
      </div>
    </div>
  );
}
