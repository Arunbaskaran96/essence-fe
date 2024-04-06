import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../hooks/useLocalStorage";

const { setItem } = useLocalStorage("cart");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    fetchCart: (state, action) => {
      state.cart = action.payload;
      if (action.payload.length > 0) {
        const addTotal = action.payload
          .map((prod) => prod.quantity * Number(prod.price))
          .reduce((acc, val) => acc + val);
        state.total = addTotal;
      }
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total += action.payload.quantity * Number(action.payload.price);
      setItem(state.cart);
    },
    removeCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        (item) => item._id != action.payload._id
      );
      state.cart = removeFromCart;
      state.total -= action.payload.quantity * Number(action.payload.price);
      setItem(state.cart);
    },
    increaseQuantity: (state, action) => {
      state.cart = state.cart.map((prod) => {
        if (prod._id === action.payload._id) {
          return { ...prod, quantity: prod.quantity + 1 };
        } else {
          return prod;
        }
      });
      state.total += 1 * Number(action.payload.price);
      setItem(state.cart);
    },
    decreaseQuantity: (state, action) => {
      state.cart = state.cart.map((prod) => {
        if (prod._id === action.payload._id) {
          return { ...prod, quantity: prod.quantity - 1 };
        } else {
          return prod;
        }
      });
      state.total -= 1 * Number(action.payload.price);
      setItem(state.cart);
    },
  },
});

export const {
  fetchCart,
  addToCart,
  removeCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
