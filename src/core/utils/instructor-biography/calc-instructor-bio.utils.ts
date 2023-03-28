import moment from 'jalali-moment'

import { jalaliDateToJalaliFormat } from '../convert-date-and-times/jalali-to-jalali-format.utils'
import { integerToPersianNumber } from '../convert-numbers/integer-to-persian-number.utils'
import { gregorianDateToJalaliFormat } from '../convert-date-and-times/gregorian-to-jalali-format.utils'
import { calculateElapsedTime } from '../convert-date-and-times/calc-elapsed-time.utils'
import { CourseDataType, GetEmployeeDataType } from '../types/data-types/data-types.utils'

export const calculateInstructorBio = (
  instructorCourses: CourseDataType[],
  instructorProfile: GetEmployeeDataType
) => {
  // getting instructor name
  const fullName = instructorProfile.fullName

  // getting instructor birthdate and converting it into persian calender format
  const birthDate = jalaliDateToJalaliFormat(instructorProfile.birthDate)

  // calculating instructor Age
  const birthDateToGregorian = moment
    .from(instructorProfile.birthDate, 'fa', 'YYYY/MM/DD')
    .format('DD/MM/YYYY')

  const BirthYear = birthDateToGregorian.slice(-4)
  const currentYear = new Date().getFullYear()
  const instructorAge = integerToPersianNumber(currentYear - BirthYear)

  // getting number of courses
  const totalCoursesCount = instructorCourses.length

  const completedCourses = instructorCourses.filter((element) => {
    const calcCourseEndDate = new Date(
      moment.from(element.endDate, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')
    ).getTime()
    return calcCourseEndDate < new Date().getTime()
  })

  // getting number of uncompleted courses in the academy

  const currentSemesterCourses = instructorCourses.filter((element) => {
    const calcCourseStartDate = new Date(
      moment.from(element.startDate, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')
    ).getTime()
    const calcCourseEndDate = new Date(
      moment.from(element.endDate, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')
    ).getTime()
    return calcCourseStartDate < new Date().getTime() && calcCourseEndDate > new Date().getTime()
  })

  const upcomingCourses = instructorCourses.filter((element) => {
    const calcCourseStartDate = new Date(
      moment.from(element.startDate, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')
    ).getTime()
    return calcCourseStartDate > new Date().getTime()
  })

  // getting instructor register date and converting it into persian calender format
  const registerDate = gregorianDateToJalaliFormat(instructorProfile.registerDate)

  // calculating number of students that instructor have ~~> that's not unique
  // const totalStudentsCount = instructorCourses.reduce((previous, current) => {
  //   previous += current.students.length;
  //   return previous;
  // }, 0);

  // getting only unique students
  const rawStudentId = instructorCourses.map((course) =>
    course.students.map((student) => student._id)
  )
  const totalStudentsCount = [...new Set(([] as string[]).concat(...rawStudentId))].length

  // calc teaching experience on the academy
  const firstCourseOnAcademyStartDate = instructorCourses.sort((a, b) => {
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  })[0].startDate

  // convert the date into gregorian format to be able to use calculateElapsedTime function (greg format required)
  // also its shitty format, it's supposed to be DD MM YYYY eu greg format but because of shitty commenting api the format has to be YYYY MM DD. so my calc-elapsed-time ...
  // gonna work with YYYY MM DD Format.

  const startDate = moment
    .from(firstCourseOnAcademyStartDate, 'fa', 'YYYY/MM/DD')
    .format('YYYY/MM/DD')

  const teachingExperience =
    new Date(startDate).getTime() > new Date().getTime() ? '0' : calculateElapsedTime(startDate)

  const biographyObject = {
    fullName: fullName,
    birthDate: birthDate,
    instructorAge: instructorAge,
    totalCoursesCount: totalCoursesCount,
    completedCourses: completedCourses,
    currentSemesterCourses: currentSemesterCourses,
    upcomingCourses: upcomingCourses,
    registerDate: registerDate,
    totalStudentsCount: totalStudentsCount,
    teachingExperience: teachingExperience,
  }
  return biographyObject
}
