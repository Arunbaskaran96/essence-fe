import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../hooks/useLocalStorage";

const { setItem } = useLocalStorage("wishlist");

const wishSlice = createSlice({
  name: "wish",
  initialState: {
    wishlist: [],
  },
  reducers: {
    fetchWishList: (state, action) => {
      state.wishlist = action.payload;
    },
    addWishList: (state, action) => {
      const isExist = state.wishlist.find(
        (item) => item._id == action.payload._id
      );
      if (isExist) {
        const removeItem = state.wishlist.filter(
          (item) => item._id != action.payload._id
        );
        state.wishlist = removeItem;
        setItem(state.wishlist);
      } else {
        state.wishlist = [...state.wishlist, action.payload];
        setItem(state.wishlist);
      }
    },
  },
});

export const { fetchWishList, addWishList } = wishSlice.actions;

export default wishSlice.reducer;
