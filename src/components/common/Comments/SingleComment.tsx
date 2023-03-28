import React, { FC } from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { BsReply } from 'react-icons/bs'

import { Image } from '../CustomImage/Image'
import ProfileImage from '../../../assets/images/GetWrecked.png'
import { GetCommentDataType } from '../../../core/utils/types/data-types/data-types.utils'
import { calculateElapsedTime } from '../../../core/utils/convert-date-and-times/calc-elapsed-time.utils'
import { convertElapsedTimeToFarsiNumber } from '../../../core/utils/convert-date-and-times/elapsed-time-to-fa-number.utils'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../core/redux/store'
import { Formik, Form } from 'formik'
import { AnswerCommentForm } from './AnswerCommentForm'

type Props = {
  data: GetCommentDataType
}

const SingleComment: FC<Props> = ({ data }) => {
  const elapsedTime = calculateElapsedTime(data.createDate)
  const finalPostTime = convertElapsedTimeToFarsiNumber(elapsedTime)
  const { AuthData } = useSelector((state: RootState) => state.AuthData)
  const [answeringComment, setAnsweringComment] = useState<boolean>(false)
  const [loadingSpin, setLoadingSpin] = useState<boolean>(false)

  return (
    <div className='mb-10 last:mb-0 last:border-none'>
      <div className='grid grid-cols-12 p-6 border border-gray-200 shadow-md rounded-md'>
        <div className='col-span-2 lg:col-span-1 flex items-start justify-center'>
          <div className='w-full h-20 rounded-md overflow-hidden'>
            <Image
              src={ProfileImage}
              alt={data.username}
              className='w-full h-full object-cover border-t-8 border-black'
            />
          </div>
        </div>
        <div className='col-span-10 lg:col-span-11 mr-4 flex flex-col'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start'>
              <span className='text-lg font-medium text-gray-700'>{data.username}</span>
              <span className='text-sm text-gray-400 cursor-default block mr-8'>
                {finalPostTime + ' پیش'}
              </span>
            </div>
            <div className='flex items-center'>
              <div
                className={
                  ' ' + data.answer && (AuthData as any).role === 'admin'
                    ? 'flex items-center ml-8'
                    : 'hidden'
                }
              >
                <button
                  className='inline-flex items-center hover:text-teal-600'
                  onClick={() => setAnsweringComment(!answeringComment)}
                >
                  <i className='text-xl'>
                    <BsReply />
                  </i>
                  <span className='text-sm pr-1'>پاسخ دادن</span>
                </button>
              </div>
              <div className='flex items-center ml-8'>
                <button className=' inline-flex items-center hover:text-teal-600'>
                  <i className='text-lg'>
                    <AiOutlineLike />
                  </i>
                  <span className='text-xs pr-1'>9</span>
                </button>
              </div>
              <div className='flex items-center'>
                <button className=' inline-flex items-center hover:text-teal-600'>
                  <i className='text-lg'>
                    <AiOutlineDislike />
                  </i>
                  <span className='text-xs pr-1'>6</span>
                </button>
              </div>
            </div>
          </div>
          <div className='flex mt-6'>
            <p className='block text-justify text-sm leading-8'>{data.comment}</p>
          </div>
        </div>
      </div>
      {data.answer ? (
        <>
          <div className='h-14 w-0 relative right-16 border border-gray-300 '></div>{' '}
          <div className='h-0 w-0 relative right-[60px] border-4 border-gray-800  rounded-full'></div>
          <div className='pr-32 relative bottom-10'>
            <div className=' overflow-hidden border border-gray-100 rounded-md shadow-md'>
              <figure className='w-16 h-16 float-right'>
                <Image
                  src={ProfileImage}
                  alt='پروفایل ادمین'
                  className='rounded-md w-full h-full object-fill border-t-4 border-teal-600'
                />
              </figure>
              <div className='float-right flex h-16 items-center pr-5'>
                <span className='text-lg font-medium'>ادمین</span>
              </div>
              <div>
                <p className='m-4 text-right pt-1 relative right-4 text-gray-700'>{data.answer}</p>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {answeringComment ? <AnswerCommentForm authData={AuthData} cmId={data._id} /> : null}
    </div>
  )
}

export { SingleComment }
