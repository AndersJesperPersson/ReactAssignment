import React,{useEffect} from "react";
import RoutingPath from "../../routes/RoutingPath";
import "./Cards.css"
import { useHistory } from "react-router";





function Cards(props){
  
const history = useHistory()
    
    return(
        
    <div className="Cards-container"> 
    
    <div className="Cards-top"> 
    <h1 className="Cards-header">{props.name}</h1>
    <p className="Cards-paragraf">HCP: {props.hcp}</p>
    <img className="Cards-img" src={props.img} alt="player"/>
    </div>
    <div className="Cards-bottom" style={props.styleBottom}>
    <button onClick={() => history.push(RoutingPath.playerInformation, props)} className="Cards-btn">View player</button>
    
    </div>

    </div>
    )
}

export default Cards;