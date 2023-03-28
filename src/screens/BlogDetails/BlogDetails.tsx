import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

import { GrFormDown } from 'react-icons/gr'

import { filteringCommentsByPostId } from '../../core/utils/filtering-comments.utils'
import { Image } from '../../components/common/CustomImage/Image'
import { GetBlogDataType } from '../../core/utils/types/data-types/data-types.utils'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../core/redux/store'
import { Comments } from '../../components/common/Comments/Comments'
import { PrimaryButton } from '../../components/common/Buttons/PrimaryButton'
import { toast } from 'react-toastify'
import { addToStudyList } from '../../core/redux/redux-store/study-list/study-list.Slice'
import { getMockApiData, updateMockApiData } from '../../core/services/mock/mock-manage.api'
import { newsExtendData } from '../../core/utils/types/mock-api-data-types/news-extend/news-extend.types'

const BlogDetails = () => {
  const blogsId = useParams()._id

  const [blogDetail, setBlogDetail] = useState<GetBlogDataType>()
  const { BlogData } = useSelector((state: RootState) => state.BlogData)
  const { CommentData } = useSelector((state: RootState) => state.CommentData)
  const { AuthData } = useSelector((state: RootState) => state.AuthData)
  const { StudyListData } = useSelector((state: RootState) => state.StudyListData)
  const dispatch = useDispatch()
  const filteredComments = filteringCommentsByPostId(blogsId!, CommentData)

  const getBlogDetail = () => {
    const getBlog = BlogData.find((blog) => blog._id === blogsId)
    setBlogDetail(getBlog)
  }

  const updateVisitorsExtendHandler = async () => {
    if (blogDetail && AuthData) {
      const newsExtendData: newsExtendData[] = await getMockApiData('newsExtendData')
      const currentExtend = newsExtendData.find((extend) => extend.id === blogsId)
      if (currentExtend) {
        const { visitorMembers, ...restOfObject } = currentExtend
        const isVisited = visitorMembers.find((visitorId) => visitorId == (AuthData as any)._id)
        if (!isVisited) {
          visitorMembers.push((AuthData as any)._id)
          const finalObject = { visitorMembers, ...restOfObject }
          const result = await updateMockApiData('newsExtendData', finalObject)
          return result
        }
      }
    }
  }

  useEffect(() => {
    getBlogDetail()
  }, [BlogData])

  useEffect(() => {
    updateVisitorsExtendHandler()
  }, [blogDetail])

  const addToStudy = () => {
    if (AuthData) {
      const itemInStudyList = StudyListData.find((item: GetBlogDataType) => item._id === blogsId)
      if (itemInStudyList) {
        toast.error('بلاگ مورد نظر در لیست مطالعه موجود است !')
      } else {
        toast.success('بلاگ مورد نظر به لیست مطالعه افزوده شد.')
        dispatch(addToStudyList(blogDetail))
      }
    } else {
      toast.error('لطفا ابتدا وارد حساب کاربری خود شوید !')
    }
  }

  const acardion = [
    {
      title: 'توضیحات',
      describe:
        'لورم ایپسوم متن ساختگی ا تووید سادگی نا مفهوم از صنعت چاپ و با استفاده از راحان گرافیک است ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار.  ',
      down: <GrFormDown />,
    },
    {
      title: 'نویسنده',
      describe: 'خبرگزاری سپهر',
      down: <GrFormDown />,
    },
    {
      title: ' تاریخ پست',
      describe: '۱۴۰۱/۰۸/۵',
      down: <GrFormDown />,
    },
    {
      title: 'موضوع',
      describe: 'خبر',
      Topic: '',
      down: <GrFormDown />,
    },
  ]
  return (
    <>
      <section className='grid grid-cols-4 lg:grid-cols-6 2xl:grid-cols-4 gap-6 my-20'>
        {blogDetail ? (
          <article className='col-span-4 2xl:col-span-3 '>
            <figure className='w-full h-96 mb-12'>
              <Image
                src={blogDetail.image}
                className='w-full h-full shadow-lg rounded-lg mb-6 object-cover'
                alt={blogDetail.title}
              />
            </figure>

            <div className='flex items-center mb-6'>
              <h1 className='font-bold text-xl mb-6'>{blogDetail.title}</h1>
            </div>
            <div>
              <div className='grid grid-cols-1 gap-4'>
                <div className='rounded-2xl'>
                  <div>
                    <div>
                      <Accordion className='border-b-1 py-2' allowMultipleExpanded={true}>
                        {acardion.map((item, index) => (
                          <AccordionItem key={index}>
                            <AccordionItemHeading>
                              <AccordionItemButton className='p-5'>
                                <div className='grid grid-cols-12'>
                                  <div className='col-span-1 flex items-center justify-center overflow-hidden bg-primary bg-opacity-5 text-primary rounded text-2xl'>
                                    {item.Topic}
                                  </div>
                                  <div className='col-span-10'>{item.title}</div>
                                  <div className='col-span-1'>{item.down}</div>
                                </div>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p className='text-justify w-5/6 mx-auto'>{item.describe}</p>
                            </AccordionItemPanel>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-2 mb-8'>
              <PrimaryButton type='button' onClick={addToStudy}>
                افزودن به لیست مطالعه
              </PrimaryButton>
            </div>

            <p>{blogDetail.text}</p>
            <Comments filteredComments={filteredComments} postId={blogsId!} />
          </article>
        ) : (
          <h2>loading . . .</h2>
        )}
        <aside className='col-span-4 lg:col-span-2 2xl:col-span-1'>
          <header className='text-lg mb-4'>آخرین اخبار</header>
          {BlogData ? (
            <div className=' flex-col w-full bg-white '>
              {BlogData.filter((currentBlog) => blogDetail?._id !== currentBlog._id)
                .slice(-3)
                .map((data, index) => (
                  <div
                    key={index}
                    className='grid grid-cols-3 gap-x-3 shadow-md  rounded-xl hover:shadow-md mb-4 h-24 min-w-[380px]'
                  >
                    <figure className='col-span-1 rounded-xl'>
                      <Link to={`/blogs/${data._id}`}>
                        <Image
                          className='object-cover border-r-8 border-[#303030] w-full h-24 rounded-md'
                          src={data.image}
                          alt={data.title}
                        />
                      </Link>
                    </figure>

                    <div id='cardBody' className='col-span-2 p-4 pr-0 text-center rounded-xl'>
                      <h3 className='text-md font-medium text-gray-800 pt-2 mb-4'>{data.title}</h3>
                      <p className='text-xs line-clamp-2'>{data.text}</p>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <h3>loading . . .</h3>
          )}
        </aside>
      </section>
    </>
  )
}

export { BlogDetails }
