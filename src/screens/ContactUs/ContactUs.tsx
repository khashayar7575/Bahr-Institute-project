import React from 'react'
import { GrHomeRounded } from 'react-icons/gr'
import { BsTelephone } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { GrLocation } from 'react-icons/gr'
import { MdWebAsset } from 'react-icons/md'
import { ReactComponent as bhandsvg } from '../../assets/images/SVG/bHand.svg'
import { ReactComponent as thandsvg } from '../../assets/images/SVG/tHand.svg'

import { ContactFormLayout } from '../../components/ContactUs/ContactFormLayout/ContactFormLayout'

import { Map } from '../../components/ContactUs/Map/Map'
import { HeadingTitle } from '../../components/common/HeadingTitle'
import { PathAutoAnimatioin } from '../../components/common/PathMotion/PathAutoAnimatioin'
import { motion, Variants } from 'framer-motion'

const ContactUs = () => {
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
  const contact = [
    {
      title: '',
      description: ' ساری٫ بلوار جاده دریا٫ بعد از دنیای آرزو٫ نرسیده به دانشگاه روزبهان',
      icon: <GrLocation />,
    },
    {
      title: 'شماره تماس : -',
      description: '۰۹۳۳۳۵۸۴۲۵۱',
      icon: <BsTelephone />,
    },
    {
      title: 'فکس : - ',
      description: ' +۳۹۳۹۳۲۱',
      icon: <BsTelephone />,
    },
    {
      title: 'آدرس ایمیل :',
      description: 'BahrAgency@Academy.Com',
      icon: <GoMail />,
    },
    {
      title: 'وب سایت : ',
      description: 'bahrimc.ir',
      icon: <MdWebAsset />,
    },
    {
      title: 'آدرس پژوهشگاه : ',
      description: ' ساری٫ بلوار جاده دریا٫ بعد از دنیای آرزو٫ نرسیده به دانشگاه روزبهان',
      icon: <GrLocation />,
    },
  ]

  return (
    <section className=' py-4 relative z-10 0 xl'>
      <div className='flex flex-wrap lg:justify-between'>
        <div className='text-center  lg:mx-0 lg:mb-0  '>
          <motion.div
            initial='hidden'
            variants={onLoadAnimation}
            whileInView='onView'
            viewport={{ once: true, amount: 0.1 }}
            className=' pt-10 pb-10 lg:pt-14 lg:pb-15'
          >
            <HeadingTitle> ارتباط با ما </HeadingTitle>
          </motion.div>
          <motion.p
            initial='hidden'
            variants={onLoadAnimation}
            whileInView='onView'
            viewport={{ once: false, amount: 0.1 }}
            className='text-base text-body-color leading-relaxed mb-9 px-20'
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
            است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
            فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </motion.p>
        </div>
        {/* </div> */}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 lg:gap-4'>
        <motion.div
          initial='hidden'
          variants={onLoadAnimation}
          whileInView='onView'
          viewport={{ once: false, amount: 0.01 }}
          className='col-span-3 mx-12  relative lg:px-4 order-2 lg:order-1 xl:px-0'
        >
          <p className=' py-10 lg:py-2 font-bold text-lg text-neutral-600 text-center pb-4'>
            لطفا نظرات و پیشنهادات خود را با ما در میان بگذارید.
          </p>
          <ContactFormLayout />
          <motion.div
            initial='hidden'
            variants={onLoadAnimation}
            whileInView='onView'
            viewport={{ once: false, amount: 0.5 }}
            className='grid-cols-1 mt-20 '
          >
            <Map />
          </motion.div>
        </motion.div>
        <motion.div
          initial='hidden'
          variants={onLoadAnimation}
          whileInView='onView'
          viewport={{ once: false, amount: 0.1 }}
          className='col-span-2  shadow-xl rounded-2xl  order-1 lg:order-3  overflow-hidden'
        >
          <motion.div
            initial='hidden'
            variants={onLoadAnimation}
            whileInView='onView'
            viewport={{ once: false, amount: 0.1 }}
            className='relative '
          >
            <div className='pt-56  relative right-24 lg:right-5 sm:right-4 md:right-36  xl:right-20'>
              {' '}
              <PathAutoAnimatioin duration={3} svgWidthPath={2} height='250'>
                {bhandsvg}
              </PathAutoAnimatioin>
            </div>
            <div className='absolute top-10 rotate-12 right-48 md:right-64 lg:right-20 xl:right-32'>
              {' '}
              <PathAutoAnimatioin duration={3} svgWidthPath={2} height='210'>
                {thandsvg}
              </PathAutoAnimatioin>{' '}
            </div>
            <p className=' font-bold text-xl mt-10 pb-6 text-center'>
              راه های ارتباطی با آکادمی سپهر
            </p>
            <ul className='grid grid-cols-1'>
              {contact.map((item, index) => (
                <motion.li
                  initial='hidden'
                  variants={onLoadAnimation}
                  whileInView='onView'
                  viewport={{ once: false, amount: 0.01 }}
                  key={index}
                  className='flex mr-10 mb-14  col-span-3 xl:col-span-1  overflow-hidden'
                >
                  <div
                    className='
                     w-16
                     flex
                     items-center
                     justify-center
                     overflow-hidden
                     bg-primary bg-opacity-5
                     text-primary
                     rounded
                     text-2xl
                     '
                  >
                    {item.icon}
                  </div>
                  <div className='w-full mt-3 mr-3  '>
                    <p className='font-semibold text-sm mb-2 text-right inline-block'>
                      {item.title}
                    </p>
                    <p className='font-semibold text-sm text-body-color mb-2 inline-block pr-2 '>
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
      <div className='grid lg:grid-cols-2 lg:mr-12 mx-auto '>
        <div className='col-span-1 text-center  font-semibold text-lg py-8 items-center'>
          <p>همچنین شما می توانید سوالات خود را در سوالات پر تکرار پیدا کنید </p>
          <button className='bg-black text-white my-5  px-5 py-2 font-medium rounded-lg items-center align-middle'>
            مشاهده سوالات پر تکرار
          </button>
        </div>
      </div>
    </section>
  )
}

export { ContactUs }
