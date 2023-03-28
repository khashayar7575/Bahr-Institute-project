import Http from '../../interceptor/interceptor'
import {PutUpdateStudentDataType} from '../../../utils/types/data-types/data-types.utils'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const updateStudent = async (studentId: string, object: PutUpdateStudentDataType) => {
  try {
    const results = await Http.put(`${MainUrl}student/${studentId}`, object)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {updateStudent}
