import React, { useState, useEffect } from 'react'

import { BsTrash, BsEye, BsCart2, BsHeart, BsHeartFill } from 'react-icons/bs'

import { useSelector, useDispatch } from 'react-redux'

import { CourseDataType } from '../../../core/utils/types/data-types/data-types.utils'
import { integerToPersianNumber } from '../../../core/utils/convert-numbers/integer-to-persian-number.utils'
import { RootState } from '../../../core/redux/store'
import { Table } from '../../common/Table/Table'
import { jalaliDateToJalaliFormat } from '../../../core/utils/convert-date-and-times/jalali-to-jalali-format.utils'
import { CustomModal } from '../../common/Modal/Modal'

import {
  addToWishList,
  removeFromWishList,
} from '../../../core/redux/redux-store/wish-list/wishList.Slice'

import { toast } from 'react-toastify'
import { AddCourseModal } from '../../common/ModalContent/Course/AddCourseToShopModal'
import { addToCart } from '../../../core/redux/redux-store/cart/cart.Slice'
import { CourseQuickViewModalContent } from '../../common/ModalContent/Course/CourseQuickViewModalContent'
import { RemoveActionModalContent } from '../../common/ModalContent/RemoveActionModalContent'
import { AddCourseToWishModal } from '../../common/ModalContent/Course/AddCourseToWishModal'
import { charLimitter } from '../../../core/utils/character-limitter/char-limitter.utils'

