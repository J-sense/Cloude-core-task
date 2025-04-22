import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-zinc-300 dark:border-zinc-800 hover:shadow-lg dark:hover:shadow-violet-900 transition-all duration-300  group relative overflow-hidden">
      {/* Product Image */}
      <div className="relative w-full h-56  overflow-hidden mb-4">
        <Image
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform group-hover:scale-105"
        />
      </div>

      {/* Product Name */}
      <div className="p-3">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2 mb-3">
          {product.short_desc}
        </p>
      </div>

      {/* Price and Category */}
      <div className="flex items-center justify-between mb-1 p-3">
        <span className="text-lg font-bold text-violet-700 dark:text-violet-300">
          ৳{product.price}
        </span>
        <span className="text-xs px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-800 dark:text-violet-300 shadow">
          {product.category?.name}
        </span>
      </div>

      {/* View Details Button */}
      <Link href={`/product/${product.id}`}>
        <Button className="w-full mb-4 ">View Details</Button>
      </Link>

      {/* Accent Glow */}
      <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-violet-400 opacity-20 blur-3xl rounded-full pointer-events-none group-hover:opacity-40 dark:opacity-10 transition-all duration-500"></div>
    </div>
  );
};

export default ProductCard;
