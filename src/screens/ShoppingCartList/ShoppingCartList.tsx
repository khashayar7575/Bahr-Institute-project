import React, { useState } from 'react'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { ImBin2 } from 'react-icons/im'

import { Image } from '../../components/common/CustomImage/Image'

import { Link, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, resetCart } from '../../core/redux/redux-store/cart/cart.Slice'

import { toast } from 'react-toastify'
import { CourseDataType } from '../../core/utils/types/data-types/data-types.utils'
import { integerToPersianNumber } from '../../core/utils/convert-numbers/integer-to-persian-number.utils'
import { RootState } from '../../core/redux/store'
import { addStudentToCourse } from '../../core/services/api/courses/add-student-to-course.api'
import { PrimaryButton } from '../../components/common/Buttons/PrimaryButton'
import { getCourseData } from '../../core/redux/redux-store/data/course/course-data.Slice'
import { CustomModal } from '../../components/common/Modal/Modal'
import { RemoveActionModalContent } from '../../components/common/ModalContent/RemoveActionModalContent'

const ShoppingCartList = () => {
  const { Cart } = useSelector((state: RootState) => state.Cart)
  const { AuthData } = useSelector((state: RootState) => state.AuthData)
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalData, setModalData] = useState<CourseDataType>()

  const totalItemsCost = Cart.reduce((previous: number, current: any) => {
    previous += current.cost
    return previous
  }, 0)

  const modalVisibilityHandler = (modalData: CourseDataType) => {
    setShowModal(true)
    setModalData(modalData)
  }

  const totalItemsCostToFarsiNumber = integerToPersianNumber(totalItemsCost)

  const removeFromShoppingCart = (course: CourseDataType) => {
    const removeItem = Cart.filter((item: CourseDataType) => item._id !== course._id)
    dispatch(removeFromCart(removeItem))
    toast.success('دوره مورد نظر از سبد خرید حذف شد.')
    setShowModal(false)
  }

  const addToMyCoursesList = () => {
    setLoading(true)
    try {
      if (AuthData) {
        Cart.length > 0
          ? Cart.forEach(async (item) => {
              const addToCourseApiHandler = await addStudentToCourse(
                (AuthData as any)._id,
                item._id
              )
              setLoading(false)
              if (addToCourseApiHandler.success) {
                toast.success(`با موفقیت به ${item.title} اضافه شدید`)
                dispatch(resetCart())
                dispatch(getCourseData())
                navigate('/userpanel/dashboard')
              } else {
                addToCourseApiHandler.message.map((message: any) => toast.error(message.message))
              }
            })
          : toast.error('سبد خرید شما خالی است !')
      } else {
        toast.error('لطفا ابتدا وارد حساب کاربری خود شوید !')
        setLoading(false)
      }
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  return (
    <>
      {' '}
      <div className=' grid  lg:grid-cols-6 gap-4'>
        <div className=' px-4 sm:px-6 lg:col-span-4 lg:py-24 lg:px-8'>
          <h1 className='text-3xl font-extrabold tracking-tight text-neutral-900'>
            دوره های انتخابی
          </h1>

          <form className='mt-12'>
            <div>
              <h2 className='sr-only'>Items in your shopping cart</h2>

              <ul role='list' className=' divide-y divide-neutral-200'>
                {Cart.length > 0 ? (
                  Cart.map((item: CourseDataType, index: number) => (
                    <li key={index} className='flex border mb-4 rounded-xl shadow-lg '>
                      <div className=''>
                        <Image
                          src={item.lesson.image}
                          alt={item.title}
                          className=' w-32 h-full border-r-8 border-neutral-900 rounded-xl shadow-lg object-center object-cover'
                        />
                      </div>

                      <div className='flex-1 flex flex-col justify-between sm:mr-3'>
                        <div className='my-3  sm:grid sm:pr-0'>
                          <div className=''>
                            <div className='mt-2 grid md:grid-cols-3'>
                              <h3 className='text-md'>
                                <Link
                                  to={`/courses/${item._id}`}
                                  className='font-extrabold text-black hover:text-teal-600'
                                >
                                  {item.title}
                                </Link>
                              </h3>

                              <span className=' mt-1 mr-3 text-sm font-medium text-neutral-500'>
                                {'مدرس : ' + item.teacher.fullName}
                              </span>
                            </div>

                            <p className=' my-3 text-sm font-medium text-neutral-800'>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                              از طراحان گرافیک است.
                            </p>
                            <div>
                              <p className='inline-block float-right mt-1 text-sm font-bold text-neutral-900'>
                                {`قیمت : ${integerToPersianNumber(item.cost)} تومان`}
                              </p>
                              <div className='w-7 h-7 bg-red-500 hover:bg-red-600 mx-4 rounded flex justify-center items-center float-left'>
                                <button type='button' onClick={() => modalVisibilityHandler(item)}>
                                  <ImBin2 className='text-white mx-auto align-middle' />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <div className='flex justify-center'>
                    <span className='font-bold text-2xl'>سبد خرید شما خالی است</span>
                  </div>
                )}
              </ul>
            </div>
          </form>
        </div>

        {/* Order summary */}

        <div className='lg:col-span-2  mb-6'>
          <div className='lg:mt-44 mx-2 border border-t-neutral-900 border-t-8 rounded-md shadow-lg '>
            <div className='bg-white mx-auto rounded-xl px-2 sm:p-2 lg:p-2'>
              <h2 className='text-center font-extrabold text-2xl'>رسید خرید</h2>

              <div className='mx-auto'>
                <div className='my-3 text-sm'>
                  <div className='flex mx-auto my-3 '>
                    <div className='mx-auto text-neutral-600 '>
                      <span>تعداد دوره های انتخابی : </span>
                      <span>{integerToPersianNumber(Cart.length)}</span>
                    </div>
                  </div>
                  <div className='flex my-3 mx-auto'>
                    <div className='mx-auto text-neutral-600'>
                      <span>تخفیف : </span>
                      <span> ۰ تومان</span>
                    </div>
                  </div>
                  <div className='flex my-3 mx-auto '>
                    <div className='mx-auto text-neutral-600'>
                      <span>مالیات : </span>
                      <span> ۰ تومان</span>
                    </div>
                  </div>
                  <div className='flex my-3 mx-auto '>
                    <div className='mx-auto text-neutral-600 '>
                      <span>مجموع کل : </span>
                      <span className='text-neutral-700 font-bold'>
                        {' '}
                        {`${totalItemsCostToFarsiNumber} تومان`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <PrimaryButton onClick={addToMyCoursesList} type='button' loadingSpin={loading}>
                اقدام به پرداخت
              </PrimaryButton>
            </div>

            <div className='my-4 text-sm text-center text-neutral-500'>
              <p>
                <Link to={'/courses'} className='text-[#303030] font-medium'>
                  ادامه خرید<span aria-hidden='true'> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <CustomModal isModalOpen={showModal} closeModal={() => setShowModal(false)}>
        <RemoveActionModalContent
          itemName={modalData?.title!}
          closeModal={() => setShowModal(false)}
          onSubmitAction={() => removeFromShoppingCart(modalData!)}
          warningMessage='آیا مطمئن هستید که می خواهید این درس را از لیست سبد خود حذف کنید؟'
        />
      </CustomModal>
    </>
  )
}

export { ShoppingCartList }
