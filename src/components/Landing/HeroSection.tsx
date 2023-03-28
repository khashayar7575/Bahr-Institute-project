import React from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../common/Buttons/PrimaryButton'

const HeroSection = () => {
  return (
    <main className=''>
      <div className='text-center'>
        <h1 className='text-xl sm:text-3xl md:text-5xl font-extrabold text-gray-900  '>
          <span className=' xl:inline'>هرچیز که در جستن آنی,</span>
          <span className=' text-teal-600 xl:inline'>آنی</span>
        </h1>
        <p className='mt-12 text-base text-gray-500 sm:text-lg  md:text-xl '>
          همین الان آموزش را شروع کنید,با بهترین استاید در زمینه های موجود.
        </p>
        <div className='mt-7'>
          <PrimaryButton type='button' url='/courses'>
            شروع یک دوره
          </PrimaryButton>
        </div>
      </div>
    </main>
  )
}

export { HeroSection }
