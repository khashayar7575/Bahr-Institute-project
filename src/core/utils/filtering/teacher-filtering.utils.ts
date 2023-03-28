import fuzzysort from 'fuzzysort'
import { GetCourseDataType, GetEmployeeDataType } from '../types/data-types/data-types.utils'
import { FilteringTeacherObjectType } from '../types/filtering-types/filtering-types.utils'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export const teacherFiltering = (
  filteringState: FilteringTeacherObjectType,
  teacherData: GetEmployeeDataType[],
  coursesData: GetCourseDataType[]
) => {
  let teacherResults = teacherData

  // search
  if (filteringState.searchValue !== '')
    teacherResults = search(filteringState.searchValue, teacherData)

  // sort
  if (filteringState.sortOption.key !== 'all')
    teacherResults = sort(
      filteringState.sortOption.key,
      filteringState.sortOption.order,
      teacherResults,
      coursesData
    )

  return teacherResults
}

const search = (searchValue: string, data: GetEmployeeDataType[]) => {
  const searchOptions = { key: 'title' }
  const searchResults = fuzzysort.go(searchValue, data, searchOptions)
  const finalResult = searchResults.map((course) => course.obj)
  return finalResult
}

const sort = (
  key: string,
  order: string,
  insData: GetEmployeeDataType[],
  courseData: GetCourseDataType[]
) => {
  let newList = [...insData]

  return newList.sort((a: any, b: any) => {
    if (key === 'fullName') return a.fullName.localeCompare(b.fullName)
    if (key === 'registerDate')
      return order === 'ascending'
        ? new Date(a.registerDate).getTime() - new Date(b.registerDate).getTime()
        : new Date(b.registerDate).getTime() - new Date(a.registerDate).getTime()
    if (key === 'students')
      return order === 'ascending'
        ? getNumberOfStudentsForEachTeacher(courseData, a._id) -
            getNumberOfStudentsForEachTeacher(courseData, b._id)
        : getNumberOfStudentsForEachTeacher(courseData, b._id) -
            getNumberOfStudentsForEachTeacher(courseData, a._id)
  })
}

const getNumberOfStudentsForEachTeacher = (
  courseData: GetCourseDataType[],
  instructorId: string
) => {
  const insCourses = courseData.filter((course) => course.teacher._id === instructorId)
  const rawStudentId = insCourses.map((course) => course.students.map((student) => student._id))
  const totalStudentsCount = [...new Set(([] as string[]).concat(...rawStudentId))].length
  console.log(totalStudentsCount)
  return totalStudentsCount
}
