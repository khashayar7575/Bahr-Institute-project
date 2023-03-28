import fuzzysort from 'fuzzysort'

import { FilteringBlogObjectType } from '../types/filtering-types/filtering-types.utils'
import { mockApiBlogData } from '../types/mock-api-data-types/news-extend/news-extend.types'

export const blogFiltering = (
  filteringState: FilteringBlogObjectType,
  blogData: mockApiBlogData[]
) => {
  let blogResults = blogData

  // filter
  blogResults = categoryFilterV1(blogData, filteringState.category)
  blogResults = categoryFilterV2(blogResults, filteringState.subject)

  // search
  if (filteringState.searchValue !== '')
    blogResults = search(filteringState.searchValue, blogResults)

  if (filteringState.sortOption.key !== 'all')
    blogResults = sort(filteringState.sortOption.key, filteringState.sortOption.order, blogResults)

  return blogResults
}

const search = (searchValue: string, data: mockApiBlogData[]) => {
  const searchOptions = { key: 'title' }
  const searchResults = fuzzysort.go(searchValue, data, searchOptions)
  const finalResult = searchResults.map((course) => course.obj)
  return finalResult
}

const sort = (key: string, order: string, data: mockApiBlogData[]) =>
  data.sort((a: any, b: any): any => {
    if (key === 'createdDate')
      return order === 'descending'
        ? new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
        : new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
    if (key === 'visitorMembers')
      return order === 'descending'
        ? b.visitorMembers.length - a.visitorMembers.length
        : a.visitorMembers.length - b.visitorMembers.length
  })

const categoryFilterV1 = (blogData: mockApiBlogData[], currentCategory: string) => {
  const filteredData = blogData.filter(
    (blog) => blog.category === currentCategory || currentCategory === 'all'
  )
  return filteredData
}

const categoryFilterV2 = (blogData: mockApiBlogData[], currentSubject: string) => {
  console.log(currentSubject)
  const filteredData = blogData.filter(
    (blog) => blog.subjectCategory === currentSubject || currentSubject === 'all'
  )
  return filteredData
}
