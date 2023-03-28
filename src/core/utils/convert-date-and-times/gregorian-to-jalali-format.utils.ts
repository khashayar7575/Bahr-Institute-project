const gregorianDateToJalaliFormat = (date: string) => {
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

  const gregorianToJalali = new Date(date).toLocaleDateString('fa', jalaliDateFormat)
  return gregorianToJalali
}

export { gregorianDateToJalaliFormat }
