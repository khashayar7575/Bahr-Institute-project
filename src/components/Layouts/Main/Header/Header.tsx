import React, { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Popover, Transition, Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'

import { loggedOut } from '../../../../core/redux/redux-store/auth/auth-data.Slice'
import { Image } from '../../../common/CustomImage/Image'

import { Logo } from '../../../common/Logo'

import { RootState } from '../../../../core/redux/store'
import { integerToPersianNumber } from '../../../../core/utils/convert-numbers/integer-to-persian-number.utils'

const navigation = [
  { name: 'خانه', to: '/' },
  { name: 'دوره ها', to: '/courses' },
  { name: 'اخبار', to: '/blogs' },
  { name: 'اساتید', to: '/instructors' },
  { name: 'ارتباط با ما', to: '/contactus' },
  { name: 'درباره ما', to: '/aboutus' },
]

const Header = () => {
  const location = useLocation().pathname
  const { AuthData } = useSelector((state: any) => state.AuthData)
  const dispatch = useDispatch()
  const { Cart } = useSelector((state: RootState) => state.Cart)

  const badgeToFarsiNumber = integerToPersianNumber(Cart.length)

  return (
    <Popover>
      <div className=' mx-auto mt-6 max-w-full'>
        <nav
          className='relative flex items-center justify-between sm:h-10 md:justify-center'
          aria-label='Global'
        >
          <div className='flex items-center flex-1 md:absolute md:inset-y-0 md:right-0'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <Logo />
              <div className='-mr-2 flex items-center md:hidden'>
                <Popover.Button className='bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500'>
                  <span className='sr-only'>Open main menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className='hidden md:flex md:space-x-10'>
            {navigation.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className={
                  (location === item.to ? 'font-bold text-gray-800' : '') +
                  ' font-medium text-gray-500 hover:text-teal-700 m-10'
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:left-0'>
            <div className=' flex items-center'>
              <button className='relative text-2xl flex items-center ml-4'>
                <BsSearch />
              </button>
              {AuthData ? (
                <div className=' flex items-center'>
                  <span>{AuthData.fullName}</span>
                  <Menu as='div' className='mr-3 relative z-10'>
                    <div className='w-10 h-10 rounded-md overflow-hidden'>
                      <Menu.Button className='w-full h-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        <span className='sr-only'>Open user menu</span>
                        <Image
                          className='w-full h-full object-cover'
                          src={AuthData.profile}
                          alt=' '
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none'>
                        <Menu.Item>
                          <Link
                            to='/userpanel/dashboard'
                            className='block py-2 px-4 text-sm text-gray-700'
                          >
                            پنل کاربری
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to='/'
                            className='block py-2 px-4 text-sm text-gray-700'
                            onClick={() => {
                              dispatch(loggedOut())
                              toast.success('از حساب کاربری خود خارج شدید !')
                            }}
                          >
                            خروج از حساب کاربری
                          </Link>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <button>
                  <Link
                    to='/accounts/login'
                    className='flex justify-center items-center w-7 h-7 text-2xl font-medium text-gray-700'
                  >
                    <i>
                      <AiOutlineUser />
                    </i>
                  </Link>
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute z-10 top-0 inset-x-0 transition transform origin-top-right md:hidden'
        >
          <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
            <div className='px-5 pt-4 flex items-center justify-between'>
              <Logo />
              <div className='-mr-2'>
                <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500'>
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='px-2 pt-2 pb-3'>
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              to='/accounts/login'
              className='block w-full px-5 py-3 text-center font-medium text-teal-600 bg-gray-50 hover:bg-gray-100'
            >
              ورود
            </Link>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export { Header }
