import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import "./Footer.css";
import { WeatherContext } from "../../shared/provider/WeatherProvider";

export const Footer = () => {
  const [weather, setWeather] = useContext(WeatherContext);

  const displayWeather = () => {
    return (
      <div className="weather-container">
        {weather?.city}
        &#160;|&#160;Wind: {weather?.wind} m/s &#160;|&#160;Temp:{" "}
        {weather?.temp}
        <img
          src={`https://openweathermap.org/img/wn/${weather?.img}@2x.png`}
          alt="weather icon"
          className="weather-img"
        />
      </div>
    );
  };
  return (
    <footer>
      <Grid container spacing={2}>
        <Grid item lg={12} container>
          <Grid item lg={5} />
          <Grid item lg={2}>
            {" "}
            {displayWeather()}
          </Grid>
          <Grid item lg={5} />
        </Grid>
      </Grid>
    </footer>
  );
};
