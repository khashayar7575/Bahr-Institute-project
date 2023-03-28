import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Comments } from '../../components/common/Comments/Comments'
import { InstructorCard } from '../../components/InstructorsList/InstructorCard'
import { filteringCommentsByPostId } from '../../core/utils/filtering-comments.utils'
import {
  CourseDataType,
  GetEmployeeDataType,
  TeacherBiography,
} from '../../core/utils/types/data-types/data-types.utils'
import { useSelector } from 'react-redux'
import { RootState } from '../../core/redux/store'
import { calculateInstructorBio } from './../../core/utils/instructor-biography/calc-instructor-bio.utils'
import { Image } from '../../components/common/CustomImage/Image'
import { InsBiographyParagraph } from '../../components/InstructorProfile/InsBiographyParagraph'
import { InsCourseList } from '../../components/InstructorProfile/InsCourseList'
import { InsStats } from '../../components/InstructorProfile/InsStats'
import { PrimaryButton } from '../../components/common/Buttons/PrimaryButton'

const InstructorsProfile = () => {
  const instructorId = useParams()._id

  const { TeacherData } = useSelector((state: RootState) => state.TeacherData)
  const { CourseData } = useSelector((state: RootState) => state.CourseData)
  const { CommentData } = useSelector((state: RootState) => state.CommentData)

  const [instructorProfile, setInstructorProfile] = useState<GetEmployeeDataType>()
  const [insBio, setInsBio] = useState<TeacherBiography>()
  const [instructorCourses, setInstructorCourses] = useState<CourseDataType[]>([])

  const filteredComments = filteringCommentsByPostId(instructorId!, CommentData)

  const getInstructorProfile = () => {
    const getInstructor = TeacherData.find((teacher) => teacher._id === instructorId)
    setInstructorProfile(getInstructor)
  }

  const getInstructorCourses = () => {
    const courses = CourseData.filter((course) => course.teacher._id === instructorId)
    setInstructorCourses(courses)
  }

  const getInsBio = () => {
    const InstructorBiography = calculateInstructorBio(instructorCourses, instructorProfile!)
    setInsBio(InstructorBiography)
  }

  useEffect(() => {
    getInstructorProfile()
    getInstructorCourses()
  }, [TeacherData, CourseData])

  useEffect(() => {
    if (instructorProfile && instructorCourses.length > 0) {
      getInsBio()
    }
  }, [instructorProfile, instructorCourses])

  return (
    <>
      <section className=' mt-10 text-center md:text-right rounded-md'>
        {instructorProfile ? (
          <div>
            <div>
              <div className='lg:flex lg:gap-x-7'>
                <div className='flex flex-col justify-start items-center mb-6 lg:mb-0 mx-auto md:mx-0 '>
                  <Image
                    src={instructorProfile.profile}
                    className='rounded-md h-56 object-cover shadow-lg border-t-8 border-neutral-900 '
                    alt={instructorProfile.fullName}
                  />
                  <div className='flex flex-col items-center mt-4'>
                    <p className='font-semibold text-lg mb-1 pt-2 text-center rounded-lg text-neutral-700'>
                      {instructorProfile.fullName}
                    </p>
                    <p className='font-semibold text-neutral-500 mb-1 p-0 text-center'>
                      استاد مجموعه
                    </p>
                    <PrimaryButton
                      type='button'
                      className='from-cyan-400 via-cyan-500 to-cyan-600 shadow-cyan-500/50'
                    >
                      ارتباط با استاد
                    </PrimaryButton>
                  </div>
                </div>
                <div className=' flex mx-50'>
                  <div className='mr-5 text-md '>
                    <p className='font-bold text-lg mb-3 0'>درباره استاد </p>
                    {insBio ? (
                      <>
                        <InsBiographyParagraph bio={insBio} />
                        <InsStats bio={insBio} insData={instructorProfile} />
                      </>
                    ) : (
                      <h3>loading . . .</h3>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2>loading . . .</h2>
        )}
      </section>
      {insBio ? (
        <InsCourseList
          currentSemestersCourses={insBio.currentSemesterCourses}
          upcomingCourses={insBio.upcomingCourses}
        />
      ) : (
        <h2>loading . . .</h2>
      )}
      <Comments filteredComments={filteredComments} postId={instructorId!} />
      <header className='text-2xl font-bold mb-8'>آخرین اساتید</header>
      <div className='grid gap-5 grid-cols-1  lg:grid-cols-2 mb-16'>
        {TeacherData.slice(-2).map((instructor, index) => (
          <InstructorCard data={instructor} key={index} />
        ))}
        <div className='mx-auto col-span-full'>
          <PrimaryButton type='button' url='/instructors'>
            مشاهده همه
          </PrimaryButton>
        </div>
      </div>
    </>
  )
}

export { InstructorsProfile }
