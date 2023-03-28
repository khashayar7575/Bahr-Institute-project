import React from 'react'
import { Outlet } from 'react-router-dom'
import AppContainer from '../../../common/AppContainer/AppContainer'

import { BreadCrumbs } from '../../../common/BreadCrumbs'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

const MainLayout = () => {
  return (
    <AppContainer>
      <Header />
      {/* <BreadCrumbs /> */}
      <Outlet />
      {/* <Footer /> */}
    </AppContainer>
  )
}

export { MainLayout }
