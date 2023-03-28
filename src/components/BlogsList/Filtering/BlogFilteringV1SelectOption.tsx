import { FC } from 'react'

import { SelectOption } from '../../common/SelectOption/SelectOption'

type Props = {
  selectedCategory: string
  onCategoryChange: (arg: string | number) => void
}

const BlogFilteringV1SelectOption: FC<Props> = ({ selectedCategory, onCategoryChange }) => {
  const filteringOptions = [
    { text: 'همه', value: 'all' },
    { text: 'اخبار', value: 'news' },
    { text: 'مقالات', value: 'article' },
  ]
  return (
    <div className='w-40 z-50'>
      <SelectOption
        optionsList={filteringOptions}
        selectedOption={selectedCategory}
        setSelectedOption={onCategoryChange}
      />
    </div>
  )
}

export { BlogFilteringV1SelectOption }
