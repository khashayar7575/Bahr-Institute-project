import React from 'react'
import { Link } from 'react-router-dom'

import { Image } from './../../components/common/CustomImage/Image'

const products = [
  {
    name: 'دوره جاوا اسکریپت پیشرفته',
    instructor: 'دکتر بحرالعلومی',
    href: '#',
    quantity: 1,
    price: 450000,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
    imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
  },
  {
    name: 'دوره جاوا اسکریپت پیشرفته',
    instructor: 'دکتر بحرالعلومی',
    href: '#',
    price: 450000,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
    imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
  },
]

const sumHandler = products.reduce((previous, current) => {
  previous += current.price
  return previous
}, 0)

const finalResult = sumHandler.toLocaleString('fr')

const OrderCompleted = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='max-w-xl'>
          <h2 className='text-sm font-semibold uppercase tracking-wide text-teal-600'>
            ممنون از خرید شما
          </h2>
          <p className='mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl'>
            سفارش شما با موفقیت ثبت شد
          </p>
          <p className='mt-2 text-base text-gray-500'>
            دوره شما با شناسه #۱۲۳۴ با موفقیت به لیست دوره های ترم جاری اضافه شد
          </p>
        </div>

        <div className='mt-10 border-t border-gray-200'>
          <h2 className='sr-only'>Your order</h2>

          <h3 className='sr-only'>Items</h3>
          {products.map((product, index) => (
            <div key={index} className='py-10 border-b border-gray-200 flex'>
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                className='flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40'
              />
              <div className='flex-auto flex flex-col mr-6'>
                <div>
                  <h4 className='font-medium text-gray-900'>
                    <a href={product.href}>{product.name}</a>
                  </h4>
                  <p className='mt-2 text-sm text-gray-600'>{'مدرس : ' + product.instructor}</p>
                </div>
                <div className='mt-6 flex-1 flex items-end'>
                  <dl className='flex text-sm'>
                    <div className='flex'>
                      <dt className='font-medium text-gray-900'>قیمت  </dt>
                      <dd className='text-gray-700'>{product.price}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}

          <div className=''>
            <h3 className='sr-only'>Summary</h3>
            <dl className='space-y-6 border-t border-gray-200 text-sm pt-10'>
              <div className='flex justify-between'>
                <dt className='font-medium text-gray-900'>مجموع</dt>
                <dd className='text-gray-700'>{`${finalResult} تومان`}</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='flex font-medium text-gray-900'>تخفیف</dt>
                <dd className='text-gray-700'>(۰%) 0 تومان </dd>
              </div>
              <div className='flex justify-between'>
                <dt className='font-medium text-gray-900'>مجموع کل</dt>
                <dd className='text-gray-900'>{`${finalResult} تومان`}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className='flex justify-center mt-20'>
          <button
            type='submit'
            className='bg-teal-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
          >
            <Link to='/courses'>بازگشت به لیست دوره ها</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export { OrderCompleted }
