import React, { ChangeEvent, FC } from 'react'

type Props = {
  handleCapacityChange: (arg: string) => void
  valueOfCapacity: string
}

const CapacityFiltering: FC<Props> = ({ handleCapacityChange, valueOfCapacity }) => {
  const capacities = [
    { name: 'همه', value: 'all' },
    { name: 'پر نشده', value: 'notFull' },
    { name: 'پر شده', value: 'full' },
  ]

  const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    if (target.checked) {
      handleCapacityChange(target.value)
    }
  }

  const renderCapacities = () =>
    capacities.map((capacity, index) => (
      <li key={index} className='col-span-8 sm:col-span-2 lg:col-span-1 flex items-center  pl-4 '>
        <input
          id={`capacity-${index}`}
          type='radio'
          value={capacity.value}
          onChange={onRadioChange}
          checked={capacity.value === valueOfCapacity}
          className='w-4 h-4 text-blue-600 bg-gray-100  cursor-pointer'
        />
        <label
          htmlFor={`capacity-${index}`}
          className='py-3 ml-2 pr-2 w-full text-sm font-medium text-gray-900 cursor-pointer'
        >
          {capacity.name}
        </label>
      </li>
    ))

  return (
    <>
      <h3 className='mb-4 font-semibold text-gray-900'>ظرفیت دوره</h3>
      <ul className='w-full text-sm text-gray-900 bg-white flex'>{renderCapacities()}</ul>
    </>
  )
}

export { CapacityFiltering }
