import React, { useState } from 'react'
import UserEmailContext from './UserEmailContext'

function UserEmailContextProvider({children}) {
    const [userEmail, setUserEmail] = useState('');
  return (
    <UserEmailContext.Provider value={{userEmail, setUserEmail}}>
    {children}
    </UserEmailContext.Provider>
    
  )
}

export default UserEmailContextProvider