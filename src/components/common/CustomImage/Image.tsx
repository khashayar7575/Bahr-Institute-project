import React, { FC } from 'react'

import DefaultImage from '../../../assets/images/BrokenImage.svg'

type Props = {
  src: string
  className?: string
  alt: string
}

const Image: FC<Props> = ({ src, className, alt }) => {
  const onErrorHandler = (error: any) => (error.target.src = DefaultImage)
  return <img src={src} alt={alt} className={className} onError={onErrorHandler} />
}

export { Image }
