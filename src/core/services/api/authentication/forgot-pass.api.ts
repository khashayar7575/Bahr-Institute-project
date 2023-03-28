import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const forgotPassword = async (email: string) => {
  try {
    const results = await Http.post(`${MainUrl}forgetpassword`, email)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {forgotPassword}
