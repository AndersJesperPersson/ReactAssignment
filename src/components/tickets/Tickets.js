import React, { useContext } from "react";
import "./Tickets.css"
import { CartContext } from "../../shared/provider/CartProvider";





function Tickets(props){
    const [itemsCart, setItemsCart] = useContext(CartContext)

    const AddToArray = () =>{
      setItemsCart([...itemsCart, props])
      {console.log(itemsCart)}
    
      
    }
  
    
    
    return(
       
    <div className="Ticket-container"> 
     <img className="Ticket-img" src={props.img} alt="player"/>
    <h1 className="Ticket-header">{props.name}</h1>
    <p className="Ticket-paragraf">{props.date}</p>
    <p className="Ticket-paragraf">{props.place}</p>
    <button className="Ticket-btn" onClick={()=> AddToArray()}>Add to Cart</button>
    <button className="Ticket-btn">{props.price} {props.currency}</button>
 
    </div>
    )
}

export default Tickets;     