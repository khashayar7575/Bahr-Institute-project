import React, { useState } from 'react'
import { ErrorMessage, useField, useFormikContext } from 'formik'
import { PatternFormat } from 'react-number-format'

interface Props {
  label: string
  fieldName: string
}

const CodeField: React.FC<Props> = ({ label, fieldName }) => {
  const [labelPosition, setLabelPosition] = useState(
    useField(fieldName)[0].value === '' ? 'down' : 'up'
  )
  const [codeValue, setCodeValue] = useState('')
  const [field, meta, action] = useField(fieldName)

  const renderLabelClassName = () => {
    return labelPosition === 'down'
      ? ' -translate-x-6 top-0 translate-y-4'
      : ' px-2 -translate-x-4 -top-2 !text-xs'
  }
  const handleLabelUnfocus = () => {
    if (field.value === '') setLabelPosition('down')
  }

  const { setFieldValue } = useFormikContext()

  const OnCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeValue(e.target.value)
    const formattedValue = e.target.value.replace(/\s/g, '')
    setFieldValue(fieldName, formattedValue)
  }

  return (
    <>
      <div
        className='relative rounded group'
        onFocus={() => setLabelPosition('up')}
        onBlur={handleLabelUnfocus}
      >
        <div onBlur={() => action.setTouched(true)}>
          <PatternFormat
            value={codeValue}
            name={fieldName}
            onChange={OnCodeChange}
            className='bg-white border-2 border-gray-300 text-neutral-700 text-sm rounded block w-full px-6 py-3.5 outline-none appearance-none'
            type='text'
            autoComplete='off'
            format='### ### ####'
            dir='ltr'
          />
        </div>
        <label
          className={
            'absolute text-sm text-gray-400 duration-300 transform origin-[0] bg-white cursor-text right-0 pointer-events-none !z-0' +
            renderLabelClassName()
          }
        >
          {label}
        </label>
        {/* <div
          className={
            'w-1/2 h-[2px] absolute bottom-0 right-1/4 block bg-neutral-400' +
            (meta.touched && meta.error ? ' !bg-red-400' : ' bg-neutral-400') +
            (meta.touched && !meta.error ? ' !bg-green-400' : '') +
            (field.value !== '' && !meta.error ? ' !bg-green-400' : '')
          }
        ></div> */}
      </div>
      <div className='min-h-[45px]'>
        <ErrorMessage
          component='span'
          className='block pt-2 text-xs font-bold text-red-500'
          name={fieldName}
        ></ErrorMessage>
      </div>
    </>
  )
}

export { CodeField }
