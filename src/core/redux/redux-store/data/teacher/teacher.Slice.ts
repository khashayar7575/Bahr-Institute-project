import { createSlice } from '@reduxjs/toolkit'
import { GetEmployeeDataType } from '../../../../utils/types/data-types/data-types.utils'

const initialState = {
  TeacherData: new Array() as GetEmployeeDataType[],
}

const teacherData = createSlice({
  name: 'TeacherData',
  initialState,
  reducers: {
    getTeacherData: () => { },
    setTeacherData: (state, action) => {
      state.TeacherData = [...action.payload]
    },
  },
})

export const { getTeacherData, setTeacherData } = teacherData.actions

export const teacherDataReducer = teacherData.reducer
