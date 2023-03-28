import React from 'react'
import { ReactComponent as ErrorBoundarySvg } from '../../assets/images/SVG/Path 48.svg'
import { PathAutoAnimatioin } from '../../components/common/PathMotion/PathAutoAnimatioin'
import { Error404 } from '../../components/NotFound/Error404'
import { FavoritePage } from '../../components/NotFound/FavoritePage'
import { ComeBackHome } from '../../components/NotFound/ComeBackHome'

const NotFound = () => {
  return (
    <div className=' mt-24 overflow-hidden  relative'>
      {' '}
      <div className='absolute w-[900px] xl:right-[180px] 2xl:right-[310px]  lg:right-[40px] md:-right-[70px] sm:-right-[150px] -right-[220px] top-0'>
        {' '}
        <PathAutoAnimatioin duration={2}>{ErrorBoundarySvg}</PathAutoAnimatioin>
      </div>
      <main className='w-full mx-auto px-4 pt-44 sm:px-6 lg:px-8 '>
        <div className='max-w-xl mx-auto'>
          <Error404 />
        </div>
        <div className=''>
          <FavoritePage />
          <div className='mt-4 flex justify-center'>
            <ComeBackHome />
          </div>
        </div>
      </main>
    </div>
  )
}

export { NotFound }
