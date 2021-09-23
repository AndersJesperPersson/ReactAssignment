import React, { useContext } from "react";
import "./Tickets.css"
import { CartContext } from "../../shared/provider/CartProvider";





function Tickets(props){
    const [itemsCart, setItemsCart] = useContext(CartContext)

    const AddToArray = () =>{
      setItemsCart([...itemsCart, props])
    }

    return(
       
    <div className="Ticket-container"> 
      <p className="Ticket-paragraf">{props.date}</p>
     <img className="Ticket-img" src={props.img} alt="player"/>
    <h1 className="Ticket-header">{props.name}</h1>
    <button className="Ticket-btn" onClick={()=> AddToArray()}>Add to Cart</button>
    <span className="Ticket-price">{props.price} {props.currency}</span>
 
    </div>
    )
}

export default Tickets;     