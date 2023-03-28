import {createSlice} from '@reduxjs/toolkit'
import {GetStudentDataType} from '../../../../utils/types/data-types/data-types.utils'

const initialState = {
  StudentData: new Array() as GetStudentDataType[],
}

const studentData = createSlice({
  name: 'StudentData',
  initialState,
  reducers: {
    getStudentData: () => {},
    setStudentData: (state, action) => {
      state.StudentData = [...action.payload]
    },
  },
})

export const {getStudentData, setStudentData} = studentData.actions

export const studentDataReducer = studentData.reducer
