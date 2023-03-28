import React from 'react'

import { EditProfileForm } from './EditProfileForm'

const EditProfile = () => {
  return (
    <div className='py-6'>
      <div className='md:px-0 '>
        <h2 className='text-2xl font-semibold text-gray-900'>تغییر پروفایل کاربری</h2>
      </div>
      <div className='md:px-0 py-4'>
        <EditProfileForm />
      </div>
    </div>
  )
}

export { EditProfile }
