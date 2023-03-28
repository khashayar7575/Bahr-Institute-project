import React, { FC } from 'react'
import { GetCommentDataType } from '../../../core/utils/types/data-types/data-types.utils'

import { SingleComment } from './SingleComment'
import { useSelector } from 'react-redux'
import { RootState } from '../../../core/redux/store'
import { SendCommentForm } from './SendCommentForm'

type Props = {
  filteredComments: GetCommentDataType[]
  postId: string
}

const Comments: FC<Props> = ({ filteredComments, postId }) => {
  const { AuthData } = useSelector((state: RootState) => state.AuthData)
  return (
    <div className=' max-w-5xl mt-32'>
      <header className='text-xl font-bold mb-20'>{`نظرات (${filteredComments.length})`}</header>
      <div className='flex flex-col'>
        {filteredComments.map((comment, index) => (
          <SingleComment key={index} data={comment} />
        ))}
      </div>
      <SendCommentForm authData={AuthData} postId={postId} />
    </div>
  )
}

export { Comments }
