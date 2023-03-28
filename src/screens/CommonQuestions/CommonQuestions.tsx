import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

import { GrFormDown } from 'react-icons/gr'

import FAQImage from '../../assets/images/FAQ.jpg'
const CommonQuestions = () => {
  const acardion = [
    {
      title: ' چطور میتوانم سفارشم را ثبت کنم ؟',
      description:
        'وارد سایت آکادمی سپهر شوید. روی گزینه دوره ها کلیک کنید. در این قسمت با کلیک روی جزییات دوره میتوانید سفارش خود را ثبت کنید. .',
      icon: '',
      down: <GrFormDown />,
    },
    {
      title: '  چطور میتوانم با استاد ارتباط داشته باشم؟',
      description:
        'برای اين کار مي توانيم از طريق ارسال نامه به صورت الکترونيکي ‌به پست الکترونیک استاد  با استاد درس ارتباط داشته باشيم ..',
      icon: '',
      down: <GrFormDown />,
    },
    {
      title: '  نحوه پشتیانی خرید یک دوره آموزشی به چه صورت می باشد؟ ',
      description:
        'هنگامی که شما از سرویس ها و خدمات آکادمی سپهر استفاده می کنیدسفارش خود را ثبت یا خرید می کنید و یا به آکادمی سپهر ایمیل می زنید این ارتباطات به صورت الکترونیکی انجام می شود و در صورتی که درخواست شما با رعایت کلیه اصول و رویه ها باشد شما موافقت می کنید که آکادمی سپهر به صورت الکترونیکی(از طریق پست الکترونیکی و سرویس پیام کوتاه و سایر سرویس های الکترونیکی) به درخواست شما پاسخ دهد.',
      icon: '',
      down: <GrFormDown />,
    },
    {
      title: 'چطور میتوانم لیست دوره های انتخاب شده خود را ببینم؟',
      description:
        'زمانی که وارد سيستم مي شويم از گزینه سبد خرید وارد صفحه لیست دوره ها شوید و دوره های انتخاب شده را ببینید ',
      icon: '',
      down: <GrFormDown />,
    },
    {
      title: 'چنانچه در ورود به سایت مشکل داشته باشیم چه باید بکنیم؟',
      description:
        'علت اشکال اين است که احتمالا کلمه رمز را درست وارد نکرده‌ا يد و يا اينکه آنرا تغيير داده و کلمه رمز جديد را بخاطر نمي آوريد. با واحد پاسخگویی مرکز کامپیوتر در تماس باشید. یا مرکز پاسخگویی مرکز آموزش های الکترونیک یا با پست الکترونیک bahr@um.ac.ir تماس حاصل فرماييد .',
      icon: '',
      down: <GrFormDown />,
    },
    {
      title: 'آیا می توان نام کارری و رمز عبور خود را تغییر داد؟ ',
      description:
        'اين امکان از طريق گزينه مشخصات پس از ورود به سيستم ميسر است. اساتید، كاركنان و دانشجویان براي تغيير کلمه رمز خود بايد از طريق پورتال اساتید و دانشجویان اقدام به اين كار نمايند .',
      icon: '',
      down: <GrFormDown />,
    },
  ]

  return (
    <div className='bg-white'>
      <main className='w-full mx-auto px-4 py-12 sm:px-6 lg:px-8'>
        <section className='bg-white py-4 relative z-10 0'>
          <div className='flex flex-wrap '>
            <div>
              <img src={FAQImage} alt='FAQImage' className='w-full ' />
            </div>
            <div className='text-center lg:mb-0'>
              <h2
                className='
              text-center
                text-dark
                mb-6
                uppercase
                font-bold
                text-[32px]
                sm:text-[40px]
                lg:text-[36px]
                xl:text-[40px]
                '
              >
                پرسش‌های متداول
              </h2>
            </div>
            {/* </div> */}
          </div>
          <div className='grid grid-cols-1  gap-4'>
            <div className=' border border-gray-50 shadow-xl rounded-2xl'>
              <div>
                <Accordion className='border-b-1 p-10'>
                  {acardion.map((item, index) => (
                    <AccordionItem key={index}>
                      <AccordionItemHeading>
                        <AccordionItemButton className='bg-white p-5'>
                          <div className='grid grid-cols-12'>
                            <div
                              className='
                                  col-span-1
                                  flex
                                  items-center
                                  justify-center
                                  overflow-hidden
                                  bg-primary bg-opacity-5
                                  text-primary
                                  rounded
                                  text-2xl
                                  '
                            >
                              {item.icon}
                            </div>
                            <div className='col-span-10'>{item.title}</div>
                            <div className='col-span-1'>{item.down}</div>
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className='text-justify w-5/6 mx-auto'>{item.description}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
export { CommonQuestions }
