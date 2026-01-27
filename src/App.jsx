
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './Theme/Themecontext'
import Home from './Pages/User/Home'
import Notifications from './Pages/User/Notifications'
import Profile from './Pages/User/Profile'
import PaymentPage from './Components/Payment'
import Certificate from './Components/Certificate'
import UserDua from './Pages/User/UserDua'
import Typedua from './Components/User/Duas/Typedua'
import PaymentHistory from './Components/PaymentHistory'
import DocumentManager from './Components/Document'
import Dashboard from './admin/Dashboard'
import MembersContent from './admin/Members'

function App() {
  return (
    <ThemeProvider>
   
      <div className='p-3'> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notification' element={<Notifications />} />
          <Route path='/userprofile' element={<Profile />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/typedua' element={<Typedua />} />
          
          {/* BASE DUAS ROUTE */}
          <Route path='/dua' element={<UserDua />} />
          
          {/* CATEGORY ROUTE - Changed :category to :categoryName to match your component */}
          <Route path='/dua/:categoryName' element={<UserDua />} />
          <Route path='/paymentHistory' element={<PaymentHistory/>}/>
          <Route path='/documents' element={<DocumentManager/>}/>
          <Route path='/dashboard'element={<Dashboard/>}/>
          <Route path='/members' element={<MembersContent/>}/>

        </Routes>
      </div>
    </ThemeProvider>
  )
}
export default App
