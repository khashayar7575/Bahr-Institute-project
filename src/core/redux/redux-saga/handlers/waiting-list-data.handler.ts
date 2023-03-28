import { call, put } from 'redux-saga/effects'
import { getPantryBasket } from '../../../services/pantry/basket-manage-api'
import { setWaitingListBasket } from '../../redux-store/waiting-list/waiting-list.Slice'

type ResponseGenerator = {
  config?: any
  data?: any
  headers?: any
  request?: any
  status?: number
  statusText?: string
}

export function* handleGetWaitingListBasket() {
  try {
    const getWaitingListBasket = async (): Promise<any> => {
      const result: any = await getPantryBasket('waitingList')
      return result
    }
    const response: ResponseGenerator = yield call(getWaitingListBasket)
    const data = response

    yield put(setWaitingListBasket(data))
  } catch (error) {
    console.log(error)
  }
}
