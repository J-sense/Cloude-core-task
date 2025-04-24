"use client";
import ProceedModel from "@/components/section/ProceedModel";
import { Button } from "@/components/ui/button";

import {
  decrementProduct,
  incrementProduct,
  orderProductSelector,
  removeProduct,
  subtotalSelector,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

const Wishlist = () => {
  const wishlist = useAppSelector(orderProductSelector);
  const dispatch = useAppDispatch();
  const handleIncrement = (id: number) => {
    dispatch(incrementProduct(id));
  };
  const handleDecrement = (id: number) => {
    dispatch(decrementProduct(id));
  };
  const handleRemove = (id: number) => {
    dispatch(removeProduct(id));
  };
  const totalPrice = useAppSelector(subtotalSelector);

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto mt-20 px-4 space-y-6">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
          Your Wishlist
        </h2>

        {wishlist.length === 0 ? (
          <p className="text-center text-zinc-600 dark:text-zinc-400">
            Your wishlist is empty.
          </p>
        ) : (
          wishlist.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl shadow-md gap-4"
            >
              <Image
                src={`https://admin.refabry.com/storage/product/${item.image}`}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-xl object-cover"
              />
              <div className="flex-1 space-y-1">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {item.short_desc}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-violet-700 dark:text-violet-300 font-bold text-lg">
                    ৳{item.price * item.orderQuantity}
                  </span>
                  <span className="text-xs px-3 py-1 bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-100 rounded-full">
                    {item.category.name}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => handleDecrement(item.id)}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-base font-medium text-zinc-800 dark:text-zinc-100">
                  {item.orderQuantity}
                </span>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => handleIncrement(item.id)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => handleRemove(item.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))
        )}

        {wishlist.length > 0 && (
          <div className="mt-6 flex justify-between items-center bg-zinc-200 dark:bg-zinc-800 p-4 rounded-xl shadow-sm">
            <span className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
              total price ={totalPrice}
            </span>

            <ProceedModel />
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
