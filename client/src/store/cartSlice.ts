import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Purchase {
  code: number;
  title: string;
  price: number;
  amount: number;
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
    removeFromCart(state, action: PayloadAction<number>) {
      state.list = state.list.filter(purchase => purchase.code != action.payload);
    },
    increase(state, action: PayloadAction<number>) {
      const inc = state.list.find(purchase => purchase.code === action.payload);
      if (inc && inc.amount < 20) inc.amount += 1;
    },
    decrease(state, action: PayloadAction<number>) {
      const dec = state.list.find(purchase => purchase.code === action.payload);
      if (dec && dec.amount > 1) dec.amount -= 1;
    }
  }
})



export const { addToCart, removeFromCart, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;