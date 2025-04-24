"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Product } from "@/type";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/features/cartSlice";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const handleCart = (selectedProduct: Product) => {
    dispatch(addProduct(selectedProduct));
  };
  return (
    <div className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Product Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {product.name}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2 mt-1">
            {product.short_desc}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-violet-700 dark:text-violet-300">
            ৳{product.price}
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-800 dark:text-violet-300 shadow-sm">
            {product.category?.name}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center p-4 pt-0 gap-2">
        <Link href={`/products/${product.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
        <Button
          variant="default"
          size="icon"
          className="shrink-0"
          onClick={() => handleCart(product)}
        >
          <ShoppingCart className="w-5 h-5" />
        </Button>
      </div>

      {/* Accent Glow */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-violet-400 opacity-20 blur-3xl rounded-full pointer-events-none group-hover:opacity-40 dark:opacity-10 transition-all duration-500"></div>
    </div>
  );
};

export default ProductCard;
