import React, { FC } from 'react'
import { GetEmployeeDataType } from '../../core/utils/types/data-types/data-types.utils'
import { AsideInsCard } from './AsideInsCard'
import { motion, Variants } from 'framer-motion'

type Props = {
  data: GetEmployeeDataType[]
}

const AsideList: FC<Props> = ({ data }) => {
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
      viewport={{ once: true, amount: 0.5 }}
      className='  w-full  mx-4 shadow-lg rounded-md mt-3 py-2 relative'
    >
      <h2 className='text-center p-2 font-bold'>برترین اساتید</h2>
      {data.slice(-3).map((ins, index) => (
        <AsideInsCard data={ins} key={index} />
      ))}
    </motion.div>
  )
}

export { AsideList }
