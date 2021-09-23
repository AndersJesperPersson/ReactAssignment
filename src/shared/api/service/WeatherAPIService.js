import https from "../Weather";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const LondonWeather = () => {
  return https.get(`weather?q=Göteborg&appid=${API_KEY}&units=metric`);
};

export default { LondonWeather };
