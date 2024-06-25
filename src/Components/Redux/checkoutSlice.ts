// checkoutSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutProduct {
  productId: string;
  quantity: number;
  size: string;
}

interface CheckoutState {
  totalPrice: number;
  products: CheckoutProduct[];
}

const initialState: CheckoutState = {
  totalPrice: 0,
  products: [],
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutData: (state, action: PayloadAction<CheckoutState>) => {
      state.totalPrice = action.payload.totalPrice;
      state.products = action.payload.products;
    },
    clearCheckoutData: (state) => {
      state.totalPrice = 0;
      state.products = [];
    },
  },
});

export const { setCheckoutData, clearCheckoutData } = checkoutSlice.actions;

export default checkoutSlice.reducer;
