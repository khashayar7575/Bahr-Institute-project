import { useState } from 'react'
import { StackedCarousel } from 'react-stacked-carousel'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import 'react-stacked-carousel/dist/index.css'
const CategoryLanding = () => {
  const [card, setCard] = useState(null)

  return (
    <div className='main  '>
      {' '}
      <h2 className='font-bold text-2xl pr-2'>دسته بندی</h2>
      <StackedCarousel
        autoRotate={true}
        containerClassName={'container'}
        cardClassName='card boxShadowNone'
        leftButton={
          <button className='bg-neutral-800 p-2 hidden  rounded-full text-white ml-2'>
            {<BsChevronRight />}
          </button>
        }
        rightButton={
          <button className='bg-neutral-800 p-2 hidden  rounded-full text-white mr-2'>
            {<BsChevronLeft />}
          </button>
        }
        style={{ height: '176px' }}
      >
        <div key={'child1'} className='grid grid-cols-3 p-2 gap-5 bg-white rounded-lg'>
          <div className='h-40 bg-neutral-700 rounded-lg'></div>
          <div className='h-40 bg-neutral-700 rounded-lg'></div>
          <div className='h-40 bg-neutral-700 rounded-lg'></div>
        </div>
        <div key={'child2'} className='grid grid-cols-3 p-2 gap-5 bg-white rounded-lg'>
          <div className='h-40 bg-neutral-700 rounded-lg'></div>
          <div className='h-40 bg-neutral-700 rounded-lg'></div>
          <div className='h-40 bg-neutral-700 rounded-lg'></div>
        </div>
      </StackedCarousel>
    </div>
  )
}
export default CategoryLanding
