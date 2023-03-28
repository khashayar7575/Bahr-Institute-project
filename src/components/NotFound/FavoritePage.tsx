import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/outline'
import { BookmarkAltIcon, BookOpenIcon, RssIcon, ViewListIcon } from '@heroicons/react/outline'

const links = [
  {
    title: 'اخبار و مقالات',
    to: '/blogs',
    description: 'با نحوه ادغام ابزارهای ما با برنامه خود آشنا شوید',
    icon: BookOpenIcon,
  },
  {
    title: 'دوره‌ها',
    to: '/courses',
    description: 'یک مرجع API کامل برای کتابخانه های ما',
    icon: ViewListIcon,
  },
  {
    title: 'اساتید',
    to: '/instructors',
    description: 'آخرین اخبار و مقالات ما را بخوانید',
    icon: RssIcon,
  },
  {
    title: 'ارتباط باما',
    to: '/contactus',
    description: 'آخرین اخبار و مقالات ما را بخوانید',
    icon: RssIcon,
  },
]

const FavoritePage = () => {
  return (
    <div className='mx-auto'>
      <h2 className='text-xl font-semibold text-neutral-800 tracking-wide uppercase'>
        صفحات محبوب
      </h2>
      <ul
        role='list'
        className=' mt-7 grid gap-5 grid-cols-1  mx-auto md:grid-cols-2  xl:grid-cols-4 '
      >
        {links.map((link, index) => (
          <li key={index} className='shadow-lg rounded-md  inline-block '>
            <div className='inline-block h-full rounded-md  border-t-8 border border-neutral-800'>
              <span className='flex items-center justify-center h-12 w-12 '>
                <link.icon className='h-6 w-6 text-neutral-700' aria-hidden='true' />
              </span>
            </div>
            <div className='min-w-0  flex-1 inline-block pr-2 '>
              <h3 className='text-base font-medium text-neutral-900 mb-1'>
                <span className='rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-700'>
                  <Link to={link.to} className='focus:outline-none'>
                    <span className='absolute inset-0' aria-hidden='true' />
                    {link.title}
                  </Link>
                </span>
              </h3>
              <p className=' text-neutral-500 text-[10px] line-clamp-1'>{link.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { FavoritePage }
