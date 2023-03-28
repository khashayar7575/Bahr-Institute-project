import React from 'react'
import { ReactComponent as ErrorBoundarySvg } from '../../assets/images/SVG/error.svg'
import { PathAutoAnimatioin } from '../../components/common/PathMotion/PathAutoAnimatioin'
const ErrorBoundary = () => {
  return (
    <div className=' mx-auto overflow-hidden'>
      <div className='relative w-[1500px] mx-auto xl:-right-[100px] 2xl:right-[0px]  lg:-right-[240px] md:-right-[360px] sm:-right-[420px] -right-[450px]'>
        <PathAutoAnimatioin duration={2} height='400'>
          {ErrorBoundarySvg}
        </PathAutoAnimatioin>
      </div>{' '}
      <p className='text-center my-4 pb-10 font-bold text-2xl'>
        مشکلی رخ داده است لطفا لحظاتی دیگر مجددا تلاش کنید
      </p>
      <div className='  w-fit mx-auto mb-20'>
        <button className='text-center bg-neutral-800 text-white py-2 px-5 text-xl rounded-lg mx-auto z-10'>
          تلاش مجدد...{' '}
        </button>
      </div>
    </div>
  )
}

export { ErrorBoundary }
