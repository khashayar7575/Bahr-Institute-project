import { GetCommentDataType } from './types/data-types/data-types.utils'

// taking all of comments from api and filtering them by takin exact id from each content id ...
const filteringCommentsByPostId = (elementxId: string, commentData: GetCommentDataType[]) => {
  const filteredComments = commentData.filter(
    (comment) => comment.postId === elementxId && comment.verified === true
  )
  return filteredComments
}

export { filteringCommentsByPostId }
