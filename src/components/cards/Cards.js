import React from "react";
import "./Cards.css"



function Cards(props){
    return(
        <div className="Cards-container"> 
        <div className="Cards-top"> 
    <h1 className="Cards-header">{props.name}</h1>
    <p className="Cards-paragraf">HCP: {props.hcp}</p>
    <img className="Cards-img" src={props.img} alt="player"/>
    </div>
    <div className="Cards-bottom">
    <button className="Cards-btn">View player</button>
    
    </div>

    </div>
    )
}

export default Cards;