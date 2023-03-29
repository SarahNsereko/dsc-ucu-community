import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import Signup from './pages/Signup/Signup'
import Login  from './pages/Login/Login'
import Home from './pages/Home/Home'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/> 
      
      <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} /> 
        <Route path='/dashboard' element={<Dashboard/>} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
