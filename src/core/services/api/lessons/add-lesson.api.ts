import Http from '../../interceptor/interceptor'
import {PostAddLessonDataType} from '../../../utils/types/data-types/data-types.utils'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const addLesson = async (object: PostAddLessonDataType) => {
  try {
    const results = await Http.post(`${MainUrl}lesson/add`, object)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {addLesson}
