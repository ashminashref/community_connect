
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

function App() {

  return (
    <>
      <ThemeProvider>
        <div className='p-4'>

      
        <Routes>
          <Route path='' element = {<Home/>}/>
          <Route path = 'notification/' element = {<Notifications/>}/>
          <Route path='userprofile/' element={<Profile/>}/>
          <Route path='payment/' element={<PaymentPage/>}/>
          <Route path='certificate/' element={<Certificate/>}/>
          <Route path = 'duas/' element = {<UserDua/>}/>
          <Route path='typedua/' element = {<Typedua/>}/>
        </Routes>
          </div>
      </ThemeProvider>
    </>
  )
}

export default App
