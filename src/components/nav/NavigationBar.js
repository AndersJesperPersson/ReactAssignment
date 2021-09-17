import React, {useContext} from "react";
import "./NavigationBar.css"
import RoutingPath from "../../routes/RoutingPath";
import Logotype from "../../shared/img/golf.svg"
import { useHistory } from "react-router-dom";
import { UserContext } from "../../shared/provider/UserProvider";
import { Profile } from "../profile/Profile";
import Cart from "../../shared/img/cart.svg"
import Grid from '@mui/material/Grid';


function NavigationBar (){
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    function switchLoginAndProfile(){
        return authenticatedUser? <Profile/>: <span onClick={() => history.push(RoutingPath.loginView)} className="nav-style login">Login</span>
    }
    
    return (
<nav className="nav-wrapper">

<Grid container spacing={2} direction="column">

<ul className="nav-links"> 

<Grid item xs={12} container> 

<Grid item xs={1}/> 


<Grid item xs={1}>
    <img className="logotype" src={Logotype} alt="golf-player"/> 
</Grid>

<Grid item xs={3}/> 

<Grid item xs={1}>         <li>
            <span onClick={() =>history.push(RoutingPath.homeView)} className="nav-style"> 
             Home
             </span>
             </li></Grid>



<Grid item xs={1}>             <li>
            <span onClick={() => history.push(RoutingPath.playersView)} className="nav-style"> 
             Players
             </span>
             </li> </Grid>

             <Grid item xs={1}>             <li>
            <span onClick={() => history.push(RoutingPath.shopView)} className="nav-style"> 
             Shop
             </span>
             </li> </Grid>


<Grid item xs={2} />



<Grid item xs={1}>           
  <li>
            <span onClick={() => history.push(RoutingPath.cartView)} className="nav-style"> 
             <img src={Cart} alt="Cart" className="cart-logo"/>
             </span>
             </li> </Grid>


<Grid item xs={1}>         
     <li>
             {switchLoginAndProfile()}
             </li>
</Grid>
</Grid>

</ul>
            </Grid>
             </nav>

    



        






             
            


)
}

export default NavigationBar;

