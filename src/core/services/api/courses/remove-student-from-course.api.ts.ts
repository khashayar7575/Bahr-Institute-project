import Http from '../../interceptor/interceptor'
import { toast } from 'react-toastify'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const removeStudentFromCourse = async (userId: string, courseId: string) => {
  try {
    const courseIdObj = { courseId: courseId }
    const results = await Http.post(
      `${MainUrl}course/removeStudentFromCourse/${userId}`,
      courseIdObj
    )
    return results.data
  } catch (error: any) {
    return toast.error('متاسفانه خطایی رخ داده است، مجددا تلاش کنید')
  }
}

export { removeStudentFromCourse }
