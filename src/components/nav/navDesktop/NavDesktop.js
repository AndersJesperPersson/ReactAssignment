import React from "react";
import "./NavDesktop.css"
import { Link } from "react-router-dom";

export const NavDesktop = () =>{
    return (
<nav >
    <h3>Logo</h3>
        <ul className="nav-links"> 
        <Link to="/home" className="nav-style">  <li>Home</li></Link>
           <Link to="/players" className="nav-style"> <li >Players</li></Link>
           
           <Link to="/login" className="nav-style">  <li>Login</li></Link>

           
        </ul>
</nav>

    )
}

