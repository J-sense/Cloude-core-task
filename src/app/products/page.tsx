import ProductCard from "@/components/section/ProductCard";
import { Product } from "@/type";
import React from "react";

const page = async () => {
  const res = await fetch("https://admin.refabry.com/api/all/product/get", {
    cache: "no-store",
  });
  const posts = await res.json();

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 py-16 mt-5">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100 relative inline-block">
          All Products
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-violet-500 dark:bg-violet-400 rounded-full opacity-40"></span>
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-base mt-4">
          Discover our latest collection of premium products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts?.data?.data?.map((pr: Product, index: number) => (
          <ProductCard key={index} product={pr} />
        ))}
      </div>
    </div>
  );
};

export default page;
