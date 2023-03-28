import { RegisterEmployeeDataType } from '../../../utils/types/data-types/data-types.utils'
import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const registerEmployee = async (obj: RegisterEmployeeDataType) => {
  try {
    const results = await Http.post(`${MainUrl}auth/employee/register`, obj)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export { registerEmployee }
