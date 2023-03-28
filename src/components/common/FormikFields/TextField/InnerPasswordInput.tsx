import React, { useState } from 'react'
import { Field, useField } from 'formik'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

interface Props {
  fieldName: string
}

const InnerPasswordInput: React.FC<Props> = ({ fieldName }) => {
  const [{ value: fieldNameValue }] = useField(fieldName)
  const [showHidePassword, setShowHidePassword] = useState(false)
  const handleChangeType = () => setShowHidePassword(!showHidePassword)
  return (
    <>
      <i
        className={
          'text-xl absolute inset-y-0 right-0 items-center pr-6 text-gray-600 cursor-pointer' +
          (fieldNameValue ? ' flex' : ' hidden')
        }
        onClick={handleChangeType}
      >
        {!showHidePassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </i>
      <Field
        name={fieldName}
        className={
          'bg-white border-2 border-gray-300 text-neutral-700 text-sm rounded-lg block w-full px-6 py-3.5 outline-none appearance-none'
        }
        placeholder=' '
        autoComplete='off'
        type={showHidePassword ? 'text' : 'password'}
        dir='ltr'
      />
    </>
  )
}

export { InnerPasswordInput }
