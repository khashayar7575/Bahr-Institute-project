import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  WishListData: new Array(),
}

const wishListData = createSlice({
  name: 'WishListData',
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      state.WishListData.push({ ...action.payload })
    },
    removeFromWishList: (state, action) => {
      state.WishListData = action.payload
    },
    resetWishList: (state) => {
      state.WishListData = []
    },
  },
})

export const { addToWishList, removeFromWishList, resetWishList } = wishListData.actions

export const wishListDataReducer = wishListData.reducer
