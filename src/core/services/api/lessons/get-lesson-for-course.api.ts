import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const getLessonForCourseById = async (lessonId: string) => {
  try {
    const results = await Http.get(`${MainUrl}lesson/course/${lessonId}`)
    return results.data.result
  } catch (error: any) {
    return error.response.data
  }
}

export {getLessonForCourseById}
