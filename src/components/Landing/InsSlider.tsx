import React, { useState } from 'react'
import 'react-stacked-carousel/dist/index.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import './InsBoxShadowNone.css'
import { StackedCarousel } from 'react-stacked-carousel'
const InstructorSlider = () => {
  const [card, setCard] = useState(null)

  return (
    <div className='main  '>
      <div className=''>
        <StackedCarousel
          autoRotate={false}
          containerClassName={'container'}
          cardClassName='card boxShadowNone'
          leftButton={
            <button className='bg-neutral-800 p-2  rounded-full text-white ml-2'>
              {<BsChevronRight />}
            </button>
          }
          rightButton={
            <button className='bg-neutral-800 p-2 rounded-full text-white mr-2'>
              {<BsChevronLeft />}
            </button>
          }
          style={{ height: '200px' }}
        >
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
  )
}

export default InstructorSlider
