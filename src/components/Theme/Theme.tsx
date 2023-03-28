import React from 'react'
const Theme = () => {
  return (
    <div className='bg-white shadow-lg p-2 left-[-719px] hover:left-0 top-20 fixed duration-500 z-30 '>
      <button className='right-0 top-[39%] text-sm px-10 translate-x-[60%] rotate-90 absolute rounded-t-lg bg-neutral-800 text-neutral-100 p-2'>
        پالت های رنگی
      </button>
      <h2 className='text-center font-bold py-2'>تم مورد نظر خود را انتخاب کنید</h2>
      <div className='flex'>
        <div className='px-2'>
          <div className='bg-red-500 w-40 h-20 rounded-lg'></div>
          <p className='text-center p-1 text-sm'>teal</p>
        </div>
        <div className='px-2'>
          <div className='bg-teal-500 w-40 h-20 rounded-lg'></div>
          <p className='text-center p-1 text-sm'>teal</p>
        </div>
        <div className='px-2'>
          <div className='bg-indigo-500 w-40 h-20 rounded-lg'></div>
          <p className='text-center p-1 text-sm'>teal</p>
        </div>
        <div className='px-2'>
          <div className='bg-neutral-700 w-40 h-20 rounded-lg'></div>
          <p className='text-center p-1 text-sm'>teal</p>
        </div>
      </div>
    </div>
  )
}

export default Theme
