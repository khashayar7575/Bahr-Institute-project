import React from 'react'
import { Field } from 'formik'

interface Props {
  fieldName: string
  type: string
}

const InnerTextInput: React.FC<Props> = ({ fieldName, type }) => {
  return (
    <>
      <Field
        name={fieldName}
        className={
          'bg-white border-2 border-gray-300 text-neutral-700 text-sm rounded-lg block w-full px-6 py-3.5 outline-none appearance-none'
        }
        placeholder=' '
        type={type}
        autoComplete='off'
        dir='auto'
      />
    </>
  )
}

export { InnerTextInput }
