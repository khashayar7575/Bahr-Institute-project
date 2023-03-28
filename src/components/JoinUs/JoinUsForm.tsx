const JoinUsForm = () => {
  return (
    <form className='border border-gray-100'>
      <div className='grid grid-cols-2 gap-8 px-10 my-10'>
        <div className=' col-span-1  relative  rounded-lg '>
          <label className='absolute -top-[9px] right-4 -mt-px inline-block px-1 bg-white text-sm font-semibold text-teal-700'>
            پست الکترونیکی
          </label>
          <input
            type='email'
            id='email'
            className='focus:outline-teal-500  bg-white w-full  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 '
            placeholder='لطفا پست الکترونیکی خود را وارد کنید'
          />
        </div>
        <div className=' col-span-1 relative  rounded-lg '>
          <label className='absolute -top-[11px] right-2 -mt-px inline-block px-1 bg-white text-sm font-semibold text-teal-700'>
            پست الکترونیکی
          </label>
          <input
            type='email'
            id='email'
            className='bg-white  w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='لطفا پست الکترونیکی خود را وارد کنید'
          />
        </div>
        <div className=' col-span-1 relative  rounded-lg '>
          <label className='absolute -top-[11px] right-2 -mt-px inline-block px-1 bg-white text-sm font-semibold text-teal-700'>
            پست الکترونیکی
          </label>
          <input
            type='email'
            id='email'
            className='bg-white w-full  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='لطفا پست الکترونیکی خود را وارد کنید'
          />
        </div>
        <div className=' col-span-1 relative  rounded-lg '>
          <label className='absolute -top-[11px] right-2 -mt-px inline-block px-1 bg-white text-sm font-semibold text-teal-700'>
            پست الکترونیکی
          </label>
          <input
            type='email'
            id='email'
            className='bg-white  w-full  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='لطفا پست الکترونیکی خود را وارد کنید'
          />
        </div>

        <div className=' col-span-1 relative  rounded-lg '>
          <label className='absolute -top-[11px] right-2 -mt-px inline-block px-1 bg-white text-sm font-semibold text-teal-700'>
            پست الکترونیکی
          </label>
          <input
            type='email'
            id='email'
            className='bg-white w-full  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='لطفا پست الکترونیکی خود را وارد کنید'
          />
        </div>
        <div className=' col-span-1 relative  rounded-lg '>
          <label className='absolute -top-[11px] right-2 -mt-px inline-block px-1 bg-white text-sm font-semibold text-teal-700'>
            پست الکترونیکی
          </label>
          <select
            id='countries'
            className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option defaultValue='کد را انتخاب نمایید'>پست الکترونیکی</option>
            <option value='01'>کد۱</option>
            <option value='02'>کد۲</option>
            <option value='03'>کد۳</option>
            <option value='04'>کد۴</option>
          </select>
        </div>

        <div className=' col-span-1 relative  rounded-lg '>
          <label className='absolute -top-[11px] right-2 -mt-px inline-block px-1 bg-white text-sm font-semibold text-teal-700'>
            پست الکترونیکی
          </label>
          <select
            id='countries'
            className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option defaultValue='کد را انتخاب نمایید'>پست الکترونیکی</option>
            <option value='01'>کد۱</option>
            <option value='02'>کد۲</option>
            <option value='03'>کد۳</option>
            <option value='04'>کد۴</option>
          </select>
        </div>

        <div className='col-span-1 relative  rounded-lg bg-white'>
          <label className='absolute  bg-white  h-32 inline-block px-1 text-sm font-semibold text-teal-700   items-center w-full rounded-lg border-2 border-gray-300 border-solid cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700  '>
            <span className='relative -top-3 px-1  bg-white'>آپلودی ها</span>
            <div className=' bg-white flex flex-col justify-center items-center pt-5 pb-6'>
              <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                لطفا فایل یا رزومه خود را به صورت دلخواه آپلود کنید
              </p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id='dropzone-file' type='file' className='hidden' />
          </label>
        </div>

        <div className=' col-span-1 relative  rounded-lg '>
          <label className='absolute -top-[11px] right-2 -mt-px inline-block px-1 bg-white text-sm font-semibold text-teal-700'>
            پست الکترونیکی
          </label>
          <select
            id='countries'
            className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option defaultValue='کد را انتخاب نمایید'>پست الکترونیکی</option>
            <option value='01'>کد۱</option>
            <option value='02'>کد۲</option>
            <option value='03'>کد۳</option>
            <option value='04'>کد۴</option>
          </select>
        </div>
      </div>
      <div className='col-span-1 relative  rounded-lg mt-2 px-10'>
        <label className='absolute -top-[11px] right-12 -mt-px inline-block px-1 bg-white text-sm font-semibold text-teal-700'>
          توضیحات
        </label>
        <textarea
          rows={4}
          className='px-5 bg-white w-full  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='لطفا توضیحات خود را در این قسمت وارد کنید'
        />
      </div>
      <p className='py-2 mx-auto text-center'>
        توجه ! پس از بررسی رزومه شما توس تیم ما نتیجه درخواست شما از طریق ایمیلی که وارد می کنید
        اطلاع رسانی می شود.*
      </p>
      <div className='grid grid-cols-3 gap-12 my-5'>
        <button
          type='submit'
          className='col-span-1 text-gray bg-white border border-gray-800  font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          انصراف
        </button>
        <button
          type='submit'
          className='col-span-2 text-white bg-black  focus:ring-4 focus:outline-none  font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center'
        >
          ارسال
        </button>
      </div>
    </form>
  )
}

export { JoinUsForm }
