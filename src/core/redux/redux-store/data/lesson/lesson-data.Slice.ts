import {createSlice} from '@reduxjs/toolkit'
import {GetLessonDataType} from '../../../../utils/types/data-types/data-types.utils'

const initialState = {
  LessonData: new Array() as GetLessonDataType[],
}

const lessonData = createSlice({
  name: 'LessonData',
  initialState,
  reducers: {
    getLessonData: () => {},
    setLessonData: (state, action) => {
      state.LessonData = [...action.payload]
    },
  },
})

export const {getLessonData, setLessonData} = lessonData.actions

export const lessonDataReducer = lessonData.reducer
