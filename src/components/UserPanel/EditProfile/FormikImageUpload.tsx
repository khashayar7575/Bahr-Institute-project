import React, { useState, FC } from 'react'
import { ErrorMessage, useFormikContext } from 'formik'
import { AiOutlineCloudUpload } from 'react-icons/ai'

import { DragAndDropImageUploader } from './DragAndDropImageUploader'
import { Image } from '../../common/CustomImage/Image'

type Props = {
  label: string
  fieldName: string
  initialImage: string
}

const FormikImageUpload: FC<Props> = ({ label, fieldName, initialImage }) => {
  const { setFieldValue } = useFormikContext()
  const [imageToPreview, setImageToPreview] = useState<any>()

  const handleImageUploadValueChange = (event: any) => {
    setImageToPreview(URL.createObjectURL(event.target.files[0]))
    setFieldValue(fieldName, event.target.files[0])
  }

  return (
    <div className='flex flex-col'>
      <div>
        {/* <span className='block text-sm font-semibold text-teal-700 mb-5'>پروفایل کاربری</span> */}
        <div className='flex'>
          <div className='w-20 h-20 rounded-full overflow-hidden'>
            {imageToPreview ? (
              <Image src={imageToPreview} alt='' className='w-full h-full object-cover' />
            ) : (
              <Image src={initialImage} alt={' '} className='w-full h-full object-cover' />
            )}
          </div>
          <div className='mr-10 my-auto'>
            <label className='p-3 inline-block bg-white text-teal-600 hover:text-white border-2 border-teal-600 rounded cursor-pointer hover:bg-teal-600'>
              <div className='flex justify-between items-center'>
                <span className='font-semibold text-sm'>{label}</span>
                <i className='text-2xl mr-2'>
                  <AiOutlineCloudUpload />
                </i>
              </div>
              <input
                onChange={handleImageUploadValueChange}
                type='file'
                className=' hidden'
                name={fieldName}
              />
            </label>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='mt-12 xl:mt-6'>
          <DragAndDropImageUploader name={fieldName} onValueChange={handleImageUploadValueChange} />
        </div>
        <div>
          <ErrorMessage
            component='span'
            className='block text-xs font-bold mt-3 text-red-500'
            name={fieldName}
          ></ErrorMessage>
        </div>
      </div>
    </div>
  )
}

export default FormikImageUpload
