import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const getBlogsById = async (blogId: string) => {
  try {
    const results = await Http.get(`${MainUrl}news/${blogId}`)
    return results.data.result
  } catch (error: any) {
    return error.response.data
  }
}

export {getBlogsById}
