import { useState } from 'react'
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { CapacityProgress } from './../CoursesList/CapacityProgress'
const CourseSlider = () => {
  const [card, setCard] = useState(null)

  return (
    <div className='main  '>
      <div className=''>
        <StackedCarousel
          autoRotate={false}
          containerClassName={'container'}
          cardClassName='card'
          leftButton={
            <button className='shadow-inner bg-neutral-100 p-2 h-10 rounded-md text-black ml-2'>
              {<BsChevronRight />}
            </button>
          }
          rightButton={
            <button className='shadow-inner bg-neutral-100 p-2 h-10 rounded-md text-black mr-2'>
              {<BsChevronLeft />}
            </button>
          }
          style={{ height: '250px' }}
        >
          <div key={'child1'} className='bg-white shadow-lg rounded-xl p-2 h-full '>
            <div className='flex'>
              <div className='w-2/5 bg-neutral-800 rounded-lg relative'>
                <div className='bg-indigo-100 bg-opacity-60 inline-block absolute left-2 bottom-2 px-3 rounded-full text-black text-sm py-1'>
                  کامپیوتر
                </div>
                <div className='h-1/3'></div>
              </div>
              <div className='w-3/5 '>
                <div className='flex pr-5'>
                  <p className='font-bold text-md'>دوره حرفه ای جاوا اسکریپت</p>
                </div>
                <p className='line-clamp-3 mx-4 text-sm leading-6 text-justify'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                  گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                  برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                  می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                  متخصصان را می طلبد
                </p>
                <div className='flex px-4 justify-between  '>
                  <p className='text-sm text-gray-800 line-clamp-1 pt-5'>
                    دکتر محمدحسین بحرالعلومی
                  </p>
                  <div className='bg-blue-500 h-12 w-12 rounded-full mt-2 shadow-lg'></div>
                </div>
              </div>
            </div>{' '}
          </div>{' '}
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

export default CourseSlider
