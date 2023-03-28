import {PutBlogDataType} from '../../../utils/types/data-types/data-types.utils'
import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const updateBlogsById = async (blogId: string, object: PutBlogDataType) => {
  try {
    const results = await Http.put(`${MainUrl}news/${blogId}`, object)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {updateBlogsById}
