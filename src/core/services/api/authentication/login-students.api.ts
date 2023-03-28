import Http from '../../interceptor/interceptor'
import { PostLoginStudentDataType } from '../../../utils/types/data-types/data-types.utils'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const loginStudents = async (obj: PostLoginStudentDataType) => {
  try {
    const results = await Http.post(`${MainUrl}auth/login`, obj)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export { loginStudents }
