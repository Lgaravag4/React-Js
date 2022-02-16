import { createContext, useState } from 'react'

export const UserAuthContext = createContext()

export const UserAuthProvider = ({children}) => {
  
    const [isLogged, setIsLogged] = useState(false)
  
    return (
        <UserAuthContext.Provider value={{isLogged, setIsLogged}}>
            {children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthContext