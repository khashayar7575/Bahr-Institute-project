import Http from '../../interceptor/interceptor'
import {PutUpdateCourseDataType} from '../../../utils/types/data-types/data-types.utils'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const updateCourse = async (courseId: string, object: PutUpdateCourseDataType) => {
  try {
    const results = await Http.put(`${MainUrl}course/${courseId}`, object)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {updateCourse}
