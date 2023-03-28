import Http from '../../interceptor/interceptor'
import {PostLoginEmployeeDataType} from '../../../utils/types/data-types/data-types.utils'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const loginEmployee = async (obj: PostLoginEmployeeDataType) => {
  try {
    const results = await Http.post(`${MainUrl}auth/employee/login`, obj)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {loginEmployee}
