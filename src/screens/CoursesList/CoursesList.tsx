import React, { useState, useEffect } from 'react'
import { ReactComponent as CoursesSvg } from '../../assets/images/SVG/Path 56.svg'
import { PathAutoAnimatioin } from '../../components/common/PathMotion/PathAutoAnimatioin'
import { CourseCard } from '../../components/CoursesList/CourseCard'
import { Pagination } from '../../components/common/Pagination/Pagination'
import { SearchBar } from '../../components/common/SearchBar/SearchBar'
import { HeadingTitle } from '../../components/common/HeadingTitle'

import { RemoveSearchBadge } from '../../components/common/SearchBar/RemoveSearchBadge'
import { CourseDataType } from '../../core/utils/types/data-types/data-types.utils'
import { toFarsiNumber } from '../../core/utils/convert-numbers/to-farsi-number.utils'
import { RootState } from '../../core/redux/store'
import { useSelector } from 'react-redux'
import { courseFiltering } from './../../core/utils/filtering/course-filtering.utils'
import {
  FilteringCourseObjectType,
  SortingCoursesType,
} from '../../core/utils/types/filtering-types/filtering-types.utils'
import { CoursePageCapacity } from './../../components/CoursesList/CoursePageCapacity/CoursePageCapacity'
import { ViewSetting } from '../../components/common/ViewSetting'
import { CourseSortSelectOption } from '../../components/CoursesList/CourseSortSelectOption/CourseSortSelectOption'
import { CourseFiltering } from '../../components/CoursesList/Filtering/CourseFiltering/CourseFiltering'
import { motion, Variants } from 'framer-motion'

const filteringObject: FilteringCourseObjectType = {
  categories: [],
  capacityValue: 'all',
  statusValue: 'all',
  instructors: [],
  searchValue: '',
  sortOption: { key: 'all', order: 'none' },
  costRange: { min: 10000, max: 5000000 },
}

const paginationObject = {
  pageCapacity: 10,
  currentPage: 0,
}

