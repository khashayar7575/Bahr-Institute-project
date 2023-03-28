import React from 'react'

import { EditPasswordForm } from './EditPasswordForm'

const EditPassword = () => {
  return (
    <div className='py-6'>
      <div className='md:px-0'>
        <h2 className='text-2xl font-semibold text-gray-900'>تغییر رمز عبور</h2>
      </div>
      <div className='md:px-0'>
        <div className='py-4'>
          <div className=' border-gray-200 rounded-lg shadow'>
            <EditPasswordForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export { EditPassword }
