import React, { FC } from 'react'

import { Image } from '../common/CustomImage/Image'
import { Link } from 'react-router-dom'
import { GetCourseDataType } from '../../core/utils/types/data-types/data-types.utils'

type Props = {
  data: GetCourseDataType
}

const SuggestionCourseCard: FC<Props> = ({ data }) => {
  return (
    <div className='bg-white flex shadow-lg rounded-lg p-2'>
      <div className=' w-1/2 relative'>
        <Image src={data.lesson.image} alt={data.title} className='rounded-md object-cover ' />
        <div className='bg-neutral-200 w-fit px-2 py-1 absolute right-1 top-2 text-xs rounded-full'>
          کامپیوتر
        </div>
      </div>

      <div className='pr-5  '>
        <h3 className='font-bold line-clamp-1 text-center'>{data.title}</h3>
        <h4 className='text-sm text-center text-gray-500 my-1'>{data.teacher.fullName}</h4>
        <h5 className='text-xs text-center'>{`قیمت : ${data.cost}تومان`}</h5>
        <Link to={`/courses/${data._id}`}>
          <button className='text-xs bg-neutral-800 hover:bg-neutral-500 duration-500 rounded-lg mt-2 w-40 text-white p-2 items-center'>
            مشاهده دوره
          </button>
        </Link>
      </div>
    </div>
  )
}

export { SuggestionCourseCard }
