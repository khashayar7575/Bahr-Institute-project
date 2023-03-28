import React from 'react'
import { Formik, Form } from 'formik'

import { resetPasswordFormValidation } from '../../../core/validations/validation'
import { FieldWrapper } from '../../common/FormikFields/TextField/FieldWrapper/FieldWrapper'
import { InnerPasswordInput } from '../../common/FormikFields/TextField/InnerPasswordInput'

const EditPasswordForm = () => {
  return (
    <Formik
      initialValues={{
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={resetPasswordFormValidation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      <Form>
        <div className=' sm:rounded-md sm:overflow-hidden'>
          <div className='bg-white py-6 px-4 space-y-6 sm:p-6'>
            <div className='grid grid-cols-4 gap-6'>
              <div className='col-span-4 lg:col-span-2'>
                <FieldWrapper label='رمز عبور'>
                  <InnerPasswordInput fieldName='password' />
                </FieldWrapper>
              </div>
              <div className='col-span-4 lg:col-span-2'>
                <FieldWrapper label='تکرار رمز عبور'>
                  <InnerPasswordInput fieldName='passwordConfirmation' />
                </FieldWrapper>
              </div>
            </div>
            <button
              type='submit'
              className='inline-block px-9 py-2 text-base font-normal text-white bg-teal-600 border border-teal-600 rounded active:text-teal-500 hover:bg-teal-800 focus:outline-none'
            >
              تغییر رمز عبور
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export { EditPasswordForm }
