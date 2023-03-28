import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs'

import Style from '../Pagination/Pag.module.css'

type Props = {
  totalDataCount: number
  pageSize: number
  onPageChange: (pageNumber: number) => void
  currentPage: number
}

const Pagination: FC<Props> = ({ totalDataCount, pageSize, onPageChange, currentPage }) => {
  const handlePageChange = (pageNumber: { selected: number }) => {
    const pageNum = pageNumber.selected
    onPageChange(pageNum)
  }

  const getPageCount = () => {
    const pageCount = Math.ceil(totalDataCount / pageSize)
    return pageCount > 1 ? pageCount : 0
  }

  return (
    <ReactPaginate
      renderOnZeroPageCount={null!}
      previousLabel={<BsCaretRight />}
      nextLabel={<BsCaretLeft />}
      breakLabel={'...'}
      forcePage={currentPage}
      pageCount={getPageCount()}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageChange}
      containerClassName={Style.pagination}
      pageClassName={Style.pageItem}
      pageLinkClassName={Style.pageLink}
      previousClassName={Style.pageItem}
      previousLinkClassName={Style.pageLinkHandler}
      nextClassName={Style.pageItem}
      nextLinkClassName={Style.pageLinkHandler}
      breakClassName={Style.pageItem}
      breakLinkClassName={Style.pageLink}
      activeClassName={Style.active}
    />
  )
}

export { Pagination }
