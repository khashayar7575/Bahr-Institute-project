import React, { FC } from 'react'

type Props = {
  name: string
  onValueChange: (e: any) => void
}

const DragAndDropImageUploader: FC<Props> = ({ name, onValueChange }) => {
  return (
    <>
      <label className='block text-sm font-medium text-gray-700 sr-only'>DragAndDrop</label>
      <div className=' border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center'>
        <div className='space-y-1 text-center'>
          <svg
            className='mx-auto h-12 w-12 text-gray-400'
            stroke='currentColor'
            fill='none'
            viewBox='0 0 48 48'
            aria-hidden='true'
          >
            <path
              d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <div className='flex text-sm text-gray-600'>
            <p className='pl-1'>or drag and drop</p>
            <label
              htmlFor={name}
              className='relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:teal-indigo-500'
            >
              <span>Upload a file</span>
              <input
                id={name}
                name={name}
                type='file'
                className='hidden'
                onChange={onValueChange}
              />
            </label>
          </div>
          <p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </>
  )
}

export { DragAndDropImageUploader }
