import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: ReactNode
  url?: string
  type: 'button' | 'submit' | 'reset' | undefined
  className?: string
  onClick?: () => void
}

const SecondaryButton: FC<Props> = ({ children, url, type, className, onClick }) => {
  return url ? (
    <Link to={url}>
      <button
        type={type}
        onClick={onClick}
        className={
          'relative text-white bg-gradient-to-r from-yellow-400 text-base via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-yellow-500/50 font-medium rounded py-2.5 text-center px-9 ' +
          (className ? className : '')
        }
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={
        'relative text-white bg-gradient-to-r from-yellow-400 text-base via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-yellow-500/50 font-medium rounded py-2.5 text-center px-9 ' +
        (className ? className : '')
      }
    >
      {children}
    </button>
  )
}

export { SecondaryButton }
