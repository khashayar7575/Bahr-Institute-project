import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const deActiveStudent = async (studentId: string) => {
  try {
    const results = await Http.put(`${MainUrl}student/deactive/${studentId}`)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {deActiveStudent}
