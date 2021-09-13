import React, {useState, createContext, useContext } from "react"


export const UserContext = createContext(null)

export const UserProvider = (props) => {
    const[authenticatedUser, setAuthenticatedUser] = useState(null)
    return (
        <UserContext.Provider value={[authenticatedUser,setAuthenticatedUser]}>

        {props.children}
        </UserContext.Provider>
    )
}
