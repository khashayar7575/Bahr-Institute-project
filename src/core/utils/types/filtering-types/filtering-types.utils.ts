type FilteringCourseObjectType = {
  categories: string[]
  capacityValue: string
  statusValue: string
  instructors: string[]
  searchValue: string
  sortOption: {
    key: string
    order: string
  }
  costRange: { min: number; max: number }
}
export type { FilteringCourseObjectType }

type SortingCoursesType = {
  key: string
  order: string
}
export type { SortingCoursesType }

//////

type FilteringBlogObjectType = {
  searchValue: string
  category: string
  subject: string
  sortOption: {
    key: string
    order: string
  }
}
export type { FilteringBlogObjectType }

//////

type FilteringTeacherObjectType = {
  searchValue: string
  sortOption: {
    key: string
    order: string
  }
}
export type { FilteringTeacherObjectType }

type SortingTeachersType = {
  key: string
  order: string
}
export type { SortingTeachersType }
