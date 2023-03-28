import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const getStudentById = async (studentId: string) => {
  try {
    const results = await Http.get(`${MainUrl}student/${studentId}`)
    return results.data.result
  } catch (error: any) {
    return error.response.data
  }
}

export {getStudentById}
