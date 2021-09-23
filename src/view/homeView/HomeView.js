import React, { useContext, useEffect } from "react";
import "./HomeView.css";
import { useLocation } from "react-router-dom";
import "./HomeView.css"
import { CartContext } from "../../shared/provider/CartProvider";
import { WeatherContext } from "../../shared/provider/WeatherProvider";
import WeatherAPIService from "../../shared/api/service/WeatherAPIService";
import axios from "axios";


export const HomeView = () => {

  const [weather, setWeather] = useContext(WeatherContext)


 const fetchData = async() =>{
   const response = await WeatherAPIService.LondonWeather();
   setWeather(
    {descp: response.data.weather[0]?.description,
    temp: response.data.main?.temp,
    city: response.data?.name,
    humidity: response.data.main?.humidity,
    press: response.data.main?.pressure,
    wind: response.data.wind?.speed,
    img: response?.data?.weather[0]?.icon
  }

    )
 }

useEffect(()=>{
  fetchData()

}, [])


  return (
    <div className="hero-img">
      <div className="hero-text"> 
      <h1 className="hero-header">Ryder Cup</h1>
      <h3>2021</h3>

      </div>
      
     
     
    </div>
  );
};
