import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const resetPassword = async (password: string, userToken: string) => {
  try {
    const results = await Http.post(`${MainUrl}resetPassword/${userToken}`, password)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {resetPassword}
