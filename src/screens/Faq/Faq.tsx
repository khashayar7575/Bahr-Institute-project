import React, { useState } from 'react'
const Faq = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='rounded-md w-4/4 pb-10  shadow-xl '>
      <button
        className='mx-auto block w-fit text-center rounded-md  border-2 border-[#303030] p-2 '
        onClick={() => setIsOpen(!isOpen)}
      >
        سوال اول : چرا من دیگه چیزی به ذهنم نمیرسه برای رندوم نوشتن و دارم هرچی توی سرم هستو
        مینویستم؟
      </button>
      {isOpen && (
        <div className='bg-white  z-10 mt-5 w-4/5  rounded-md transform duration-500` shadow-2xl mx-auto'>
          <h2 className='text-right p-2 border-neutral-700 border-2  rounded-md '>
            جواب : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
            شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
            طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
            موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
            گیرد.
          </h2>
        </div>
      )}
    </div>
  )
}

export { Faq }
