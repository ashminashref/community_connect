
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './Theme/Themecontext'
import Home from './Pages/User/Home'

function App() {

  return (
    <>
      <ThemeProvider>
        <div className='p-4'>

      
        <Routes>
          <Route path='' element = {<Home/>}/>
        </Routes>
          </div>
      </ThemeProvider>
    </>
  )
}

export default App
