import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { useDispatch, useSelector } from 'react-redux'

import { loginFormValidation } from '../../core/validations/validation'

import { loggedIn } from '../../core/redux/redux-store/auth/auth-data.Slice'
import { toast } from 'react-toastify'

import { loginStudents } from '../../core/services/api/authentication/login-students.api'
import { getItem, removeItem, setItem } from '../../core/services/storage/localStorage'
import { PrimaryButton } from '../common/Buttons/PrimaryButton'
import { FieldWrapper } from '../common/FormikFields/TextField/FieldWrapper/FieldWrapper'
import { InnerTextInput } from './../common/FormikFields/TextField/InnerTextInput'
import { InnerPasswordInput } from '../common/FormikFields/TextField/InnerPasswordInput'
import { RootState } from '../../core/redux/store'
import { CheckBoxField } from '../common/FormikFields/CheckBoxField/CheckBoxField'
import { getSessionItem, setSessionItem } from '../../core/services/storage/sessionStorage'
import { GetStudentDataType } from '../../core/utils/types/data-types/data-types.utils'

const LoginForm = () => {
  const [loadingSpin, setLoadingSpin] = useState<boolean>(false)
  const { AuthData } = useSelector((state: RootState) => state.AuthData)
  const dispatch = useDispatch()

  const location = useLocation()

  let studentEmail = ''
  if (location.state) studentEmail = location.state.studentEmail

  return (
    <Formik
      initialValues={{
        email: (AuthData as any)
          ? (AuthData as any)._id
          : studentEmail.length > 1
          ? studentEmail
          : '',
        password: '',
        rememberMe: false,
      }}
      validationSchema={loginFormValidation}
      onSubmit={(values, { setSubmitting }) => {
        setLoadingSpin(true)
        const { rememberMe, ...restOfObject } = values
        try {
          const loginApiHandler = async () => {
            const studentLogin = await loginStudents(restOfObject)
            setLoadingSpin(false)
            if (studentLogin.success) {
              if (values.rememberMe === false) {
                setSessionItem('AuthData', JSON.stringify(studentLogin.result.studentModel))
              } else {
                /* means that the user checked the rememberMe checkbox, so the account shall store in localStorage */
                setItem('AuthData', JSON.stringify(studentLogin.result.studentModel))
                let getAccountsData = getItem('AccountsData')
                if (!getAccountsData) {
                  setItem('AccountsData', JSON.stringify([studentLogin.result.studentModel]))
                } else {
                  const duplicate = getItem('AccountsData')
                  const duplicatedArray = JSON.parse(duplicate as string)
                  const savedAccounts = duplicatedArray.find(
                    (acc: any) => acc._id === studentLogin.result.studentModel._id
                  )
                  if (!savedAccounts) {
                    duplicatedArray.push(studentLogin.result.studentModel)
                    setItem('AccountsData', JSON.stringify(duplicatedArray))
                  }
                }
              }
              dispatch(loggedIn(studentLogin.result.studentModel))
              setItem('token', studentLogin.result.jwtToken)
              toast.success('به آکادمی سپهر خوش آمدید')
            } else {
              toast.error('اطلاعات وارد شده صحیح نمیباشد !')
            }
          }
          loginApiHandler()
        } catch (error) {
          console.error(error)
          setLoadingSpin(false)
          setSubmitting(false)
        }
      }}
    >
      <Form>
        <div className='w-96'>
          <FieldWrapper label='پست الکترونیکی'>
            <InnerTextInput fieldName='email' type='text' />
          </FieldWrapper>
        </div>

        <div className='w-96'>
          <FieldWrapper label='رمز عبور'>
            <InnerPasswordInput fieldName='password' />
          </FieldWrapper>
        </div>

        <div className='flex justify-between items-center mb-8'>
          <div>
            <CheckBoxField />
          </div>
          <div>
            <Link
              className='text-sm font-medium text-gray-500 hover:text-[#303030]'
              to='/accounts/forgotpassword'
            >
              فراموشی رمز عبور
            </Link>
          </div>
        </div>

        <div className='flex justify-center'>
          <PrimaryButton type='submit' loadingSpin={loadingSpin}>
            ورود
          </PrimaryButton>
        </div>
      </Form>
    </Formik>
  )
}

export { LoginForm }
