import React from 'react'

const StatisticList = () => {
  const statisticList = [
    { title: '+8,491', describtion: 'تعداد دانشجویان' },
    { title: '+748', describtion: 'دوره ها' },
    { title: '+293', describtion: 'برترین اساتید' },
    { title: '100%', describtion: 'میزان رضایت' },
  ]
  return (
    <div className='grid pt-6'>
      <div className='w-full grid-cols-4  gap-20 flex rounded-md '>
        {statisticList.map((item, index) => (
          <div
            key={index}
            className='w-1/6  border-t-8 bg-white border-neutral-800 rounded-md text-center p-3 shadow-lg'
          >
            <div className=''>
              <div className=''>
                <h2 className=' font-extrabold text-neutral-800 text-center '>{item.title}</h2>
              </div>
              <div>
                <p className='text-sm text-center  text-gray-700 '>{item.describtion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { StatisticList }
