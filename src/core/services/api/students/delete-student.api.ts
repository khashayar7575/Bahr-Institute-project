import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const removeStudent = async (studentId: string) => {
  try {
    const results = await Http.delete(`${MainUrl}student/${studentId}`)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {removeStudent}
