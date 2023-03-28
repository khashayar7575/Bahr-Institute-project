import { call, put } from 'redux-saga/effects'
import { getAllCategories } from '../../../services/api/categories/get-all-categories.api'
import { getAllCourses } from '../../../services/api/courses/get-all-courses.api'
import { getAllLessons } from '../../../services/api/lessons/get-all-lessons.api'
import {
  CourseDataType,
  GetCategoryDataType,
  GetCourseDataType,
  GetLessonDataType,
} from '../../../utils/types/data-types/data-types.utils'
import { setCategoryData } from '../../redux-store/data/category/category-data.Slice'
import { setCourseData } from '../../redux-store/data/course/course-data.Slice'
import { setLessonData } from '../../redux-store/data/lesson/lesson-data.Slice'

export function* handleGetCourseData() {
  try {
    const rawCourses: GetCourseDataType[] = yield call(getAllCourses)
    const lessons: GetLessonDataType[] = yield call(getAllLessons)
    const categories: GetCategoryDataType[] = yield call(getAllCategories)
    const courses: CourseDataType[] = [
      ...rawCourses.map((course) => {
        const categoryId = lessons.find((lesson) => lesson._id === course.lesson._id)!.category
        const categoryName = categories.find((category) => category.id === categoryId)!.name
        const { lesson, ...restOfObject } = course
        const result = {
          lesson: {
            ...lesson,
            category: { name: categoryName, id: categoryId },
          },
          ...restOfObject,
        }
        return result
      }),
    ]
    yield put(setCourseData(courses))
    yield put(setCategoryData(categories))
    yield put(setLessonData(lessons))
  } catch (error) {
    console.log(error)
  }
}
