import { createSlice } from '@reduxjs/toolkit'
import { GetCategoryDataType } from '../../../../utils/types/data-types/data-types.utils'

const initialState = {
  CategoryData: new Array() as GetCategoryDataType[],
}

const categoryData = createSlice({
  name: 'CategoryData',
  initialState,
  reducers: {
    getCategoryData: () => {},
    setCategoryData: (state, action) => {
      state.CategoryData = [...action.payload]
    },
  },
})

export const {getCategoryData, setCategoryData} = categoryData.actions

export const categoryDataReducer = categoryData.reducer
