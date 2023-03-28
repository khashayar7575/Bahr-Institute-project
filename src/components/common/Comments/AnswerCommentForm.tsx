import React, { useState, FC } from 'react'
import { Formik, Form } from 'formik'

import Textarea from '../FormikFields/Textarea'
import { PrimaryButton } from '../Buttons/PrimaryButton'
import { FieldWrapper } from '../FormikFields/TextField/FieldWrapper/FieldWrapper'
import { InnerTextArea } from '../FormikFields/TextareaField/InnerTextArea'
import { sendCommentFormValidation } from '../../../core/validations/validation'
import { sendComment } from '../../../core/services/api/comments/send-comment.api'
import { toast } from 'react-toastify'
import { answerCommentFormValidation } from './../../../core/validations/validation'
import { answerComment } from '../../../core/services/api/comments/answer-comment.api'

type Props = {
  authData: any
  cmId: string
}

const AnswerCommentForm: FC<Props> = ({ authData, cmId }) => {
  const [loadingSpin, setLoadingSpin] = useState<boolean>(false)
  return (
    <Formik
      initialValues={{
        id: cmId,
        answer: '',
      }}
      validationSchema={answerCommentFormValidation}
      onSubmit={(values, { resetForm }) => {
        setLoadingSpin(true)
        if (authData) {
          try {
            const apiHandler = async () => {
              const res = await answerComment(values)
              setLoadingSpin(false)
              resetForm()
              toast.success('ثبت پاسخ کامنت با موفقیت انجام شد.')
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
          <FieldWrapper label='متن پاسخ'>
            <InnerTextArea fieldName='answer' />
          </FieldWrapper>
        </div>
        <div className='flex justify-end'>
          <PrimaryButton type='submit' loadingSpin={loadingSpin}>
            ارسال پاسخ
          </PrimaryButton>
        </div>
      </Form>
    </Formik>
  )
}

export { AnswerCommentForm }
