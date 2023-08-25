import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./CtegorySlice";
import ProductSlice from "./ProductSlice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: ProductSlice,
  },
});
