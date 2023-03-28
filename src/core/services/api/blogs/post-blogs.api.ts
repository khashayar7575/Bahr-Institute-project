import Http from '../../interceptor/interceptor'
import {PostBlogDataType} from '../../../utils/types/data-types/data-types.utils'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const postBlogs = async (object: PostBlogDataType) => {
  try {
    const results = await Http.post(`${MainUrl}news/`, object)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {postBlogs}
