import React from "react";
import "./HomeView.css";
import Weather from "../../shared/api/wheater";
import { useLocation } from "react-router-dom";

export const HomeView = () => {
  const loc = useLocation();

  return (
    <div>
      <h1>Home Page</h1>
      <p>{loc.state}</p>
     
      <Weather />
    </div>
  );
};
