import React, { FC } from 'react'
import { BiExit } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import { studentModel } from '../../../../core/utils/types/data-types/data-types.utils'
import { PrimaryButton } from '../../Buttons/PrimaryButton'
import { Image } from '../../CustomImage/Image'

type Props = {
  data: studentModel[]
  closeModal: () => void
  onExitAction: () => void
  switchAccHandler: (accountModel: studentModel) => void
  removeAccHandler: (accountId: string, accountName: string) => void
  currentAccountId: string
}

const SwitchAccounts: FC<Props> = ({
  data,
  closeModal,
  onExitAction,
  switchAccHandler,
  removeAccHandler,
  currentAccountId,
}) => {
  return (
    <>
      <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
        <div className='sm:flex sm:flex-col sm:items-start'>
          <div className='sm:flex sm:items-center'>
            <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
              <BiExit className='h-6 w-6 text-red-600' aria-hidden='true' />
            </div>
            <div className='mt-3 text-center sm:mt-0 sm:mr-4 sm:text-right'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>تغییر حساب کاربری</h3>
            </div>
          </div>
          <div className='mt-7 mb-3 flex flex-col w-full'>
            {data
              .filter((acc) => acc._id !== currentAccountId)
              .map((eachAccount, index) => (
                <div
                  key={index}
                  className='flex justify-between items-center mb-4 last:mb-0 w-full'
                >
                  <div
                    className='flex justify-start items-center'
                    onClick={() => switchAccHandler(eachAccount)}
                  >
                    <div className='ml-5 w-12 h-12 overflow-hidden rounded-[0.475rem] shadow-md'>
                      <Image
                        src={eachAccount.profile}
                        alt=''
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div className='flex flex-col justify-start text-right'>
                      <span className='text-neutral-700 font-bold mb-1 text-sm hover:text-teal-400 line-clamp-1'>
                        {eachAccount.fullName}
                      </span>
                      <span className='text-gray-400 block text-xs'>{eachAccount.email}</span>
                    </div>
                  </div>
                  <span
                    className='hover:bg-red-100 p-1 hover:text-red-500 rounded cursor-pointer'
                    onClick={() => removeAccHandler(eachAccount._id, eachAccount.fullName)}
                  >
                    <BsTrash size={20} />
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='bg-gray-100 px-4 py-3 sm:px-6 sm:flex justify-end'>
        <PrimaryButton type='button' className='ml-4' onClick={closeModal}>
          انصراف
        </PrimaryButton>
        <PrimaryButton
          onClick={onExitAction}
          type='button'
          className='from-red-400 via-red-500 to-red-600 shadow-red-500/50'
        >
          خروج از سامانه
        </PrimaryButton>
      </div>
    </>
  )
}

export default SwitchAccounts
