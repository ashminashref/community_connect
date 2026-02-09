import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './Theme/Themecontext'
import Home from './Pages/User/Home'
import Notifications from './Pages/User/Notifications'
import Profile from './Pages/User/Profile'
import PaymentPage from './Components/Payment'
import Certificate from './Components/Certificate'
import UserDua from './Pages/User/UserDua'
import Typedua from './Components/User/Duas/Typedua'
import AdminLayout from './Common/Admin/Home/AdminLayout'
import AnnouncementsPage from './Common/Admin/Announcements/AnnouncementPage'
import UsersPage from './Common/Admin/Users/UserPage'
import { Nav } from 'react-bootstrap'
import AdminPaymentPage from './Common/Admin/Payments/AdminPaymentPage'
import TeamsPage from './Common/Admin/Teams/TeamsPage'
import LibraryPage from './Common/Admin/Library/LibraryPage'
import CertificatesPage from './Common/Admin/Certificates/CertifcatesPage'
import AnalyticsPage from './Common/Admin/Analytics/AnalyticsPage'

function App() {
  return (
    <ThemeProvider>
      <div className='p-3'> 
        <Routes>
          {/* User Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/notification' element={<Notifications />} />
          <Route path='/userprofile' element={<Profile />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/typedua' element={<Typedua />} />
          <Route path='/dua' element={<UserDua />} />
          <Route path='/dua/:categoryName' element={<UserDua />} />

          {/* Admin Routes - NESTED STRUCTURE */}
          <Route path='/admin' element={<AdminLayout />}>
            
            <Route index element={<Navigate to="announcements" replace />} />

            <Route path="announcements" element={<AnnouncementsPage />} />
            <Route path ='users' element ={<UsersPage/>}/>
            <Route path = 'payments' element = {<AdminPaymentPage/>}/>
            <Route path = 'teams' element = {<TeamsPage/>}/>
            <Route path = 'library' element = {<LibraryPage/>}/>
            <Route path = 'certificates' element  = {<CertificatesPage/>}/>
            <Route path = 'analytics' element = {<AnalyticsPage/>} />
          </Route>

        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App;