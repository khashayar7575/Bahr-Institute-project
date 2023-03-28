import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const verifyComment = async (commentId: string) => {
  try {
    const commentIdObj = {id: commentId}
    const results = await Http.post(`${MainUrl}comments/verify`, commentIdObj)
    return results
  } catch (error: any) {
    return error.response.data
  }
}

export {verifyComment}
