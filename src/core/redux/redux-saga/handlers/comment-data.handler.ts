import { call, put } from 'redux-saga/effects'
import { getAllComments } from '../../../services/api/comments/get-all-comments.api'
import { GetCommentDataType } from '../../../utils/types/data-types/data-types.utils'
import { setCommentData } from '../../redux-store/data/comment/comment-data.Slice'

export function* handleGetCommentData() {
  try {
    const response: GetCommentDataType[] = yield call(getAllComments)
    const data = response
    yield put(setCommentData(data))
  } catch (error) {
    console.log(error)
  }
}
