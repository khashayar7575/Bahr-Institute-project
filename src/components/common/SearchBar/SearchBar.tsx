import { useState, FC, ChangeEvent } from 'react'

type Props = {
  searchValue: string
  onSearchSubmit: (arg: any) => void
  storeSearchValueHandler: (arg: string) => void
}

const SearchBar: FC<Props> = ({ searchValue, onSearchSubmit, storeSearchValueHandler }) => {
  const [inputValue, setInputValue] = useState(searchValue)
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const handleSubmit = () => {
    if (inputValue.trim().length === 0) return null
    else {
      onSearchSubmit(inputValue)
      storeSearchValueHandler(inputValue)
      setInputValue('')
    }
  }

  return (
    <div className='group relative text-gray-600 focus-within:text-gray-400 rounded-md border-r-2 border-l-2 shadow'>
      <span className='absolute inset-y-0 left-0 flex items-center pr-2'>
        <button
          type='submit'
          className='  focus:outline-none focus:shadow-outline rounded-lg text-gray-400 hover:text-teal-500 flex'
          onClick={handleSubmit}
        >
          {/* <span className="ml-2 px-2 mt-1 rounded-md text-xs bg-teal-500 text-white hidden group-focus-within:flex items-center justify-center">
            {badgeToFarsiNumber}
          </span> */}
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            className='w-9 h-9 p-2 rounded-md bg-[#303030]  '
          >
            <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
          </svg>
        </button>
      </span>
      <input
        type='text'
        name='q'
        className='py-2 pr-4 text-sm text-gray-900  rounded-lg pl-12 focus:outline-none focus:text-gray-900'
        placeholder='جستجو ...'
        autoComplete='off'
        value={inputValue}
        onChange={handleSearchChange}
      />
    </div>
  )
}

export { SearchBar }
