import React, { useContext, useEffect } from "react";
import { HomeView } from "../view/homeView/HomeView";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { PlayersView } from "../view/playersView/PlayersView";
import { Login } from "../view/login/Login";
import RoutingPath from "./RoutingPath";
import { UserContext } from "../shared/provider/UserProvider";
import LocalStorage from "../shared/storage/LocalStorage";
import { ShopView } from "../view/shopView/ShopView";
import { CartView } from "../view/cartView/CartView";
import { useHistory } from "react-router";


function Routes(props) {

const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);


useEffect(() => {
  isUserAuthenticated();
}, []);

const isUserAuthenticated =()=>{
  if(localStorage.getItem(LocalStorage.username)){
  const myObject = {}
  myObject.username =(localStorage.getItem(LocalStorage.username))
  myObject.password = (localStorage.getItem(LocalStorage.password))
  setAuthenticatedUser(myObject)}
  else 
  setAuthenticatedUser(null)
}


const dontShowIfLoggedIn = (view) => authenticatedUser? HomeView : view

const needAuthentication = (view) => authenticatedUser? view : HomeView


  return (
    <div >
    <BrowserRouter>   
    {props.children}
<Switch> 
<Route path={RoutingPath.playersView} exact component={PlayersView}></Route>
<Route path={RoutingPath.loginView} exact component={dontShowIfLoggedIn(Login)}></Route>
<Route path={RoutingPath.shopView} exact component={needAuthentication(ShopView)}></Route>
<Route path={RoutingPath.cartView} exact component={needAuthentication(CartView)}></Route>
<Route path={RoutingPath.homeView} component={HomeView}></Route>

</Switch>
    </BrowserRouter>
    </div>
  );
}

export default Routes;





