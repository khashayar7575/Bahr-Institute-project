import { FC } from 'react'

import { SortingCoursesType } from '../../../core/utils/types/filtering-types/filtering-types.utils'
import { SelectOption } from '../../common/SelectOption/SelectOption'

type Props = {
  sortOption: SortingCoursesType
  onSortChange: (arg: SortingCoursesType) => void
}

const BlogSortingSelectOption: FC<Props> = ({ sortOption, onSortChange }) => {
  const sortObjectLibrary = {
    all: { key: 'all', order: 'none' },
    newest: { key: 'createdDate', order: 'descending' },
    oldest: { key: 'createdDate', order: 'ascending' },
    visitorDescending: { key: 'visitorMembers', order: 'descending' },
    visitorAscending: { key: 'visitorMembers', order: 'ascending' },
  }

  const sortOptions = [
    { text: 'پیش فرض', value: 'all' },
    { text: 'جدید ترین', value: 'newest' },
    { text: 'قدیمی ترین', value: 'oldest' },
    { text: 'بیشترین بازدید', value: 'visitorDescending' },
    { text: 'کمترین بازدید', value: 'visitorAscending' },
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

export { BlogSortingSelectOption }
