import React, { ChangeEvent, FC } from 'react'

type Props = {
  handleStatusChange: (arg: string) => void
  valueOfStatus: string
}

const CourseStatus: FC<Props> = ({ handleStatusChange, valueOfStatus }) => {
  const statuses = [
    { name: 'همه', value: 'all' },
    { name: 'دوره های ترم جاری', value: 'notCompleted' },
    { name: 'دوره های گذشته', value: 'completed' },
  ]

  const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    if (target.checked) {
      handleStatusChange(target.value)
    }
  }

  const renderStatuses = () =>
    statuses.map((status, index) => (
      <li key={index} className='col-span-8 sm:col-span-2 pl-4 flex items-center '>
        <input
          id={`status-${index}`}
          type='radio'
          value={status.value}
          //   name={status.name}
          onChange={onRadioChange}
          checked={status.value === valueOfStatus}
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer'
        />
        <label
          htmlFor={`status-${index}`}
          className='py-3 pr-2 ml-2 w-full text-sm font-medium text-gray-900 cursor-pointer'
        >
          {status.name}
        </label>
      </li>
    ))

  return (
    <>
      <h3 className='mb-4 font-semibold text-gray-900'>وضعیت دوره</h3>
      <ul className='w-full text-sm text-gray-900 bg-white flex'>{renderStatuses()}</ul>
    </>
  )
}

export { CourseStatus }
