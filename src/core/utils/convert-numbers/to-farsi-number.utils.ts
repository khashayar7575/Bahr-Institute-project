const arrayOfPersianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
// required an argument with integer type or string type
const toFarsiNumber = (num: string | number) =>
  num
    .toString()
    .split('')
    .map((character) => arrayOfPersianNumbers[Number(character)])
    .join('')

export { toFarsiNumber }
