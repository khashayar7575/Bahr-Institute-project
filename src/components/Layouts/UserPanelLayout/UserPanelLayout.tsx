import React from 'react'
import { Outlet } from 'react-router-dom'

import { UserPanel } from '../../../screens/UserPanel/UserPanel'

const UserPanelLayout = () => {
  return (
    <UserPanel>
      <Outlet />
    </UserPanel>
  )
}

export { UserPanelLayout }
