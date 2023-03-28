import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  StudyListData: new Array(),
}

const studyListData = createSlice({
  name: 'StudyListData',
  initialState,
  reducers: {
    addToStudyList: (state, action) => {
      state.StudyListData.push({ ...action.payload })
    },
    removeFromStudyList: (state, action) => {
      state.StudyListData = action.payload
    },
    resetStudyList: (state) => {
      state.StudyListData = []
    },
  },
})

export const { addToStudyList, removeFromStudyList, resetStudyList } = studyListData.actions

export const studyListDataReducer = studyListData.reducer
