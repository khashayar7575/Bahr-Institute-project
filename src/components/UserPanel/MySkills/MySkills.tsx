import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../core/redux/store'
import { CourseDataType } from '../../../core/utils/types/data-types/data-types.utils'
import { Link } from 'react-router-dom'
import { charLimitter } from '../../../core/utils/character-limitter/char-limitter.utils'
import moment from 'jalali-moment'
import { Image } from '../../common/CustomImage/Image'
import { integerToPersianNumber } from '../../../core/utils/convert-numbers/integer-to-persian-number.utils'
import ProgressCard from './ProgressCard'

const MySkills = () => {
  const { AuthData } = useSelector((state: RootState) => state.AuthData)
  const { CourseData } = useSelector((state: RootState) => state.CourseData)
  const { StudentCoursesData } = useSelector((state: RootState) => state.StudentCoursesData)
  const [studentCourses, setStudentCourses] = useState<CourseDataType[]>([])

  const getStudentCompletedSkills = studentCourses.filter(
    (course) => new Date(course.endDate) > new Date()
  )

  const getStudentUnCompletedSkills = studentCourses.filter(
    (course) => new Date(course.endDate) < new Date()
  )

  const calcProgressPercentage = (course: CourseDataType) => {
    const endDateToGregorian = moment.from(course.endDate, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')
    const startDateToGregorian = moment
      .from(course.startDate, 'fa', 'YYYY/MM/DD')
      .format('YYYY/MM/DD')
    const courseDuration =
      new Date(endDateToGregorian).getTime() - new Date(startDateToGregorian).getTime()
    const elapsedTime = new Date().getTime() - new Date(startDateToGregorian).getTime()
    if (elapsedTime > 0) {
      const progressPercentage = (elapsedTime / courseDuration) * 100
      return progressPercentage
    } else {
      return 0
    }
  }

  useEffect(() => {
    setStudentCourses(StudentCoursesData)
  }, [StudentCoursesData])

  const renderUnCompleteSkills = () => {
    const result = getStudentUnCompletedSkills.map((course) => (
      <ProgressCard course={course} progressPercentage={calcProgressPercentage(course)} />
    ))
    return result
  }

  const renderCompleteSkills = () => {
    const result = getStudentCompletedSkills.map((course) => (
      <ProgressCard course={course} progressPercentage={calcProgressPercentage(course)} />
    ))
    return result
  }

  return (
    <>
      <div className='py-6'>
        <div className='md:px-0 '>
          <h2 className='text-2xl font-semibold text-gray-900 mb-16'>مهارت های من</h2>
        </div>
        <div className='flex flex-col items-start justify-start'>
          <h3 className='mb-6'>مهارت های تکمیل نشده</h3>
          {getStudentUnCompletedSkills.length > 0 ? (
            <div className='grid grid-cols-4 gap-x-4'>{renderUnCompleteSkills()}</div>
          ) : (
            <h3 className='mx-auto font-bold text-neutral-600'>
              در حال حاضر مشغول به فراگیری مهارتی جدید نیستید !
            </h3>
          )}
        </div>
        <div className='flex flex-col items-start justify-start mt-16'>
          <h3 className='mb-6'>مهارت های تکمیل شده</h3>
          {getStudentCompletedSkills.length > 0 ? (
            <div className='grid grid-cols-4 gap-x-4'>{renderCompleteSkills()}</div>
          ) : (
            <h3 className='mx-auto font-bold text-neutral-600'>
              تاکنون مهارتی را تکمیل نکرده اید!
            </h3>
          )}
        </div>
      </div>
    </>
  )
}

export { MySkills }
