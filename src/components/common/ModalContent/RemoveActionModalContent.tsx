import React, { FC } from 'react'
import { PrimaryButton } from '../Buttons/PrimaryButton'
import { ExclamationIcon } from '@heroicons/react/outline'

type Props = {
  closeModal: () => void
  onSubmitAction: () => void
  itemName: string
  warningMessage: string
  loadingSpinStatus?: boolean
}

const RemoveActionModalContent: FC<Props> = ({
  closeModal,
  onSubmitAction,
  itemName,
  warningMessage,
  loadingSpinStatus,
}) => {
  return (
    <>
      <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
        <div className='sm:flex sm:items-start'>
          <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
            <ExclamationIcon className='h-6 w-6 text-red-600' aria-hidden='true' />
          </div>
          <div className='mt-3 text-center sm:mt-0 sm:mr-4 sm:text-right'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>حذف {itemName}</h3>
            <div className='mt-2'>
              <p className='text-sm text-gray-500'>{warningMessage}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-100 px-4 py-3 sm:px-6 sm:flex justify-end'>
        <PrimaryButton type='button' className='ml-4' onClick={closeModal}>
          لغو
        </PrimaryButton>
        <PrimaryButton
          onClick={onSubmitAction}
          type='button'
          className='from-red-400 via-red-500 to-red-600 shadow-red-500/50'
          loadingSpin={loadingSpinStatus}
        >
          حذف
        </PrimaryButton>
      </div>
    </>
  )
}

export { RemoveActionModalContent }
