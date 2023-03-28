import React, { FC } from 'react'
import { FaThList } from 'react-icons/fa'
import { BsGrid3X3GapFill } from 'react-icons/bs'

type Props = {
  onViewChange: (num: number) => void
  cardView: number
}

const ViewSetting: FC<Props> = ({ onViewChange, cardView }) => {
  return (
    <ul className='flex w-20 justify-between'>
      <li
        className={`rounded-md flex justify-center items-center ${
          cardView === 2 ? 'text-teal-600' : 'text-gray-400'
        }`}
      >
        <button className='w-8 h-8' onClick={() => onViewChange(2)}>
          <FaThList className='w-8 h-8' />
        </button>
      </li>
      <li
        className={`rounded-md flex justify-center items-center ${
          cardView === 1 ? 'text-teal-600' : 'text-gray-400'
        }`}
      >
        <button className='w-8 h-8' onClick={() => onViewChange(1)}>
          <BsGrid3X3GapFill className='w-8 h-8' />
        </button>
      </li>
    </ul>
  )
}

export { ViewSetting }
