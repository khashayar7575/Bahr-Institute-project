import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import { resetPasswordFormValidation } from '../../core/validations/validation'
import { FieldWrapper } from '../../components/common/FormikFields/TextField/FieldWrapper/FieldWrapper'
import { InnerTextInput } from '../../components/common/FormikFields/TextField/InnerTextInput'
import { InnerPasswordInput } from '../../components/common/FormikFields/TextField/InnerPasswordInput'
import { PrimaryButton } from '../../components/common/Buttons/PrimaryButton'
import { useSelector } from 'react-redux'
import { RootState } from '../../core/redux/store'
import { resetPassword } from '../../core/services/api/authentication/reset-pass.api'

const ResetPassword = () => {
  const [loadingSpin, setLoadingSpin] = useState<boolean>(false)
  const { AuthData } = useSelector((state: RootState) => state.AuthData)
  return (
    <Formik
      initialValues={{
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={resetPasswordFormValidation}
      onSubmit={(values, { setSubmitting }) => {
        // setLoadingSpin(true)
        // const resetPassApiHandler = async () => {
        //     const res = resetPassword()
        //     if(res.success = true){
        //         "آفرین"
        //     }
        // }
      }}
    >
      <Form>
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
          <PrimaryButton type='submit' loadingSpin={loadingSpin}>
            ورود
          </PrimaryButton>
        </div>
      </Form>
    </Formik>
  )
}

export default ResetPassword
