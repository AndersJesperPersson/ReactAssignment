import React from "react";
import { HomeView } from "../view/homeView/HomeView";
import { SignInView } from "../view/signInView/SignInView";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { NavDesktop } from "../components/nav/navDesktop/NavDesktop";
import { PlayersView } from "../view/playersView/PlayersView";
import { Login } from "../view/login/Login";

function Routes() {
  return (
    <div >
    <BrowserRouter>   
<NavDesktop/>
<Switch> 
<Route path="/signin" exact component={SignInView}></Route>
<Route path="/players" exact component={PlayersView}></Route>
<Route path="/login" exact component={Login}></Route>
<Route path="/" component={HomeView}></Route>
</Switch>
    </BrowserRouter>
    </div>
  );
}

export default Routes;





