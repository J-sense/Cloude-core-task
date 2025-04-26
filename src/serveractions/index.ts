"use server";

import { FieldValues } from "react-hook-form";

export const placeOrderAction = async (data: FieldValues) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_ORDER_API_URL as string, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
