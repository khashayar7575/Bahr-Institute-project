import { createSlice } from '@reduxjs/toolkit'
import { CourseDataType } from '../../../../utils/types/data-types/data-types.utils'

const initialState = {
  CourseData: new Array() as CourseDataType[],
}

const courseData = createSlice({
  name: 'CourseData',
  initialState,
  reducers: {
    getCourseData: () => {},
    setCourseData: (state, action) => {
      state.CourseData = [...action.payload]
    },
  },
})

export const { getCourseData, setCourseData } = courseData.actions

export const courseDataReducer = courseData.reducer
