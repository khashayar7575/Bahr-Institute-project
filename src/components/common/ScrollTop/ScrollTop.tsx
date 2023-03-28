import React from 'react'
import { ArrowSmUpIcon } from '@heroicons/react/outline'

import { useReadingProgress } from '../../../core/utils/useReadingProgress'

import './ScrollTop.css'

const ScrollTop = () => {
  useReadingProgress()
  return (
    <div className='relative z-40' id='progress'>
      <span id='progress-value'>
        <ArrowSmUpIcon className='h-6 w-6 text-gray-600 rounded-full' aria-hidden='true' />
      </span>
    </div>
  )
}

export { ScrollTop }
