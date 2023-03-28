import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Comments } from '../../components/common/Comments/Comments'
import { filteringCommentsByPostId } from '../../core/utils/filtering-comments.utils'
import { SuggestionCourseCard } from '../../components/CoursesList/SuggestionCourseCard'
import { Image } from '../../components/common/CustomImage/Image'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../core/redux/redux-store/cart/cart.Slice'

import { toast } from 'react-toastify'
import { addToWishList } from '../../core/redux/redux-store/wish-list/wishList.Slice'
import { integerToPersianNumber } from '../../core/utils/convert-numbers/integer-to-persian-number.utils'
import { jalaliDateToJalaliFormat } from '../../core/utils/convert-date-and-times/jalali-to-jalali-format.utils'

import { CourseDataType } from '../../core/utils/types/data-types/data-types.utils'
import { RootState } from '../../core/redux/store'
import { useEffect } from 'react'
import CourseDetailAccordion from './CourseDetailAccordion'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { GrFormDown } from 'react-icons/gr'

import { BsFileEarmarkRuled } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { RiCustomerService2Line } from 'react-icons/ri'
import { AiOutlineCarryOut } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import { BiNotepad } from 'react-icons/bi'
import { PrimaryButton } from '../../components/common/Buttons/PrimaryButton'
import { CustomModal } from '../../components/common/Modal/Modal'
import { NotificationMethodModalContent } from '../../components/common/ModalContent/Course/NotificationMethodModal'
import { getWaitingListBasket } from '../../core/redux/redux-store/waiting-list/waiting-list.Slice'
import { addToWaitingListObject } from '../../core/services/api/pantry/notifications/notification-pantry.api'

