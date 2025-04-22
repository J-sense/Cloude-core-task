import ProductCard from "@/components/section/ProductCard";
import React from "react";

const page = async () => {
  const data = await fetch("https://admin.refabry.com/api/all/product/get");
  const posts = await data.json();
  console.log(posts.data);
  return (
    <div className="min-h-screen max-w-7xl mx-auto my-32">
      <div className="mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100">
          <span className="relative inline-block">
            All Products
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-violet-500 dark:bg-violet-400 rounded-full opacity-40"></span>
          </span>
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-base mt-2">
          Discover our latest collection of premium products
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {posts?.data?.data.map((pr, index) => (
          <ProductCard product={pr} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
