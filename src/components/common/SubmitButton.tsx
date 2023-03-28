import React, { ReactNode, FC } from 'react'

type Props = {
  children: ReactNode
}

const SubmitButton: FC<Props> = ({ children }) => {
  return (
    <div className='mb-6'>
      <button
        type='submit'
        className='
              h-10
              w-full max-w-xl m-auto
              px-10
              text-indigo-100
              bg-teal-700
              rounded-lg
              transition-colors
              duration-150
              focus:shadow-outline
              hover:bg-teal-800
     
            '
      >
        {children}
      </button>
    </div>
  )
}

export { SubmitButton }
