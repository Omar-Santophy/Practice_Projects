import { configureStore } from '@reduxjs/toolkit'
// import CounterSlice from 'CounterSlice'
import CounterSlice from './CounterSlice.js'

export const store = configureStore({
  reducer: {
  counter:CounterSlice
  },
})

