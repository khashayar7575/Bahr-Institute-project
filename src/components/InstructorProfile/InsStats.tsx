import React, { FC } from 'react'
import allCourses from '../../assets/images/SVG/AllCourses.svg'
import students from '../../assets/images/SVG/students.svg'
import Education from '../../assets/images/SVG/Education.svg'
import CurrentCourses from '../../assets/images/SVG/CurrentCourses.svg'
import Status from '../../assets/images/SVG/Status.svg'
import Support from '../../assets/images/SVG/Support.svg'
import {
  GetEmployeeDataType,
  TeacherBiography,
} from '../../core/utils/types/data-types/data-types.utils'
import { integerToPersianNumber } from '../../core/utils/convert-numbers/integer-to-persian-number.utils'
import { convertElapsedTimeToFarsiNumber } from '../../core/utils/convert-date-and-times/elapsed-time-to-fa-number.utils'

type Props = {
  bio: TeacherBiography
  insData: GetEmployeeDataType
}

const InsStats: FC<Props> = ({ bio, insData }) => {
  const teachingExperienceCalculator = () => {
    if (bio.teachingExperience === 0) {
      return 'ندارد'
    } else {
      return convertElapsedTimeToFarsiNumber(bio.teachingExperience.toString())
    }
  }

  const instructorinfo = [
    {
      title: 'تعداد کل دوره ها',
      status: `${integerToPersianNumber(bio.totalCoursesCount)}`,
      icon: allCourses,
    },
    {
      title: 'تعداد دانشجویان',
      status: `${integerToPersianNumber(bio.totalStudentsCount)}`,
      icon: students,
    },
    {
      title: 'تعداد  دوره های ترم جاری',
      status: `${integerToPersianNumber(bio.currentSemesterCourses.length)}`,
      icon: CurrentCourses,
    },
    { title: 'سابقه تدریس', status: `${teachingExperienceCalculator()}`, icon: Education },
    { title: 'وضعیت', status: `${insData.isActive === true ? 'فعال' : 'غیر فعال'}`, icon: Status },
    { title: 'پشتیبانی', status: '۲۴ ساعته', icon: Support },
  ]
  return (
    <section className='mt-6 mb-12'>
      <div className='container grid grid-cols-1 gap-6 pt-2 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3'>
        {instructorinfo.map((item, index) => (
          <div key={index} className='flex rounded-lg bg-white dark:text-black shadow-lg'>
            <div className='flex border-t-8 border-neutral-800 rounded-md mr-0 items-center justify-center px-4 dark:bg-neutral-500 dark:text-neutral-800'>
              <img src={item.icon} alt={item.title} className='w-7 h-7 ' />
            </div>
            <div className='flex items-center justify-between flex-1 p-3'>
              <p>{item.title}</p>
              <p className='text-xl font-semibold'>{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { InsStats }
