import React from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { PathAutoAnimatioin } from '../../components/common/PathMotion/PathAutoAnimatioin'
import { ReactComponent as loginSvg } from '../../assets/images/SVG/Path 42.svg'
const Accounts = () => {
  const navigation = [
    { heading: 'ورود', to: 'login' },
    { heading: 'ثبت نام', to: 'register' },
  ]
  const location = useLocation()
    .pathname.split('/')
    .filter((item) => item !== '')
    .slice(-1)
    .join('/')

  return (
    <div className=' lg:flex justify-around items-center'>
      <div className='md:order-1 lg:order-2 lg:mt-0 mt-20'>
        <PathAutoAnimatioin height='253.307' width='583.1'>
          {loginSvg}
        </PathAutoAnimatioin>
      </div>
      <div className='p-8 shadow-2xl sm:rounded-lg sm:px-10 md:order-2 lg:order-1 mx-auto lg:mx-0  max-w-lg my-16 grid grid-cols-1 gap-y-10'>
        <div className='grid grid-cols-2 h-16 rounded-md '>
          {navigation.map((item, index) => (
            <NavLink
              key={index}
              className={`flex items-center justify-center text-lg  ${
                location === item.to
                  ? 'text-white bg-[#303030] hover:text-gray-200'
                  : 'bg-white text-[#303030] border-b-4 border-[#303030] font-bold'
              }`}
              to={item.to}
            >
              <button className='text'>{item.heading}</button>
            </NavLink>
          ))}
        </div>
        <div className='min-h-[254px]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export { Accounts }
