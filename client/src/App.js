import './styles/style.scss'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Homepage from './pages/Homepage/Homepage'
import Register from './pages/Register/Register'
import Logout from './pages/Logout/Logout'
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <ToastContainer />
      <main className='main-content g-flexbox-aic'>
        <Routes>
          <Route path='/' element ={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
