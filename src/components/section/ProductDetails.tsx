"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/type";
import { useState } from "react";

const ProductDetails = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product)
    return <p className="text-center py-10 text-zinc-600">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-zinc-800 dark:text-zinc-200">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mb-5">
        {product.name}
      </h1>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="flex justify-center  w-full md:w-1/2">
          <div className="relative w-full h-[400px] sm:h-[450px] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-md">
            <Image
              src={`https://admin.refabry.com/storage/product/${product.image}`}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
          {/* Product Name */}

          {/* Description */}
          <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-900">
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
              {product.short_desc}
            </p>
          </div>

          {/* Price & Category */}
          <div className="flex flex-wrap items-center gap-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-900">
            <span className="text-2xl font-bold text-violet-700 dark:text-violet-300">
              ৳{product.price}
            </span>
            {product.category && (
              <span className="bg-violet-100 dark:bg-violet-800 text-violet-700 dark:text-violet-200 text-xs px-3 py-1 rounded-full">
                {product.category.name}
              </span>
            )}
          </div>

          {/* Quantity Control */}
          <div className="flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-900">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Quantity
            </span>
            <div className="flex items-center gap-4">
              <button
                onClick={decreaseQty}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-violet-600 text-white hover:bg-violet-700 transition"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={increaseQty}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-violet-600 text-white hover:bg-violet-700 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Payment Button */}
          <div className="flex justify-center sm:justify-start">
            <button className="w-full sm:w-auto bg-violet-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-violet-800 transition duration-200 shadow-md">
              Proceed to Payment
            </button>
          </div>

          {/* Back Link */}
          <div>
            <Link href="/" className="text-sm text-violet-500 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
