import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Title: FC<Props> = ({ children }) => {
  return <h2 className='indent-2 font-extrabold my-1'>{children}</h2>
}

export { Title }
