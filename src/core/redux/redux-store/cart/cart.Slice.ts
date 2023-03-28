import { createSlice } from '@reduxjs/toolkit'
import { CourseDataType } from '../../../utils/types/data-types/data-types.utils'

const initialState = {
  Cart: new Array() as CourseDataType[],
}

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.Cart.push({ ...action.payload })
    },
    removeFromCart: (state, action) => {
      state.Cart = action.payload
    },
    resetCart: (state) => {
      state.Cart = []
    },
  },
})

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions

export const cartReducer = cartSlice.reducer
