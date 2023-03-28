import React from 'react'
import { Outlet } from 'react-router-dom'

const MainContent = () => {
  return (
    <main className='flex-1'>
      <Outlet />
    </main>
  )
}

export { MainContent }
