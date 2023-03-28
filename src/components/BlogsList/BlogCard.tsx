import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { TbLayoutGrid } from 'react-icons/tb'
import { motion, Variants } from 'framer-motion'

import { Image } from '../common/CustomImage/Image'
import { GetBlogDataType } from '../../core/utils/types/data-types/data-types.utils'

type Props = {
  data: GetBlogDataType
  view: number
}

const BlogCard: FC<Props> = ({ data, view }) => {
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
    <Link to={`/blogs/${data._id}`}>
      <motion.div
        initial='hidden'
        variants={onLoadAnimation}
        whileInView='onView'
        viewport={{ once: false, amount: 0.5 }}
        className={'bg-white shadow-xl rounded-lg p-2 ' + (view === 1 ? '' : 'flex')}
      >
        <div className={'' + (view === 1 ? ' h-40' : 'w-1/4 flex-none')}>
          <Image
            src={data.image}
            alt={data.title}
            className={
              ' w-full h-full  object-cover rounded-lg rounded-b-2xl group-hover:scale-110 transition-all duration-500 '
            }
          />
        </div>
        <motion.div
          initial='hidden'
          variants={onLoadAnimation}
          whileInView='onView'
          viewport={{ once: false, amount: 0.5 }}
          className={'p-1.5' + (view === 1 ? '' : ' mr-2 w-full')}
        >
          <h3
            className={'text-center font-bold my-1' + (view === 1 ? '' : ' text-lg lg:text-right')}
          >
            {data.title}
          </h3>
          <div className=''>
            <p
              className={
                'text-sm text-gray-600 mt-2 text-justify leading-6 ' +
                (view === 1 ? 'text-center line-clamp-3 ' : 'text-right mt-2 line-clamp-3')
              }
            >
              {data.text}
            </p>
            <motion.div
              initial='hidden'
              variants={onLoadAnimation}
              whileInView='onView'
              viewport={{ once: false, amount: 0.5 }}
              className={
                ' flex  border-t-2 border-neutral-300 mt-6 pt-3 text-neutral-500 ' +
                (view === 1 ? 'justify-evenly ' : 'order-2 justify-around  ')
              }
            >
              <div className='flex items-center px-2 rounded-2xl  '>
                <TbLayoutGrid />
                <span className='text-sm pr-2 '>{data.category === 'news' ? 'خبر' : 'مقاله'}</span>
              </div>
              <div className={'flex items-center px-2 rounded-2xl ' + (view === 1 ? 'hidden' : '')}>
                <AiOutlineClockCircle />
                <span className={' text-sm pr-2  '}>۳ تیر ۱۴۰۱</span>
              </div>

              <div className={'flex'}>
                <FaRegComment />
                <span className='text-sm pr-2  '>۳</span>
              </div>
              <div className={view === 1 ? 'hidden' : 'flex'}>
                <AiOutlineLike />
                <span className='text-sm pr-2  '>۳</span>
              </div>
              <div className={view === 1 ? 'hidden' : 'flex'}>
                <AiOutlineDislike />
                <span className='text-sm pr-2  '>۳</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  )
}

export { BlogCard }
