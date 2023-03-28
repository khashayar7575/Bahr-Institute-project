import axios from 'axios'

const mockApiId = '637152cf0399d1995d8f7747'

const MainUrl = `https://${mockApiId}.mockapi.io/Syntax/MockApi/`

const instanceCall = axios.create()
instanceCall.interceptors.request.use(
  (config: any) => {
    config.headers = {
      'Content-Type': 'application/json',
    }
    // console.log(config)
    // config.url = MainUrl + config.url
    return config
  },
  function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error)
    return Promise.reject(error)
  }
)
export { instanceCall as mockApiAxios, MainUrl }
