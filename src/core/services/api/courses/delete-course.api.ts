import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const deleteCourse = async (courseId: string) => {
  try {
    const results = await Http.delete(`${MainUrl}course/${courseId}`)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {deleteCourse}
