import React from 'react'
import { motion } from 'framer-motion'

const BecomeInsLanding = () => {
  const onLoadAnimation = {
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
    viewBox: { once: false, amount: 0.2 },
  }
  return (
    <div className='relative h-28'>
      <motion.div
        initial='hidden'
        whileInView='onView'
        className='w-1/4 absolute bg-white shadow-lg rounded-lg mr-16'
      >
        <p className='text-center font-bold py-2 text-lg'>به ما بپیوندید</p>
        <p className='text-sm text-center'>علیرضا اینجام یچی بنویس من چیزی به ذهنم نمیرسه</p>
        <div className='mx-20 h-8 my-2 pt-1 text-sm bg-neutral-800 text-center text-white rounded-lg'>
          ارسال رزومه
        </div>
      </motion.div>
    </div>
  )
}

export default BecomeInsLanding
