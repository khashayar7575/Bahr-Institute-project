import React from 'react'
import { motion } from 'framer-motion'

const FeaturesLanding = () => {
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
  const featureObject = [
    {
      title: 'تست',
      text: 'رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهب',
    },
    {
      title: 'تست',
      text: 'رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهب',
    },
    {
      title: 'تست',
      text: 'رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهب',
    },
    {
      title: 'تست',
      text: 'رای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهب',
    },
  ]
  return (
    <div className='relative '>
      <div className=' grid grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-3 md:gap-y-10 lg:gap-y-24 xl:gap-y-40 2xl:gap-y-52  '>
        {featureObject.map((featue, index) => (
          <div className={' w-full flex ' + (index % 2 !== 0 ? 'justify-end' : 'justify-start')}>
            <div className='group relative w-full sm:w-80 lg:w-96 space-y-6 border border-gray-100  rounded-2xl px-4 py-4 text-center shadow-2xl shadow-gray-600/10 '>
              <div className=' absolute z-0 rounded-2xl  left-0 top-0 bg-white w-full h-full opacity-70'></div>
              <div className='relative z-10 '>
                <div className='flex '>
                  <img
                    className='h-16 w-16'
                    src='images/icons/code.png'
                    alt='illustration'
                    loading='lazy'
                  />
                  <h3 className='text-xl flex-grow self-center  font-semibold text-gray-800 '>
                    {featue.title}
                  </h3>
                </div>
                <p className='text-sm text-justify'>{featue.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { FeaturesLanding }