const CoursesList = () => {
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
  const { CourseData } = useSelector((state: RootState) => state.CourseData)
  const [filteredCourse, setFilteredCourse] = useState<CourseDataType[]>([])
  const [currentPageData, setCurrentPageData] = useState<CourseDataType[]>([])

  const [filtering, setFiltering] = useState(filteringObject)
  const [pagination, setPagination] = useState(paginationObject)

  const [showSearchResultMessage, setShowSearchResultMessage] = useState(false)
  const [storedSearchValue, setStoredSearchValue] = useState(filtering.searchValue)
  const [cardView, setCardView] = useState(1)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const filteringResult = courseFiltering(filtering, CourseData)
    setFilteredCourse(filteringResult)
  }, [filtering, CourseData])

  useEffect(() => {
    const start = pagination.pageCapacity * pagination.currentPage
    const end = pagination.pageCapacity * pagination.currentPage + pagination.pageCapacity

    const filteredFinalCourse = filteredCourse.slice(start, end)
    setCurrentPageData(filteredFinalCourse)
  }, [filteredCourse, pagination, filtering])

  const renderFinalData = () => {
    return currentPageData.map((element, index) => (
      <CourseCard key={index} data={element} view={cardView} />
    ))
  }

  // filtering section

  const resetCurrentPageHandler = () => {
    const newPagination = { ...pagination }
    newPagination.currentPage = 0
    setPagination(newPagination)
  }

  const onCategorySelect = (newCategoryList: string[]) => {
    const newFiltering = { ...filtering }
    newFiltering.categories = newCategoryList
    setFiltering(newFiltering)
    resetCurrentPageHandler()
  }

  const handleCapacityChange = (value: string) => {
    const newFiltering = { ...filtering }
    newFiltering.capacityValue = value
    setFiltering(newFiltering)
    resetCurrentPageHandler()
  }

  const handleStatusChange = (value: string) => {
    const newFiltering = { ...filtering }
    newFiltering.statusValue = value
    setFiltering(newFiltering)
    resetCurrentPageHandler()
  }

  const onInstructorSelect = (newInstructorsList: string[]) => {
    const newFiltering = { ...filtering }
    newFiltering.instructors = newInstructorsList
    setFiltering(newFiltering)
    resetCurrentPageHandler()
  }

  const onCostRangeChange = (rangeValue: { min: number; max: number }) => {
    const newFiltering = { ...filtering }
    newFiltering.costRange = rangeValue
    setFiltering(newFiltering)
    resetCurrentPageHandler()
  }

  const onFilteringReset = () => {
    const newFiltering = { ...filtering }
    newFiltering.categories = []
    newFiltering.capacityValue = 'all'
    newFiltering.statusValue = 'all'
    newFiltering.instructors = []
    newFiltering.costRange = { min: 10000, max: 5000000 }
    setFiltering(newFiltering)
    resetCurrentPageHandler()
  }

  // searching section

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

  // sorting section
  const onSortChange = (value: SortingCoursesType) => {
    const newFiltering = { ...filtering }
    newFiltering.sortOption = value
    setFiltering(newFiltering)
    resetCurrentPageHandler()
  }

  //set the page size by user from a select option element
  const pageSizeChangeHandler = (value: number | string) => {
    const newPagination = { ...pagination }
    const pageCount = Math.ceil(filteredCourse.length / Number(value))
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

  // take care of card views on the list
  const cardsViewHandler = (viewNumber: number) => {
    setCardView(viewNumber)
  }

  return (
    <div className='relative pt-10 pb-10 lg:pt-16 lg:pb-15'>
      <div className='pt-2'>
        {' '}
        <HeadingTitle>لیست دوره ها</HeadingTitle>
      </div>
      <div className='mt-2'>
        <PathAutoAnimatioin duration={2} height='150px' svgWidthPath={1}>
          {CoursesSvg}
        </PathAutoAnimatioin>
      </div>
      <motion.div
        initial='hidden'
        variants={onLoadAnimation}
        whileInView='onView'
        viewport={{ once: true, amount: 0.5 }}
        className='flex relative items-center justify-between py-4 mt-16'
      >
        <div className=' flex items-center'>
          <div>
            <form onSubmit={onSearchSubmit}>
              <SearchBar
                searchValue={filtering.searchValue}
                onSearchSubmit={handleSearchChange}
                storeSearchValueHandler={storeSearchValueHandler}
              />
            </form>
          </div>
          <div>
            <button className='flex mr-8 shadow-md px-4 py-1 ' onClick={() => setIsOpen(!isOpen)}>
              فیلتر
            </button>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='ml-12'>
            <CourseSortSelectOption sortOption={filtering.sortOption} onSortChange={onSortChange} />
          </div>
          <div>
            <ViewSetting cardView={cardView} onViewChange={cardsViewHandler} />
          </div>
        </div>
      </motion.div>
      {!showSearchResultMessage ? null : (
        <div className='my-10 flex items-center'>
          <span>{`برای عبارت جستجو شد ${toFarsiNumber(
            filteredCourse.length
          )} نتیجه یافت شد : `}</span>
          <span className='mr-3'>
            <RemoveSearchBadge
              searchValue={storedSearchValue}
              resetFiltering={handleResetSearchField}
            />
          </span>
        </div>
      )}
      <motion.div
        initial='hidden'
        variants={onLoadAnimation}
        whileInView='onView'
        viewport={{ once: false, amount: 0.5 }}
        className='relative'
      >
        {isOpen ? (
          <CourseFiltering
            onCategorySelectChange={onCategorySelect}
            selectedCategories={filtering.categories}
            handleCapacityChange={handleCapacityChange}
            valueOfCapacity={filtering.capacityValue}
            handleStatusChange={handleStatusChange}
            valueOfStatus={filtering.statusValue}
            onInstructorsSelectChange={onInstructorSelect}
            selectedInstructors={filtering.instructors}
            coursesList={CourseData}
            costRange={filtering.costRange}
            onCostRangeChange={onCostRangeChange}
            onFilteringReset={onFilteringReset}
          />
        ) : null}
      </motion.div>
      <section
        className={
          'my-12 grid gap-5 grid-cols-1 ' +
          (cardView === 1
            ? '  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
            : 'sm:grid-cols-1 md:grid-cols-2  ')
        }
      >
        {currentPageData ? renderFinalData() : <h1>loading...</h1>}
      </section>
      <div className='flex justify-between items-center py-4'>
        <div>
          <span>{`تعداد دوره ها : ${filteredCourse.length}`}</span>
        </div>
        <div>
          <Pagination
            totalDataCount={filteredCourse.length}
            pageSize={pagination.pageCapacity}
            onPageChange={paginationChangeHandler}
            currentPage={pagination.currentPage}
          />
        </div>
        <div className='w-20'>
          <CoursePageCapacity
            pageCapacity={pagination.pageCapacity}
            onPageCapacityChange={pageSizeChangeHandler}
          />
        </div>
      </div>
    </div>
  )
}

export { CoursesList }
