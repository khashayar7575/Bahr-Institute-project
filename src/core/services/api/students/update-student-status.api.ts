import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const updateStudentStatus = async (studentId: string, currentStatus: boolean) => {
  if (currentStatus === false) {
    try {
      const results = await Http.put(`${MainUrl}student/active/${studentId}`)
      return results.data
    } catch (error: any) {
      return error.response.data
    }
  } else if (currentStatus === true) {
    try {
      const results = await Http.put(`${MainUrl}student/deactive/${studentId}`)
      return results.data
    } catch (error: any) {
      return error.response.data
    }
  }
}

export {updateStudentStatus}
