import React, { useState, useEffect } from 'react'
import { ReactComponent as BlogsSvg } from '../../assets/images/SVG/Path 55.svg'
import { PathAutoAnimatioin } from '../../components/common/PathMotion/PathAutoAnimatioin'

import { BlogCard } from '../../components/BlogsList/BlogCard'
import { HeadingTitle } from '../../components/common/HeadingTitle'
import { Pagination } from '../../components/common/Pagination/Pagination'
import { RemoveSearchBadge } from '../../components/common/SearchBar/RemoveSearchBadge'
import { GetBlogDataType } from '../../core/utils/types/data-types/data-types.utils'
import { toFarsiNumber } from '../../core/utils/convert-numbers/to-farsi-number.utils'
import { ViewSetting } from '../../components/common/ViewSetting'
import { SearchBar } from '../../components/common/SearchBar/SearchBar'
import { useSelector } from 'react-redux'
import { RootState } from '../../core/redux/store'
import { blogFiltering } from './../../core/utils/filtering/blog-filtering.utils'
import { BlogPageCapacity } from '../../components/BlogsList/BlogPageCapacity/BlogPageCapacity'

import { motion, Variants } from 'framer-motion'
import { BlogSortingSelectOption } from '../../components/BlogsList/Sorting/BlogSortingSelectOption'
import { mockApiBlogData } from '../../core/utils/types/mock-api-data-types/news-extend/news-extend.types'
import { BlogFilteringV1SelectOption } from '../../components/BlogsList/Filtering/BlogFilteringV1SelectOption'
import { BlogFilteringV2SelectOption } from '../../components/BlogsList/Filtering/BlogFilteringV2SelectOption'
import { getMockApiData } from '../../core/services/mock/mock-manage.api'

const filteringObject = {
  searchValue: '',
  category: 'all',
  subject: 'all',
  sortOption: { key: 'all', order: 'none' },
}

const paginationObject = {
  pageCapacity: 10,
  currentPage: 0,
}

