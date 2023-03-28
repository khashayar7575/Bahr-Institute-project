import { createSlice } from '@reduxjs/toolkit'

import { GetCommentDataType } from '../../../../utils/types/data-types/data-types.utils'

const initialState = {
  CommentData: new Array() as GetCommentDataType[],
}

const commentData = createSlice({
  name: 'CommentData',
  initialState,
  reducers: {
    getCommentData: () => {},
    setCommentData: (state, action) => {
      state.CommentData = [...action.payload]
    },
  },
})

export const { getCommentData, setCommentData } = commentData.actions

export const commentDataReducer = commentData.reducer
