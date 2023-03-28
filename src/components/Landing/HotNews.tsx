import React from 'react'
import { GetBlogDataType } from '../../core/utils/types/data-types/data-types.utils'
import { HeadingTitle } from '../common/HeadingTitle'

export const HotNews = () => {
  return (
    <div>
      <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  group '>
        <div className='rounded-xl bg-white shadow-lg w-72 px-2 duration-500 pt-2 cursor-pointer group-hover:scale-[0.95] hover:!scale-100'>
          <div className='bg-black h-32  rounded-lg'></div>
          <p className=' py-2 text-center font-bold'>تایتل اخبار مورد نظر</p>
          <p className='text-sm text-justify px-3'>
            علیرضا اینجا یه متن درباره استاد بریز چون من چیزی به ذهنم نمیرسه و دستتو میبوسه یاعلی
            ممد علیرضا اینجا یه متن درباره استاد بریز چون چیزی به ذهنم نمیرسه و...
          </p>
          <div className='flex justify-center gap-32 pt-2'>
            {' '}
            <span>۳ تیر ۱۴۰۱</span>
            <div className='flex'>
              {/* <FaRegComment /> */}
              <span className='text-sm pr-2  '>۳</span>
            </div>
          </div>
        </div>
        <div className='rounded-xl bg-white shadow-lg w-72 px-2 duration-500 pt-2 cursor-pointer group-hover:scale-[0.95] hover:!scale-100'>
          <div className='bg-black h-32  rounded-lg'></div>
          <p className=' py-2 text-center font-bold'>تایتل اخبار مورد نظر</p>
          <p className='text-sm text-justify px-3'>
            علیرضا اینجا یه متن درباره استاد بریز چون من چیزی به ذهنم نمیرسه و دستتو میبوسه یاعلی
            ممد علیرضا اینجا یه متن درباره استاد بریز چون چیزی به ذهنم نمیرسه و...
          </p>
          <div className='flex justify-center gap-32 pt-2'>
            {' '}
            <span>۳ تیر ۱۴۰۱</span>
            <div className='flex'>
              {/* <FaRegComment /> */}
              <span className='text-sm pr-2  '>۳</span>
            </div>
          </div>
        </div>
        <div className='rounded-xl bg-white shadow-lg w-72 px-2 duration-500 pt-2 cursor-pointer group-hover:scale-[0.95] hover:!scale-100'>
          <div className='bg-black h-32  rounded-lg'></div>
          <p className=' py-2 text-center font-bold'>تایتل اخبار مورد نظر</p>
          <p className='text-sm text-justify px-3'>
            علیرضا اینجا یه متن درباره استاد بریز چون من چیزی به ذهنم نمیرسه و دستتو میبوسه یاعلی
            ممد علیرضا اینجا یه متن درباره استاد بریز چون چیزی به ذهنم نمیرسه و...
          </p>
          <div className='flex justify-center gap-32 py-2'>
            {' '}
            <span>۳ تیر ۱۴۰۱</span>
            <div className='flex'>
              {/* <FaRegComment /> */}
              <span className='text-sm pr-2  '>۳</span>
            </div>
          </div>
        </div>
        <div className='rounded-xl bg-white shadow-lg w-72 px-2 duration-500 pt-2 cursor-pointer group-hover:scale-[0.95] hover:!scale-100'>
          <div className='bg-black h-32  rounded-lg'></div>
          <p className=' py-2 text-center font-bold'>تایتل اخبار مورد نظر</p>
          <p className='text-sm text-justify px-3'>
            علیرضا اینجا یه متن درباره استاد بریز چون من چیزی به ذهنم نمیرسه و دستتو میبوسه یاعلی
            ممد علیرضا اینجا یه متن درباره استاد بریز چون چیزی به ذهنم نمیرسه و...
          </p>
          <div className='flex justify-center gap-32 py-2'>
            {' '}
            <span>۳ تیر ۱۴۰۱</span>
            <div className='flex'>
              {/* <FaRegComment /> */}
              <span className='text-sm pr-2  '>۳</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
