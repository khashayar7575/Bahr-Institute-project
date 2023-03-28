import React from 'react'
import { ReactComponent as ACDenied } from '../../assets/images/SVG/ACDenied.svg'
import { PathAutoAnimatioin } from '../../components/common/PathMotion/PathAutoAnimatioin'
const AccessDenied = () => {
  return (
    <div className=' mx-auto my-20 overflow-hidden'>
      <div className='w-[1200px] mx-auto relative 2xl:right-0 xl:right-0  lg:-right-24 md:-right-52 -right-[280px]'>
        <PathAutoAnimatioin duration={2}>{ACDenied}</PathAutoAnimatioin>
      </div>
      <div className='text-center font-bold text-2xl'>
        <p className='text-red-600 mb-5'>نشست شما به پایان رسیده است</p>
        <p className='text-base text-neutral-600'>لطفا مجددا به حساب خود وارد شوید</p>
      </div>
      <div className='text-white w-80 mx-auto mt-5 pr-1'>
        <button className='bg-neutral-800 py-2 px-4 rounded-lg ml-5'>بازگشت به خانه</button>
        <button className='bg-neutral-700 py-2 px-4 rounded-lg mr-6'>ورود/ثبت نام</button>
      </div>
    </div>
  )
}

export { AccessDenied }
