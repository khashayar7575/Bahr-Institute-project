import React, { FC } from 'react'
import { CourseDataType } from '../../core/utils/types/data-types/data-types.utils'
import { PrimaryButton } from '../common/Buttons/PrimaryButton'
import { CourseCard } from '../CoursesList/CourseCard'

type Props = {
  currentSemestersCourses: CourseDataType[]
  upcomingCourses: CourseDataType[]
}

const InsCourseList: FC<Props> = ({ currentSemestersCourses, upcomingCourses }) => {
  return (
    <section>
      <article>
        <h2 className='text-center text-3xl'>دوره های ترم جاری</h2>
        <div className='my-12 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
          {currentSemestersCourses ? (
            currentSemestersCourses.length > 0 ? (
              currentSemestersCourses
                .slice(-5)
                .map((course, index) => <CourseCard key={index} data={course} view={1} />)
            ) : (
              <div className=' col-span-full mx-auto'>
                <h3>متاسفانه این استاد در این ترم جاری دوره ای را ارائه نکرده است !</h3>
              </div>
            )
          ) : (
            <h2>loading ...</h2>
          )}
        </div>
        {currentSemestersCourses.length > 5 ? (
          <div className='flex justify-center mb-28'>
            <PrimaryButton url='/courses' type='button'>
              مشاهده همه
            </PrimaryButton>
          </div>
        ) : null}
      </article>

      <article>
        <h2 className='text-center text-3xl'>دوره های آینده</h2>
        <div className='my-12 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
          {upcomingCourses ? (
            upcomingCourses.length > 0 ? (
              upcomingCourses
                .slice(-5)
                .map((course, index) => <CourseCard key={index} data={course} view={1} />)
            ) : (
              <div className=' col-span-full mx-auto'>
                <h3>متاسفانه این استاد برای آینده دوره ای را ارائه نکرده است !</h3>
              </div>
            )
          ) : (
            <h2>loading ...</h2>
          )}
        </div>
        {upcomingCourses.length > 5 ? (
          <div className='flex justify-center mb-28'>
            <PrimaryButton url='/courses' type='button'>
              مشاهده همه
            </PrimaryButton>
          </div>
        ) : null}
      </article>
    </section>
  )
}

export { InsCourseList }
