import React, {useContext, useState } from 'react'
import "./Login.css"
import { UserContext} from '../../shared/provider/UserProvider'
import Members from "../../shared/members/Members"
import { useHistory } from 'react-router'
import LocalStorage from '../../shared/storage/LocalStorage'

export const Login = () => {
const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

const [username, setUsername] = useState()
const [password, setPassword] = useState()
const history = useHistory()



const SignIn = () =>{
  
  const doesMemberExist = Members.find((profile) => profile.username === username);
  if(doesMemberExist && doesMemberExist.password === password) {
    setAuthenticatedUser(doesMemberExist)
    localStorage.setItem(LocalStorage.username, username)
    localStorage.setItem(LocalStorage.password, password)
    history.goBack()
  }
    
  else alert("Fel inloggninsuppgifter") 

}

    return (
        <div className="login-container">
      
          <input className="form-input" type="text" placeholder="Username" onChange ={(event) => setUsername(event.target.value)}  />
          <input className="form-input" type="password" placeholder="Password" onChange ={(event) => setPassword(event.target.value)} />
          <button onClick={() => SignIn()} className="form-button">Login</button>
        
       
      </div>
     
    )
    
}
