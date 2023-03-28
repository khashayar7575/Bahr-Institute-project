import { createPantryBasket, updatePantryBasket } from '../../../pantry/basket-manage-api'

const removeFromWaitingListObject = async (
  studentId: string,
  courseIdToRemove: string,
  originalWaitingList: any
) => {
  const dataToReplace = { ...originalWaitingList }
  const newDataArray = dataToReplace[studentId].filter(
    (item: { courseId: string; notificationMethod: string }) => item.courseId !== courseIdToRemove
  )
  dataToReplace[studentId] = newDataArray

  const result = await createPantryBasket('waitingList', dataToReplace)
  return result
}

const addToWaitingListObject = async (
  studentId: string,
  courseId: string,
  notificationMethod: string
) => {
  const data = {}
  ;(data as any)[studentId] = [{ courseId, notificationMethod }]

  const result = await updatePantryBasket('waitingList', data)
  return result
}

export { removeFromWaitingListObject, addToWaitingListObject }
