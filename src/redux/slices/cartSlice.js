import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../hooks/useLocalStorage";

const { setItem } = useLocalStorage("cart");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    fetchCart: (state, action) => {
      state.cart = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      setItem(state.cart);
    },
  },
});

export const { fetchCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
