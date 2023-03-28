import React from 'react'

import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid'

import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useFilters,
  useSortBy,
  usePagination,
} from 'react-table'

import { BsChevronExpand, BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { PrimaryButton } from '../Buttons/PrimaryButton'
import { integerToPersianNumber } from '../../../core/utils/convert-numbers/integer-to-persian-number.utils'
import { SelectOption } from '../SelectOption/SelectOption'

const pageSizeOptions = [
  { text: 5, value: 5 },
  { text: 10, value: 10 },
  { text: 15, value: 15 },
]

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination // new
  )
  // Render the UI for your table

  return (
    <div>
      <div className='flex gap-x-2'>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
          recordCount={rows.length}
        />
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div key={column.id}>
                {/* <label for={column.id}>{column.render("Header")}: </label> */}
                {column.render('Filter')}
              </div>
            ) : null
          )
        )}
      </div>
      <div className='flex flex-col my-8'>
        <div className='-my-2 overflow-x-auto'>
          <div className='py-2 align-middle inline-block min-w-full'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table {...getTableProps()} className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-200'>
                  {headerGroups.map((headerGroup, index) => (
                    <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column, index) => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th
                          key={index}
                          scope='col'
                          className={
                            'group px-2 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider ' +
                            (column.responsive && column.responsive)
                          }
                          {...(column.sort
                            ? { ...column.getHeaderProps(column.getSortByToggleProps()) }
                            : null)}
                        >
                          <div
                            className={
                              'flex items-center font-bold text-xs text-gray-400' +
                              (index + 1 === columns.length ? ' justify-center' : '')
                            }
                          >
                            {column.render('Header')}
                            {/* Add a sort direction indicator */}
                            {column.sort ? (
                              <span>
                                {column.isSorted ? (
                                  column.isSortedDesc ? (
                                    <BsChevronDown className='w-3 h-3 text-gray-400' />
                                  ) : (
                                    <BsChevronUp className='w-3 h-3 text-gray-400' />
                                  )
                                ) : (
                                  <BsChevronExpand className='w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100' />
                                )}
                              </span>
                            ) : null}
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()} className='bg-white divide-y divide-gray-200'>
                  {page.length > 0
                    ? page.map((row, i) => {
                        // new
                        prepareRow(row)
                        return (
                          <tr key={i} {...row.getRowProps()}>
                            {row.cells.map((cell, index) => {
                              return (
                                <td
                                  key={index}
                                  {...cell.getCellProps()}
                                  className={
                                    ' text-neutral-600 text-sm px-2 py-4 whitespace-nowrap ' +
                                    (cell.column.responsive && cell.column.responsive)
                                  }
                                >
                                  {cell.render('Cell')}
                                </td>
                              )
                            })}
                          </tr>
                        )
                      })
                    : null}
                </tbody>
              </table>
              {page.length === 0 ? (
                <div className='flex justify-center my-10'>
                  <h2 className='font-bold text-neutral-500 text-base'>
                    متاسفانه داده ای در این لیست موجود نیست !
                  </h2>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {page.length > 0 ? (
        <div dir='ltr' className='py-3 flex items-center justify-between '>
          <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
            <div className='w-20'>
              <SelectOption
                optionsList={pageSizeOptions}
                selectedOption={state.pageSize}
                setSelectedOption={(value) => setPageSize(value)}
              />
            </div>
            <div>
              <nav
                dir='ltr'
                className='relative z-0 inline-flex rounded-md'
                aria-label='Pagination'
              >
                <button
                  className='rounded bg-neutral-300 p-2 mr-1'
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  <span className='sr-only'>First</span>
                  <ChevronDoubleLeftIcon className='h-5 w-5' aria-hidden='true' />
                </button>
                <button
                  className='rounded bg-neutral-300 p-2 mr-1'
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  <span className='sr-only'>Previous</span>
                  <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
                </button>
                {data.length > 0 ? (
                  <span className=' self-center text-lg text-gray-700 px-4 bg-transparent'>
                    <span className='font-medium'>
                      {integerToPersianNumber(parseInt(state.pageIndex + 1))}
                    </span>
                    {` `}/{` `}
                    <span className='font-medium'>
                      {integerToPersianNumber(parseInt(pageOptions.length))}
                    </span>
                  </span>
                ) : null}
                <button
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  className='rounded bg-neutral-300 p-2 ml-1'
                >
                  <span className='sr-only'>Next</span>
                  <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
                </button>
                <button
                  className='rounded bg-neutral-300 p-2 ml-1'
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  <span className='sr-only'>Last</span>
                  <ChevronDoubleRightIcon className='h-5 w-5' aria-hidden='true' />
                </button>
              </nav>
            </div>
            <div dir='rtl' className='flex items-center'>
              <span>تعداد محتوا :</span>
              <span className='text-lg pr-2'>{integerToPersianNumber(data.length)}</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter, recordCount }) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <div className='group relative text-gray-600 focus-within:text-gray-400 rounded shadow-md'>
      <span className='absolute inset-y-0 left-0 flex items-center pr-2'>
        <button
          type='button'
          className='  focus:outline-none focus:shadow-outline rounded-lg text-gray-400 hover:text-teal-500 flex'
        >
          <span className='ml-2 px-1 py-0.5 mt-1 rounded text-xs bg-neutral-500 text-white hidden group-focus-within:flex items-center justify-center'>
            {integerToPersianNumber(recordCount)}
          </span>
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            className='w-9 h-9 p-2 rounded-md bg-neutral-600 text-white'
          >
            <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
          </svg>
        </button>
      </span>
      <input
        type='text'
        name='q'
        className='py-2 pr-4 text-sm text-gray-900 rounded-lg pl-12 focus:outline-none focus:text-gray-900'
        placeholder='جستجو ...'
        autoComplete='off'
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
      />
    </div>
  )
}
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach((row) => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <label className='flex gap-x-2 items-baseline'>
      <span className='text-gray-700'> {render('Header')}:</span>
      <select
        className='mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value=''>همه</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export { Table }
