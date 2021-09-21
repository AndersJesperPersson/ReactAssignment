import React, { useContext } from "react";
import "./HomeView.css";
import Weather from "../../shared/api/wheater";
import { useLocation } from "react-router-dom";
import "./HomeView.css"
import { CartContext } from "../../shared/provider/CartProvider";


export const HomeView = () => {
  const loc = useLocation();
  const [itemsCart, setItemsCart] = useContext(CartContext)

  const addtoArray = () =>{
    setItemsCart([...itemsCart, "lol"])
    
  }

  return (
    <div className="hero-img">
      <div className="hero-text"> 
      <h1 className="hero-header">Ryder Cup</h1>
      <h3>2021</h3>

      </div>
      
     
     
    </div>
  );
};
