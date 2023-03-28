import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { charLimitter } from '../../../core/utils/character-limitter/char-limitter.utils'
import { integerToPersianNumber } from '../../../core/utils/convert-numbers/integer-to-persian-number.utils'
import { CourseDataType } from '../../../core/utils/types/data-types/data-types.utils'
import { Image } from '../../common/CustomImage/Image'

type Props = {
  course: CourseDataType
  progressPercentage: number
}

const ProgressCard: FC<Props> = ({ course, progressPercentage }) => {
  return (
    <div className='bg-white rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 grid grid-cols-9 p-3'>
      <div className='col-span-3 h-24 rounded overflow-hidden'>
        <Image className='object-cover w-full h-full' src={course.lesson.image} alt='' />
      </div>
      <div className='col-span-6 flex flex-col justify-between pr-3 py-1 leading-normal'>
        <div className='flex flex-col justify-start'>
          <span className='text-neutral-700 font-bold mb-1 text-sm hover:text-teal-400'>
            {charLimitter(course.title, 20)}
          </span>
          <span className='text-gray-400 block text-xs'>{course.lesson.lessonName}</span>
        </div>
        <div className='flex flex-col justify-start'>
          <div className='flex items-center justify-between'>
            <span className='text-neutral-700 mb-1 text-sm hover:text-teal-400'>درصد پیشرفت :</span>
            <span className='text-sm'>
              {integerToPersianNumber(Math.ceil(progressPercentage))} %
            </span>
          </div>
          <div className='rounded-full bg-neutral-300'>
            <div
              style={{
                width: `${progressPercentage}%`,
              }}
              className={'h-1.5 rounded-full bg-green-400'}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressCard
