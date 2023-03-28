import Http from '../../interceptor/interceptor'
import {PutUpdateEmployeeByIdDataType} from '../../../utils/types/data-types/data-types.utils'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const updateEmployeeById = async (employeeId: string, object: PutUpdateEmployeeByIdDataType) => {
  try {
    const results = await Http.put(`${MainUrl}employee/${employeeId}`, object)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {updateEmployeeById}
