import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const getAllEmployee = async () => {
  try {
    const results = await Http.get(`${MainUrl}employee/getall`)
    return results.data.result
  } catch (error: any) {
    return error.response.data
  }
}

export {getAllEmployee}
