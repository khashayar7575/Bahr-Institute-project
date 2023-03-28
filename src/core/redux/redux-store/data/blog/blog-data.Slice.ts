import { createSlice } from '@reduxjs/toolkit'

import { mockApiBlogData } from '../../../../utils/types/mock-api-data-types/news-extend/news-extend.types'

const initialState = {
  BlogData: new Array() as mockApiBlogData[],
}

const blogData = createSlice({
  name: 'BlogData',
  initialState,
  reducers: {
    getBlogData: () => {},
    setBlogData: (state, action) => {
      state.BlogData = [...action.payload]
    },
  },
})

export const { getBlogData, setBlogData } = blogData.actions

export const blogDataReducer = blogData.reducer
