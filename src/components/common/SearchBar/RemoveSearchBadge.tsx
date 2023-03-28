import React, { FC } from 'react'

type Props = {
  searchValue: string
  resetFiltering: () => void
}

const RemoveSearchBadge: FC<Props> = ({ searchValue, resetFiltering }) => {
  return (
    <span className='inline-flex rounded-full items-center py-0.5 px-3 text-sm font-medium bg-teal-100 text-teal-700'>
      {searchValue}
      <button
        type='button'
        className='flex-shrink-0 mr-2 h-4 w-4 rounded-full inline-flex items-center justify-center text-teal-400 hover:bg-teal-200 hover:text-teal-500 focus:outline-none focus:bg-teal-500 focus:text-white'
        onClick={resetFiltering}
      >
        <span className='sr-only'>Remove large option</span>
        <svg className='h-2 w-2' stroke='currentColor' fill='none' viewBox='0 0 8 8'>
          <path strokeLinecap='round' strokeWidth='1.5' d='M1 1l6 6m0-6L1 7' />
        </svg>
      </button>
    </span>
  )
}

export { RemoveSearchBadge }
