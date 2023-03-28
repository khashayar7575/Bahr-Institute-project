import React, { FC } from 'react'
import { GetEmployeeDataType } from '../../core/utils/types/data-types/data-types.utils'
import { Image } from '../common/CustomImage/Image'
import { useSelector } from 'react-redux'
import { RootState } from '../../core/redux/store'
import { calcInsCardInfo } from '../../core/utils/instructor-card/calc-card-info.utils'
import { integerToPersianNumber } from '../../core/utils/convert-numbers/integer-to-persian-number.utils'
import { PrimaryButton } from '../common/Buttons/PrimaryButton'
import { motion, Variants } from 'framer-motion'

type Props = {
  data: GetEmployeeDataType
}

const AsideInsCard: FC<Props> = ({ data }) => {
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
      viewport={{ once: false, amount: 0.5 }}
      className='flex mb-6 gap-4 last:mb-0'
    >
      <figure className='h-14 w-14 rounded-full mr-2.5  overflow-hidden'>
        <Image className='w-full h-full object-cover' src={data.profile} alt='' />
      </figure>
      <div>
        <h2 className='pr-1 pt-1 '>{data.fullName}</h2>
        <span className='pr-1 text-xs pt-1'>{`دوره های گذرانیده : ${integerToPersianNumber(
          insCardInfo.pastCourses.length
        )}`}</span>
      </div>
      <div>
        <PrimaryButton type='button' url={`/instructors/${data._id}`} className='px-6 mr-5 '>
          مشاهده پروفایل
        </PrimaryButton>
      </div>
    </motion.div>
  )
}

export { AsideInsCard }
