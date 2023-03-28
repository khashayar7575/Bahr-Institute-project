import React, { useState, useEffect } from 'react'

import { BsTrash, BsEye, BsCart2 } from 'react-icons/bs'

import { useSelector, useDispatch } from 'react-redux'

import {
  CourseDataType,
  GetBlogDataType,
} from '../../../core/utils/types/data-types/data-types.utils'
import { integerToPersianNumber } from '../../../core/utils/convert-numbers/integer-to-persian-number.utils'
import { RootState } from '../../../core/redux/store'
import { Table } from '../../common/Table/Table'
import { jalaliDateToJalaliFormat } from '../../../core/utils/convert-date-and-times/jalali-to-jalali-format.utils'
import { CustomModal } from '../../common/Modal/Modal'

import { toast } from 'react-toastify'
import { RemoveActionModalContent } from '../../common/ModalContent/RemoveActionModalContent'
import { removeFromStudyList } from '../../../core/redux/redux-store/study-list/study-list.Slice'
import { Image } from '../../common/CustomImage/Image'
import { charLimitter } from '../../../core/utils/character-limitter/char-limitter.utils'
import { Link } from 'react-router-dom'
import { gregorianDateToJalaliFormat } from '../../../core/utils/convert-date-and-times/gregorian-to-jalali-format.utils'

const StudyList = () => {
  const { StudyListData } = useSelector((state: RootState) => state.StudyListData)
  const [study, setStudy] = useState<CourseDataType[]>([])
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalData, setModalData] = useState<CourseDataType>()
  const [modalContent, setModalContent] = useState<string>('')

  const getStudyList = () => {
    setStudy(StudyListData)
  }

  useEffect(() => {
    getStudyList()
  }, [StudyListData])

  const modalVisibilityHandler = (modalData: CourseDataType, modalContent: string) => {
    setShowModal(true)
    setModalData(modalData)
    setModalContent(modalContent)
  }

  const studyRemoveHandler = (studyId: string) => {
    const updatedStudyList = StudyListData.filter((study: GetBlogDataType) => study._id !== studyId)
    dispatch(removeFromStudyList(updatedStudyList))
    setShowModal(false)
    toast.success('بلاگ مورد نظر از لیست مطالعه حذف شد.')
  }

  const tableColumns = React.useMemo(
    () => [
      {
        Header: 'نام بلاگ',
        accessor: 'title',
        sort: true,
        responsive: '',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <div className='flex items-center'>
              <div className='ml-5 w-12 h-12 overflow-hidden rounded-[0.475rem] shadow-md'>
                <Image src={row.original.image} className='w-full h-full object-cover' alt='' />
              </div>
              <div className='flex flex-col justify-start'>
                <Link
                  className='text-neutral-700 font-bold mb-1 text-sm hover:text-teal-400'
                  to={`/blogs/${row.original._id}`}
                >
                  {charLimitter(row.original.title, 25)}
                </Link>
              </div>
            </div>
          )
        },
      },
      {
        Header: 'دسته بندی',
        accessor: 'category',
        sort: true,
        responsive: 'hidden lg:table-cell',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <span className='text-neutral-700 font-bold mb-1 text-sm hover:text-teal-400'>
              {row.original.category === 'news' ? 'خبر' : 'مقاله'}
            </span>
          )
        },
      },
      {
        Header: 'موضوع',
        accessor: 'subjectCategory',
        sort: true,
        responsive: 'hidden lg:table-cell',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <span className='text-neutral-700 font-bold mb-1 text-sm hover:text-teal-400'>
              {row.original.subjectCategory}
            </span>
          )
        },
      },
      {
        Header: 'نویسنده',
        accessor: 'writer',
        sort: true,
        responsive: 'hidden lg:table-cell',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <span className='text-neutral-700 font-bold mb-1 text-sm hover:text-teal-400'>
              {charLimitter(row.original.writer, 20)}
            </span>
          )
        },
      },
      {
        Header: 'تاریخ پست',
        accessor: 'createdDate',
        sort: true,
        responsive: 'hidden lg:table-cell',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <span className='text-neutral-700 font-bold mb-1 text-sm hover:text-teal-400'>
              {gregorianDateToJalaliFormat(row.original.createdDate)}
            </span>
          )
        },
      },
      {
        Header: 'متن بلاگ',
        accessor: 'text',
        responsive: 'hidden md:table-cell',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <span className='text-neutral-700 font-bold mb-1 text-sm hover:text-teal-400'>
              {charLimitter(row.original.text, 30)}
            </span>
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
            <div className='flex items-center justify-center'>
              <Link
                className='mx-2 hover:bg-gray-100 p-1 hover:text-blue-500 rounded cursor-pointer'
                to={`/blogs/${row.original._id}`}
              >
                <BsEye size={20} />
              </Link>
              <span
                className='hover:bg-gray-100 p-1 hover:text-red-500 rounded cursor-pointer mx-2'
                onClick={() => modalVisibilityHandler(row.original, 'removeFromStudy')}
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
          <h2 className='text-2xl font-semibold text-gray-900 mb-10'>لیست مطالعه</h2>
        </div>
        {StudyListData ? <Table columns={tableColumns} data={study} /> : <h2>loading . . .</h2>}
      </div>
      <CustomModal isModalOpen={showModal} closeModal={() => setShowModal(false)}>
        {modalContent === 'quickView' ? (
          ''
        ) : (
          <RemoveActionModalContent
            itemName={modalData?.title!}
            closeModal={() => setShowModal(false)}
            onSubmitAction={() => studyRemoveHandler(modalData!._id)}
            warningMessage='آیا مطمئن هستید که می خواهید این بلاگ را از لیست مطالعه حذف کنید؟'
          />
        )}
      </CustomModal>
    </>
  )
}

export { StudyList }
