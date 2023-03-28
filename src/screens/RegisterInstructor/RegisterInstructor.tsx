import React, { FC } from 'react'
import { Formik, Form } from 'formik'
import payamak from 'melipayamak-api'

import { registerFormValidation } from '../../core/validations/validation'

import { useState } from 'react'

import { registerStudent } from '../../core/services/api/authentication/register-students.api'
import StudentImage from '../../assets/images/DefaultUser.png'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { SendSmsApi } from '../../core/services/api/sms-api/send-sms-api'
import { FieldWrapper } from '../../components/common/FormikFields/TextField/FieldWrapper/FieldWrapper'
import { InnerPhoneNumberInput } from '../../components/common/FormikFields/TextField/InnerPhoneNumberInput'
import { CodeField } from '../../components/common/FormikFields/CodeField/CodeField'
import { PrimaryButton } from '../../components/common/Buttons/PrimaryButton'
import { InnerTextInput } from '../../components/common/FormikFields/TextField/InnerTextInput'
import { InnerNationalId } from '../../components/common/FormikFields/TextField/InnerNationalId'
import { InnerPasswordInput } from '../../components/common/FormikFields/TextField/InnerPasswordInput'
import { registerEmployee } from '../../core/services/api/authentication/register-employee.api'
import { registerEmployeeValidation } from './../../core/validations/validation'

const RegisterInstructor = () => {
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
    <div className='flex justify-center'>
      <>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            phoneNumber: '',
            birthDate: 'empty',
            nationalId: '',
            address: 'empty',
            role: 'teacher',
            profile: StudentImage,
            passwordConfirmation: '',
            codeValidation: '',
          }}
          validationSchema={registerEmployeeValidation}
          onSubmit={(values, { setSubmitting }) => {
            const { passwordConfirmation, codeValidation, ...registrationValues } = values
            setLoadingSpin(true)
            try {
              const registerApiHandler = async () => {
                const teacherRegister = await registerEmployee(registrationValues)
                setLoadingSpin(false)
                if (teacherRegister.success) {
                  toast.success(teacherRegister.message[0].message)
                  const callSmsApi = await SendSmsApi(values.phoneNumber, 107009, [
                    `${values.fullName}`,
                  ])
                  navigate('/accounts/login', { state: { studentEmail: registrationValues.email } })
                  return callSmsApi
                } else {
                  toast.error(teacherRegister.message[0].message)
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
          {({
            handleSubmit,
            validateForm,
            setFieldTouched,
            values: fieldValues,
            setFieldError,
          }) => (
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
                            (values) =>
                              !values.phoneNumber && handleSendSms(fieldValues.phoneNumber)
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
    </div>
  )
}

export default RegisterInstructor
