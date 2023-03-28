import { newsExtendData } from '../../utils/types/mock-api-data-types/news-extend/news-extend.types'

import { mockApiAxios, MainUrl } from './mock-interceptor'

const getMockApiData = async (endPointName: string) => {
  try {
    const result = await mockApiAxios.get(`${MainUrl}${endPointName}`)
    return result.data
  } catch (error) {
    return false
  }
}
const getMockApiDataById = async (endPointName: string, resourceId: string) => {
  try {
    const result = await mockApiAxios.get(`${MainUrl}${endPointName}/${resourceId}`)
    return result.data
  } catch (error) {
    return false
  }
}
const postMockApiData = async (endPointName: string, object: newsExtendData) => {
  try {
    const result = await mockApiAxios.post(`${MainUrl}${endPointName}`, object)
    return result.data
  } catch (error) {
    return false
  }
}
const updateMockApiData = async (endPointName: string, object: newsExtendData) => {
  try {
    const result = await mockApiAxios.put(`${MainUrl}${endPointName}/${object.id}`, object)
    return result.data
  } catch (error) {
    return false
  }
}
const deleteMockApiData = async (endPointName: string, resourceId: string) => {
  try {
    const result = await mockApiAxios.delete(`${MainUrl}${endPointName}/${resourceId}`)
    return result.data
  } catch (error) {
    return false
  }
}

export { getMockApiData, getMockApiDataById, postMockApiData, updateMockApiData, deleteMockApiData }
