import React, { FC } from 'react'

import { ExclamationCircleIcon, ExclamationIcon } from '@heroicons/react/outline'
import { PrimaryButton } from '../../Buttons/PrimaryButton'

type Props = {
  onSubmitAction: (arg: string) => void
  loadingSpinStatus?: boolean
}

const NotificationMethodModalContent: FC<Props> = ({ onSubmitAction, loadingSpinStatus }) => {
  return (
    <>
      <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
        <div className='sm:flex sm:items-center'>
          <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10'>
            <ExclamationCircleIcon className='h-6 w-6 text-blue-600' aria-hidden='true' />
          </div>
          <div className='mt-3 text-center sm:mt-0 sm:mr-4 sm:text-right'>
            <h3 className='text-base leading-6 font-medium text-gray-900'>
              لطفا یکی از روش های زیر را برای اطلاع رسانی از ظرفیت دوره انتخاب نمایید
            </h3>
          </div>
        </div>
      </div>
      <div className='bg-gray-100 sm:flex py-3 justify-center'>
        <PrimaryButton type='button' className='ml-4' onClick={() => onSubmitAction('sms')}>
          پیامک
        </PrimaryButton>
        <PrimaryButton
          onClick={() => onSubmitAction('email')}
          type='button'
          className='from-red-400 via-red-500 to-red-600 shadow-red-500/50'
        >
          ایمیل
        </PrimaryButton>
      </div>
    </>
  )
}

export { NotificationMethodModalContent }
