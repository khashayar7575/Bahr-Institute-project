import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  WaitingListBasket: new Object() as any,
}

const waitingListBasket = createSlice({
  name: 'WaitingListBasket',
  initialState,
  reducers: {
    /* data that comes from basket data */
    getWaitingListBasket: () => {},
    setWaitingListBasket: (state, action) => {
      state.WaitingListBasket = { ...action.payload }
    },
  },
})

export const { getWaitingListBasket, setWaitingListBasket } = waitingListBasket.actions

export const waitingListBasketReducer = waitingListBasket.reducer
