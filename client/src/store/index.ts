import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import burgerReducer from './burgerSlice';





const store = configureStore({
  reducer: {
    burger: burgerReducer,
  }
})





type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;


export default store;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;