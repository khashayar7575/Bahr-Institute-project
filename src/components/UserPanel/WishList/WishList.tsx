import React, { useState, useEffect } from 'react'

import { BsTrash, BsEye, BsCart2 } from 'react-icons/bs'

import { useSelector, useDispatch } from 'react-redux'

import { CourseDataType } from '../../../core/utils/types/data-types/data-types.utils'
import { integerToPersianNumber } from '../../../core/utils/convert-numbers/integer-to-persian-number.utils'
import { RootState } from '../../../core/redux/store'
import { Table } from '../../common/Table/Table'
import { jalaliDateToJalaliFormat } from '../../../core/utils/convert-date-and-times/jalali-to-jalali-format.utils'
import { CustomModal } from '../../common/Modal/Modal'

import { removeFromWishList } from '../../../core/redux/redux-store/wish-list/wishList.Slice'

import { toast } from 'react-toastify'
import { AddCourseModal } from '../../common/ModalContent/Course/AddCourseToShopModal'
import { addToCart } from '../../../core/redux/redux-store/cart/cart.Slice'
import { RemoveActionModalContent } from '../../common/ModalContent/RemoveActionModalContent'
import { CourseQuickViewModalContent } from '../../common/ModalContent/Course/CourseQuickViewModalContent'
import { charLimitter } from '../../../core/utils/character-limitter/char-limitter.utils'

const WishList = () => {
  const { WishListData } = useSelector((state: RootState) => state.WishListData)
  const { Cart } = useSelector((state: RootState) => state.Cart)
  const [wish, setWish] = useState<CourseDataType[]>([])
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalData, setModalData] = useState<CourseDataType>()
  const [modalContent, setModalContent] = useState<string>('')

  const getWishList = () => {
    setWish(WishListData)
  }

  useEffect(() => {
    getWishList()
  }, [WishListData])

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

  const wishRemoveHandler = (wishId: string) => {
    const updatedWishList = WishListData.filter((wish: CourseDataType) => wish._id !== wishId)
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
                      : row.original.capacity < 12
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
              <span
                className='hover:bg-gray-100 p-1 hover:text-red-500 rounded cursor-pointer'
                onClick={() => modalVisibilityHandler(row.original, 'removeFromWish')}
              >
                <BsTrash size={20} />
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
          <h2 className='text-2xl font-semibold text-gray-900 mb-10'>لیست علاقه مندی</h2>
        </div>
        {WishListData ? <Table columns={tableColumns} data={wish} /> : <h2>loading . . .</h2>}
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
        ) : (
          <RemoveActionModalContent
            itemName={modalData?.title!}
            closeModal={() => setShowModal(false)}
            onSubmitAction={() => wishRemoveHandler(modalData!._id)}
            warningMessage='آیا مطمئن هستید که می خواهید این درس را از لیست علاقه مندی حذف کنید؟'
          />
        )}
      </CustomModal>
    </>
  )
}

export { WishList }
