import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: { isNav: boolean } = {
  isNav: false
}



const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    setIsNav(state, action: PayloadAction<boolean>) {
      state.isNav = action.payload;
    }
  }
})



export const { setIsNav } = burgerSlice.actions;
export default burgerSlice.reducer;