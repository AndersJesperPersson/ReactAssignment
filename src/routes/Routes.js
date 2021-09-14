import React from "react";
import { HomeView } from "../view/homeView/HomeView";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { PlayersView } from "../view/playersView/PlayersView";
import { Login } from "../view/login/Login";
import RoutingPath from "./RoutingPath";


function Routes(props) {
  return (
    <div >
      
    <BrowserRouter>   
    {props.children}
<Switch> 
<Route path={RoutingPath.playersView} exact component={PlayersView}></Route>
<Route path={RoutingPath.loginView} exact component={Login}></Route>
<Route path={RoutingPath.homeView} component={HomeView}></Route>
</Switch>
    </BrowserRouter>
    </div>
  );
}

export default Routes;





