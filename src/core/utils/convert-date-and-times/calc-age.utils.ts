import moment from 'jalali-moment'

// birthDate should be jalali format

const calculateAge = (birthDate: string | Date) => {
  const birthDateToGregorian = moment.from(birthDate, 'fa', 'YYYY/MM/DD').format('DD/MM/YYYY')

  const BirthYear = birthDateToGregorian.slice(-4)
  const currentYear = new Date().getFullYear()
  const age = currentYear - BirthYear
  return age
}

export { calculateAge }
