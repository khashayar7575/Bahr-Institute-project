import {pantryAxios, MainUrl} from './pantry-interceptor'

const getPantryBasket = async (basketName: string) => {
  try {
    const result = await pantryAxios.get(`${MainUrl}basket/${basketName}`)
    return result.data
  } catch (error) {
    return false
  }
}
const createPantryBasket = async (basketName: string, data: any) => {
  try {
    const result = await pantryAxios.post(`${MainUrl}basket/${basketName}`, data)
    return result.data
  } catch (error) {
    return false
  }
}
const updatePantryBasket = async (basketName: string, data: any) => {
  try {
    const result = await pantryAxios.put(`${MainUrl}basket/${basketName}`, data)
    return result.data
  } catch (error) {
    return false
  }
}
const deletePantryBasket = async (basketName: string) => {
  const result = await pantryAxios.delete(`${MainUrl}basket/${basketName}`)
  return result
}

export {getPantryBasket, createPantryBasket, updatePantryBasket, deletePantryBasket}
