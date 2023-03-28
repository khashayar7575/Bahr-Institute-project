import React, { useState, useEffect } from 'react'
import { ReactComponent as InsSvg } from '../../assets/images/SVG/Path 57.svg'
import { PathAutoAnimatioin } from '../../components/common/PathMotion/PathAutoAnimatioin'
import { InstructorCard } from '../../components/InstructorsList/InstructorCard'
import { HeadingTitle } from '../../components/common/HeadingTitle'
import { Pagination } from '../../components/common/Pagination/Pagination'
import { RemoveSearchBadge } from '../../components/common/SearchBar/RemoveSearchBadge'

import { toFarsiNumber } from '../../core/utils/convert-numbers/to-farsi-number.utils'
import { useSelector } from 'react-redux'
import { RootState } from '../../core/redux/store'
import { GetEmployeeDataType } from '../../core/utils/types/data-types/data-types.utils'
import { InstructorPageCapacity } from '../../components/InstructorsList/InstructorPageCapacity/InstructorPageCapacity'
import { SearchBar } from '../../components/common/SearchBar/SearchBar'
import {
  FilteringTeacherObjectType,
  SortingTeachersType,
} from '../../core/utils/types/filtering-types/filtering-types.utils'
import { InstructorSortSelectOption } from '../../components/InstructorsList/InstructorSortSelectOption/InstructorSortSelectOption'
import { teacherFiltering } from './../../core/utils/filtering/teacher-filtering.utils'
import { AsideList } from '../../components/InstructorsList/AsideList'
import { motion, Variants } from 'framer-motion'

const filteringObject: FilteringTeacherObjectType = {
  searchValue: '',
  sortOption: { key: 'all', order: 'none' },
}

const paginationObject = {
  pageCapacity: 5,
  currentPage: 0,
}

const InstructorsList = () => {
  const onLoadAnimation: Variants = {
    hidden: {
      opacity: 0,
      top: -200,
    },
    onView: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 0.5,
      },
    },
  }
  /* first state is for having access to the all courses state which declared in redux store using watcherSaga */
  /* second one is for the courses which got filtered with my customCourseFiltering util in core file */
  /* and 3rd one is for the rendering current page courses */
  const { TeacherData } = useSelector((state: RootState) => state.TeacherData)
  const { CourseData } = useSelector((state: RootState) => state.CourseData)
  const [filteredTeachers, setFilteredTeachers] = useState<GetEmployeeDataType[]>([])
  const [currentPageData, setCurrentPageData] = useState<GetEmployeeDataType[]>([])

  const [filtering, setFiltering] = useState(filteringObject)
  const [pagination, setPagination] = useState(paginationObject)

  const [showSearchResultMessage, setShowSearchResultMessage] = useState(false)
  const [storedSearchValue, setStoredSearchValue] = useState(filtering.searchValue)

  useEffect(() => {
    const filteringResult = teacherFiltering(filtering, TeacherData, CourseData)
    setFilteredTeachers(filteringResult)
  }, [filtering, TeacherData])

  useEffect(() => {
    const start = pagination.pageCapacity * pagination.currentPage
    const end = pagination.pageCapacity * pagination.currentPage + pagination.pageCapacity

    const filteredFinalCourse = filteredTeachers.slice(start, end)
    setCurrentPageData(filteredFinalCourse)
  }, [filteredTeachers, pagination, filtering])

  const renderFinalData = () => {
    return currentPageData.map((element, index) => <InstructorCard key={index} data={element} />)
  }

  // sorting section
  const onSortChange = (value: SortingTeachersType) => {
    console.log(value)
    const newFiltering = { ...filtering }
    newFiltering.sortOption = value
    setFiltering(newFiltering)
  }

  // searching section

  const resetCurrentPageHandler = () => {
    const newPagination = { ...pagination }
    newPagination.currentPage = 0
    setPagination(newPagination)
  }

  const handleSearchChange = (value: string) => {
    const newFiltering = { ...filtering }
    newFiltering.searchValue = value
    setFiltering(newFiltering)
    resetCurrentPageHandler()
  }

  const onSearchSubmit = (e: any) => {
    e.preventDefault()
    return filtering.searchValue.length === 0 ? null : setShowSearchResultMessage(true)
  }

  const storeSearchValueHandler = (searchValue: string) => {
    setStoredSearchValue(searchValue)
  }

  const handleResetSearchField = () => {
    const newFiltering = { ...filtering }
    newFiltering.searchValue = ''
    setFiltering(newFiltering)
    setShowSearchResultMessage(false)
  }

  //set the page size by user from a select option element
  const pageSizeChangeHandler = (value: number | string) => {
    const newPagination = { ...pagination }
    const pageCount = Math.ceil(filteredTeachers.length / Number(value))
    newPagination.pageCapacity = Number(value)
    newPagination.currentPage = Math.min(pageCount - 1, newPagination.currentPage)
    setPagination(newPagination)
  }

  //handle pagination change and set new current page
  const paginationChangeHandler = (pageNumber: number) => {
    const newPagination = { ...pagination }
    newPagination.currentPage = pageNumber
    setPagination(newPagination)
  }

  return (
    <div className='relative pt-10 pb-10 lg:pt-16 lg:pb-15'>
      <div className='pt-2'>
        <HeadingTitle>لیست اساتید</HeadingTitle>
      </div>
      <div className='mt-2'>
        <PathAutoAnimatioin duration={1} height='150px' svgWidthPath={2}>
          {InsSvg}
        </PathAutoAnimatioin>
      </div>
      <motion.div
        initial='hidden'
        variants={onLoadAnimation}
        whileInView='onView'
        viewport={{ once: true, amount: 0.2 }}
        className='flex items-center relative justify-between py-4 mt-16'
      >
        <div className=' flex items-center'>
          <form onSubmit={onSearchSubmit}>
            <SearchBar
              searchValue={filtering.searchValue}
              onSearchSubmit={handleSearchChange}
              storeSearchValueHandler={storeSearchValueHandler}
            />
          </form>
        </div>
        <div className='flex items-center'>
          <div className='ml-12'>
            <InstructorSortSelectOption
              sortOption={filtering.sortOption}
              onSortChange={onSortChange}
            />
          </div>
        </div>
      </motion.div>
      {!showSearchResultMessage ? null : (
        <div className=' flex items-center'>
          <span>{` برای عبارت جستجو شده ${toFarsiNumber(
            filteredTeachers.length
          )} نتیجه یافت شد : `}</span>
          <span className='mr-3'>
            <RemoveSearchBadge
              searchValue={storedSearchValue}
              resetFiltering={handleResetSearchField}
            />
          </span>
        </div>
      )}
      <div className='flex'>
        <div className='mt-3 gap-5 w-3/4 grid-cols-1 '>
          {currentPageData ? renderFinalData() : <h1>Loading ...</h1>}
        </div>
        <div className='w-1/4'>
          <AsideList data={TeacherData} />
        </div>
      </div>
      <div className='flex justify-between items-center py-4'>
        <div>
          <span>{`تعداد دوره ها : ${filteredTeachers.length}`}</span>
        </div>
        <div>
          <Pagination
            totalDataCount={filteredTeachers.length}
            pageSize={pagination.pageCapacity}
            onPageChange={paginationChangeHandler}
            currentPage={pagination.currentPage}
          />
        </div>
        <div className='w-20'>
          <InstructorPageCapacity
            pageCapacity={pagination.pageCapacity}
            onPageCapacityChange={pageSizeChangeHandler}
          />
        </div>
      </div>
    </div>
  )
}

export { InstructorsList }
