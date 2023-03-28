import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowNarrowLeft } from 'react-icons/hi'

const ComeBackHome = () => {
  return (
    <div className='my-10'>
      <Link
        to='/'
        className='text-xl font-medium text-teal-700 hover:text-teal-500 flex items-center'
      >
        بازگشت به خانه
        <HiArrowNarrowLeft className='mx-1' />
      </Link>
    </div>
  )
}

export { ComeBackHome }
