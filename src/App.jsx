import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Email from './components/Email'
import './App.css'
import Success from './components/Success'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Email/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
