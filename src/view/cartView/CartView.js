import React, { useContext, useEffect, useState } from 'react'
import {CartContext}  from '../../shared/provider/CartProvider'
import "./CartView.css"


export const CartView = () => {
    const [itemsCart, setItemsCart] = useContext(CartContext)
    
    let sum =0;
    
    function Sum(){
        itemsCart.map((item) => sum = (sum + item.price));

    }

    const DisplayCart = () => {
     
      return (  itemsCart.map((item, i) =>
        <div className="cart-container">

            <p className="cart-name" key={i}> {i+1}. {item.name}</p>
            <span className="cart-price"> - {item.price} {item.currency}</span>
   
        </div>
        ))
            
      }


    return (
        <div className="cart-view">
            <h2>Cart</h2>
            <div className="cart-wrapper"> 
            <hr/>
            <h4>Tickets</h4>
            
            {DisplayCart()}
            <hr/>
            <p className="cart-sum">{Sum()}Total: {sum} $</p>
            </div>
        </div>
    )
}
