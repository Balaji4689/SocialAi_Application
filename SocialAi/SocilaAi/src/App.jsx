import React from 'react'
import { Routes , Route , useLocation } from 'react-router-dom'

import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import UserDashboard from './components/UserDashboard'
import ProtectedRoute from './pages/ProtectedRoute'

const App = () => {
  const location = useLocation();

  return (
    <div>
      { location.pathname !== "/userDashboard" && <Navbar/> }
        <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/login' element ={<Login/>}/>
            <Route path='/register' element ={<Register/>}/> 
            
            <Route element={<ProtectedRoute/>}>
            <Route path='/userDashboard/*' element={<UserDashboard/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default App

