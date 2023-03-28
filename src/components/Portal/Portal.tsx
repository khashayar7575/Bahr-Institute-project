import React from 'react'
import ReactDOM from 'react-dom'
import Theme from './../Theme/Theme'

import { CustomToastContainer } from './CustomToastContainer'
import { ScrollToTop } from '../../core/utils/scrollToTop'
import { ScrollTop } from '../common/ScrollTop/ScrollTop'
import PortalShop from './PortalShop'

const Portal = () => {
  return ReactDOM.createPortal(
    <>
      <CustomToastContainer />
      <ScrollTop />
      <ScrollToTop />
      <Theme />
      <PortalShop />
    </>,
    document.getElementById('portal') as HTMLDivElement
  )
}

export { Portal }
