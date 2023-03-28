import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  StudentCoursesData: new Array(),
}

const studentCoursesData = createSlice({
  name: 'StudentCoursesData',
  initialState,
  reducers: {
    addToStudentCourses: (state, action) => {
      state.StudentCoursesData.push(...action.payload)
    },
    resetStudentCourses: (state) => {
      state.StudentCoursesData = []
    },
  },
})

export const { addToStudentCourses, resetStudentCourses } = studentCoursesData.actions

export const studentCoursesDataReducer = studentCoursesData.reducer
