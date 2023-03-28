import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const HeadingTitle: FC<Props> = ({ children }) => {
  return (
    <header className=' text-center mx-auto max-w-max'>
      <h2 className='text-3xl mb-2'>{children}</h2>
      <div className='w-1/2 h-[3px] mx-auto bg-gray-600'></div>
    </header>
  )
}

export { HeadingTitle }
