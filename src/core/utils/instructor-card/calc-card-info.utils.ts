import moment from 'jalali-moment'
import { GetCourseDataType } from '../types/data-types/data-types.utils'

export const calcInsCardInfo = (instructorId: string, courseData: GetCourseDataType[]) => {
  // *** taking all of the instructor courses from courses fake api !
  //   const getInstructorById = await getEmployeeById(instructorId)

  const instructorCourses = courseData.filter((element) => element.teacher._id === instructorId)

  /* CARD */

  const pastCourses = instructorCourses.filter((element) => {
    const calcCourseEndDate = new Date(
      moment.from(element.endDate, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')
    ).getTime()
    return calcCourseEndDate < new Date().getTime()
  })

  const currentSemesterCourses = instructorCourses.filter((element) => {
    const calcCourseStartDate = new Date(
      moment.from(element.startDate, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')
    ).getTime()
    const calcCourseEndDate = new Date(
      moment.from(element.endDate, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')
    ).getTime()
    return calcCourseStartDate < new Date().getTime() && new Date().getTime() < calcCourseEndDate
  })

  const upcomingCourses = instructorCourses.filter((element) => {
    const calcCourseStartDate = new Date(
      moment.from(element.startDate, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')
    ).getTime()
    return calcCourseStartDate > new Date().getTime()
  })

  /* CARD */

  const insCardInfoObject = {
    pastCourses: pastCourses,
    currentSemesterCourses: currentSemesterCourses,
    upcomingCourses: upcomingCourses,
  }
  //   const insCardInfoArray = [pastCourses, currentSemesterCourses, upcomingCourses]

  return insCardInfoObject
}
