import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const getAllLessons = async () => {
  try {
    const results = await Http.get(`${MainUrl}lesson`)
    return results.data.result
  } catch (error: any) {
    return error.response.data
  }
}

export {getAllLessons}
