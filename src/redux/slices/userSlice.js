import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../config";

export const login = createAsyncThunk("user/login", async (formdata) => {
  const response = await fetch(`${URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata),
  });
  const result = await response.json();
  return result;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    addAddress: (state, action) => {
      state.user.user.address = [...state.user.user.address, action.payload];
    },
    logout: (state) => {
      (state.loading = false),
        (state.error = null),
        (state.user = {}),
        (state.isAuthenticated = false);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        (state.loading = true),
          (state.error = null),
          (state.user = {}),
          (state.isAuthenticated = false);
      })
      .addCase(login.fulfilled, (state, action) => {
        (state.loading = false),
          (state.user = action.payload),
          (state.error = null);
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        (state.loading = false),
          (state.user = {}),
          (state.error = action.payload);
        state.isAuthenticated = false;
      });
  },
});
export const { addAddress, logout } = userSlice.actions;
export default userSlice.reducer;
