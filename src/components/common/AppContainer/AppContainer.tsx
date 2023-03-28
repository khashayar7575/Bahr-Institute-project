import React, { ReactNode } from 'react'

const AppContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='relative min-w-[480px] max-w-[96rem] mx-auto px-2 sm:px-5 md:px-8 lg:px-12 xl:px-20 2xl:px-28'>
      {children}
    </div>
  )
}

export default AppContainer
