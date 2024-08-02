import { useState } from 'react'
import { Route,Routes, HashRouter } from 'react-router-dom'
import Email from './components/Email'
import './App.css'
import Success from './components/Success'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Email/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
