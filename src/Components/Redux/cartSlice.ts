// cartSlice.js

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface CartItem {
  productId: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const productIdToAdd = action.payload;
      if (!state.items.some((item) => item.productId === productIdToAdd)) {
        state.items.push({ productId: productIdToAdd });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productIdToRemove = action.payload;
      state.items = state.items.filter(
        (item) => item.productId !== productIdToRemove
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
