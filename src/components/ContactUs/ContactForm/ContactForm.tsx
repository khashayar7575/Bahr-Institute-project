import React from 'react'
import { Formik, Form } from 'formik'

import { contactFormValidation } from '../../../core/validations/validation'

import Textarea from '../../common/FormikFields/Textarea'
import { FieldWrapper } from '../../common/FormikFields/TextField/FieldWrapper/FieldWrapper'
import { InnerTextInput } from '../../common/FormikFields/TextField/InnerTextInput'
import { SecondaryButton } from '../../common/Buttons/SecondaryButton'
import { PrimaryButton } from '../../common/Buttons/PrimaryButton'

const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          textContent: '',
        }}
        validationSchema={contactFormValidation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ handleReset, handleSubmit }) => (
          <Form className='flex flex-col items-center'>
            <div className='w-full'>
              <FieldWrapper label='پست الکترونیکی'>
                <InnerTextInput fieldName='email' type='text' />
              </FieldWrapper>
            </div>
            <div className='mb-12 w-full'>
              <Textarea
                rows='6'
                label='متن پیام'
                name='textContent'
                placeholder='متن خود را وارد نمایید . . .'
              />
            </div>
            <div className='w-full flex justify-center gap-6'>
              <PrimaryButton
                type='button'
                onClick={handleReset}
                className='from-yellow-400 via-yellow-500 to-yellow-600 shadow-yellow-500/50 '
              >
                پاک کردن
              </PrimaryButton>
              <PrimaryButton type='submit' onClick={handleSubmit}>
                ارسال پیام
              </PrimaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export { ContactForm }
