import React from 'react'

import { ContactForm } from '../ContactForm/ContactForm'

const ContactFormLayout = () => {
  return (
    <div className='bg-white mx-auto md:mx-0 relative rounded-lg p-8 sm:p-12 shadow-xl '>
      <h3 className='text-center pb-10 font-bold text-2xl'>انتقادات و پیشنهادات</h3>
      <ContactForm />
    </div>
  )
}

export { ContactFormLayout }
