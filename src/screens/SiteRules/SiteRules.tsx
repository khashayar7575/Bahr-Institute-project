import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

import { BsFileEarmarkRuled } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { RiCustomerService2Line } from 'react-icons/ri'
import { AiOutlineCarryOut } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import { BiNotepad } from 'react-icons/bi'

import { GrFormDown } from 'react-icons/gr'

const SiteRules = () => {
  const acardion = [
    {
      title: 'قوانین عمومی',
      description:
        'توجه داشته باشید کیه اصول و رویه های آکادمی سپهر منطبق با قوانین جمهوری اسلامی ایرانُ قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است و متعاقبا کاربر نیز موظف به رعایت قوانین مرتبط با کاربر است. در صورتی که در قوانین مندرج ٍ رویه ها و سرویس های آکادمی سپهر تغیییراتی در آینده ایجاد شود در همین صفحه منتشر و به روزرسانی می شود و شما توافق می کنید که استفاه مستمر شما از سایت به معنی پذیرش هرگونه تغییر است.',
      icon: <BsFileEarmarkRuled />,
      down: <GrFormDown />,
    },
    {
      title: 'تعریف کاربر',
      description:
        '  کاربر به شخصی گفته می شود که با اطلاعات کاربری خود که در فرم ثبت نام درج کرده است به ثبت سفارش یا هرگونه استفاده از خدمات آکادمی سپهر اقدام کند همچنین طبق قانون تجارت الکترونیک کاربر هر شخصی است که به منظوری جز تجارت یا شغل حرفه ای به خرید کالا یا خدمات اقدام کند.',
      icon: <FiUsers />,
      down: <GrFormDown />,
    },
    {
      title: ' ارتباط الکترونیکی',
      description:
        'هنگامی که شما از سرویس ها و خدمات آکادمی سپهر استفاده می کنیدسفارش خود را ثبت یا خرید می کنید و یا به آکادمی سپهر ایمیل می زنید این ارتباطات به صورت الکترونیکی انجام می شود و در صورتی که درخواست شما با رعایت کلیه اصول و رویه ها باشد شما موافقت می کنید که آکادمی سپهر به صورت الکترونیکی(از طریق پست الکترونیکی و سرویس پیام کوتاه و سایر سرویس های الکترونیکی) به درخواست شما پاسخ دهد.',
      icon: <RiCustomerService2Line />,
      down: <GrFormDown />,
    },
    {
      title: 'ثبت و پردازش ',
      description:
        'روز کاری به معنی شنبه تا پنج شنبه هر هفته به استثنای تعطیلات عمومی در ایران است و کلیه ی سفارش های ثبت شده در طول روزهای کاری پردازش می شوند. آکادمی سپهر به کاربران خود در ۷ روز هفته و ۲۴ ساعت در روز امکان سفارش گذاری می دهد. کلیه ی سفارش های ثبت شده در سایت به وسیله ارسال کد سفارش از طریق پیام کوتاه و پیش فاکتور از طریق ایمیل در صف پردازش قرار می گیرند',
      icon: <AiOutlineCarryOut />,
      down: <GrFormDown />,
    },
    {
      title: 'انتشار دوره',
      description:
        'شما مجاز به تکثیر، توزیع مجدد، واگذاری، فروش، پخش، استفاده گروهی، اصلاح، انطباق، ویرایش، ایجاد دوره های مشتق شده، یا هر نوع تغییر و اشتراک گذاری دیگری نیستید.',
      icon: <TbTruckDelivery />,
      down: <GrFormDown />,
    },
    {
      title: 'شرایط خرید دوره های آموزشی ',
      description:
        'رضایت کاربران بزرگترین هدف مجموعه آکادمی سپهر است. اما از آنجایی که بررسی کیفیت صد در صد تمام دوره ها امکان پذیر نیست، از این رو برای خریدی مطمئن و بهتر، فرم های نظرسنجی را تکمیل نمایید. همچنین برخی از قسمت های هر دوره با هزینه ای کمتر منتشر می شود تا شما بتوانید با نوع گفتار مدرس، کیفیت ویدیو و تسلط مدرس آشنا شوید.',
      icon: <BiNotepad />,
      down: <GrFormDown />,
    },
  ]

  return (
    <main className='w-full mx-auto px-4 sm:px-6 lg:px-8 '>
      <section className='py-4 relative z-10 0'>
        <div className='flex flex-wrap lg:justify-center'>
          <div className='lg:mx-0 lg:mb-0 flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-bold'>قوانین و مقررات سایت</h2>
            <div className='max-w-3xl mt-4'>
              <p className='text-center'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                می باشد.
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className='grid grid-cols-1 gap-4'>
          <div className='rounded-2xl'>
            <div>
              <p className='iline-block indent-16 font-semibold text-xl p-3'>قوانین سایت</p>
              <div>
                <Accordion className='border-b-1 p-10' allowMultipleExpanded={true}>
                  {acardion.map((item, index) => (
                    <AccordionItem key={index}>
                      <AccordionItemHeading>
                        <AccordionItemButton className='p-5'>
                          <div className='grid grid-cols-12'>
                            <div className='col-span-1 flex items-center justify-center overflow-hidden bg-primary bg-opacity-5 text-primary rounded text-2xl'>
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
        </div>
      </section>
    </main>
  )
}

export { SiteRules }
