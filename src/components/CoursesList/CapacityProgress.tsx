import React, { FC } from 'react'
import { integerToPersianNumber } from '../../core/utils/convert-numbers/integer-to-persian-number.utils'

type Props = {
  capacity: number
  reserved: number
}

const CapacityProgress: FC<Props> = ({ capacity, reserved }) => {
  return (
    <div dir='ltr'>
      <p className={'text-xs mb-1 ' + (capacity < 6 ? 'text-red-700' : 'text-neutral-700')}>
        <span>ظرفیت : </span>
        <span className='text-sm'>{`${integerToPersianNumber(
          capacity + reserved
        )} / ${integerToPersianNumber(reserved)}`}</span>
      </p>

      <div className='rounded-full bg-neutral-300'>
        <div
          style={{ width: `${capacity === 0 ? 100 : (capacity / (capacity + reserved)) * 100}%` }}
          className={
            'h-1.5 rounded-full ' +
            (capacity < 6 ? 'bg-red-500' : capacity < 10 ? 'bg-yellow-500' : 'bg-indigo-500')
          }
        ></div>
      </div>
    </div>
  )
}

export { CapacityProgress }
