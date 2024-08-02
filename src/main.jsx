import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserEmailContext from './context/UserEmailContext.js'
import UserEmailContextProvider from './context/UserEmailContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserEmailContextProvider>
    <App />
    </UserEmailContextProvider>
    
  </React.StrictMode>,
)
