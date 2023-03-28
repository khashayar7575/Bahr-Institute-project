import React from 'react'

import { ContactFormLayout } from '../ContactUs/ContactFormLayout/ContactFormLayout'
import { Image } from '../common/CustomImage/Image'

import ContactImage from '../../assets/images/contact.svg'
import { Map } from '../ContactUs/Map/Map'

const ContactUsLanding = () => {
  return (
    <div className='relative'>
      <Map />
      <div className='w-[550px] h-80 absolute top-7 right-10'>
        <ContactFormLayout />
      </div>
    </div>
  )
}

export { ContactUsLanding }
