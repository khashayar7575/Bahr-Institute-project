import React, { FC } from 'react'
import { Formik, Form } from 'formik'
import { FieldWrapper } from '../../FormikFields/TextField/FieldWrapper/FieldWrapper'
import { InnerTextInput } from '../../FormikFields/TextField/InnerTextInput'

import { PrimaryButton } from '../../Buttons/PrimaryButton'

import { MailIcon } from '@heroicons/react/outline'
import { InnerTextArea } from '../../FormikFields/TextareaField/InnerTextArea'
import { ticketFormValidation } from './../../../../core/validations/validation'
import { studentModel } from '../../../../core/utils/types/data-types/data-types.utils'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { updatePantryBasket } from '../../../../core/services/pantry/basket-manage-api'
import { useNavigate } from 'react-router-dom'

type Props = {
  studentInfo: studentModel
  closeModal: () => void
}

const SendTicketForm: FC<Props> = ({ studentInfo, closeModal }) => {
  const [loadingSpin, setLoadingSpin] = useState<boolean>(false)
  const navigate = useNavigate()
  return (
    <>
      <div className='bg-white px-4 pt-5 pb-4 sm:px-6 sm:py-4'>
        <div className='sm:flex sm:flex-col sm:items-start'>
          <div className='sm:flex sm:items-center'>
            <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10'>
              <MailIcon className='h-6 w-6 text-green-600' aria-hidden='true' />
            </div>
            <div className='mt-3 text-center sm:mt-0 sm:mr-4 sm:text-right'>
              <h3 className='text-base leading-6 font-medium text-gray-900'>ثبت تیکت جدید</h3>
            </div>
          </div>
        </div>
      </div>
      <Formik
        initialValues={{
          title: '',
          text: '',
        }}
        validationSchema={ticketFormValidation}
        onSubmit={(values) => {
          setLoadingSpin(true)
          try {
            const addToPantryTicketList = async () => {
              const creatingMyBasketObject = {
                title: values.title,
                text: values.text,
                email: studentInfo.email,
                fullName: studentInfo.fullName,
                profile: studentInfo.profile,
                isAnswered: false,
                isReaded: false,
                createdDate: new Date(),
              }
              const data = {}
              ;(data as any)[studentInfo._id] = [creatingMyBasketObject]
              const result = await updatePantryBasket('tickets', data)
              console.log(result)
              setLoadingSpin(false)
              closeModal()
              toast.success('تیکت شما با موفقیت ارسال شد.')
              navigate('/userpanel/dashboard')
              return result
            }
            addToPantryTicketList()
          } catch (error) {
            console.error(error)
            setLoadingSpin(false)
            toast.error('متاسفانه خطایی رخ داده است، لطفا مجددا تلاش کنید!')
          }
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Form className='flex flex-col text-right px-4 pt-5 pb-4 sm:px-6 sm:py-2'>
              <div className='w-full'>
                <FieldWrapper label='عنوان تیکت'>
                  <InnerTextInput fieldName='title' type='text' />
                </FieldWrapper>
              </div>
              <div className='w-full'>
                <FieldWrapper label='متن تیکت'>
                  <InnerTextArea fieldName='text' />
                </FieldWrapper>
              </div>
            </Form>
            <div className='bg-gray-100 px-4 py-3 sm:px-6 sm:flex justify-end'>
              <PrimaryButton
                type='button'
                className='ml-4 from-red-400 via-red-500 to-red-600 shadow-red-500/50'
                onClick={closeModal}
              >
                انصراف
              </PrimaryButton>
              <PrimaryButton onClick={handleSubmit} type='button' loadingSpin={loadingSpin}>
                ارسال تیکت
              </PrimaryButton>
            </div>
          </>
        )}
      </Formik>
    </>
  )
}

export default SendTicketForm
