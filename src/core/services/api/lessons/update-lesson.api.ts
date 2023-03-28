import Http from '../../interceptor/interceptor'
import {PutUpdateLessonDataType} from '../../../utils/types/data-types/data-types.utils'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const updateLesson = async (lessonId: string, object: PutUpdateLessonDataType) => {
  try {
    const results = await Http.put(`${MainUrl}lesson/${lessonId}`, object)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {updateLesson}
