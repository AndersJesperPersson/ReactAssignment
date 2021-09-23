import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [itemsCart, setItemsCart] = useState([]);
  return (
    <CartContext.Provider value={[itemsCart, setItemsCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
