import React, { Fragment, useState, FC, ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Dialog, Menu, Transition, Popover } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  BellIcon,
  ShoppingBagIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'

import { Image } from '../../components/common/CustomImage/Image'

import SyntaxLogo from './../../assets/images/Logo.svg'
import { RootState } from '../../core/redux/store'
import { BsBell, BsFolder } from 'react-icons/bs'
import { CustomModal } from '../../components/common/Modal/Modal'
import SwitchAccounts from './../../components/common/ModalContent/Accounts/SwitchAccounts'
import { loggedIn, loggedOut } from '../../core/redux/redux-store/auth/auth-data.Slice'
import { getItem, setItem } from '../../core/services/storage/localStorage'
import { useEffect } from 'react'
import { studentModel } from '../../core/utils/types/data-types/data-types.utils'
import { toast } from 'react-toastify'
import { RiUserSettingsLine } from 'react-icons/ri'
import { FiKey } from 'react-icons/fi'
import { ImBooks } from 'react-icons/im'

const menuNav = [
  { name: 'دوره ها', to: '/courses' },
  { name: 'اخبار', to: '/blogs' },
  { name: 'اساتید', to: '/instructors' },
]

const navigation = [
  { name: 'داشبورد', to: 'dashboard', icon: HomeIcon },
  {
    name: 'تغییر پروفایل کاربری',
    to: 'editprofile',
    icon: RiUserSettingsLine,
  },
  {
    name: 'تغییر رمز عبور',
    to: 'editpassword',
    icon: FiKey,
  },
  {
    name: 'مهارت های من',
    to: 'myskills',
    icon: BsFolder,
  },
  {
    name: 'دوره های من',
    to: 'mycourses',
    icon: BsFolder,
  },
  {
    name: 'لیست انتظار',
    to: 'waitingList',
    icon: CalendarIcon,
  },
  {
    name: 'لیست علاقه مندی ها',
    to: 'wishlist',
    icon: CalendarIcon,
  },
  {
    name: 'لیست دوره ها',
    to: 'courseslist',
    icon: ImBooks,
  },
  {
    name: 'تیکت های ارسالی',
    to: 'managetickets',
    icon: InboxIcon,
  },
  {
    name: 'لیست مطالعه',
    to: 'studylist',
    icon: CalendarIcon,
  },
  { name: 'خروج از پنل', to: '/', icon: ChartBarIcon },
]

type Props = {
  children?: ReactNode
}

