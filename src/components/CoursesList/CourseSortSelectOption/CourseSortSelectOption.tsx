import { FC } from 'react'

import { SortingCoursesType } from '../../../core/utils/types/filtering-types/filtering-types.utils'
import { SelectOption } from '../../common/SelectOption/SelectOption'

type Props = {
  sortOption: SortingCoursesType
  onSortChange: (arg: SortingCoursesType) => void
}

const CourseSortSelectOption: FC<Props> = ({ sortOption, onSortChange }) => {
  const sortObjectLibrary = {
    all: { key: 'all', order: 'none' },
    title: { key: 'title', order: 'descending' },
    costAscending: { key: 'cost', order: 'ascending' },
    costDescending: { key: 'cost', order: 'descending' },
    startDateAscending: { key: 'startDate', order: 'ascending' },
    startDateDescending: { key: 'startDate', order: 'descending' },
  }

  const sortOptions = [
    { text: 'پیش فرض', value: 'all' },
    { text: 'بر اساس عنوان', value: 'title' },
    { text: 'قیمت کم به زیاد', value: 'costAscending' },
    { text: 'قیمت زیاد به کم', value: 'costDescending' },
    { text: 'تاریخ کم به زیاد', value: 'startDateAscending' },
    { text: 'تاریخ زیاد به کم', value: 'startDateDescending' },
  ]

  const getSelectedOptionFromObject = () => {
    let selectedOption = 'all'
    Object.keys(sortObjectLibrary).forEach((objectkey) => {
      if (
        (sortObjectLibrary as any)[objectkey].key === sortOption.key &&
        (sortObjectLibrary as any)[objectkey].order === sortOption.order
      )
        selectedOption = objectkey
    })
    return selectedOption
  }

  const handleSelectChange = (value: any) => {
    onSortChange((sortObjectLibrary as any)[value])
  }

  return (
    <div className='w-40 z-50'>
      <SelectOption
        optionsList={sortOptions}
        selectedOption={getSelectedOptionFromObject()}
        setSelectedOption={handleSelectChange}
      />
    </div>
  )
}

export { CourseSortSelectOption }
