import moment from 'jalali-moment'

const jalaliDateToJalaliFormat = (date: string) => {
  const dateToGregorian = moment.from(date, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')
  type DateTimeFormatOptions = {
    year: 'numeric'
    month: 'long'
    day: 'numeric'
    hour?: '2-digit'
    minute?: '2-digit'
    hour12?: false
    timeZoneName?: 'short'
    timeZone?: 'UTC'
  }
  const jalaliDateFormat: DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const gregorianToJalali = new Date(dateToGregorian).toLocaleDateString('fa', jalaliDateFormat)
  return gregorianToJalali
}

export { jalaliDateToJalaliFormat }
