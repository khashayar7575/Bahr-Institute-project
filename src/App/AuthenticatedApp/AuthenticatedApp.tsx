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
import { NotFound } from '../../screens/NotFound/NotFound'
import { Dashboard } from '../../components/UserPanel/Dashboard/Dashboard'
import { EditProfile } from '../../components/UserPanel/EditProfile/EditProfile'
import { EditPassword } from '../../components/UserPanel/EditPassword/EditPassword'
import { MyCourses } from '../../components/UserPanel/MyCourses/MyCourses'
import { CoursesListPanel } from '../../components/UserPanel/CoursesList/CoursesListPanel'
import { ShoppingCartList } from '../../screens/ShoppingCartList/ShoppingCartList'
import { OrderCompleted } from '../../screens/OrderCompleted/OrderCompleted'
import { MainLayout } from '../../components/Layouts/Main/Layout/MainLayout'
import { UserPanelLayout } from '../../components/Layouts/UserPanelLayout/UserPanelLayout'
import { WishList } from '../../components/UserPanel/WishList/WishList'
import { ErrorBoundary } from '../../screens/ErrorBoundary/ErrorBoundary'
import { StudyList } from '../../components/UserPanel/StudyList/StudyList'
import { SiteRules } from '../../screens/SiteRules/SiteRules'
import { Privacy } from '../../screens/Privacy/Privacy'
import { CommonQuestions } from '../../screens/CommonQuestions/CommonQuestions'
import { WaitingList } from '../../components/UserPanel/WaitingList/WaitingList'
import ManageTickets from './../../components/UserPanel/ManageTickets/ManageTickets'
import { BecomeInstructor } from '../../screens/BecomeInstructor/BecomeInstructor'
import { MySkills } from '../../components/UserPanel/MySkills/MySkills'

const AuthenticatedApp = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path='courses/:_id' element={<CourseDetails />} />
          <Route path='courses' element={<CoursesList />} />
          <Route path='blogs/:_id' element={<BlogDetails />} />
          <Route path='blogs' element={<BlogsList />} />
          <Route path='instructors' element={<InstructorsList />} />
          <Route path='instructors/:_id' element={<InstructorsProfile />} />
          <Route path='becomeinstructor' element={<BecomeInstructor />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='contactus' element={<ContactUs />} />
          <Route path='shoppingcart' element={<ShoppingCartList />} />
          <Route path='ordercompleted' element={<OrderCompleted />} />
          <Route path='not-found' element={<NotFound />} />
          <Route path='rules' element={<SiteRules />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='questions' element={<CommonQuestions />} />
          <Route path='accounts/*' element={<Navigate to='/' />} />
          <Route path='*' element={<Navigate to='/not-found' />} />
        </Route>
        <Route path='/userpanel' element={<UserPanelLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='editprofile' element={<EditProfile />} />
          <Route path='editpassword' element={<EditPassword />} />
          <Route path='myskills' element={<MySkills />} />
          <Route path='mycourses' element={<MyCourses />} />
          <Route path='waitinglist' element={<WaitingList />} />
          <Route path='wishlist' element={<WishList />} />
          <Route path='courseslist' element={<CoursesListPanel />} />
          <Route path='managetickets' element={<ManageTickets />} />
          <Route path='studylist' element={<StudyList />} />
          <Route path='/userpanel' element={<Navigate to='dashboard' />} />
        </Route>
        <Route path='/errorboundary' element={<ErrorBoundary />} />
      </Routes>
    </>
  )
}

export { AuthenticatedApp }
