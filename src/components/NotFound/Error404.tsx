import React from 'react'
import { ReactComponent as NotFound } from '../../assets/images/SVG/404.svg'
import { PathAutoAnimatioin } from '../common/PathMotion/PathAutoAnimatioin'
const Error404 = () => {
  return (
    <div className='text-center'>
      <p className='m-1 text-[165px] font-medium text-neutral-800 tracking-wide '>۴۰۴</p>
      <h1 className=' text-3xl font-extrabold text-neutral-800 tracking-tight sm:text-5xl '>
        این صفحه وجود ندارد.
      </h1>
      <p className='mt-8 text-2xl text-teal-600'>صفحه مورد نظر شما یافت نشد.</p>
    </div>
  )
}

export { Error404 }
