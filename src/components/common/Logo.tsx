import React from 'react'

import { Image } from './CustomImage/Image'

import SyntaxLogo from '../../assets/images/Logo.svg'

const Logo = () => {
  return (
    <figure>
      <Image className='h-8 w-auto sm:h-9' src={SyntaxLogo} alt='Syntax Logo' />
    </figure>
  )
}

export { Logo }
