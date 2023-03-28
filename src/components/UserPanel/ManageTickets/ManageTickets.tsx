import React, { useState } from 'react'
import { PrimaryButton } from '../../common/Buttons/PrimaryButton'
import { CustomModal } from '../../common/Modal/Modal'
import SendTicketForm from '../../common/ModalContent/Tickets/SendTicketForm'
import { useSelector } from 'react-redux'
import { RootState } from '../../../core/redux/store'
import { useEffect } from 'react'
import { Table } from '../../common/Table/Table'
import { getPantryBasket } from '../../../core/services/pantry/basket-manage-api'
import { BsEye } from 'react-icons/bs'
import { gregorianDateToJalaliFormat } from '../../../core/utils/convert-date-and-times/gregorian-to-jalali-format.utils'
import QuickTicketView from './../../common/ModalContent/Tickets/QuickTicketView'
import { charLimitter } from '../../../core/utils/character-limitter/char-limitter.utils'

const ManageTickets = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const { AuthData } = useSelector((state: RootState) => state.AuthData)
  const [ticketsData, setTicketsData] = useState([])
  const [modalContent, setModalContent] = useState('')
  const [modalData, setModalData] = useState<object>({})

  const getTicketsBasket = async () => {
    const result = await getPantryBasket('tickets')
    if (result[(AuthData as any)._id]) {
      setTicketsData(result[(AuthData as any)._id])
    }
  }

  useEffect(() => {
    getTicketsBasket()
  }, [])

  const modalVisibilityHandler = (modalContent: string, modalData?: object) => {
    setModalContent(modalContent)
    setModalData(modalData!)
    setShowModal(true)
  }

  const tableColumns = React.useMemo(
    () => [
      {
        Header: 'عنوان تیکت',
        accessor: 'title',
        sort: true,
        responsive: '',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <div className='flex items-center'>
              <div className='flex flex-col justify-start'>
                <span className='text-neutral-700 font-bold text-sm hover:text-teal-400'>
                  {charLimitter(row.original.title, 30)}
                </span>
              </div>
            </div>
          )
        },
      },
      {
        Header: 'وضعیت تیکت',
        accessor: '',
        responsive: 'hidden md:table-cell',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <span className='text-neutral-700 font-bold mb-1 text-sm hover:text-teal-400'>
              {row.original.isReaded === true ? 'خوانده شده' : 'خوانده نشده'}
            </span>
          )
        },
      },
      {
        Header: 'وضعیت پاسخ',
        accessor: '',
        responsive: 'hidden lg:table-cell',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <span className='text-neutral-700 font-bold mb-1 text-sm hover:text-teal-400'>
              {row.original.isAnswered === true ? 'پاسخ داده شده' : 'پاسخ داده نشده'}
            </span>
          )
        },
      },
      {
        Header: 'تاریخ ارسال',
        accessor: 'createdDate',
        sort: true,
        responsive: 'hidden xl:table-cell',
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
        Header: 'مشاهده',
        accessor: '',
        responsive: '',
        Cell: (rows: any) => {
          const { row } = rows
          return (
            <div className='flex items-center justify-evenly'>
              <span
                className='hover:bg-blue-100 p-1 hover:text-blue-500 rounded cursor-pointer'
                onClick={() => modalVisibilityHandler('viewTicketText', row.original)}
              >
                <BsEye size={20} />
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
        <div className='md:px-0 flex justify-between items-center mb-10'>
          <h2 className='text-2xl font-semibold text-gray-900'>لیست تیکت ها</h2>
          <PrimaryButton
            type='button'
            onClick={() => modalVisibilityHandler('sendTicket')}
            className='!from-blue-400 !via-blue-500 !to-blue-600 !shadow-blue-500/50'
          >
            ارسال تیکت جدید
          </PrimaryButton>
        </div>
        {ticketsData ? <Table columns={tableColumns} data={ticketsData} /> : <h2>loading . . .</h2>}
      </div>
      <CustomModal
        isModalOpen={showModal}
        closeModal={() => setShowModal(false)}
        contentSize={'!max-w-2xl'}
      >
        {modalContent === 'sendTicket' ? (
          <SendTicketForm studentInfo={AuthData as any} closeModal={() => setShowModal(false)} />
        ) : (
          <QuickTicketView closeModal={() => setShowModal(false)} data={modalData} />
        )}
      </CustomModal>
    </>
  )
}

export default ManageTickets
