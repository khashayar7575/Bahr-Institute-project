import React, { useCallback, useEffect, useState, useRef } from 'react'
import { integerToPersianNumber } from '../../../../../core/utils/convert-numbers/integer-to-persian-number.utils'
import './MultiRangeSlider.css'

interface Props {
  initial: { min: number; max: number }
  rangeValue: { min: number; max: number }
  onChange: (value: { min: number; max: number }) => void
}
const MultiRangeSlider: React.FC<Props> = ({ initial, rangeValue, onChange }) => {
  const [minVal, setMinVal] = useState(rangeValue.min)
  const [maxVal, setMaxVal] = useState(rangeValue.max)
  const minValRef = useRef(initial.min)
  const maxValRef = useRef(initial.max)
  const range = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMinVal(rangeValue.min)
    setMaxVal(rangeValue.max)
  }, [rangeValue])

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - initial.min) / (initial.max - initial.min)) * 100),
    [initial.min, initial.max]
  )

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent])

  const handleChange = () => {
    onChange({ min: minVal, max: maxVal })
  }
  return (
    <div dir='ltr'>
      <div className=' relative'>
        <input
          type='range'
          min={initial.min}
          max={initial.max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1)
            setMaxVal(value)
            maxValRef.current = value
          }}
          onMouseUp={handleChange}
          onTouchEnd={handleChange}
          className='w-full z-10 absolute outline-none left-0 h-0 thumb pointer-events-none'
        />
        <input
          type='range'
          min={initial.min}
          max={initial.max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1)
            setMinVal(value)
            minValRef.current = value
          }}
          onMouseUp={handleChange}
          onTouchEnd={handleChange}
          className='w-full z-10 absolute outline-none left-0 h-0 thumb pointer-events-none '
        />
      </div>

      <div className=''>
        <div className=' bg-gray-300 h-1 relative'>
          <div ref={range} className=' absolute h-1 bg-teal-700' />
        </div>
        <div className=' text-black flex justify-between pt-4 text-sm '>
          <span>{integerToPersianNumber(minVal)}</span>
          <span>{integerToPersianNumber(maxVal)}</span>
        </div>
      </div>
    </div>
  )
}

export { MultiRangeSlider }
