import React, { FC } from 'react'

import { Field } from 'formik'
import { useField } from 'formik'

const CheckBoxField: FC = () => {
  // const [field] = useField('rememberMe')
  // console.log(field.value)
  return (
    <div className='flex items-center'>
      <Field type='checkbox' name={'rememberMe'} id='rememberMe' className='w-[14px] h-[14px]' />
      <label
        className='text-sm font-medium text-gray-500 hover:text-[#303030] mr-2'
        htmlFor='rememberMe'
      >
        مرا به خاطر بسپار
      </label>
    </div>
  )
}

export { CheckBoxField }
