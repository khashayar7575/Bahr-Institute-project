import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { jalaliDateToJalaliFormat } from '../../core/utils/convert-date-and-times/jalali-to-jalali-format.utils'
import { integerToPersianNumber } from '../../core/utils/convert-numbers/integer-to-persian-number.utils'
import { CourseDataType } from '../../core/utils/types/data-types/data-types.utils'

import { Image } from '../common/CustomImage/Image'
import { CapacityProgress } from './CapacityProgress'
import { motion, Variants } from 'framer-motion'

type Props = {
  data: CourseDataType
  teacherBadge?: string | number
  view: number
}

const CourseCard: FC<Props> = ({ data, teacherBadge, view }) => {
  const onLoadAnimation: Variants = {
    hidden: {
      opacity: 0,
      top: -200,
    },
    onView: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 0.5,
      },
    },
  }
  return (
    <motion.div
      initial='hidden'
      variants={onLoadAnimation}
      whileInView='onView'
      viewport={{ once: false, amount: 0.2 }}
      className={'bg-white rounded-xl shadow-xl p-2' + (view === 1 ? '' : ' flex ')}
    >
      <div className={'relative ' + (view === 1 ? ' h-36' : 'h-72 w-2/5 ')}>
        <Link to={`/courses/${data._id}`}>
          <Image
            className='w-full h-full rounded-lg object-cover'
            src={data.lesson.image}
            alt={data.lesson.lessonName}
          />
        </Link>
        <div
          className={
            'bg-indigo-100 bg-opacity-60 inline-block absolute left-2 bottom-2 px-3 rounded-full text-black text-sm py-1' +
            (view === 1 ? '' : '')
          }
        >
          {data.lesson.category.name}
        </div>
      </div>
      <motion.div
        initial='hidden'
        variants={onLoadAnimation}
        whileInView='onView'
        viewport={{ once: false, amount: 0.3 }}
        className={' ' + (view === 1 ? 'px-2' : ' w-3/5 px-4')}
      >
        <h2 className={'font-bold text-md pt-2 text-gray-800 ' + (view === 1 ? '' : '')}>
          {data.title}
        </h2>
        <motion.p
          initial='hidden'
          variants={onLoadAnimation}
          whileInView='onView'
          viewport={{ once: false, amount: 0.5 }}
          className={' ' + (view === 1 ? 'hidden' : ' line-clamp-2 my-2')}
        >
          {' '}
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
          است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
          تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </motion.p>
        <div className={'flex justify-between' + (view === 1 ? '' : '')}>
          <p
            className={
              'pt-1 text-gray-500 line-clamp-1  w-2/3 ' +
              (view === 1 ? 'text-sm' : 'text-md pt-3.5')
            }
          >
            {' '}
            <Link to={`/instructors/${data.teacher._id}`}>{data.teacher.fullName}</Link>
          </p>
          <div
            className={'h-14 w-14 relative rounded-full overflow-hidden ' + (view === 1 ? '' : '')}
          >
            {teacherBadge ? (
              <div className='h-4 w-4 bg-black absolute right-0 top-0'>{teacherBadge}</div>
            ) : null}{' '}
            <Image
              className='w-full h-full object-cover'
              src={data.teacher.profile}
              alt={data.teacher.fullName}
            />
          </div>
        </div>
        <motion.div
          initial='hidden'
          variants={onLoadAnimation}
          whileInView='onView'
          viewport={{ once: false, amount: 0.5 }}
          className={'flex justify-between my-4' + (view === 1 ? ' my-6' : '')}
        >
          <span
            className={
              'text-sm bg-indigo-700 text-white px-2 rounded-full pt-0.5 hover:text-gray-400 cursor-pointer' +
              (view === 1 ? '' : '')
            }
          >
            خرید
          </span>{' '}
          <span
            className={
              'bg-gray-200 px-2 rounded-full text-neutral-700 text-sm pt-1 ml-1' +
              (view === 1 ? '' : '')
            }
          >
            لایک
          </span>{' '}
          <span
            className={
              'bg-gray-200 px-2 rounded-full text-neutral-700 text-sm pt-1 ml-1' +
              (view === 1 ? '' : '')
            }
          >
            کامنت
          </span>{' '}
          <span
            className={
              'bg-gray-200 px-2 rounded-full text-neutral-700 text-sm pt-1 ml-1' +
              (view === 1 ? '' : '')
            }
          >
            دانشجو
          </span>
        </motion.div>
        <CapacityProgress capacity={data.capacity} reserved={data.students.length} />
        <div
          className={
            'flex mt-4 mb-1  text-gray-500 justify-between ' + (view === 1 ? 'text-xs' : 'text-sm')
          }
        >
          {' '}
          <span className={'' + (view === 1 ? '' : '')}>
            {`قیمت : ${integerToPersianNumber(data.cost)} تومان`}
          </span>{' '}
          <span className={'' + (view === 1 ? '' : '')}>
            {`تاریخ شروع : ${jalaliDateToJalaliFormat(data.startDate)}`}
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export { CourseCard }
