import Http from '../../interceptor/interceptor'
import {PostRegisterStudentDataType} from '../../../utils/types/data-types/data-types.utils'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const registerStudent = async (obj: PostRegisterStudentDataType) => {
  try {
    const results = await Http.post(`${MainUrl}auth/register`, obj)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {registerStudent}
