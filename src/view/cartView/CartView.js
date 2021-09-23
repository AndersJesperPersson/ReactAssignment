import { display } from '@mui/system'
import React, { useContext } from 'react'
import {CartContext}  from '../../shared/provider/CartProvider'
import { WeatherContext } from '../../shared/provider/WeatherProvider'


export const CartView = () => {
    const [itemsCart, setItemsCart] = useContext(CartContext)
    

    const DisplayCart = () =>{
      return(  itemsCart.map((item, i) =>
        <div>
            <h3 key={i}>{item.name}</h3>
            
        </div>
       
        ))
    }
    return (
        <div>
            <p></p>
            {DisplayCart()}
            
        </div>
    )
}
