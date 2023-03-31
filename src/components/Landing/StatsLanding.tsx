import React from 'react'
import { motion, Variants } from 'framer-motion'

const StatsLanding = () => {
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
  const statestic = [
    {id:1,title: 'test', amont: '123' },
    {id:2, title: 'test1', amont: '123' },
    {id:3, title: 'test2', amont: '123' },
    {id:4, title: 'test3', amont: '123' },
  ]
  return (
    <section className=' relative text-gray-800 '>
      <motion.p
        initial='hidden'
        variants={onLoadAnimation}
        whileInView='onView'
        viewport={{ once: false, amount: 0.5 }}
        className='font-bold text-xl relative '
      >
        آمار و بازدهی سایت
      </motion.p>
      <motion.div
        initial='hidden'
        variants={onLoadAnimation}
        whileInView='onView'
        viewport={{ once: false, amount: 0.5 }}
        className='grid grid-cols-4  mt-4'
      >
        {statestic.map((item) => (
          <div key={item.id} className=' flex flex-col text-center '>
            <p className='capitalize'>{item.title}</p>
            <p className='text-3xl font-semibold leading-none '>{item.amont}</p>
          </div>
        ))}
        {/* <div className='flex p-3 space-x-4 rounded-lg md:space-x-6 text-black m-auto pl-20'>
          <div className='flex flex-col justify-center align-middle'>
            <p className='capitalize mr-5'>خرید ها</p>
            <p className='text-3xl font-semibold leading-none mr-5'>200</p>
          </div>
        </div>
        <div className='flex p-4 space-x-4 rounded-lg md:space-x-6 text-black m-auto'>
          <div className='flex flex-col justify-center align-middle'>
            <p className='capitalize mr-5'>دانشجو ها</p>
            <p className='text-3xl font-semibold leading-none mr-5'>7500</p>
          </div>
        </div>
        <div className='flex p-4 space-x-4 rounded-lg md:space-x-6 text-black m-auto'>
          <div className='flex flex-col justify-center align-middle'>
            <p className='capitalize mr-5'>پیشرفت</p>
            <p className='text-3xl font-semibold leading-none mr-5'>172%</p>
          </div>
        </div>
        <div className='flex p-4 space-x-4 rounded-lg md:space-x-6 text-black m-auto pl-20'>
          <div className='flex flex-col justify-center align-middle'>
            <p className='capitalize mr-5'>علاقه مندی</p>
            <p className='text-3xl font-semibold leading-none mr-5'>17%</p>
          </div>
        </div> */}
      </motion.div>
    </section>
  )
}

export { StatsLanding }
