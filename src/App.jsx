import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import Signup from './pages/Signup/Signup'
import Login  from './pages/Login/Login'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Activities from './pages/Activities/Activities'
import Manage from './pages/Manage/Manage'
import Logout from './pages/Logout/Logout'
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/> 
      <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} /> 
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/manage' element={<Manage/>} />
        <Route path='/logout' element={<Logout/>} />
    </Routes>
  </Router>
  )
}

export default App
