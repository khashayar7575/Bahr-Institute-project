import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import { watcherSaga } from './redux-saga/root-saga/root-saga'
import { authDataReducer } from './redux-store/auth/auth-data.Slice'
import { teacherDataReducer } from './redux-store/data/teacher/teacher.Slice'
import { lessonDataReducer } from './redux-store/data/lesson/lesson-data.Slice'
import { categoryDataReducer } from './redux-store/data/category/category-data.Slice'
import { blogDataReducer } from './redux-store/data/blog/blog-data.Slice'
import { commentDataReducer } from './redux-store/data/comment/comment-data.Slice'
import { courseDataReducer } from './redux-store/data/course/course-data.Slice'
import { cartReducer } from './redux-store/cart/cart.Slice'
import { wishListDataReducer } from './redux-store/wish-list/wishList.Slice'
import { studyListDataReducer } from './redux-store/study-list/study-list.Slice'
import { studentCoursesDataReducer } from './redux-store/data/student-courses/student-courses.Slice'
import { waitingListBasketReducer } from './redux-store/waiting-list/waiting-list.Slice'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'AuthData',
    'BlogData',
    'CategoryData',
    'CommentData',
    'CourseData',
    'LessonData',
    'TeacherData',
    'StudentCoursesData',
    'WaitingListBasket',
  ],
}

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  AuthData: authDataReducer /* black List */,
  BlogData: blogDataReducer /* black List */,
  Cart: cartReducer,
  StudentCoursesData: studentCoursesDataReducer /* black List */,
  WishListData: wishListDataReducer,
  StudyListData: studyListDataReducer,
  CategoryData: categoryDataReducer /* black List */,
  CommentData: commentDataReducer /* black List */,
  CourseData: courseDataReducer /* black List */,
  LessonData: lessonDataReducer /* black List */,
  TeacherData: teacherDataReducer /* black List */,
  WaitingListBasket: waitingListBasketReducer /* black List */,
})

const presistReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: presistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(watcherSaga)

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
