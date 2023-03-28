import React, { useState, useEffect, FC, ChangeEvent } from 'react'

import fuzzysort from 'fuzzysort'
import { Image } from '../../../common/CustomImage/Image'
import { integerToPersianNumber } from '../../../../core/utils/convert-numbers/integer-to-persian-number.utils'
import { GetCourseDataType } from '../../../../core/utils/types/data-types/data-types.utils'

type Props = {
  onInstructorsSelectChange: (arg: string[]) => void
  selectedInstructors: string[]
  coursesList: GetCourseDataType[]
}

type Ins = {
  _id: string
  fullName: string
  email: string
  profile: string
}

const FilteringViaInstructors: FC<Props> = ({
  coursesList,
  selectedInstructors,
  onInstructorsSelectChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const rawInstructors = coursesList.map((course) => course.teacher)
  const customSet = (list: Ins[]) => {
    const mySet: Ins[] = []
    list.forEach((object) => {
      const hasObject = mySet.find((obj) => object._id === obj._id)
      if (!hasObject) {
        mySet.push(object)
      }
    })
    return mySet
  }
  const instructorsList = customSet(rawInstructors)
  const [renderInstructorsList, setRenderInstructorsList] = useState(instructorsList)
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleInstructorSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    const instructorId = event.currentTarget.value
    const index = selectedInstructors.indexOf(instructorId)
    if (event.currentTarget.checked) {
      const newSelected = [...selectedInstructors]
      newSelected.push(instructorId)
      onInstructorsSelectChange(newSelected)
    } else {
      const newSelected = [...selectedInstructors]
      newSelected.splice(index, 1)
      onInstructorsSelectChange(newSelected)
    }
  }

  useEffect(() => {
    const searchOptions = { key: 'fullName' }
    const searchResults = fuzzysort.go(searchValue, instructorsList, searchOptions)
    const finalResult = searchResults.map((element) => element.obj)
    if (searchValue.length === 0) return setRenderInstructorsList(instructorsList)
    setRenderInstructorsList(finalResult)
  }, [searchValue])

  const renderInstructors = (selectedInstructors: string[]) => {
    return renderInstructorsList.length === 0 ? (
      <span className='text-sm font-normal mx-auto my-6 text-gray-500'>
        برای عبارت جستجو شده نتیجه ای یافت نشد
      </span>
    ) : (
      renderInstructorsList.map((instructor, index) => (
        <li key={index} className='flex flex-col px-3 my-1 shadow-lg mx-2 bg-white'>
          <label className='py-3 ml-2 w-full text-sm text-gray-900 flex items-center justify-between'>
            <div className='flex items-center'>
              <figure className='w-9 h-9 rounded-full overflow-hidden'>
                <Image src={instructor.profile} className='w-full h-full object-cover' alt=' ' />
              </figure>
              <span className='mr-4'>{instructor.fullName}</span>
            </div>
            <div>
              <input
                type='checkbox'
                checked={selectedInstructors.indexOf(instructor._id) !== -1}
                onChange={handleInstructorSelectChange}
                value={instructor._id}
                className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-20'
              />
            </div>
          </label>
        </li>
      ))
    )
  }

  return (
    <>
      <h3 className='mb-4 font-semibold text-gray-900'>جستجو بر اساس اساتید</h3>
      <div onFocus={() => setIsOpen(true)} className='flex flex-col'>
        <div className='flex relative'>
          <input
            type='text'
            className='py-2 pr-4 w-full text-sm text-gray-900 bg-slate-200 rounded focus:outline-none focus:text-gray-900'
            placeholder='جستجو ...'
            autoComplete='off'
            value={searchValue}
            onChange={handleSearchChange}
          />
          <div className='absolute inset-y-0 left-4 flex items-center'>
            <span className=' py-1 px-2 rounded text-xs bg-gray-700 text-white flex items-center justify-center'>
              {integerToPersianNumber(selectedInstructors.length)}
            </span>
          </div>
        </div>
        <div className={'' + (isOpen ? ' flex flex-col mt-0.5' : ' hidden')}>
          <ul className='h-28 overflow-auto flex flex-col'>
            {renderInstructors(selectedInstructors)}
          </ul>
          <div className='flex justify-center'>
            <button
              onClick={() => setIsOpen(false)}
              className='w-full bg-neutral-800 z-20 text-white text-base py-2 rounded'
            >
              بستن
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export { FilteringViaInstructors }
