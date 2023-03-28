import React, { FC } from 'react'
import { PrimaryButton } from '../../Buttons/PrimaryButton'

type Props = {
  data: any
  closeModal: () => void
}

const QuickTicketView: FC<Props> = ({ data, closeModal }) => {
  return (
    <>
      <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
        <div className='sm:flex sm:items-start'>
          <div className='mt-3 sm:mt-0 sm:mr-4 sm:text-right'>
            <div className='mt-4 flex items-center'>
              <span className='text-sm text-gray-500'>عنوان تیکت : </span>
              <span className='text-sm font-bold text-gray-600 mr-2'>{data.title}</span>
            </div>
            <div className='mt-4 flex items-center'>
              <span className='text-sm text-gray-500'>وضعیت تیکت : </span>
              <span className='text-sm font-bold text-gray-600 mr-2'>
                {data.isReaded === true ? 'خوانده شده' : 'خوانده نشده'}
              </span>
            </div>
            <div className='mt-4 flex items-center'>
              <span className='text-sm text-gray-500'>وضعیت پاسخ : </span>
              <span className='text-sm font-bold text-gray-600 mr-2'>
                {data.isAnswered === true ? 'پاسخ داده شده' : 'پاسخ داده نشده'}
              </span>
            </div>
            <div className='mt-4 flex flex-col items-start'>
              <span className='text-sm text-gray-500'>متن تیکت : </span>
              <span className='text-base mt-2 text-gray-600 text-justify'>{data.title}</span>
            </div>
            <span className='mt-6 block text-sm font-bold text-yellow-500'>
              کاربر گرامی، در نظر داشته باشید که پاسخ تیکت های شما در صورت وجود به ایمیل کاربری شما
              فرستاده میشود.
            </span>
          </div>
        </div>
      </div>
      <div className='bg-gray-100 px-4 py-3 sm:px-6 sm:flex justify-end'>
        <PrimaryButton
          type='button'
          className='from-red-400 via-red-500 to-red-600 shadow-red-500/50'
          onClick={closeModal}
        >
          بستن
        </PrimaryButton>
      </div>
    </>
  )
}

export default QuickTicketView
