"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/section/ProductCard";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BASE_URL as string
        );
        const productData = response?.data?.data?.data;
        if (productData) {
          setProducts(productData.slice(0, 3)); // Only first 3 products
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4  ">
      <h1 className="text-4xl sm:text-5xl py-10 text-center font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100">
        <span className="relative inline-block">
          Top Products
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-violet-500 dark:bg-violet-400 rounded-full opacity-40"></span>
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="text-center py-10">
        <Link href={"/products"}>
          <Button className="px-10">View all</Button>
        </Link>
      </div>
    </div>
  );
}
