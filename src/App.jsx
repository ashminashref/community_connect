
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './Theme/Themecontext'
import Home from './Pages/User/Home'
import Notifications from './Pages/User/Notifications'
import Profile from './Pages/User/Profile'

function App() {

  return (
    <>
      <ThemeProvider>
        <div className='p-4'>

      
        <Routes>
          <Route path='' element = {<Home/>}/>
          <Route path = 'notification/' element = {<Notifications/>}/>
          <Route path='profile/' element={<Profile/>}/>
        </Routes>
          </div>
      </ThemeProvider>
    </>
  )
}

export default App