const CourseDetails = () => {
  const courseId = useParams()._id

  const [courseDetail, setCourseDetail] = useState<CourseDataType>()
  const { CourseData } = useSelector((state: RootState) => state.CourseData)

  const [waitingList, setWaitingList] = useState<
    { courseId: string; notificationMethod: string }[]
  >([])
  const { WaitingListBasket } = useSelector((state: RootState) => state.WaitingListBasket)

  const { CommentData } = useSelector((state: RootState) => state.CommentData)
  const filteredComments = filteringCommentsByPostId(courseId!, CommentData)

  const { AuthData } = useSelector((state: RootState) => state.AuthData)
  const { StudentCoursesData } = useSelector((state: RootState) => state.StudentCoursesData)
  const { Cart } = useSelector((state: RootState) => state.Cart)
  const { WishListData } = useSelector((state: any) => state.WishListData)

  const [showModal, setShowModal] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useDispatch()

  const getCourse = () => {
    const courseDetail = CourseData.find((course) => course._id === courseId)
    setCourseDetail(courseDetail)
  }

  useEffect(() => {
    getCourse()
  }, [CourseData])

  useEffect(() => {
    if (AuthData) {
      const userWaitingList: { courseId: string; notificationMethod: string }[] =
        WaitingListBasket[`${(AuthData as any)._id}`]
      setWaitingList(userWaitingList)
    }
  }, [WaitingListBasket])

  const modalVisibilityHandler = () => {
    setShowModal(true)
  }

  const addToShoppingCart = () => {
    const itemInCart = Cart.find((item: CourseDataType) => item._id === courseId)
    const itemInMyCourses = StudentCoursesData.find((item) => item._id === courseId)
    if (itemInCart) {
      toast.error('دوره در سبد خرید موجود است !')
    } else if (itemInMyCourses) {
      toast.error('دوره در لیست دروس موجود است !')
    } else {
      toast.success('دوره به سبد خرید افزوده شد.')
      dispatch(addToCart(courseDetail))
    }
  }

  const addToWish = () => {
    if (AuthData) {
      const itemInWishListData = WishListData.find((item: CourseDataType) => item._id === courseId)
      if (itemInWishListData) {
        toast.error('دوره در لیست علاقه مندی موجود است !')
      } else {
        toast.success('دوره به لیست علاقه مندی افزوده شد.')
        dispatch(addToWishList(courseDetail))
      }
    } else {
      toast.error('لطفا ابتدا وارد حساب کاربری خود شوید !')
    }
  }

  const addToWaitingList = async (notificationMethod: string) => {
    if (AuthData) {
      setLoading(true)
      if (waitingList && waitingList.length > 0) {
        const itemIsInWaitingList = waitingList.find(
          (course) => course.courseId === courseDetail?._id
        )
        if (itemIsInWaitingList) {
          setLoading(false)
          setShowModal(false)
          toast.error('دوره در لیست انتظار موجود است !')
        } else {
          const activeNotificationSetup = await addToWaitingListObject(
            (AuthData as any)._id,
            courseDetail!._id,
            notificationMethod
          )
          setLoading(false)
          setShowModal(false)
          toast.success('دوره به لیست انتظار افزوده شد.')
          dispatch(getWaitingListBasket())
          return activeNotificationSetup
        }
      } else {
        const activeNotificationSetup = await addToWaitingListObject(
          (AuthData as any)._id,
          courseDetail!._id,
          notificationMethod
        )
        setLoading(false)
        setShowModal(false)
        toast.success('دوره به لیست انتظار افزوده شد.')
        dispatch(getWaitingListBasket())
        console.log(activeNotificationSetup)
      }
    } else {
      setShowModal(false)
      toast.error('لطفا ابتدا وارد حساب کاربری خود شوید !')
    }
  }

  return (
    <>
      {courseDetail ? (
        <section className='w-full grid-cols-4 lg:grid-cols-6 2xl:grid-cols-6 gap-6 my-20 grid'>
          <article className='col-span-4 lg:col-span-4 2xl:col-span-4'>
            <figure className=''>
              <Image
                src={courseDetail.lesson.image}
                alt={courseDetail.title}
                className='rounded-lg w-full h-[27rem] object-cover'
              ></Image>
            </figure>
            <h1 className='font-bold text-3xl my-6 '>{courseDetail.title}</h1>
            <div>
              <Accordion allowMultipleExpanded={true}>
                {' '}
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className='p-5'>
                      <div className='grid grid-cols-12'>
                        <div className='col-span-1 flex items-center justify-center overflow-hidden bg-primary bg-opacity-5 text-primary rounded text-2xl'>
                          <BsFileEarmarkRuled />
                        </div>
                        <div className='col-span-10'> توضیحات تکمیلی </div>
                        <div className='col-span-1'>
                          <GrFormDown />
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className='h-20'>
                      <p className='text-justify w-5/6 mx-auto'>
                        {courseDetail.lesson.description}
                      </p>
                      <div className='bg-red-400 h-20'></div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>{' '}
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className='p-5'>
                      <div className='grid grid-cols-12'>
                        <div className='col-span-1 flex items-center justify-center overflow-hidden bg-primary bg-opacity-5 text-primary rounded text-2xl'>
                          <BsFileEarmarkRuled />
                        </div>
                        <div className='col-span-10'> درباره استاد دوره</div>
                        <div className='col-span-1'>
                          <GrFormDown />
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className='text-justify w-5/6 mx-auto'>{courseDetail.lesson.description}</p>
                  </AccordionItemPanel>
                </AccordionItem>{' '}
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className='p-5'>
                      <div className='grid grid-cols-12'>
                        <div className='col-span-1 flex items-center justify-center overflow-hidden bg-primary bg-opacity-5 text-primary rounded text-2xl'>
                          <BsFileEarmarkRuled />
                        </div>
                        <div className='col-span-10'>اطلاعات تکمیلی</div>
                        <div className='col-span-1'>
                          <GrFormDown />
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className='text-justify w-5/6 mx-auto'>{courseDetail.lesson.description}</p>
                  </AccordionItemPanel>
                </AccordionItem>{' '}
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className='p-5'>
                      <div className='grid grid-cols-12'>
                        <div className='col-span-1 flex items-center justify-center overflow-hidden bg-primary bg-opacity-5 text-primary rounded text-2xl'>
                          <BsFileEarmarkRuled />
                        </div>
                        <div className='col-span-10'>
                          فهرست سرفصل‌ها و رئوس مطالب مطرح شده در اين مجموعه آموزشی{' '}
                        </div>
                        <div className='col-span-1'>
                          <GrFormDown />
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className='text-justify w-5/6 mx-auto'>{courseDetail.lesson.description}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </article>
          <aside className='bg-white col-span-4 lg:col-span-2 2xl:col-span-2 rounded-lg shadow-2xl h-fit border-t-8 border-[#303030]'>
            <ul className='text-center'>
              <li className='my-5 font-bold text-xl'>{courseDetail.title}</li>
              <li className='my-5 font-bold text-lg'>{` قیمت دوره : ${integerToPersianNumber(
                courseDetail.cost
              )} تومان`}</li>
              <li className='my-5 text-teal-500 cursor-pointer'>
                {`  استاد : ${courseDetail.teacher.fullName}`}
              </li>
              <li className='my-5'>{` دسته بندی : ${courseDetail.lesson.category.name}`}</li>
              <li className='my-5'>{` تاریخ شروع : ${jalaliDateToJalaliFormat(
                courseDetail.startDate
              )}`}</li>
              <li className='my-5'>{` تاریخ پایان : ${jalaliDateToJalaliFormat(
                courseDetail.endDate
              )}`}</li>
              <li className='my-5'>{`  ظرفیت دوره : ${integerToPersianNumber(
                courseDetail.capacity
              )}`}</li>
              <li className='my-5 mx-5'>
                {courseDetail.capacity !== 0 ? (
                  <PrimaryButton type='button' onClick={addToShoppingCart}>
                    افزودن به سبد خرید
                  </PrimaryButton>
                ) : (
                  <PrimaryButton
                    type='button'
                    className='from-blue-400 via-blue-500 to-blue-600 shadow-blue-500/50'
                    onClick={modalVisibilityHandler}
                  >
                    به من اطلاع بده
                  </PrimaryButton>
                )}
                <button
                  onClick={addToWish}
                  className='mt-2 w-64 m-auto bg-white border-2 border-[#303030] hover:border-transparent rounded-md py-2 px-8 flex items-center justify-center text-base font-medium text-[#303030] hover:bg-[#303030] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
                >
                  افزودن به لیست علاقه مندی
                </button>
              </li>
            </ul>
          </aside>
        </section>
      ) : (
        <h2>Loading . . .</h2>
      )}
      <h1 className='font-bold text-2xl  '>دوره های پیشنهادی</h1>
      <div className='my-12 grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>
        {CourseData.filter((currentCourse) => courseDetail?._id !== currentCourse._id)
          .slice(-6)
          .map((course, index) => (
            <SuggestionCourseCard key={index} data={course} />
          ))}
      </div>
      {<Comments filteredComments={filteredComments} postId={courseId!} />}
      <CustomModal isModalOpen={showModal} closeModal={() => setShowModal(false)}>
        <NotificationMethodModalContent
          onSubmitAction={addToWaitingList}
          loadingSpinStatus={loading}
        />
      </CustomModal>
    </>
  )
}

export { CourseDetails }
