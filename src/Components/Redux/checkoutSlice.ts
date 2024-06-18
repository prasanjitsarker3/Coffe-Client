// checkoutSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutProduct {
  productId: string;
  quantity: number;
  size: string;
}

interface CheckoutState {
  totalPrice: number;
  product: CheckoutProduct[];
}

const initialState: CheckoutState = {
  totalPrice: 0,
  product: [],
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutData: (state, action: PayloadAction<CheckoutState>) => {
      state.totalPrice = action.payload.totalPrice;
      state.product = action.payload.product;
    },
    clearCheckoutData: (state) => {
      state.totalPrice = 0;
      state.product = [];
    },
  },
});

export const { setCheckoutData, clearCheckoutData } = checkoutSlice.actions;

export default checkoutSlice.reducer;
