import { toFarsiNumber } from '../convert-numbers/to-farsi-number.utils'

const convertElapsedTimeToFarsiNumber = (elapsedTime: string) => {
  const extractOnlyNumbersOfPostTime = elapsedTime.replace(/\D/g, '')
  const postTimeNumbersToFarsi = toFarsiNumber(extractOnlyNumbersOfPostTime)
  const finalPostTime = elapsedTime.replace(/\d+/g, postTimeNumbersToFarsi)
  return finalPostTime
}

export { convertElapsedTimeToFarsiNumber }
