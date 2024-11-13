import { configureStore } from '@reduxjs/toolkit'
import cartSystem from '../Slice/CartSlice'

export const store = configureStore({
  reducer: {
    cart:cartSystem,
  },
})