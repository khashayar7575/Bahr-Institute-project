import fuzzysort from 'fuzzysort'
import moment from 'jalali-moment'
import { CourseDataType } from '../types/data-types/data-types.utils'
import { FilteringCourseObjectType } from '../types/filtering-types/filtering-types.utils'

export const courseFiltering = (
  filteringState: FilteringCourseObjectType,
  courseData: CourseDataType[]
) => {
  let courseResults = courseData
  // filter
  courseResults = courseFilter(courseResults, filteringState)

  // search
  if (filteringState.searchValue !== '')
    courseResults = search(filteringState.searchValue, courseResults)

  // sort
  if (filteringState.sortOption.key !== 'all')
    courseResults = sort(
      filteringState.sortOption.key,
      filteringState.sortOption.order,
      courseResults
    )

  return courseResults
}

const search = (searchValue: string, data: CourseDataType[]) => {
  const searchOptions = { key: 'title' }
  const searchResults = fuzzysort.go(searchValue, data, searchOptions)
  const finalResult = searchResults.map((course) => course.obj)
  return finalResult
}

const sort = (key: string, order: string, data: CourseDataType[]) =>
  data.sort((a: any, b: any) => {
    if (key === 'title') return a.title.localeCompare(b.title)
    if (key === 'cost') return order === 'descending' ? b.cost - a.cost : a.cost - b.cost
    if (key === 'startDate')
      return order === 'ascending'
        ? new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        : new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  })

const isCapacityValide = (capacity: number, filter: string) => {
  if (filter === 'all') return true
  return filter === 'notFull' ? capacity !== 0 : capacity === 0
}

const isStatusValide = (endDate: string, filter: string) => {
  if (filter === 'all') return true
  const courseGregurianDate = new Date(
    moment.from(endDate, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')
  )
  return filter === 'notCompleted'
    ? courseGregurianDate > new Date()
    : courseGregurianDate < new Date()
}
const isCategoryValide = (lessonCategoryId: number, filterList: string[]) => {
  if (filterList.length === 0) return true
  return filterList.indexOf(lessonCategoryId.toString()) !== -1
}

const isInstructorsValide = (instructorId: string, filterList: string[]) => {
  if (filterList.length === 0) return true
  return filterList.indexOf(instructorId) !== -1
}

const isCostValide = (coursePrice: number, PriceRange: { min: number; max: number }): boolean => {
  return coursePrice >= PriceRange.min && coursePrice <= PriceRange.max
}

const courseFilter = (courseData: CourseDataType[], filteringState: FilteringCourseObjectType) => {
  const newCourse = courseData.filter(
    (course) =>
      isCapacityValide(course.capacity, filteringState.capacityValue) &&
      isStatusValide(course.endDate, filteringState.statusValue) &&
      isCategoryValide(course.lesson.category.id, filteringState.categories) &&
      isInstructorsValide(course.teacher._id, filteringState.instructors) &&
      isCostValide(course.cost, filteringState.costRange)
  )
  return newCourse
}
