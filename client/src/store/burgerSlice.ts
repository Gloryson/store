import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState: { isOpenBurger: boolean } = {
  isOpenBurger: false
}



const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    setIsOpenBurger(state, action: PayloadAction<boolean>) {
      state.isOpenBurger = action.payload;
    }
  }
})



export const { setIsOpenBurger } = burgerSlice.actions;
export default burgerSlice.reducer;