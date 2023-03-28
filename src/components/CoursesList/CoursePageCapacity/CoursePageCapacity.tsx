import { FC } from 'react'
import { SelectOption } from '../../common/SelectOption/SelectOption'

type Props = {
  pageCapacity: number
  onPageCapacityChange: (arg: number | string) => void
}

const CoursePageCapacity: FC<Props> = ({ pageCapacity, onPageCapacityChange }) => {
  const pageCapacities = [
    { text: 5, value: 5 },
    { text: 10, value: 10 },
    { text: 20, value: 20 },
  ]
  return (
    <SelectOption
      optionsList={pageCapacities}
      selectedOption={pageCapacity}
      setSelectedOption={onPageCapacityChange}
    />
  )
}

export { CoursePageCapacity }
