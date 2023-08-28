import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import CartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    carts: CartSlice,
  },
});
