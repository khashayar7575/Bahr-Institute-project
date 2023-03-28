import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const getAllComments = async () => {
  try {
    const results = await Http.get(`${MainUrl}comments/`)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {getAllComments}
