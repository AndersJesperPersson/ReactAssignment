import axios from 'axios'




const WeatherAPI = axios.create(
    {
        baseURL:"https://api.openweathermap.org/data/2.5/"

    }
);

export default WeatherAPI;



