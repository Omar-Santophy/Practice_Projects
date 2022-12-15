import { configureStore } from '@reduxjs/toolkit'
import loremSlice from '../slices/loremSlice'

export const store = configureStore({
  reducer: {
    lorem:loremSlice.reducer
  },
})