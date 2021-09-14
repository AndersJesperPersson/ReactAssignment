import react, { useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import "./Profile.css"


export const Profile= () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return(
        <div>
            
            <span>{authenticatedUser.username}</span>
            <img className="profile-picture" alt="profile" src={authenticatedUser.imgURL}/>
        </div>
    )
}