const UserPanel: FC<Props> = ({ children }) => {
  const { AuthData } = useSelector((state: RootState) => state.AuthData)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const [userAccounts, setUserAccounts] = useState<studentModel[]>([])

  const getAccounts = () => {
    const getFromLocal = getItem('AccountsData')
    const accountsArray = JSON.parse(getFromLocal as string)
    setUserAccounts(accountsArray)
  }

  useEffect(() => {
    getAccounts()
  }, [])

  const removeAccountFromArrayHandler = (accountId: string, accountName: string) => {
    const filteredAccList = userAccounts.filter((acc) => acc._id !== accountId)
    setUserAccounts(filteredAccList)
    setItem('AccountsData', JSON.stringify(filteredAccList))
    setShowModal(false)
    toast.success(`حساب ${accountName} با موفقیت از لیست حساب های شما خارج شد.`)
  }

  const switchAccountHandler = (accountModel: studentModel) => {
    setItem('AuthData', JSON.stringify(accountModel))
    setShowModal(false)
    toast.success(`با موفقیت وارد حساب ${accountModel.fullName} شدید.`)
    dispatch(loggedIn(accountModel))
  }

  const onExitHandler = () => {
    dispatch(loggedOut())
    navigate('/accounts/login')
    toast.success('از حساب کاربری خود خارج شدید !')
  }

  const location = useLocation()
    .pathname.split('/')
    .filter((item) => item !== '')
    .slice(-1)
    .join('/')

  return (
    <>
      {AuthData ? (
        <div className='min-w-[480px]'>
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as='div' className='fixed inset-0 z-40 flex lg:hidden' onClose={setSidebarOpen}>
              <Transition.Child
                as={Fragment}
                enter='transition-opacity ease-linear duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity ease-linear duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <div className='relative flex-1 flex flex-col max-w-xs w-full bg-gray-800'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 right-0 -mr-12 pt-2'>
                      <button
                        type='button'
                        className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className='sr-only'>Close sidebar</span>
                        <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex-shrink-0 px-4 flex items-center justify-center'>
                    <Image className='h-8 w-auto' src={SyntaxLogo} alt='Syntaax Logo' />
                  </div>
                  <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                    <nav className='px-2 space-y-1'>
                      {navigation.map((item, index) => (
                        <Link
                          key={index}
                          to={item.to}
                          className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                            location === item.to
                              ? ' bg-gray-900 text-white'
                              : ' text-gray-300 hover:bg-gray-700 hover:text-white'
                          }`}
                        >
                          <item.icon
                            className={`ml-4 flex-shrink-0 h-6 w-6 ${
                              location === item.to
                                ? 'text-gray-300'
                                : 'text-gray-400 group-hover:text-gray-300'
                            }`}
                            aria-hidden='true'
                          />
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className='flex-shrink-0 flex bg-gray-700 p-4'>
                    <div className='flex-shrink-0 w-full group block'>
                      <div className='flex items-center'>
                        <div className='w-10 h-10 rounded-md overflow-hidden'>
                          <Image
                            src={(AuthData as any).profile}
                            className='w-full h-full object-cover'
                            alt={(AuthData as any).fullName}
                          />
                        </div>
                        <div className='mr-3'>
                          <p className='text-sm font-medium text-white line-clamp-1'>
                            {(AuthData as any).fullName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
              <div className='flex-shrink-0 w-14'>
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop LOGO */}
          <div className='flex flex-1 flex-row'>
            <div className='hidden lg:flex md:flex-col md:fixed md:inset-y-0 md:right-0 z-[101] w-80 md:overflow-hidden'>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className='flex-1 flex flex-col min-h-0 bg-gray-800'>
                <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
                  <div className='flex-shrink-0 px-4 flex items-center justify-center'>
                    <Image className='h-8 w-auto' src={SyntaxLogo} alt='Syntax Logo' />
                  </div>
                  <nav className='mt-5 flex-1 px-2 space-y-1'>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        to={item.to}
                        className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                          location === item.to
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                      >
                        <item.icon
                          className={`ml-3 flex-shrink-0 h-6 w-6 ${
                            location === item.to
                              ? 'text-gray-300'
                              : 'text-gray-400 group-hover:text-gray-300'
                          }`}
                          aria-hidden='true'
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className='flex-shrink-0 flex bg-gray-700 p-4'>
                  <div
                    className='flex-shrink-0 w-full group block cursor-pointer'
                    onClick={() => setShowModal(true)}
                  >
                    <div className='flex items-center'>
                      <div className='w-10 h-10 rounded-md overflow-hidden'>
                        <Image
                          src={(AuthData as any).profile}
                          className='w-full h-full object-cover'
                          alt={(AuthData as any).fullName}
                        />
                      </div>
                      <div className='mr-3'>
                        <p className='text-sm font-medium text-white line-clamp-1'>
                          {(AuthData as any).fullName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-inherit flex flex-col flex-1 mx-auto lg:mr-96 max-w-[92rem] lg:pl-10'>
              <div className='w-full flex flex-col md:px-8 xl:px-0'>
                <div className='sticky top-0 z-10 flex-shrink-0 h-16 bg-gray-50 border-b border-gray-200 flex'>
                  <button
                    type='button'
                    className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden'
                    onClick={() => setSidebarOpen(true)}
                  >
                    <span className='sr-only'>Open sidebar</span>
                    <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
                  </button>
                  <div className='flex-1 flex justify-between items-center px-4 md:px-0 overflow-hidden'>
                    <div className='hidden md:flex'>
                      {menuNav.map((item, index) => (
                        <Link
                          key={index}
                          to={item.to}
                          className={
                            ' font-medium text-gray-500 hover:text-teal-700 md:ml-10 md:last:ml-0'
                          }
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className='flex items-center'>
                      <button
                        type='button'
                        className='ml-4 relative bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        <span className='sr-only'>View notifications</span>
                        <span className='animate-ping absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-sky-500 opacity-75'></span>
                        <BsBell className='h-5 w-5' aria-hidden='true' />
                      </button>
                    </div>
                  </div>
                </div>
                {/* <MainContent /> */}
                <div className=''>{children}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>loading . . .</h2>
      )}
      <CustomModal isModalOpen={showModal} closeModal={() => setShowModal(false)}>
        <SwitchAccounts
          closeModal={() => setShowModal(false)}
          onExitAction={onExitHandler}
          data={userAccounts}
          switchAccHandler={switchAccountHandler}
          removeAccHandler={removeAccountFromArrayHandler}
          currentAccountId={`${(AuthData as any)._id}`}
        />
      </CustomModal>
    </>
  )
}

export { UserPanel }
