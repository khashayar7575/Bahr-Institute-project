import moment from 'jalali-moment'

const jalaliToDatePickerValue = (date: string) => {
  const dateToGregorian = moment.from(date, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')
  const gregToJalali = moment.from(dateToGregorian, 'en', 'YYYY/MM/DD').format('jYYYY/jMM/jDD')

  return gregToJalali
}

export { jalaliToDatePickerValue }
