import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Signup/>} />
        <Route path='login' element={<Login/>} /> 
        <Route path='dashboard' element={<Dashboard/>} />
      
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
