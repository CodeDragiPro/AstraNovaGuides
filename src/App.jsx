import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import NavBar from './Components/NavBar'
import GuideList from './pages/GuideList'
import Muséum from './pages/Museum'
import LogIn from './pages/LogIn'



export default function App() {
  return <div className="min-h-screen">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/guides' element={<GuideList/>} />
      <Route path='/musee' element={<Muséum/>} />
      <Route path='/login' element={<LogIn/>} />
    </Routes>
  
  </div>
}
