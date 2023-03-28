import Http from '../../interceptor/interceptor'
import {PostCommentDataType} from '../../../utils/types/data-types/data-types.utils'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const sendComment = async (object: PostCommentDataType) => {
  try {
    const results = await Http.post(`${MainUrl}comments/send`, object)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {sendComment}
