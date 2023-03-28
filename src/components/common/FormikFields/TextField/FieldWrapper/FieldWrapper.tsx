import React, { useState } from 'react'
import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  children: React.ReactNode
}

const FieldWrapper: React.FC<Props> = ({ label, children }) => {
  const grabChildrenName = (children: React.ReactNode) =>
    React.isValidElement(children) ? children.props.fieldName : children

  const childrenName = grabChildrenName(children)
  const [labelPosition, setLabelPosition] = useState(
    useField(childrenName)[0].value === '' ? 'down' : 'up'
  )
  const [field, meta, action] = useField(childrenName)

  const renderLabelClassName = () => {
    return labelPosition === 'down'
      ? ' -translate-x-6 top-0 translate-y-4'
      : ' px-2 -translate-x-4 -top-2 !text-xs'
  }

  const handleLabelUnfocus = () => {
    if (field.value === '') setLabelPosition('down')
  }

  return (
    <>
      <div
        className='relative rounded group'
        onFocus={() => setLabelPosition('up')}
        onBlur={handleLabelUnfocus}
      >
        {children}
        <label
          className={
            'absolute text-sm text-gray-400 duration-300 transform origin-[0] bg-white cursor-text right-0 pointer-events-none !z-0' +
            renderLabelClassName()
          }
        >
          {label}
        </label>
        <div
          className={
            'w-1/2 h-[2px] absolute bottom-0 right-1/4 block' +
            (meta.touched && meta.error ? ' !bg-red-400' : ' bg-neutral-400') +
            (field.value !== '' && !meta.error ? ' !bg-green-400' : '')
          }
        ></div>
      </div>
      <div className='min-h-[45px]'>
        <ErrorMessage
          component='span'
          className='block pt-2 text-xs font-bold text-red-500'
          name={childrenName}
        ></ErrorMessage>
      </div>
    </>
  )
}

export { FieldWrapper }
