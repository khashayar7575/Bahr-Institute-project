import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

const PortalShop = () => {
  return (
    <div className='bg-white shadow-xl p-2 -left-80 hover:left-0 top-64 fixed duration-500 z-30 rounded-r-lg '>
      <button className='right-0 top-[15%] text-sm px-2.5 py-1.5 translate-x-[107%] rotate-90 absolute rounded-t-md  scale-150 bg-neutral-800 text-neutral-100 '>
        <BsCart2 />
      </button>
      <h2 className='text-center font-bold p-2 border-b-2'> سبد خرید شما </h2>
      <div>
        <div className='flex p-4'>
          <div className='w-20 h-20 bg-neutral-800 rounded-lg'></div>
          <div className='px-2'>
            <p className='font-bold'>دوره تخصصی ری اکت</p>
            <p className='text-xs pt-2 text-blue-700'>دکتر بحرالعلومی</p>
            <p className='text-sm pt-2'>300,000هزار تومان</p>
          </div>
          <div className='mr-2 bg-neutral-800 h-fit p-1 text-white rounded-md'>
            <AiOutlineClose />
          </div>
        </div>
        <div className='flex p-4'>
          <div className='w-20 h-20 bg-neutral-800 rounded-lg'></div>
          <div className='px-2'>
            <p className='font-bold'>دوره تخصصی ری اکت</p>
            <p className='text-xs pt-2 text-blue-700'>دکتر بحرالعلومی</p>
            <p className='text-sm pt-2'>300,000هزار تومان</p>
          </div>
          <div className='mr-2 bg-neutral-800 h-fit p-1 text-white rounded-md'>
            <AiOutlineClose />
          </div>
        </div>
        <div className='bg-neutral-700 h-8 rounded-lg w-20 mx-auto text-xs pt-2 text-white text-center'>
          ۳+ دوره دیگر
        </div>
        <Link to='/shoppingcart'>
          <div className='bg-indigo-600 text-white p-2 rounded-lg my-2 text-center cursor-pointer'>
            رفتن به سبد خرید
          </div>{' '}
        </Link>
      </div>
    </div>
  )
}

export default PortalShop
