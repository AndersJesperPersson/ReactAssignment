import React from "react";
import "./Tickets.css"





function Tickets(props){
    console.log(props.place)
    return(
       
    <div className="Ticket-container"> 
    <h1 className="Ticket-header">{props.name}</h1>
    <p className="Ticket-paragraf">{props.date}</p>
    <p className="Ticket-paragraf">{props.place}</p>
    <img className="Ticket-img" src={props.img} alt="player"/>
    <a href={props.url}><button className="Cards-btn">Buy</button></a> 
    
    </div>
    )
}

export default Tickets;