import React, { useEffect, useState } from 'react'
import { useLocation, Link, useParams } from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/solid'
import { ChevronRightIcon } from '@heroicons/react/solid'

import getBreadCrumbsDic from '../../core/services/storage/bread crumbs dic/get-bread-crumbs-dic'
import { getCoursesData } from '../../core/services/api/courses-data.api'
import { getBlogsData } from '../../core/services/api/blogs-data.api'
import { getInstructorsData } from '../../core/services/api/instructors-data.api'

const BreadCrumbs = () => {
  const [breadCrumbComponent, setBreadCrumbComponent] = useState()
  const currentUrl = useLocation().pathname

  const contentId = useParams()._id

  const coursesData = getCoursesData()
  const blogsData = getBlogsData()
  const instructorsData = getInstructorsData()

  //
  const array = []
    .concat(coursesData, blogsData, instructorsData)
    .find((element) => element._id === contentId)

  const formatter = () => {
    const nodeList = currentUrl.split('/').filter((item) => item !== '')
    let nodeObject = [
      {
        path: '/',
        text: 'home',
        content: (key) => {
          return (
            <Link key={key} to=''>
              <HomeIcon
                className='flex-shrink-0 w-5 text-gray-400 hover:text-teal-500'
                aria-hidden='true'
              />
            </Link>
          )
        },
      },
    ]
    let url = '/'
    const breadCrumbsList = getBreadCrumbsDic()
    for (let i = 0; i < nodeList.length; i++) {
      let itemText = nodeList[i]
      if (breadCrumbsList[itemText]) itemText = breadCrumbsList[itemText]

      const tempObject = {
        path: url + nodeList[i],
        text: itemText.includes(contentId)
          ? itemText.replace(contentId, array.fullName || array.title)
          : itemText,
      }
      url = url + nodeList[i] + '/'
      nodeObject.push(tempObject)
    }

    const formatedComponent = nodeObject.map((item, index) => (
      <React.Fragment key={index}>
        {item.content ? (
          item.content(index)
        ) : (
          <Link to={item.path} className='text-sm font-medium text-gray-500 hover:text-teal-700'>
            {item.text}
          </Link>
        )}
        {index !== nodeObject.length - 1 ? (
          <span className='mx-4'>
            <ChevronRightIcon
              className='flex-shrink-0 w-5 text-gray-400 rotate-180'
              aria-hidden='true'
            />
          </span>
        ) : null}
      </React.Fragment>
    ))

    if (nodeObject.length > 1) setBreadCrumbComponent(formatedComponent)
    else setBreadCrumbComponent(null)
  }

  useEffect(() => {
    formatter()
  }, [currentUrl])

  return <div className='flex mt-10'>{breadCrumbComponent}</div>
}

export { BreadCrumbs }
