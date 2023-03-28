import Http from '../../interceptor/interceptor'
import { toast } from 'react-toastify'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const addStudentToCourse = async (userId: string, courseId: string) => {
  try {
    const courseIdObj = { courseId: courseId }
    const results = await Http.post(`${MainUrl}course/addStudentToCourse/${userId}`, courseIdObj)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export { addStudentToCourse }
