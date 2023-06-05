import { configureStore } from '@reduxjs/toolkit'
import productReducer from './redux-slides/productListSlide'
import userReduxSlides from './redux-slides/userReduxSlides'

export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    userReduxSlides,
  },
})