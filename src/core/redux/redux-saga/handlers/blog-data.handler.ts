import { call, put } from 'redux-saga/effects'
import { getAllBlogs } from '../../../services/api/blogs/get-all-blogs.api'
import { getMockApiData } from '../../../services/mock/mock-manage.api'
import { GetBlogDataType } from '../../../utils/types/data-types/data-types.utils'
import {
  mockApiBlogData,
  newsExtendData,
} from '../../../utils/types/mock-api-data-types/news-extend/news-extend.types'

import { setBlogData } from '../../redux-store/data/blog/blog-data.Slice'

export function* handleGetBlogData() {
  try {
    const rawBlogs: GetBlogDataType[] = yield call(getAllBlogs)
    const getNewsExtend = async () => {
      const result = await getMockApiData('newsExtendData')
      return result
    }
    const newsExtendApi: newsExtendData[] = yield call(getNewsExtend)
    const blogs: mockApiBlogData[] = [
      ...rawBlogs.map((blog) => {
        const sameBlogData = newsExtendApi.find((news) => news.id === blog._id)
        const { ...rawObject } = blog
        const result = {
          writer: sameBlogData ? sameBlogData.writer : '',
          createdDate: sameBlogData ? sameBlogData.createdDate : '',
          subjectCategory: sameBlogData ? sameBlogData.subjectCategory : '',
          visitorMembers: sameBlogData ? sameBlogData.visitorMembers : [''],
          ...rawObject,
        }
        return result
      }),
    ]
    yield put(setBlogData(blogs))
  } catch (error) {
    console.log(error)
  }
}
