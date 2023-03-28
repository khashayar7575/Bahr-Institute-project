import { FC } from 'react'

import { SelectOption } from '../../common/SelectOption/SelectOption'

type Props = {
  selectedSubject: string
  onSubjectChange: (arg: string | number) => void
  subjectCategoriesList: string[]
}

const BlogFilteringV2SelectOption: FC<Props> = ({
  selectedSubject,
  onSubjectChange,
  subjectCategoriesList,
}) => {
  const creatingSubjectOptions = subjectCategoriesList.map((subject) => {
    const eachObject = { text: subject, value: subject }
    return eachObject
  })

  const optionsList = [{ text: 'بر اساس موضوع', value: 'all' }, ...creatingSubjectOptions]

  return (
    <div className='w-40 z-50'>
      <SelectOption
        optionsList={optionsList}
        selectedOption={selectedSubject}
        setSelectedOption={onSubjectChange}
      />
    </div>
  )
}

export { BlogFilteringV2SelectOption }
