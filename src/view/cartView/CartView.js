import { display } from '@mui/system'
import React, { useContext } from 'react'
import {CartContext}  from '../../shared/provider/CartProvider'


export const CartView = () => {
    const [itemsCart, setItemsCart] = useContext(CartContext)

    const DisplayCart = () =>{
      return(  itemsCart.map((item, i) =>
        <div>
            <h3 key={i}>{item.name}</h3>
            {console.log(item)}
        </div>
       
        ))
    }
    return (
        <div>
            
            {DisplayCart()}
            
        </div>
    )
}
