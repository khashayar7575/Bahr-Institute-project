import React from 'react'

const BenefitList = () => {
  const benefit = [
    {
      title: '100,000 دوره آموزشی',
      text: 'لورم اپسون، متن ساختگی با تولید ساختگی نامفهوم از صنعت چا و با استفاده از طراحان گرافیک است.',
      innerLists: [
        'فعالیت تمام وقت',
        'ذهن های درخشان',
        ' بهترین خواهیم بود ',
        ' معرفی بهترین برند',
      ],
    },
    {
      title: ' اساتید خبره',
      text: 'لورم اپسون، متن ساختگی با تولید ساختگی نامفهوم از صنعت چا و با استفاده از طراحان گرافیک است.',
      innerLists: ['  مدارک معتبر', 'نتیجه دهی بالا', ' قدرت تفکر ', ' اعتماد گرایی'],
    },
    {
      title: 'دسترسی مادام العمر',
      text: 'لورم اپسون، متن ساختگی با تولید ساختگی نامفهوم از صنعت چا و با استفاده از طراحان گرافیک است.',
      innerLists: ['مدارک معتبر', 'پشتیبانی 24 ساعته', ' ساخت ذهنی بی نظیر   ', ' جهانی شدن برند'],
    },
  ]

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 mt-28'>
      {benefit.map((item, index) => (
        <div key={index} className='mr-3 text-sm ml-6 '>
          <div>
            <div>
              <h2>{item.title}</h2>
            </div>
            <div className='border-b-4 border-gray-200'>
              <div className=' w-1/3 h-0.5 bg-teal-600 rounded-full'></div>
            </div>
            <div>
              <p>{item.title}</p>
            </div>
          </div>
          <div className='mt-4 '>
            {item.innerLists.map((listItems, index) => (
              <div key={index} className='text-gray-700 h-6'>
                {/* <Image src={ticket} alt='' /> */}
                <span className=' inline relative right-6 bottom-5 '>{listItems}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export { BenefitList }
