import { takeLatest } from 'redux-saga/effects'

import { getBlogData } from '../../redux-store/data/blog/blog-data.Slice'
import { getCommentData } from '../../redux-store/data/comment/comment-data.Slice'
import { getCourseData } from '../../redux-store/data/course/course-data.Slice'
import { getTeacherData } from '../../redux-store/data/teacher/teacher.Slice'
import { getWaitingListBasket } from '../../redux-store/waiting-list/waiting-list.Slice'
import { handleGetBlogData } from '../handlers/blog-data.handler'
import { handleGetCommentData } from '../handlers/comment-data.handler'
import { handleGetCourseData } from '../handlers/course-data.handler'
import { handleGetTeacherData } from '../handlers/teacher-data.handler'
import { handleGetWaitingListBasket } from '../handlers/waiting-list-data.handler'

export function* watcherSaga() {
  yield takeLatest(getCourseData.type, handleGetCourseData)
  yield takeLatest(getCommentData.type, handleGetCommentData)
  yield takeLatest(getBlogData.type, handleGetBlogData)
  yield takeLatest(getTeacherData.type, handleGetTeacherData)
  yield takeLatest(getWaitingListBasket.type, handleGetWaitingListBasket)
}