const CoursesListPanel = () => {
  const { CourseData } = useSelector((state: RootState) => state.CourseData)
  const { WishListData } = useSelector((state: RootState) => state.WishListData)
  const { Cart } = useSelector((state: RootState) => state.Cart)
  const dispatch = useDispatch()

  const [tableData, setTableData] = useState<any[]>(CourseData)

  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalData, setModalData] = useState<CourseDataType>()
  const [modalContent, setModalContent] = useState<string>('')

  useEffect(() => {
    const newList: any[] = [
      ...CourseData.map((course) => {
        const isWishValid = WishListData.find((wish: CourseDataType) => wish._id === course._id)
        let isInWishList
        isWishValid ? (isInWishList = true) : (isInWishList = false)
        const courseObj = { ...course }
        const newObject = { isInWishList, ...courseObj }
        return newObject
      }),
    ]
    setTableData(newList)
  }, [CourseData, WishListData])

  const modalVisibilityHandler = (modalData: CourseDataType, modalContent: string) => {
    setShowModal(true)
    setModalData(modalData)
    setModalContent(modalContent)
  }

  const addToCartHandler = () => {
    const itemInCart = Cart.find((item: CourseDataType) => item._id === modalData?._id)
    if (itemInCart) {
      toast.error('دوره مورد نظر در سبد خرید موجود است !')
    } else {
      toast.success('دوره مورد نظر به سبد خرید افزوده شد.')
      dispatch(addToCart(modalData))
      setShowModal(false)
    }
  }

  const addToWishHandler = () => {
    const itemInWishListData = WishListData.find(
      (item: CourseDataType) => item._id === modalData?._id
    )
    if (itemInWishListData) {
      toast.error('دوره مورد نظر در لیست علاقه مندی موجود است !')
    } else {
      toast.success('دوره مورد نظر به لیست علاقه مندی افزوده شد.')
      dispatch(addToWishList(modalData))
      setShowModal(false)
    }
  }

  const wishRemoveHandler = () => {
    const updatedWishList = WishListData.filter(
      (wish: CourseDataType) => wish._id !== modalData?._id
    )
    dispatch(removeFromWishList(updatedWishList))
    setShowModal(false)
    toast.success('درس مورد نظر از لیست علاقه مندی حذف شد.')
  }

  const tableColumns = React.useMemo(
    () => [
      {
        Header: 'نام دوره',
        accessor: 'title',
        sort: true,
        responsive: '',
        Cell: (rows: any) => {
          const { row } = rows

          return (
            <div className='flex items-center'>
              <div className='ml-5 w-12 h-12 overflow-hidden rounded-[0.475rem] shadow-md'>
                <img
                  src={row.original.lesson.image}
                  className='w-full h-full'
                  style={{ objectFit: 'cover' }}
                  alt=''
                />
              </div>
              <div className='flex flex-col justify-start'>
                <span className='text-neutral-700 font-bold mb-1 text-sm hover:text-teal-400'>
                  {charLimitter(row.original.title, 20)}
                </span>
                <span className='text-gray-400 block text-xs'>
                  {row.original.lesson.lessonName}
                </span>
              </div>
            </div>
          )
        },
      },
      {
        Header: 'مدرس',
        accessor: 'teacher.fullName',
        sort: true,
        responsive: 'hidden md:table-cell',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <span className='text-neutral-700 font-bold mb-1 text-sm hover:text-teal-400'>
              {charLimitter(row.original.teacher.fullName, 20)}
            </span>
          )
        },
      },
      {
        Header: 'قیمت',
        accessor: 'cost',
        sort: true,
        responsive: 'hidden lg:table-cell',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <span className='text-neutral-700 font-bold mb-1 text-sm hover:text-teal-400'>
              {charLimitter(integerToPersianNumber(row.original.cost) + ' تومان', 20)}
            </span>
          )
        },
      },
      {
        Header: 'تاریخ شروع',
        accessor: 'startDate',
        sort: true,
        responsive: 'hidden xl:table-cell',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <span className='text-neutral-700 font-bold mb-1 text-sm hover:text-teal-400'>
              {jalaliDateToJalaliFormat(row.original.startDate)}
            </span>
          )
        },
      },
      {
        Header: 'ظرفیت',
        accessor: 'capacity',
        sort: true,
        responsive: 'hidden xl:table-cell',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <div className='flex flex-col w-full ml-2'>
              <div className='flex mb-2'>
                <span className='font-bold text-gray-400 text-xs'>
                  <span className='mr-1'>
                    {integerToPersianNumber(
                      Math.ceil(
                        ((row.original.capacity +
                          row.original.students.length -
                          row.original.capacity) /
                          (row.original.capacity + row.original.students.length)) *
                          100
                      )
                    )}
                  </span>
                  %
                </span>
              </div>
              <div className='rounded-full bg-neutral-300'>
                <div
                  style={{
                    width: `${
                      row.original.capacity == 0
                        ? 100
                        : (row.original.capacity /
                            (row.original.capacity + row.original.students.length)) *
                          100
                    }%`,
                  }}
                  className={
                    'h-1.5 rounded-full ' +
                    (row.original.capacity < 6
                      ? 'bg-red-500'
                      : row.original.capacity < 10
                      ? 'bg-yellow-500'
                      : 'bg-indigo-500')
                  }
                ></div>
              </div>
            </div>
          )
        },
      },
      {
        Header: 'عملیات',
        accessor: '',
        responsive: '',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <div className='flex items-center justify-evenly'>
              {row.original.isInWishList ? (
                <span
                  className='hover:bg-red-100 p-1 hover:text-red-500 rounded cursor-pointer'
                  onClick={() => modalVisibilityHandler(row.original, 'removeFromWish')}
                >
                  <BsHeartFill size={20} />
                </span>
              ) : (
                <span
                  className='hover:bg-red-100 p-1 hover:text-red-500 rounded cursor-pointer'
                  onClick={() => modalVisibilityHandler(row.original, 'addToWish')}
                >
                  <BsHeart size={20} />
                </span>
              )}
              <span
                className='hover:bg-blue-100 p-1 hover:text-blue-500 rounded cursor-pointer'
                onClick={() => modalVisibilityHandler(row.original, 'quickView')}
              >
                <BsEye size={20} />
              </span>
              <span
                className='hover:bg-green-100 p-1 hover:text-green-500 rounded cursor-pointer'
                onClick={() => modalVisibilityHandler(row.original, 'addToCart')}
              >
                <BsCart2 size={20} />
              </span>
            </div>
          )
        },
      },
    ],
    []
  )

  return (
    <>
      <div className='py-6'>
        <div className='md:px-0 '>
          <h2 className='text-2xl font-semibold text-gray-900 mb-10'>لیست دوره ها</h2>
        </div>
        {CourseData.length > 0 ? (
          <Table columns={tableColumns} data={tableData} />
        ) : (
          <h2>loading . . .</h2>
        )}
      </div>
      <CustomModal
        isModalOpen={showModal}
        closeModal={() => setShowModal(false)}
        contentSize={modalContent === 'quickView' ? '!max-w-4xl' : ''}
      >
        {modalContent === 'quickView' ? (
          <CourseQuickViewModalContent
            courseData={modalData!}
            closeModal={() => setShowModal(false)}
          />
        ) : modalContent === 'addToCart' ? (
          <AddCourseModal
            courseName={modalData?.title!}
            closeModal={() => setShowModal(false)}
            onSubmitAction={addToCartHandler}
          />
        ) : modalContent === 'addToWish' ? (
          <AddCourseToWishModal
            courseName={modalData?.title!}
            closeModal={() => setShowModal(false)}
            onSubmitAction={addToWishHandler}
          />
        ) : (
          <RemoveActionModalContent
            itemName={modalData?.title!}
            closeModal={() => setShowModal(false)}
            onSubmitAction={wishRemoveHandler}
            warningMessage='آیا مطمئن هستید که می خواهید این درس را از لیست علاقه مندی خود حذف کنید؟'
          />
        )}
      </CustomModal>
    </>
  )
}

export { CoursesListPanel }
