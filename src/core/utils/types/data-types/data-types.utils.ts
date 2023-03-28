/*Start Authentication Section*/
type PostRegisterStudentDataType = {
  fullName: string
  email: string
  password: string
  phoneNumber: string
  birthDate: string
  nationalId: string
  profile: string
}
export type { PostRegisterStudentDataType }

type studentModel = {
  birthDate: string
  email: string
  fullName: string
  isActive: true
  nationalId: string
  phoneNumber: string
  profile: string
  registerDate: string
  role: string
  _id: string
}

export type { studentModel }

type PostLoginStudentDataType = {
  email: string
  password: string
}
export type { PostLoginStudentDataType }

type RegisterEmployeeDataType = {
  fullName: string
  email: string
  password: string
  phoneNumber: string
  birthDate: string
  nationalId: string
  address: string
  role: string
  profile: string
}
export type { RegisterEmployeeDataType }

type PostLoginEmployeeDataType = {
  email: string
  password: string
}
export type { PostLoginEmployeeDataType }
/*End Authentication Section*/

/*Begin Students Section*/
type GetStudentDataType = {
  role: string
  isActive: boolean
  _id: string
  fullName: string
  email: string
  password: string
  birthDate: string
  phoneNumber: string
  nationalId: string
  profile: string
  registerDate: string
  courses: GetCourseDataType[]
  salt: string
  __v: number
}
export type { GetStudentDataType }

type PutUpdateStudentDataType = {
  fullName: string
  phoneNumber: string
  birthDate: string
  profile: string
}
export type { PutUpdateStudentDataType }
/*End Students Section*/

/*Begin Courses Section*/
type GetCourseDataType = {
  teacher: {
    _id: string
    fullName: string
    email: string
    profile: string
  }
  lesson: {
    topics: string[]
    _id: string
    lessonName: string
    description: string
    image: string
  }
  _id: string
  title: string
  cost: number
  endDate: string
  startDate: string
  capacity: number
  students: GetStudentDataType[]
}
export type { GetCourseDataType }

type CourseDataType = {
  teacher: {
    _id: string
    fullName: string
    email: string
    profile: string
  }
  lesson: {
    topics: string[]
    _id: string
    lessonName: string
    description: string
    image: string
    category: { id: number; name: string }
  }
  _id: string
  title: string
  cost: number
  endDate: string
  startDate: string
  capacity: number
  students: GetStudentDataType[]
}
export type { CourseDataType }

type PostCreateCourseDataType = {
  title: string
  cost: string
  endDate: string
  startDate: string
  capacity: string
  teacher: string
  lesson: string
}
export type { PostCreateCourseDataType }

type PutUpdateCourseDataType = {
  title: string
  cost: number
  endDate: string
  startDate: string
  capacity: number
  teacher: string
  lesson: string
}
export type { PutUpdateCourseDataType }
/*End Courses Section*/

/*Begin Lessons Section*/
type GetLessonDataType = {
  topics: string[]
  _id: string
  lessonName: string
  description: string
  image: string
  category: number
  createDate: string
  courses: [
    {
      _id: string
      title: string
      cost: number
      endDate: string
      startDate: string
    }
  ]
  __v: number
}
export type { GetLessonDataType }

type PostAddLessonDataType = {
  lessonName: string
  topics: string[]
  description: string
  image: string
  category: string
}
export type { PostAddLessonDataType }

type PutUpdateLessonDataType = {
  lessonName: string
  topics: string[]
  description: string
  image: string
  category: any
}
export type { PutUpdateLessonDataType }
/*End Lessons Section*/

/*Start Blogs Section*/
type GetBlogDataType = {
  _id: string
  title: string
  text: string
  category: string
  image: string
  __v: number
}
export type { GetBlogDataType }

type PostBlogDataType = {
  title: string
  text: string
  category: string
  image: string
}
export type { PostBlogDataType }

type PutBlogDataType = {
  title: string
  category: string
  image: string
  text: string
}
export type { PutBlogDataType }
/*End Blogs Section*/

/*Start Contact Us Section */
type PostContactUsDataType = {
  email: string
  name: string
  text: string
}
export type { PostContactUsDataType }
/*End Contact Us Section */

/*Start Employee Section*/
// it use for both admins and teachers and last teachers
type GetEmployeeDataType = {
  role: string
  isActive: boolean
  _id: string
  fullName: string
  email: string
  password: string
  birthDate: string
  phoneNumber: string
  address: string
  nationalId: string
  profile: string
  registerDate: string
  courses: EmployeeCoursesDataType[]
  salt: string
  __v: number
}
export type { GetEmployeeDataType }

type PutUpdateEmployeeByIdDataType = {
  fullName: string
  birthDate: string
  phoneNumber: string
  address: string
  profile: string
}
export type { PutUpdateEmployeeByIdDataType }

type EmployeeCoursesDataType = {
  lesson: {
    topics: string[]
    _id: string
    lessonName: string
    description: string
    image: string
  }
  _id: string
  title: string
  cost: number
  endDate: string
  startDate: string
  capacity: number
}

export type { EmployeeCoursesDataType }
/*End Employees Section*/

/*Begin Comments Section*/
type GetCommentDataType = {
  verified: boolean
  _id: string
  createDate: string
  postId: string
  email: string
  username: string
  comment: string
  __v: number
  answer?: 'string'
}
export type { GetCommentDataType }

type PostAnswerCommentDataType = {
  id: string
  answer: string
}
export type { PostAnswerCommentDataType }

type PostCommentDataType = {
  postId: string
  email: string
  username: string
  comment: string
}
export type { PostCommentDataType }
/*End Comments Section*/

/*Start Category Section*/
type GetCategoryDataType = {
  id: number
  name: string
}
export type { GetCategoryDataType }
/*End Category Section*/

// likes remains ..

type PostErrorMessage = {
  eventId: number
  messageId: number
  type: number
  message: string
}

export type { PostErrorMessage }

//

type TeacherBiography = {
  fullName: string
  birthDate: string
  instructorAge: string
  totalCoursesCount: number
  completedCourses: CourseDataType[]
  currentSemesterCourses: CourseDataType[]
  upcomingCourses: CourseDataType[]
  registerDate: string
  totalStudentsCount: number
  teachingExperience: string | number
}

export type { TeacherBiography }
