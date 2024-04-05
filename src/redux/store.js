import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import wishSlice from "./slices/wishSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    wish: wishSlice,
    user: userSlice,
  },
});

export default store;
