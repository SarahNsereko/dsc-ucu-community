import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import Signup from './pages/Signup/Signup'
import Login  from './pages/Login/Login'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
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
      
    </Routes>
  </Router>
  )
}

export default App
