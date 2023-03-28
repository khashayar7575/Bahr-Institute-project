import React, { FC } from 'react'
import { Formik, Form } from 'formik'
import payamak from 'melipayamak-api'

import { registerFormValidation } from '../../core/validations/validation'

import { FieldWrapper } from '../common/FormikFields/TextField/FieldWrapper/FieldWrapper'
import { InnerTextInput } from './../common/FormikFields/TextField/InnerTextInput'
import { InnerPasswordInput } from '../common/FormikFields/TextField/InnerPasswordInput'
import { CustomDatePicker } from '../common/FormikFields/TextField/CustomDatePicker/CustomDatePicker'
import { InnerPhoneNumberInput } from './../common/FormikFields/TextField/InnerPhoneNumberInput'
import { InnerNationalId } from '../common/FormikFields/TextField/InnerNationalId'
import { PrimaryButton } from './../common/Buttons/PrimaryButton'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerStudent } from '../../core/services/api/authentication/register-students.api'
import StudentImage from '../../assets/images/DefaultUser.png'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { CodeField } from '../common/FormikFields/CodeField/CodeField'
import { SendSmsApi } from '../../core/services/api/sms-api/send-sms-api'

const RegisterForm = () => {
  const [loadingSpin, setLoadingSpin] = useState<boolean>(false)
  const [phoneNumber, setPhoneNumber] = useState<undefined | string>()
  const [storeCode, setStoreCode] = useState<any>()
  const navigate = useNavigate()

  const handleSendSms = async (phoneNumber: string) => {
    const creatingCode = Math.ceil(Math.random() * 1000000)
    const callSmsApi = await SendSmsApi(phoneNumber, 107007, [`${creatingCode}`])
    setStoreCode(creatingCode)
    return callSmsApi
  }

  const phoneValidationHandler = (phoneNumber: string) => {
    setPhoneNumber(phoneNumber)
  }

  return (
    <>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          nationalId: '',
          password: '',
          passwordConfirmation: '',
          phoneNumber: '',
          birthDate: 'empty',
          profile: StudentImage,
          codeValidation: '',
        }}
        validationSchema={registerFormValidation}
        onSubmit={(values, { setSubmitting }) => {
          const { passwordConfirmation, codeValidation, ...registrationValues } = values
          setLoadingSpin(true)
          try {
            const registerApiHandler = async () => {
              const studentLogin = await registerStudent(registrationValues)
              setLoadingSpin(false)
              if (studentLogin.success) {
                toast.success(studentLogin.message[0].message)
                const callSmsApi = await SendSmsApi(values.phoneNumber, 107009, [
                  `${values.fullName}`,
                ])
                navigate('/accounts/login', { state: { studentEmail: registrationValues.email } })
                return callSmsApi
              } else {
                toast.error(studentLogin.message[0].message)
              }
            }
            registerApiHandler()
          } catch (error) {
            console.error(error)
            setLoadingSpin(false)
            setSubmitting(false)
          }
        }}
      >
        {({ handleSubmit, validateForm, setFieldTouched, values: fieldValues, setFieldError }) => (
          <>
            {!phoneNumber ? (
              <Form>
                <div className={'w-96 ' + (!storeCode ? 'block' : 'hidden')}>
                  <FieldWrapper label='شماره موبایل'>
                    <InnerPhoneNumberInput fieldName='phoneNumber' />
                  </FieldWrapper>
                </div>
                <div className={'w-96 ' + (storeCode ? 'block' : 'hidden')}>
                  <CodeField label='کد تایید' fieldName='codeValidation' />
                </div>
                <div className='flex justify-center'>
                  {!storeCode ? (
                    <PrimaryButton
                      type='button'
                      className='!px-9 text-base'
                      loadingSpin={loadingSpin}
                      onClick={() => {
                        setFieldTouched('phoneNumber', true)
                        validateForm().then(
                          (values) => !values.phoneNumber && handleSendSms(fieldValues.phoneNumber)
                        )
                      }}
                    >
                      مرحله بعدی
                    </PrimaryButton>
                  ) : (
                    <PrimaryButton
                      type='button'
                      className='!px-9 text-base'
                      loadingSpin={loadingSpin}
                      onClick={() => {
                        setFieldTouched('codeValidation', true)
                        validateForm().then(
                          (values) =>
                            !values.codeValidation &&
                            (fieldValues.codeValidation == storeCode
                              ? phoneValidationHandler(fieldValues.phoneNumber)
                              : setFieldError('codeValidation', 'کد تایید نامعتبر است !'))
                        )
                      }}
                    >
                      مرحله بعد
                    </PrimaryButton>
                  )}
                </div>
              </Form>
            ) : (
              <Form>
                <div className='w-96'>
                  <FieldWrapper label='نام و نام خانوادگی'>
                    <InnerTextInput fieldName='fullName' type='text' />
                  </FieldWrapper>
                </div>
                <div className='w-96'>
                  <FieldWrapper label='پست الکترونیکی'>
                    <InnerTextInput fieldName='email' type='text' />
                  </FieldWrapper>
                </div>
                <div className='w-96'>
                  <FieldWrapper label='کد ملی'>
                    <InnerNationalId fieldName='nationalId' />
                  </FieldWrapper>
                </div>
                <div className='w-96'>
                  <FieldWrapper label='رمز عبور'>
                    <InnerPasswordInput fieldName='password' />
                  </FieldWrapper>
                </div>
                <div className='w-96'>
                  <FieldWrapper label='تکرار رمز عبور'>
                    <InnerPasswordInput fieldName='passwordConfirmation' />
                  </FieldWrapper>
                </div>
                <div className='flex justify-center'>
                  <PrimaryButton
                    type='submit'
                    className='!px-9 text-base'
                    loadingSpin={loadingSpin}
                    onClick={handleSubmit}
                  >
                    ثبت نام
                  </PrimaryButton>
                </div>
              </Form>
            )}
          </>
        )}
      </Formik>
    </>
  )
}

export { RegisterForm }
