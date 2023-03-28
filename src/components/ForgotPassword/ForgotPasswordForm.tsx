import React from 'react'
import { Formik, Form } from 'formik'

import { forgotPasswordFormValidation } from '../../core/validations/validation'
import { FieldWrapper } from '../common/FormikFields/TextField/FieldWrapper/FieldWrapper'
import { InnerTextInput } from '../common/FormikFields/TextField/InnerTextInput'

const ForgotPasswordForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={forgotPasswordFormValidation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      <Form>
        <div className='w-96'>
          <FieldWrapper label='پست الکترونیکی'>
            <InnerTextInput fieldName='email' type='text' />
          </FieldWrapper>
        </div>

        <div className='flex justify-center'>
          <button
            type='submit'
            className='inline-block px-9 py-2 text-base font-normal text-white bg-[#303030] rounded focus:outline-none'
          >
            بازنشانی حساب کاربری
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export { ForgotPasswordForm }
