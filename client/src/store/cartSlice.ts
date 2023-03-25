import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  list: JSON.parse(localStorage.getItem('storeCartList') || '[]')
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Purchase>) {
      state.list.push(action.payload);
      localStorage.setItem('storeCartList', JSON.stringify(state.list));
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.list = state.list.filter(purchase => purchase.code != action.payload);
      localStorage.setItem('storeCartList', JSON.stringify(state.list));
    },
    increase(state, action: PayloadAction<number>) {
      const inc = state.list.find(purchase => purchase.code === action.payload);
      if (inc && inc.amount < 20) inc.amount += 1;
      localStorage.setItem('storeCartList', JSON.stringify(state.list));
    },
    decrease(state, action: PayloadAction<number>) {
      const dec = state.list.find(purchase => purchase.code === action.payload);
      if (dec && dec.amount > 1) dec.amount -= 1;
      localStorage.setItem('storeCartList', JSON.stringify(state.list));
    }
  }
})



export const { addToCart, removeFromCart, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;