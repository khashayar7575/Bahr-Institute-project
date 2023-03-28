import { Routes, Route, Navigate } from 'react-router-dom'

import { Landing } from '../../screens/Landing/Landing'
import { CoursesList } from '../../screens/CoursesList/CoursesList'
import { CourseDetails } from '../../screens/CourseDetails/CourseDetails'
import { BlogsList } from '../../screens/BlogsList/BlogsList'
import { BlogDetails } from '../../screens/BlogDetails/BlogDetails'
import { InstructorsList } from '../../screens/InstructorsList/InstructorsList'
import { InstructorsProfile } from '../../screens/InstructorsProfile/InstructorsProfile'
import { AboutUs } from '../../screens/AboutUs/AboutUs'
import { ContactUs } from '../../screens/ContactUs/ContactUs'
import { Login } from '../../screens/Login/Login'
import { Register } from '../../screens/Register/Register'
import { ForgotPassword } from '../../screens/ForgotPassword/ForgotPassword'
import { NotFound } from '../../screens/NotFound/NotFound'
import { MainLayout } from '../../components/Layouts/Main/Layout/MainLayout'
import { Accounts } from '../../screens/Accounts/Accounts'
import { ShoppingCartList } from '../../screens/ShoppingCartList/ShoppingCartList'
import { ErrorBoundary } from '../../screens/ErrorBoundary/ErrorBoundary'
import { AccessDenied } from '../../screens/AcsessDenied/AcsessDenied'
import { SiteRules } from '../../screens/SiteRules/SiteRules'
import { CommonQuestions } from '../../screens/CommonQuestions/CommonQuestions'
import { Privacy } from '../../screens/Privacy/Privacy'
import { BecomeInstructor } from '../../screens/BecomeInstructor/BecomeInstructor'
import RegisterInstructor from './../../screens/RegisterInstructor/RegisterInstructor'
import ResetPassword from './../../screens/ResetPassword/ResetPassword'

const UnAuthenticatedApp = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path='courses/:_id' element={<CourseDetails />} />
          <Route path='courses' element={<CoursesList />} />
          <Route path='blogs/:_id' element={<BlogDetails />} />
          <Route path='blogs' element={<BlogsList />} />
          <Route path='instructors/:_id' element={<InstructorsProfile />} />
          <Route path='instructors' element={<InstructorsList />} />
          <Route path='becomeinstructor' element={<BecomeInstructor />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='contactus' element={<ContactUs />} />
          <Route path='/accounts' element={<Accounts />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='registerinstructor/temp' element={<RegisterInstructor />} />
            <Route path='forgotpassword' element={<ForgotPassword />} />
            <Route path='resetpassword' element={<ResetPassword />} />
            <Route path='/accounts' element={<Navigate to='login' />} />
          </Route>
          <Route path='shoppingcart' element={<ShoppingCartList />} />
          <Route path='/rules' element={<SiteRules />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/questions' element={<CommonQuestions />} />
          <Route path='/accessdenied' element={<AccessDenied />} />
          <Route path='/userpanel/*' element={<Navigate to={'/accessdenied'} />} />
          <Route path='not-found' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/not-found' />} />
          <Route path='/ErrorBoundary' element={<ErrorBoundary />} />
        </Route>
      </Routes>
    </>
  )
}

export { UnAuthenticatedApp }
