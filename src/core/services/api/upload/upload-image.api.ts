import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const uploadImage = async (image: any) => {
  try {
    let img = new FormData()
    img.append('image', image)
    const results = await Http.post(`${MainUrl}upload/image`, img)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {uploadImage}
