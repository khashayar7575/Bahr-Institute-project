import React from 'react'

import { TextFormatter } from '../../common/TextFormatter'
import { ProudFutureList } from './ProudFutureList'

const ProudFuture = () => {
  const describe = (
    <span className=' text-base text-gray-500'>
      لورم ایسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
      چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.
    </span>
  )
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5  mt-24'>
      <div className='my-5 col-span-2 mt-5 '>
        <TextFormatter text='به همراه مسیری پرافتخار' word='پر افتخار' color='text-cyan-700' />
        <div className='w-3/4 mt-5 text-justify'>{describe}</div>
      </div>
      <div className='col-span-3'>
        <ProudFutureList />
      </div>
    </div>
  )
}

export { ProudFuture }
