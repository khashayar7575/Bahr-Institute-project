import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AuthenticatedApp } from './AuthenticatedApp/AuthenticatedApp'
import { UnAuthenticatedApp } from './UnAuthenticatedApp/UnAuthenticatedApp'
import { Portal } from '../components/Portal/Portal'
import { getTeacherData } from '../core/redux/redux-store/data/teacher/teacher.Slice'
import { getBlogData } from '../core/redux/redux-store/data/blog/blog-data.Slice'
import { getCommentData } from '../core/redux/redux-store/data/comment/comment-data.Slice'
import { getCourseData } from '../core/redux/redux-store/data/course/course-data.Slice'
import { RootState } from '../core/redux/store'
import { CourseDataType } from '../core/utils/types/data-types/data-types.utils'
import {
  addToStudentCourses,
  resetStudentCourses,
} from '../core/redux/redux-store/data/student-courses/student-courses.Slice'
import { getWaitingListBasket } from '../core/redux/redux-store/waiting-list/waiting-list.Slice'
import { SendSmsApi } from '../core/services/api/sms-api/send-sms-api'
import { removeFromWaitingListObject } from '../core/services/api/pantry/notifications/notification-pantry.api'

const App = () => {
  const { AuthData } = useSelector((state: RootState) => state.AuthData)
  const { CourseData } = useSelector((state: RootState) => state.CourseData)
  const { WaitingListBasket } = useSelector((state: RootState) => state.WaitingListBasket)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCourseData())
    dispatch(getBlogData())
    dispatch(getCommentData())
    dispatch(getTeacherData())
    dispatch(getWaitingListBasket())
  }, [dispatch])

  useEffect(() => {
    studentCourses()
  }, [CourseData])

  useEffect(() => {
    const interval = setInterval(() => {
      if (AuthData) {
        const userWaitingList: { courseId: string; notificationMethod: string }[] =
          WaitingListBasket[(AuthData as any)._id]
        if (userWaitingList && userWaitingList.length > 0) {
          const checkingCoursesCapacities = userWaitingList.map((eachItem) => {
            const getCurrentCourse = CourseData.find((course) => course._id == eachItem.courseId)
            if (getCurrentCourse?.capacity !== 0) {
              const callingSmsApiHandler = async () => {
                eachItem.notificationMethod === 'sms'
                  ? await SendSmsApi((AuthData as any).phoneNumber, 107011, [
                      `${getCurrentCourse?.title}`,
                    ])
                  : console.log('email api should be here')
              }
              callingSmsApiHandler()
              const removeFromWaitingList = async () => {
                const removeFromWaitingListApiHandler = await removeFromWaitingListObject(
                  (AuthData as any)._id,
                  eachItem.courseId,
                  WaitingListBasket
                )
                dispatch(getWaitingListBasket())
                return removeFromWaitingListApiHandler
              }
              removeFromWaitingList()
            }
          })
          return checkingCoursesCapacities
        }
      }
    }, 10000)
    return () => clearInterval(interval)
  }, [WaitingListBasket, CourseData, AuthData])

  const studentCourses = () => {
    if (AuthData) {
      let stCourses: CourseDataType[] = []
      CourseData.map((course) => {
        const hasStudent = course.students.find((student) => student._id === (AuthData as any)._id)
        if (hasStudent) {
          stCourses.push(course)
        }
      })
      dispatch(resetStudentCourses())
      if (stCourses.length > 0) {
        dispatch(addToStudentCourses(stCourses))
      }
    }
  }

  return (
    <>
      <Portal />
      {AuthData ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </>
  )
}

export { App }
