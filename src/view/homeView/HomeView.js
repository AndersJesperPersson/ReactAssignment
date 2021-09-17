import React from "react";
import "./HomeView.css";
import Weather from "../../shared/api/wheater";
import { useLocation } from "react-router-dom";
import BackgroundImg from "../../shared/img/golfheader.jpg"
import "./HomeView.css"


export const HomeView = () => {
  const loc = useLocation();

  return (
    <div className="hero-img">
      <div className="hero-text"> 
      <h1 className="hero-header">Ryder Cup</h1>
      <h3>2021</h3>
      </div>
      
     
     
    </div>
  );
};
