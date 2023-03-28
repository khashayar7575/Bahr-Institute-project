import React, { FC } from 'react'
import { ErrorMessage, useField, Field } from 'formik'

type Props = {
  fieldName: string
}

const InnerTextArea: FC<Props> = ({ fieldName }) => {
  const [field] = useField(fieldName)
  return (
    <Field
      as='textarea'
      name={fieldName}
      value={field.value}
      className='bg-white border-2 border-gray-300 text-neutral-700 text-sm rounded-lg block w-full px-6 py-3.5 outline-none appearance-none'
      rows='5'
      dir='auto'
    />
  )
}

export { InnerTextArea }
