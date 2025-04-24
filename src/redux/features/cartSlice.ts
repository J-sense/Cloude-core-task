import { Product } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface OrderQuantity extends Product {
  orderQuantity: number;
}
type InitialState = {
  products: OrderQuantity[];
};
const initialState: InitialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const addToProduct = state.products.find(
        (pr) => pr.id == action.payload.id
      );
      if (addToProduct) {
        addToProduct.orderQuantity = addToProduct.orderQuantity + 1;
        return;
      } else {
        state.products.push({ ...action.payload, orderQuantity: 1 });
      }
    },
    incrementProduct: (state, action) => {
      const findPr = state.products.find((pr) => pr.id == action.payload);
      if (findPr) {
        findPr.orderQuantity += 1;
      }
    },
    decrementProduct: (state, action) => {
      const findPr = state.products.find((pr) => pr.id == action.payload);
      if (findPr && findPr.orderQuantity > 1) {
        findPr.orderQuantity -= 1;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((pr) => pr.id !== action.payload);
    },
  },
});
export const orderProductSelector = (state: RootState) => {
  return state.cart.products;
};
export const subtotalSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product) => {
    return acc + product.price * product.orderQuantity;
  }, 0);
};
export const { addProduct, incrementProduct, decrementProduct, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
