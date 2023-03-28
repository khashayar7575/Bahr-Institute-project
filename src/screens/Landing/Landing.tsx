import React, { Fragment } from 'react'

import { HeroSection } from '../../components/Landing/HeroSection'
import { StatsLanding } from '../../components/Landing/StatsLanding'
import { ContactUsLanding } from '../../components/Landing/ContactUSLanding'
import { FeaturesLanding } from '../../components/Landing/FeaturesLanding'
import { HeadingTitle } from '../../components/common/HeadingTitle'
import CourseSlider from './../../components/Landing/CourseSlider'
import InstructorSlider from './../../components/Landing/InsSlider'
import BlogLanding from './../../components/Landing/BlogLanding'
import CategoryLanding from './../../components/Landing/categoryLanding'
import BecomeInsLanding from './../../components/Landing/becomeInsLanding'
import { PathMotion } from '../../components/common/PathMotion/PathMotion'
import { ReactComponent as landingOneLine } from '../../assets/images/SVG/landingOneLine.svg'
import { HotNews } from '../../components/Landing/HotNews'

const Landing = () => {
  return (
    <Fragment>
      <div className='absolute top-0 left-0 hidden sm:block w-full xl:mt-24 mt-80 mx-auto'>
        <PathMotion
          progressObject={[
            { percent: 5, line: 11, flow: 0 },
            { percent: 10, line: 5, flow: 10 },
            { percent: 15, line: 5, flow: 19 },
            { percent: 20, line: 5, flow: 25 },
            { percent: 25, line: 5, flow: 30 },
            { percent: 30, line: 5, flow: 38 },
            { percent: 35, line: 5, flow: 45 },
            { percent: 40, line: 5, flow: 50 },
            { percent: 45, line: 5, flow: 55 },
            { percent: 50, line: 5, flow: 65 },
            { percent: 55, line: 5, flow: 70 },
            { percent: 60, line: 5, flow: 75 },
            { percent: 65, line: 5, flow: 75 },
            { percent: 70, line: 5, flow: 80 },
            { percent: 75, line: 5, flow: 85 },
            { percent: 80, line: 3, flow: 88 },
            { percent: 85, line: 1, flow: 92 },
            { percent: 87, line: 2, flow: 93 },
            { percent: 90, line: 2, flow: 93 },
          ]}
        >
          {landingOneLine}
        </PathMotion>
      </div>
      <div className=' mt-8 sm:mt-32 '>
        <div className=' grid xl:grid-cols-2 grid-cols-1 '>
          <HeroSection />
        </div>

        <div className='mt-4 sm:mt-64 md:mt-80 lg:mt-[30rem] xl:mt-96 2xl:mt-[35rem]'>
          <FeaturesLanding />
        </div>
        <div className='mt-12 sm:mt-24 lg:mt-60 sm:max-w-lg w-full '>
          <CategoryLanding />
        </div>
        <div className='mt-12 sm:mt-24 md:mt-52 lg:mt-72 xl:mt-[32rem] 2xl:mt-[47rem] '>
          <StatsLanding />
        </div>

        <div className='mt-12 sm:mt-16 md:mt-32 lg:mt-64 '>
          <div className='max-w-xl mx-auto'>
            <div className='text-center'>
              <div className='bg-white px-8 inline-block '>
                <HeadingTitle>آخرین دوره ها</HeadingTitle>
              </div>
            </div>
            <div className='mt-4'>
              <CourseSlider />
            </div>
          </div>
        </div>

        <section className='mt-12 sm:mt-44 md:mt-60 lg:mt-80 xl:mt-[35rem] 2xl:mt-[50rem]'>
          <HeadingTitle>اساتید مجموعه</HeadingTitle>
          <div className='mt-4 '>
            <InstructorSlider />
          </div>
        </section>

        <section className='mt-12 sm:mt-40 md:mt-60 lg:mt-[30rem] xl:mt-[40rem] 2xl:mt-[50rem]'>
          <HeadingTitle>اخبار و مقالات</HeadingTitle>
          <div className='mt-4'>
            <HotNews />
          </div>
        </section>

        <section className='mb-24'>
          <ContactUsLanding />
        </section>
      </div>
    </Fragment>
  )
}

export { Landing }
