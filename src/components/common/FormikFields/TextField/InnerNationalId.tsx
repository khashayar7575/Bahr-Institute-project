import React, { useState } from 'react'
import { PatternFormat } from 'react-number-format'
import { useFormikContext, useField } from 'formik'

type Props = {
  fieldName: string
}

const InnerNationalId: React.FC<Props> = ({ fieldName }) => {
  const [idValue, setIdValue] = useState<string>('')
  const { setFieldValue } = useFormikContext()
  const [field, meta, action] = useField(fieldName)

  const onIdChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    setIdValue(value.target.value)
    const formattedValue = value.target.value.replace(/\s/g, '')
    setFieldValue(fieldName, formattedValue)
  }

  return (
    <div onBlur={() => action.setTouched(true)}>
      <PatternFormat
        value={idValue}
        name={fieldName}
        onChange={onIdChange}
        className='bg-white border-2 border-gray-300 text-neutral-700 text-sm rounded block w-full px-6 py-3.5 outline-none appearance-none'
        type='text'
        autoComplete='off'
        format='### ### ####'
        dir='ltr'
      />
    </div>
  )
}

export { InnerNationalId }
