import Http from '../../interceptor/interceptor'
import {PostContactUsDataType} from '../../../utils/types/data-types/data-types.utils'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const contactUs = async (object: PostContactUsDataType) => {
  try {
    const results = await Http.post(`${MainUrl}contactUs`, object)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {contactUs}
