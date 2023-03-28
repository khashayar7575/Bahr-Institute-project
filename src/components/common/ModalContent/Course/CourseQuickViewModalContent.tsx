import React, { FC } from 'react'
import { CourseDataType } from '../../../../core/utils/types/data-types/data-types.utils'
import { CapacityProgress } from '../../../CoursesList/CapacityProgress'
import { PrimaryButton } from '../../Buttons/PrimaryButton'
import { Image } from '../../CustomImage/Image'
import { Link } from 'react-router-dom'
import { jalaliDateToJalaliFormat } from '../../../../core/utils/convert-date-and-times/jalali-to-jalali-format.utils'

type Props = {
  closeModal: () => void
  //   onSubmitAction: () => void
  //   loadingSpinStatus: boolean
  courseData: CourseDataType
}

const CourseQuickViewModalContent: FC<Props> = ({
  closeModal,
  //   onSubmitAction,
  //   loadingSpinStatus,
  courseData,
}) => {
  return (
    <>
      <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 grid grid-cols-6 gap-x-5 h-72'>
        <div className='col-span-2 rounded overflow-hidden'>
          <Image
            src={courseData.lesson.image}
            alt={courseData.title}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='col-span-4'>
          <div className='flex items-center justify-between mb-2'>
            <div>
              <div className='flex items-center mb-2'>
                <span className='font-bold text-sm text-gray-500'>عنوان دوره : </span>
                <h3 className='font-bold text-gray-600 text-base mr-2'>{courseData.title}</h3>
              </div>
              <div className='flex items-center'>
                <span className='font-bold text-sm text-gray-500'>مدرس دوره : </span>
                <Link
                  to={`/instructors/${courseData.teacher._id}`}
                  className='font-bold text-gray-600 text-base mr-2'
                >
                  {courseData.teacher.fullName}
                </Link>
              </div>
            </div>
            <div className='w-16 h-16 rounded-full overflow-hidden'>
              <Image
                src={courseData.teacher.profile}
                alt={courseData.teacher.fullName}
                className='w-full h-full object-cover'
              ></Image>
            </div>
          </div>
          <div className='flex items-center mb-2'>
            <span className='font-bold text-sm text-gray-500'>تاریخ شروع : </span>
            <h3 className='font-bold text-gray-600 text-base mr-2'>
              {jalaliDateToJalaliFormat(courseData.startDate)}
            </h3>
          </div>
          <div className='flex items-center mb-2'>
            <span className='font-bold text-sm text-gray-500'>تاریخ پایان : </span>
            <h3 className='font-bold text-gray-600 text-base mr-2'>
              {jalaliDateToJalaliFormat(courseData.endDate)}
            </h3>
          </div>
          <div className='flex flex-col mb-2'>
            <span className='font-bold text-sm text-right text-gray-500'>توضیحات دوره : </span>
            <p className='text-sm text-gray-600 line-clamp-1 leading-8 text-justify'>
              {courseData.lesson.description}
            </p>
          </div>
          <div className='flex flex-col'>
            <div className='p-1'>
              <CapacityProgress
                capacity={courseData.capacity}
                reserved={courseData.students.length}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-100 px-4 py-3 sm:px-6 sm:flex justify-end'>
        <PrimaryButton
          type='button'
          className='ml-4 from-red-400 via-red-500 to-red-600 shadow-red-500/50'
          onClick={closeModal}
        >
          بستن
        </PrimaryButton>
        <PrimaryButton url={`/courses/${courseData._id}`} type='button'>
          مشاهده جزییات
        </PrimaryButton>
      </div>
    </>
  )
}

export { CourseQuickViewModalContent }
