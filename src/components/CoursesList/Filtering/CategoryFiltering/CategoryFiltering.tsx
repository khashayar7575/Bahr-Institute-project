import React, { ChangeEvent, FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../core/redux/store'

type Props = {
  onCategorySelectChange: (arg: string[]) => void
  selectedCategories: string[]
}

const CategoryFiltering: FC<Props> = ({ selectedCategories, onCategorySelectChange }) => {
  const { CategoryData } = useSelector((state: RootState) => state.CategoryData)

  const handleCategorySelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    const categoryId = event.currentTarget.value
    const index = selectedCategories.indexOf(categoryId)
    if (event.currentTarget.checked) {
      const newSelected = [...selectedCategories]
      newSelected.push(categoryId)
      onCategorySelectChange(newSelected)
    } else {
      const newSelected = [...selectedCategories]
      newSelected.splice(index, 1)
      onCategorySelectChange(newSelected)
    }
  }

  const renderCategories = (selectedCategories: string[]) =>
    CategoryData.map((category, index) => (
      <li key={index} className='col-span-8 sm:col-span-2 lg:col-span-2 flex items-center px-3'>
        <label className='py-3 ml-2 w-full text-sm text-neutral-800 flex'>
          <input
            type='checkbox'
            checked={selectedCategories.indexOf(category.id.toString()) !== -1}
            onChange={handleCategorySelectChange}
            value={category.id}
            className='w-4 h-4 text-neutral-800 bg-gray-100 rounded border-gray-300 focus:ring-neutral-800 focus:ring-20'
          />
          <div className='pr-1'> {category.name}</div>
        </label>
      </li>
    ))

  return (
    <>
      <h3 className='mb-4 font-semibold text-gray-900'>دسته بندی</h3>
      <ul className='w-full text-sm text-gray-900 bg-white grid grid-cols-8'>
        {CategoryData.length > 0 ? renderCategories(selectedCategories) : <h2>loading. . .</h2>}
      </ul>
    </>
  )
}

export { CategoryFiltering }
