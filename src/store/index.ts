import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>