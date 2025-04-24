"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hooks";
import {
  orderProductSelector,
  subtotalSelector,
} from "@/redux/features/cartSlice";
import { placeOrderAction } from "@/serveractions";

const ProceedModel = () => {
  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;
  const products = useAppSelector(orderProductSelector);
  const totalAmount = useAppSelector(subtotalSelector);
  const productIds = products.map((p) => p.id).join(",");
  const productsQuantity = products.map((p) => p.orderQuantity).join(",");
  const courier = "steadfast";
  const advance = null;
  const discount = null;
  const charg = "80";

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const placeOrderInfo = {
      product_ids: productIds,
      s_product_qty: productsQuantity,
      c_phone: data.phone,
      c_name: data.name,
      courier: courier,
      address: data.address,
      advance: advance,
      cod_amount: totalAmount,
      discount_amount: discount,
      delivery_charge: charg,
    };
    const res = await placeOrderAction(placeOrderInfo);
    console.log(res);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          {" "}
          <p className=" px-7 py-2 rounded-2xl bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white">
            Checkout
          </p>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="mt-3">
                    {isSubmitting ? (
                      <>
                        {" "}
                        <div className="flex items-center justify-center h-40 w-full">
                          <div className="h-5 w-5 border-4 border-zinc-900 border-t-transparent rounded-full animate-spin dark:border-zinc-900 dark:border-t-transparent" />
                        </div>
                      </>
                    ) : (
                      "Order"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProceedModel;
