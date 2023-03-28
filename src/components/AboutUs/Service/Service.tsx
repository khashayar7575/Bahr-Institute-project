import React from 'react'

import { TextFormatter } from '../../common/TextFormatter'
import { GoalList } from './GoalList'
import { Shape } from './Shape'

const Service = () => {
  const describtion =
    'لورم ایپسون با متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است'
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-5 lg:my-16'>
        <div className='col-span-1 lg:col-span-2 '>
          <div>
            <TextFormatter
              text='ما بهترین خدمات آموزشی را به شما ارائه می دهیم'
              word='آموزشی'
              color='text-cyan-700'
            />
          </div>
          <div className='my-8'>
            <p>{describtion}</p>
          </div>
          <GoalList />
        </div>
        <div className='col-span-1 lg:col-span-3'>
          <Shape />
        </div>
      </div>
    </>
  )
}

export { Service }