const BlogsList = () => {
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
  const { BlogData } = useSelector((state: RootState) => state.BlogData)
  const [filteredBlog, setFilteredBlog] = useState<mockApiBlogData[]>([])
  const [currentPageData, setCurrentPageData] = useState<mockApiBlogData[]>([])
  const [filtering, setFiltering] = useState(filteringObject)
  const [pagination, setPagination] = useState(paginationObject)
  console.log(filtering)
  const [showSearchResultMessage, setShowSearchResultMessage] = useState(false)
  const [storedSearchValue, setStoredSearchValue] = useState(filtering.searchValue)
  const [cardView, setCardView] = useState(1)
  const [subjectsList, setSubjectList] = useState<string[]>([])

  const getSubjectsExtend = async () => {
    const list = await getMockApiData('SubjectCategories')
    setSubjectList(list)
  }

  useEffect(() => {
    getSubjectsExtend()
  }, [BlogData])

  useEffect(() => {
    const filteringResult = blogFiltering(filtering, BlogData)
    setFilteredBlog(filteringResult)
  }, [filtering, BlogData])

  useEffect(() => {
    const start = pagination.pageCapacity * pagination.currentPage
    const end = pagination.pageCapacity * pagination.currentPage + pagination.pageCapacity

    const filteredFinalCourse = filteredBlog.slice(start, end)
    setCurrentPageData(filteredFinalCourse)
  }, [filteredBlog, pagination, filtering])

  const renderFinalData = () => {
    return currentPageData.map((element, index) => (
      <BlogCard key={index} data={element} view={cardView} />
    ))
  }

  // filtering based on category

  const onCategoryChange = (value: string | number) => {
    const newFiltering = { ...filtering }
    newFiltering.category = value.toString()
    setFiltering(newFiltering)
  }

  const onSubjectChange = (value: string | number) => {
    const newFiltering = { ...filtering }
    newFiltering.subject = value.toString()
    setFiltering(newFiltering)
  }

  const resetCurrentPageHandler = () => {
    const newPagination = { ...pagination }
    newPagination.currentPage = 0
    setPagination(newPagination)
  }

  // searching section

  const handleSearchChange = (value: string) => {
    const newFiltering = { ...filtering }
    newFiltering.searchValue = value
    setFiltering(newFiltering)
  }

  const onSearchSubmit = (e: any) => {
    e.preventDefault()
    resetCurrentPageHandler()
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
  const onSortChange = (value: { key: string; order: string }) => {
    const newFiltering = { ...filtering }
    newFiltering.sortOption = value
    newFiltering.sortOption = value
    setFiltering(newFiltering)
    resetCurrentPageHandler()
  }

  //set the page size by user from a select option element
  const pageSizeChangeHandler = (value: number | string) => {
    const newPagination = { ...pagination }
    const pageCount = Math.ceil(filteredBlog.length / Number(value))
    newPagination.pageCapacity = Number(value)
    newPagination.currentPage = Math.min(pageCount - 1, newPagination.currentPage)
    setPagination(newPagination)
    resetCurrentPageHandler()
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

  const categoryRenamer = () => {
    if (filtering.category === 'all') return 'همه'
    else if (filtering.category === 'news') return 'اخبار'
    else return 'مقالات'
  }

  const subjectRenamer = () => {
    if (filtering.subject === 'all') return 'همه موضوعات'
    return `موضوع ${filtering.subject}`
  }

  return (
    <div className='relative pt-10 pb-10 lg:pt-16 lg:pb-15'>
      <div className='pt-2'>
        <HeadingTitle>لیست اخبار و مقالات</HeadingTitle>
      </div>
      <div className='mt-2'>
        <PathAutoAnimatioin duration={1.5} height='300px' svgWidthPath={2}>
          {BlogsSvg}
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
          <div className='mr-8'>
            <BlogFilteringV1SelectOption
              selectedCategory={filtering.category}
              onCategoryChange={onCategoryChange}
            />
          </div>
          <div className='mr-8'>
            <BlogFilteringV2SelectOption
              selectedSubject={filtering.subject}
              onSubjectChange={onSubjectChange}
              subjectCategoriesList={subjectsList}
            />
          </div>
        </div>
        <div className='flex items-center'>
          <div className='ml-8'>
            <BlogSortingSelectOption
              sortOption={filtering.sortOption}
              onSortChange={onSortChange}
            />
          </div>
          <div>
            <ViewSetting cardView={cardView} onViewChange={cardsViewHandler} />
          </div>
        </div>
      </motion.div>
      {!showSearchResultMessage ? null : (
        <div className=' flex items-center'>
          <span>{` برای عبارت جستجو شده در دسته بندی ${categoryRenamer()} و ${subjectRenamer()} ${toFarsiNumber(
            filteredBlog.length
          )} نتیجه یافت شد : `}</span>
          <span className='mr-3'>
            <RemoveSearchBadge
              searchValue={storedSearchValue}
              resetFiltering={handleResetSearchField}
            />
          </span>
        </div>
      )}
      <section
        className={
          'my-12 grid gap-5 ' +
          (cardView === 1
            ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
            : 'grid-cols-1 lg:grid-cols-2')
        }
      >
        {currentPageData.length > 0 ? (
          renderFinalData()
        ) : (
          <span className='col-span-full mt-8 flex justify-center font-bold'>
            متاسفانه داده ای برای نمایش وجود ندارد !
          </span>
        )}
      </section>
      <div className='flex justify-between items-center py-4'>
        <div>
          <span>{`تعداد بلاگ ها : ${filteredBlog.length}`}</span>
        </div>
        <div>
          <Pagination
            totalDataCount={filteredBlog.length}
            pageSize={pagination.pageCapacity}
            onPageChange={paginationChangeHandler}
            currentPage={pagination.currentPage}
          />
        </div>
        <div className='w-20'>
          <BlogPageCapacity
            pageCapacity={pagination.pageCapacity}
            onPageCapacityChange={pageSizeChangeHandler}
          />
        </div>
      </div>
    </div>
  )
}

export { BlogsList }
