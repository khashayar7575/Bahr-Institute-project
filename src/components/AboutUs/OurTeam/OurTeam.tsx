import React from 'react'
import { Link } from 'react-router-dom'

import { Title } from '../../common/Title'

import alirezapic from '../../../assets/images/khashayar.jpg'
import rezapic from '../../../assets/images/Reza.jpg'
import atefehpic from '../../../assets/images/Atefeh.jpg'
import { Image } from '../../common/CustomImage/Image'

const OurTeam = () => {
  const teamList = [
    {
      imageSource: rezapic,
      fullName: ' رضا صداقت گو',
      proficiency: 'توسعه دهنده فرانت اند',
    },
    {
      imageSource: alirezapic,
      fullName: 'خشایار عاشوری',
      proficiency: 'توسعه دهنده فرانت اند',
    },
    {
      imageSource: atefehpic,
      fullName: 'عاطفه احمدی',
      proficiency: 'توسعه دهنده فرانت اند',
    },
  ]
  return (
    <div className=' grid grid-cols-3 gap-7 rounded-md'>
      {teamList.map((item, index) => (
        <div key={index} className='my-4 shadow-lg rounded-md h-90  cursor-pointer text-center '>
          <Link to='#' className='w-full block h-full'>
            <Image
              className=' h-64 w-full object-cover rounded-t-md border-t-4 border-neutral-700'
              src={item.imageSource}
              alt={' '}
            />
            <div className=' text-neutral-800 bg-white text-md font-medium'>
              <Title children={item.fullName} />
              <div className='text-gray-400  text-xs'>
                <Title children={item.proficiency} />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export { OurTeam }
