import Http from '../../interceptor/interceptor'

// main url of syntax backend
const MainUrl = process.env.REACT_APP_PUBLIC_PATH

const deleteLesson = async (id: string) => {
  try {
    const results = await Http.delete(`${MainUrl}lesson/${id}`)
    return results.data
  } catch (error: any) {
    return error.response.data
  }
}

export {deleteLesson}
