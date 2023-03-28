import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { RootState } from '../../core/redux/store'
import { calcInsCardInfo } from '../../core/utils/instructor-card/calc-card-info.utils'
import { GetEmployeeDataType } from '../../core/utils/types/data-types/data-types.utils'
import { Image } from '../common/CustomImage/Image'
import DoughnatChart from '../common/DoughnatChart/DoughnatChart'
import { useSelector } from 'react-redux'
import { PrimaryButton } from './../common/Buttons/PrimaryButton'
import { motion, Variants } from 'framer-motion'

type Props = {
  data: GetEmployeeDataType
}

const InstructorCard: FC<Props> = ({ data }) => {
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
  const { CourseData } = useSelector((state: RootState) => state.CourseData)
  const insCardInfo = calcInsCardInfo(data._id, CourseData)

  return (
    <motion.div
      initial='hidden'
      variants={onLoadAnimation}
      whileInView='onView'
      viewport={{ once: false, amount: 0.2 }}
      className='mb-6 rounded-2xl shadow-xl bg-white p-2'
    >
      <div className='w-full mx-auto  flex   '>
        <div className='bg-gray-400 w-72 rounded-lg overflow-hidden'>
          <Image className='w-full  h-full object-cover' src={data.profile} alt={data.fullName} />
        </div>

        <motion.div
          initial='hidden'
          variants={onLoadAnimation}
          whileInView='onView'
          viewport={{ once: false, amount: 0.2 }}
          className='pr-2 flex-grow'
        >
          <div className='pr-3'>
            <h4 className='text-xl mt-3'>{data.fullName}</h4>
            <p className='text-xs text-gray-600 my-3 line-clamp-2 whitespace-pre-line '>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون
            </p>
            <div className='mt-5'>
              <DoughnatChart
                data={[
                  {
                    title: 'دوره‌های گذشته:',
                    value: insCardInfo.pastCourses.length,
                    color: '#E38627',
                  },
                  {
                    title: 'دوره‌های فعلی:',
                    value: insCardInfo.currentSemesterCourses.length,
                    color: '#C13C37',
                  },
                  {
                    title: 'دوره‌های پیش‌رو:',
                    value: insCardInfo.upcomingCourses.length,
                    color: '#6A2135',
                  },
                ]}
              />
            </div>
          </div>
          <motion.div
            initial='hidden'
            variants={onLoadAnimation}
            whileInView='onView'
            viewport={{ once: false, amount: 0.2 }}
            className='text-center my-3'
          >
            <PrimaryButton type='button' url={`/instructors/${data._id}`} className='px-6'>
              مشاهده پروفایل
            </PrimaryButton>
            <button
              className='text-neutral-800 mr-2
              border-2 border-neutral-800 p-2 rounded-md '
            >
              مشاهده دوره های استاد
            </button>
          </motion.div>
          <motion.div
            initial='hidden'
            variants={onLoadAnimation}
            whileInView='onView'
            viewport={{ once: false, amount: 0.2 }}
            className='bg-gray-400 h-10 rounded-lg'
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export { InstructorCard }
