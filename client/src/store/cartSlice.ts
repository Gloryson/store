import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Purchase {
  code: number;
  name: string;
  price: string;
};

interface Cart {
  list: Purchase[];
}

const initialState: Cart = {
  list: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Purchase>) {
      state.list.push(action.payload);
    },
    removeInCart(state, action: PayloadAction<number>) {
      state.list = state.list.filter(purchase => purchase.code != action.payload);
    }
  }
})



export const { addToCart, removeInCart } = cartSlice.actions;
export default cartSlice.reducer;