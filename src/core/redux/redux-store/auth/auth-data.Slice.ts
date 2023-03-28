import { createSlice } from '@reduxjs/toolkit'
import { getItem, removeItem } from '../../../services/storage/localStorage'
import { getSessionItem, removeSessionItem } from '../../../services/storage/sessionStorage'

let savedAuthData = getSessionItem('AuthData')
if (!savedAuthData) {
  savedAuthData = getItem('AuthData')
  if (!savedAuthData) {
    savedAuthData = null
  } else {
    savedAuthData = JSON.parse(savedAuthData)
  }
} else {
  savedAuthData = JSON.parse(savedAuthData)
}

const initialState = { AuthData: savedAuthData }

const authData = createSlice({
  name: 'AuthData',
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.AuthData = { ...action.payload }
    },
    loggedOut: (state) => {
      removeItem('AuthData')
      removeSessionItem('AuthData')
      state.AuthData = null
    },
  },
})

export const { loggedIn, loggedOut } = authData.actions

export const authDataReducer = authData.reducer
