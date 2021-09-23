import react, { useContext, useEffect} from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import "./Profile.css"
import Members from "../../shared/members/Members";
import LocalStorage from "../../shared/storage/LocalStorage";
import { DropContent } from "./dropContent/DropContent";


export const Profile= () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const getUsername = localStorage.getItem(LocalStorage.username)
    const getPassword = localStorage.getItem(LocalStorage.password) 
    const getMemberDetails = Members.find((profile) => profile.username === getUsername && profile.password === getPassword);
    
     return(
<div>{console.log(authenticatedUser)}
        <div className="profile-container"> 
            <span className="nav-style">{getMemberDetails.username}</span>
            <img className="profile-picture" alt="profile" src={getMemberDetails.imgURL}/>  
           <DropContent email={getMemberDetails.email}/>
        </div>
        </div>
    )
}