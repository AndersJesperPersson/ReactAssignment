import React, {useContext} from "react";
import "./NavigationBar.css"
import RoutingPath from "../../routes/RoutingPath";
import Logotype from "../../shared/img/golf.svg"
import { useHistory } from "react-router-dom";
import { UserContext } from "../../shared/provider/UserProvider";
import { Profile } from "../profile/Profile";

function NavigationBar (){
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    function switchLoginAndProfile(){
        return authenticatedUser? <Profile/>: <span onClick={() => history.push(RoutingPath.loginView)} className="nav-style">Login</span>

    }
    return (
<nav>
    <img className="logotype" src={Logotype} alt="golf-player"/> 
        <ul className="nav-links"> 
        <li>
            <span onClick={() =>history.push(RoutingPath.homeView)} className="nav-style"> 
             Home
             </span>
             </li>

             <li>
            <span onClick={() => history.push(RoutingPath.playersView)} className="nav-style"> 
             Players
             </span>
             </li>

             <li>
             {switchLoginAndProfile()}
             </li>
             
            
        </ul>
</nav>

)
}

export default NavigationBar;

