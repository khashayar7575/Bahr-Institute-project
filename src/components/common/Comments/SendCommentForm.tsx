import React, { useState, FC } from 'react'
import { Formik, Form } from 'formik'

import Textarea from '../FormikFields/Textarea'
import { PrimaryButton } from '../Buttons/PrimaryButton'
import { FieldWrapper } from '../FormikFields/TextField/FieldWrapper/FieldWrapper'
import { InnerTextArea } from '../FormikFields/TextareaField/InnerTextArea'
import { sendCommentFormValidation } from '../../../core/validations/validation'
import { sendComment } from '../../../core/services/api/comments/send-comment.api'
import { toast } from 'react-toastify'

type Props = {
  authData: any
  postId: string
}

const SendCommentForm: FC<Props> = ({ authData, postId }) => {
  const [loadingSpin, setLoadingSpin] = useState<boolean>(false)
  return (
    <Formik
      initialValues={{
        sendComment: '',
      }}
      validationSchema={sendCommentFormValidation}
      onSubmit={(values, { resetForm }) => {
        setLoadingSpin(true)
        if (authData) {
          try {
            const obj = {
              postId,
              email: authData.email,
              username: authData.fullName,
              comment: values.sendComment,
            }
            const apiHandler = async () => {
              const res = await sendComment(obj)
              setLoadingSpin(false)
              resetForm()
              toast.success('ثبت کامنت با موفقیت انجام شد.')
              return res
            }
            apiHandler()
          } catch (error) {
            console.log(error)
            setLoadingSpin(false)
          }
        } else {
          toast.error('لطفا ابتدا وارد حساب کاربری خود شوید !')
          setLoadingSpin(false)
        }
      }}
    >
      <Form className='flex flex-col my-16'>
        <div className='w-full'>
          <FieldWrapper label='متن نظر'>
            <InnerTextArea fieldName='sendComment' />
          </FieldWrapper>
        </div>
        <div>
          <PrimaryButton type='submit' loadingSpin={loadingSpin}>
            ارسال نظر
          </PrimaryButton>
        </div>
      </Form>
    </Formik>
  )
}

export { SendCommentForm }
