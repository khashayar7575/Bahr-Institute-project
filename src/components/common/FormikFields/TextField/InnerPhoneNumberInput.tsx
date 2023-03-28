import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { useFormikContext, useField } from 'formik'
import 'react-phone-input-2/lib/style.css'

interface Props {
  fieldName: string
}

const InnerPhoneNumberInput: React.FC<Props> = ({ fieldName }) => {
  const [field, meta, action] = useField(fieldName)
  // const [phoneInputValue, setPhoneInputValue] = useState('')
  const { setFieldValue } = useFormikContext()

  const handlePhoneNumberChange = (inputValueChange: string) => {
    // setPhoneInputValue(inputValueChange)
    const formattedPhoneNumber = inputValueChange.trim()
    setFieldValue(fieldName, formattedPhoneNumber)
  }

  return (
    <div onBlur={() => action.setTouched(true)}>
      <PhoneInput
        containerStyle={{ direction: 'ltr' }}
        placeholder=''
        autocompleteSearch={false}
        country={'ir'}
        enableSearch={true}
        value={field.value !== '' ? field.value : '+98'}
        onChange={handlePhoneNumberChange}
        inputClass='!w-full bg-white !border-2 rounded-lg !border-gray-300 text-sm !text-neutral-700 !h-[52px] !block !pl-16 !pr-6 !py-3.5 outline-none appearance-none'
        buttonClass='!pl-5 !border-none h-[92%] my-auto !bg-transparent'
        dropdownClass='!shadow-xl'
      />
    </div>
  )
}

export { InnerPhoneNumberInput }
