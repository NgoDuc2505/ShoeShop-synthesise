import { configureStore } from '@reduxjs/toolkit'
import listProductSliceReducer from './redux-slides/productListSlide'
export const store = configureStore({
  reducer: {
    listProductSliceReducer,
  },
})