import React from 'react'

import { OurTeam } from '../../components/AboutUs/OurTeam/OurTeam'
import { ReactComponent as AboutUsSvg } from '../../assets/images/SVG/AboutUsSvg.svg'
import { PathMotion } from '../../components/common/PathMotion/PathMotion'
import { StatisticList } from '../../components/AboutUs/Statistic/StatisticList'
import { Link } from 'react-router-dom'
import { HeadingTitle } from '../../components/common/HeadingTitle'
import { motion, Variants } from 'framer-motion'

const AboutUs = () => {
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
    <>
      <div className='pt-2'>
        <div className='pt-16'>
          <HeadingTitle>آشنایی بیشتر با ما</HeadingTitle>
        </div>

        <div className='flex pt-10 pb-10  overflow-hidden lg:pt-16 lg:pb-16'>
          <div className='xl:w-3/5 z-10'>
            <h1 className='p-2 my-4'>
              تیم ما در هدف پیشرفت و توسعه بیشتر در زمینه های موجود است و این تیم از بهار 1401 کار
              خود را شروع کرده و هر روز به دنبال توسعه بار علمی خود است و این منظور را در کمال علاقه
              پیشرفت خود ثابت کرده اند تیم ما در هدف پیشرفت و توسعه بیشتر در زمینه های موجود است و
              این
            </h1>
            <motion.div
              initial='hidden'
              variants={onLoadAnimation}
              whileInView='onView'
              viewport={{ once: true, amount: 0.5 }}
              className='relative'
            >
              <p className='text-center font-bold text-2xl p-2 my-4'>تیم ما</p>
              <OurTeam />
            </motion.div>
            <motion.div
              initial='hidden'
              variants={onLoadAnimation}
              whileInView='onView'
              viewport={{ once: true, amount: 0.5 }}
              className='relative'
            >
              {' '}
              <p className=' font-bold text-xl py-4 my-4'>اهداف و بینش ما</p>
              <h2 className='p-2'>
                تیم ما در هدف پیشرفت و توسعه بیشتر در زمینه های موجود است و این تیم از بهار 1401 کار
                خود را شروع کرده و هر روز به دنبال توسعه بار علمی خود است و این منظور را در کمال
                علاقه پیشرفت خود ثابت کرده اند تیم ما در هدف پیشرفت و توسعه بیشتر در زمینه های موجود
                است و این
              </h2>
            </motion.div>
            <motion.div
              initial='hidden'
              variants={onLoadAnimation}
              whileInView='onView'
              viewport={{ once: true, amount: 0.5 }}
              className='relative'
            >
              <p className=' font-bold text-xl py-4 my-4'>آمار سوابق تحصیلی دانشجویان</p>
              <h3>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                برای شرایط تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد.
              </h3>
            </motion.div>

            <motion.div
              className='py-6 relative'
              initial='hidden'
              variants={onLoadAnimation}
              whileInView='onView'
              viewport={{ once: true, amount: 0.5 }}
            >
              <StatisticList />
            </motion.div>
            <motion.div
              initial='hidden'
              variants={onLoadAnimation}
              whileInView='onView'
              viewport={{ once: true, amount: 0.5 }}
              className='relative'
            >
              <p className=' font-bold text-xl py-4 pr-2 my-4'>به ما بپیوندید </p>
              <h2 className='py-4 my-4'>
                تیم ما در هدف پیشرفت و توسعه بیشتر در زمینه های موجود است و این تیم از بهار 1401 کار
                خود را شروع کرده و هر روز به دنبال توسعه بار علمی خود است و این منظور را در کمال
                علاقه پیشرفت خود ثابت کرده اند تیم ما در هدف پیشرفت و توسعه بیشتر در زمینه های موجود
                است و این
              </h2>
            </motion.div>

            <motion.div
              className='mx-auto  my-4'
              initial='hidden'
              variants={onLoadAnimation}
              whileInView='onView'
              viewport={{ once: true, amount: 0.5 }}
            >
              <Link to='/joinus'>
                <button className='bg-neutral-800 text-white py-3 rounded-md mx-auto px-16 my-4'>
                  ارسال رزومه
                </button>
              </Link>
              <p className=' font-bold text-xl p-2 my-4 '>درباره سایت </p>
              <h3 className='my-4'>
                این وب اپلیکیشن با React نوشته شده است و تمام بخش های یک پروژه کامل را در بر دارد.
                این وب اپلیکیشن با React نوشته شده است و تمام بخش های یک پروژه کامل را در بر دارد.
                این وب اپلیکیشن با React نوشته شده است و تمام بخش های یک پروژه کامل را در بر دارد.
                این وب اپلیکیشن با React نوشته شده است و تمام بخش های یک پروژه کامل را در بر دارد.
                این وب اپلیکیشن با React نوشته شده است و تمام بخش های یک پروژه کامل را در بر دارد.
              </h3>
              <p className=' font-bold text-xl py-4 my-4 '>قوانین و سیاست های ما </p>
              <h3 className='my-4'>
                این وب اپلیکیشن با React نوشته شده است و تمام بخش های یک پروژه کامل را در بر دارد.
                این وب اپلیکیشن با React نوشته شده است و تمام بخش های یک پروژه کامل را در بر دارد.
                این وب اپلیکیشن با React نوشته شده است و تمام بخش های یک پروژه کامل را در بر دارد.
                این وب اپلیکیشن با React نوشته شده است و تمام بخش های یک پروژه کامل را در بر دارد.
                این وب اپلیکیشن با React نوشته شده است و تمام بخش های یک پروژه کامل را در بر دارد.
              </h3>
              <button className='bg-neutral-800 text-white py-3 rounded-md mx-auto px-16 my-4'>
                مشاهده سیاست های سایت
              </button>
              <p className='text-sm font-bold text-neutral-200 text-center my-4'>
                بهار ۱۴۰۱ - پاییز ۱۴۰۱
              </p>
            </motion.div>
          </div>
          <motion.div className='xl:w-2/5 w-3/4 lg:px-44 lg:mt-48 lg:mr-20 xl:px-0  xl:mt-0 xl:mr-0 md:px-16 md:mt-48 md:mr-14 sm:px-0 sm:scale-110   sm:mt-64 pt-2 sm:mr-24 lg:  absolute xl:relative z-0'>
            <div className='xl:px-8 h-full'>
              <PathMotion
                progressObject={[
                  { percent: 10, line: 20, flow: 0 },
                  { percent: 20, line: 20, flow: 10 },
                  { percent: 30, line: 30, flow: 10 },
                  { percent: 55, line: 20, flow: 50 },
                  { percent: 70, line: 10, flow: 60 },
                  { percent: 100, line: 1.7, flow: 98.3 },
                ]}
              >
                {AboutUsSvg}
              </PathMotion>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export { AboutUs }
