import Http from '../../interceptor/interceptor'
import {PostCreateCourseDataType} from '../../../utils/types/data-types/data-types.utils'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const createCourse = async (object: PostCreateCourseDataType) => {
  try {
    const results = await Http.post(`${MainUrl}course/`, object)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {createCourse}
