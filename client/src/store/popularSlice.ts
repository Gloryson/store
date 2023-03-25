import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Good {
  code: number;
  title: string;
  stars: number;
  price: number;
};

interface Popular {
  list: Good[];
}

const initialState: Popular = {
  list: []
}

const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {
    setPopular(state, action: PayloadAction<Good[]>) {
      state.list = action.payload;
    }
  }
})



export const { setPopular } = popularSlice.actions;
export default popularSlice.reducer;