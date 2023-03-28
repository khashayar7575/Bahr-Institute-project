import React, { FC } from 'react'
import { convertElapsedTimeToFarsiNumber } from '../../core/utils/convert-date-and-times/elapsed-time-to-fa-number.utils'
import { integerToPersianNumber } from '../../core/utils/convert-numbers/integer-to-persian-number.utils'
import { TeacherBiography } from '../../core/utils/types/data-types/data-types.utils'

interface Props {
  bio: TeacherBiography
}

const InsBiographyParagraph: FC<Props> = ({ bio }) => {
  const teachingExperienceCalculator = () => {
    if (bio.teachingExperience === 0) {
      return 'تاکنون سابقه تدریس در این مجموعه آموزشی را ندارد.'
    } else {
      return `
      تاکنون
      ${convertElapsedTimeToFarsiNumber(bio.teachingExperience.toString())}
        سابقه تدریس موفق در این مجموعه آموزشی را دارد.
      `
    }
  }
  return (
    <p className='text-gray-500 leading-9 flex flex-col text-justify'>
      <span>
        <mark className='text-gray-600 bg-transparent font-bold'>{bio.fullName}</mark> یکی از برجسته
        ترین اساتید مجموعه سپهر است. وی متولد{' '}
        <mark className='text-gray-600 bg-transparent font-bold'>{bio.birthDate}</mark> میباشد و در
        حال حاضر <mark className='text-gray-600 bg-transparent font-bold'>{bio.instructorAge}</mark>{' '}
        سال سن دارد.
      </span>
      <span>
        <mark className='text-gray-600 bg-transparent font-bold'>{bio.fullName}</mark> در تاریخ{' '}
        <mark className='text-gray-600 bg-transparent font-bold'>{bio.registerDate}</mark> به مجموعه
        سپهر پیوسته و {teachingExperienceCalculator()}
      </span>
      <span>
        وی تاکنون موفق به اتمام{' '}
        <mark className='text-gray-600 bg-transparent font-bold'>
          {integerToPersianNumber(bio.completedCourses.length)}
        </mark>{' '}
        دوره آموزشی به صورت کامل بوده است و در ترم جاری در حال تدریس{' '}
        <mark className='text-gray-600 bg-transparent font-bold'>
          {integerToPersianNumber(bio.currentSemesterCourses.length)}
        </mark>{' '}
        دوره آموزشی می باشد و همچنین در آینده{' '}
        <mark className='text-gray-600 bg-transparent font-bold'>
          {integerToPersianNumber(bio.upcomingCourses.length)}
        </mark>{' '}
        دوره را ارائه خواهد داد که در مجموع تعداد{' '}
        <mark className='text-gray-600 bg-transparent font-bold'>
          {integerToPersianNumber(bio.totalCoursesCount)}
        </mark>{' '}
        دوره را در کارنامه تدریسی آکادمی سپهر ثبت کرده است.
      </span>
      <span>
        <mark className='text-gray-600 bg-transparent font-bold'>{bio.fullName}</mark> تاکنون موفق
        به تربیت و آموزش{' '}
        <mark className='text-gray-600 bg-transparent font-bold'>
          {integerToPersianNumber(bio.totalStudentsCount)}
        </mark>{' '}
        دانشجو در آکادمی سپهر بوده است.
      </span>
    </p>
  )
}

export { InsBiographyParagraph }
