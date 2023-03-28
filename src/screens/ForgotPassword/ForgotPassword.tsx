import React from 'react'

import { ForgotPasswordForm } from '../../components/ForgotPassword/ForgotPasswordForm'

const ForgotPassword = () => {
  return (
    <div className='sm:rounded-lg grid gap-y-5'>
      <h2 className='mb-2 font-bold text-2xl text-[#202020] text-center'>
        رمز عبور خود را فراموش کرده اید؟
      </h2>
      <h3 className='mr-10 mb-5 text-gray-500'>
        با وارد کردن ایمیل خود میتوانید رمز خود را بازنشانی کنید.
      </h3>
      <div className='flex justify-center'>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}

export { ForgotPassword }
