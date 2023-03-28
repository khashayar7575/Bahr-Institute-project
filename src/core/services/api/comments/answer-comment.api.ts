import Http from '../../interceptor/interceptor'
import {PostAnswerCommentDataType} from '../../../utils/types/data-types/data-types.utils'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const answerComment = async (object: PostAnswerCommentDataType) => {
  try {
    const results = await Http.post(`${MainUrl}comments/answer`, object)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {answerComment}
