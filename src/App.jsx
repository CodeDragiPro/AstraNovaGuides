import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import NavBar from './Components/NavBar'



export default function App() {
  return <div className="min-h-screen">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />

    
    </Routes>
  
  </div>
}
