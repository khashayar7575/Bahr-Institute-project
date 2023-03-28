import React, { useState } from 'react'
import { HeadingTitle } from '../../components/common/HeadingTitle'
import { PathAutoAnimatioin } from '../../components/common/PathMotion/PathAutoAnimatioin'
import { ReactComponent as InsSvg } from '../../assets/images/SVG/Path 57.svg'
import { Formik, Form } from 'formik'
import { FieldWrapper } from '../../components/common/FormikFields/TextField/FieldWrapper/FieldWrapper'
import { InnerTextInput } from '../../components/common/FormikFields/TextField/InnerTextInput'
import { PrimaryButton } from '../../components/common/Buttons/PrimaryButton'
import { InnerPhoneNumberInput } from '../../components/common/FormikFields/TextField/InnerPhoneNumberInput'
import { InnerTextArea } from '../../components/common/FormikFields/TextareaField/InnerTextArea'
import { resumesFormValidation } from '../../core/validations/validation'
import { toast } from 'react-toastify'

const BecomeInstructor = () => {
  const [loadingSpin, setLoadingSpin] = useState<boolean>(false)
  return (
    <div className='relative pt-10 pb-10 lg:pt-16 lg:pb-15'>
      <div className='pt-2'>
        <HeadingTitle>ارسال رزومه</HeadingTitle>
      </div>
      <div className='mt-4'>
        <PathAutoAnimatioin duration={1} height='150px' svgWidthPath={2}>
          {InsSvg}
        </PathAutoAnimatioin>
      </div>
      <div className='grid grid-cols-6 gap-x-8 mt-16 w-full'>
        <div className='col-span-3'>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
              resumes: '',
            }}
            validationSchema={resumesFormValidation}
            onSubmit={(values, { setSubmitting }) => {
              toast.warning('سلام گل')
            }}
          >
            <Form>
              <FieldWrapper label='نام و نام خانوادگی'>
                <InnerTextInput fieldName='fullName' type='text' />
              </FieldWrapper>
              <FieldWrapper label='پست الکترونیکی'>
                <InnerTextInput fieldName='email' type='text' />
              </FieldWrapper>
              <FieldWrapper label='شماره موبایل'>
                <InnerPhoneNumberInput fieldName='phoneNumber' />
              </FieldWrapper>
              <FieldWrapper label='توضیحات'>
                <InnerTextArea fieldName='resumes' />
              </FieldWrapper>
              <div className='flex justify-start'>
                <PrimaryButton type='submit' className='!px-9 text-base' loadingSpin={loadingSpin}>
                  ارسال رزومه
                </PrimaryButton>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export { BecomeInstructor }
