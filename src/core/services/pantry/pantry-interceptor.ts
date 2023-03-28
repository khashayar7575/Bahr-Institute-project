import axios from 'axios'
const pantryID = '1104233f-eda9-496a-a7e3-e16f936e3874'
const MainUrl = `https://getpantry.cloud/apiv1/pantry/${pantryID}/`
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
export { instanceCall as pantryAxios, MainUrl }
