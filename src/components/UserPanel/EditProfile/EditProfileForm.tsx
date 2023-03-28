import React from 'react'
import { Form, Formik } from 'formik'

import { editProfileFormValidation } from '../../../core/validations/validation'
import FormikImageUpload from './FormikImageUpload'

import { FieldWrapper } from '../../common/FormikFields/TextField/FieldWrapper/FieldWrapper'
import { InnerTextInput } from '../../common/FormikFields/TextField/InnerTextInput'
import { InnerPhoneNumberInput } from '../../common/FormikFields/TextField/InnerPhoneNumberInput'
import { CustomDatePicker } from '../../common/FormikFields/TextField/CustomDatePicker/CustomDatePicker'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../core/redux/store'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { uploadImage } from '../../../core/services/api/upload/upload-image.api'
import { updateStudent } from '../../../core/services/api/students/update-student.api'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../common/Buttons/PrimaryButton'
import { loggedIn } from '../../../core/redux/redux-store/auth/auth-data.Slice'

const EditProfileForm = () => {
  const { AuthData } = useSelector((state: RootState) => state.AuthData)
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <>
      {AuthData ? (
        <Formik
          initialValues={{
            fullName: (AuthData as any).fullName,
            phoneNumber: (AuthData as any).phoneNumber,
            birthDate: (AuthData as any).birthDate === 'empty' ? '' : (AuthData as any).birthDate,
            profile: (AuthData as any).profile,
            nationalId: (AuthData as any).nationalId,
            email: (AuthData as any).email,
          }}
          validationSchema={editProfileFormValidation}
          onSubmit={(values, { setSubmitting }) => {
            setLoading(true)
            try {
              const editProfileApiHandler = async () => {
                if (typeof values.profile === 'string') {
                  values.profile = values.profile
                } else {
                  const uploadImageResult = await uploadImage(values.profile)
                  values.profile = uploadImageResult.result
                }
                const results = await updateStudent((AuthData as any)._id, values)
                setLoading(false)
                if (results.success === true) {
                  dispatch(loggedIn(results.result))
                  toast.success(results.message[0].message)
                  navigate('/userpanel/dashboard')
                } else {
                  results.message.map((message: any) => toast.error(message.message))
                }
              }
              editProfileApiHandler()
            } catch (error) {
              toast.error('خطایی رخ داده است، لطفا مجددا تلاش کنید !')
              setSubmitting(false)
            }
          }}
        >
          {({ handleSubmit }) => (
            <Form>
              <div className='py-6'>
                <div className='grid grid-cols-1 xl:grid-cols-2 xl:gap-10'>
                  <div>
                    <FieldWrapper label='نام و نام خانوادگی'>
                      <InnerTextInput fieldName='fullName' type='text' />
                    </FieldWrapper>
                    <FieldWrapper label='شماره موبایل'>
                      <InnerPhoneNumberInput fieldName='phoneNumber' />
                    </FieldWrapper>
                    <CustomDatePicker fieldName='birthDate' label='تاریخ تولد' />
                  </div>
                  <FormikImageUpload
                    label='تغییر عکس'
                    fieldName='profile'
                    initialImage={(AuthData as any).profile}
                  />
                </div>
              </div>
              <div className='py-3 text-left'>
                <PrimaryButton type='button' onClick={handleSubmit} loadingSpin={loading}>
                  ثبت تغییرات
                </PrimaryButton>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <h2>loading . . .</h2>
      )}
    </>
  )
}

export { EditProfileForm }
