import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../config";

const INITIAL_STATE = {
  loading: null,
  error: null,
  result: {},
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(`${URL}/getProducts`);
    const result = await response.json();
    return result;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        (state.loading = true), (state.error = null), (state.result = {});
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        (state.loading = false),
          (state.error = null),
          (state.result = action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        (state.loading = false),
          (state.error = action.payload),
          (state.result = {});
      });
  },
});

export default productSlice.reducer;
