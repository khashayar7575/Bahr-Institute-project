import React from 'react'
import { MultiRangeSlider } from './MultiRangeSlider/MultiRangeSlider'

interface Props {
  initialValue: { min: number; max: number }
  rangeValue: { min: number; max: number }
  onValueChange: (arg: { min: number; max: number }) => void
}
const CostRange: React.FC<Props> = ({ initialValue, rangeValue, onValueChange }) => {
  const onRangeChange = (event: { min: number; max: number }) => {
    onValueChange({ min: event.min, max: event.max })
  }

  return (
    <>
      <h3 className='mb-6 font-semibold text-gray-900'>محدوده قیمت</h3>
      <MultiRangeSlider initial={initialValue} rangeValue={rangeValue} onChange={onRangeChange} />
    </>
  )
}

export { CostRange }
