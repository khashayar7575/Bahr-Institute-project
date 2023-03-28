import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

import { GrFormDown } from 'react-icons/gr'

const Privacy = () => {
  const acardion = [
    {
      title: 'محتویات این سند',
      description:
        'این سند شامل توضیحی درباره اطلاعات خصوصی ای است که آکادمی سپهر از کاربران سایت جمع آوری می کند و نیز نحوه استفاده آکادمی سپهر از این اطلاعات. این اطلاعات شامل مواردی است که مخصوص هر کاربر بوده و به کمک آن ها می توان کاربران آکادمی سپهر را به صورت منحصر به فرد شناسایی نمود. برای نمونه می توان به نام، نشانی، نشانی الکترونیک (ایمیل)، شماره تلفن و سایر اطلاعاتی که به صورت عادی در دسترس عموم مردم نیست اشاره نمود.',
      icon: '',
      down: <GrFormDown />,
    },
    {
      title: 'نحوه محافظت از اطلاعات',
      description:
        'تمامی اطلاعات دریافتی از شما توسط یک لایه امنیت  (ssl)، پروتکل و سرور محافظت‌ شده و امکان دستیابی غیرقانونی به آن‌ها وجود ندارد.',
      icon: '',
      down: <GrFormDown />,
    },
    {
      title: ' رعایت حریم شخصی ',
      description:
        'پس از ورود به سایت  آکادمی سپهر شما یک کاربر ناشناخته نیستید و اطلاعات مربوط به استفاده شما از خدمات  آکادمی سپهر نگهداری می گردد. این اطلاعات شامل سفارشات و تراکنشها، سرویسهای مورد استفاده، اطلاعات فردی و مانند آن بوده ولی محدود به این موارد نیست آکادمی سپهر به اطلاعات خصوصی اشخاصی که از خدمات سایت استفاده میکنند احترام گداشته و از آن محافظت می کند .',
      icon: '',
      down: <GrFormDown />,
    },
    {
      title: 'تخطی از قوانین',
      description:
        'در صورت تخطی شما از قوانین شرایط و ضوابط سرویسها ، و در صورت وجود شاکی خصوصی نسبت به عملکرد شما، اطلاعات شما در اختیار مراجع قانونی قرار می گیرد. ',
      icon: '',
      down: <GrFormDown />,
    },
    {
      title: 'محدودیت دسترسی به اطلاعات',
      description:
        'امیدواریم كه بتوانیم به شما این تضمین را بدهیم كه از اطلاعات شخصی تان تحت بالاترین استانداردهای امنیتی استفاده خواهد شد. آکادمی سپهر تلاش خواهد كرد كه تمامی راه های معقول را طی كند تا امنیت هر نوع اطلاعاتی را كه از شما در اختیار دارد،‌ حفظ كند. همچنین اطلاعات شخصی شما در شبكه های امنی ذخیره می شوند اما متاسفانه،‌ با وجود فناوری فوق و ادوات امنیتی، نمی توان ایمنی هیچ مخابره داده ای از طریق اینترنت را به صورت %100 تضمین كرد. بنابراین ما نمی توانیم این اطمینان را به صورت قطعی بدهیم كه اطلاعاتی كه برای ما می فرستید،‌ در حین ارسال (مخابره) در هر شرایطی در امان خواهند بود و علاوه بر آن نمی توانیم مسئولیت اتفاقات ناشی از دسترسی غیر قانونی به اطلاعات شخصی شما را قبول كنیم. (همانند دسترسی ISP ها به اطلاعات ارسالی از رایانه شما) آکادمی سپهر مسئولیت عواقب ناشی از دستیابی غیر قانونی شخص یا گروه ثالثی به اطلاعات شخصی شما را نیز نخواهد پذیرفت.',
      icon: '',
      down: <GrFormDown />,
    },
  ]

  return (
    <main className='w-full mx-auto px-4 sm:px-6 lg:px-8 '>
      <section className='py-4 relative z-10 0'>
        <div className='flex flex-wrap lg:justify-center'>
          <div className='lg:mx-0 lg:mb-0 flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-bold'>حریم خصوصی</h2>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4'>
          <div className='rounded-2xl'>
            <div className='mt-10'>
              <p className='text-lg font-bold'>
                سیاست حفظ اطلاعات و محرمانگی اطلاعات کاربران در آکادمی سپهر
              </p>
              <p className='text-right mt-6'>
                آکادمی سپهر معتقد است اصول حفظ حریم شخصی و اطلاعات کاربران بسیار مهم و حساس است. در
                این سند اصول محرمانگی اطلاعات آکادمی سپهر و نیز راهکارهای این آکادمی برای حفظ حریم
                شخصی و اطلاعات کاربران سایت آکادمی سپهر توضیح داده شده است.
              </p>
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
export { Privacy }
