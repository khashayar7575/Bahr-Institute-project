import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const deleteEmployeeById = async (employeeId: string) => {
  try {
    const results = await Http.delete(`${MainUrl}employee/${employeeId}`)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {deleteEmployeeById}
