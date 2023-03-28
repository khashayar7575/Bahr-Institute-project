import React from 'react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const CustomToastContainer = () => {
  return (
    <ToastContainer
      position='top-right'
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover={true}
      toastClassName={'font-IRSans text-sm'}
    />
  )
}

export { CustomToastContainer }
