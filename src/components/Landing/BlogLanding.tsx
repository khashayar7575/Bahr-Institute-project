import { Link } from 'react-router-dom'
import React, { useState, FC } from 'react'
import { FaRegComment } from 'react-icons/fa'

import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import './InsBoxShadowNone.css'
import { GetBlogDataType } from '../../core/utils/types/data-types/data-types.utils'

const BlogLanding = () => {
  const [card, setCard] = useState(null)

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
    <div>
      <div className='rounded-lg'>
        <p className='text-neutral-800 pr-20 py-2 font-bold'>جدید ترین مقالات</p>
        <div className='main mb-44 '>
          <div className=''>
            <StackedCarousel
              autoRotate={false}
              containerClassName={'container'}
              cardClassName='card boxShadowNone'
              leftButton={
                <button className='bg-neutral-800 p-2 h-20 rounded-md text-white ml-2 '>
                  {<BsChevronRight />}
                </button>
              }
              rightButton={
                <button className='bg-neutral-800 p-2 h-20 rounded-md text-white mr-2'>
                  {<BsChevronLeft />}
                </button>
              }
              style={{ height: '300px' }}
            >
              <div key={'child1'} className='bg-neutral-50 px-9 h-full flex'>
                <div className='w-72 h-72 p-4 flex-none bg-white shadow-2xl  rounded-md'></div>
                <div className='px-12 pt-6 w-4/5'>
                  <p className='font-bold text-2xl py-4 text-neutral-800 '>تایتل مقاله مورد نظر </p>
                  <p className='leading-6 text-justify'>
                    علیرضا اینجا یه متن درباره استاد بریز چون من چیزی به ذهنم نمیرسه و دستتو میبوسه
                    یاعلی ممد علیرضا اینجا یه متن درباره استاد بریز چون من چیزی به ذهنم نمیرسه و
                    دستتو میبوسه یاعلی ممد علیرضا اینجا یه متن درباره استاد بریز چون من چیزی به ذهنم
                    نمیرسه و دستتو میبوسه یاعلی ممد علیرضا اینجا یه متن درباره استاد بریز چون من
                    چیزی به ذهنم نمیرسه و دستتو میبوسه یاعلی ممد علیرضا اینجا یه متن درباره استاد
                    بریز چون من چیزی به ذهنم نمیرسه و دستتو میبوسه یاعلی ممد علیرضا اینجا و دستتو
                  </p>
                  <div className='flex gap-20 text-center pt-8 '>
                    <button className='bg-neutral-800 text-white py-2 px-4 rounded-md'>
                      مشاهده کامل مقاله{' '}
                    </button>
                  </div>
                </div>
              </div>
              <div className='bg-indigo-100 h-full rounded-lg' key={'child2'}>
                <h2>2 Card</h2>
              </div>
              <div className='bg-neutral-400 h-full rounded-lg' key={'child3'}>
                <h2>3 Card</h2>
              </div>
              <div className='bg-teal-200 h-full rounded-lg' key={'child4'}>
                <h2>4 Card</h2>
              </div>
            </StackedCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogLanding
