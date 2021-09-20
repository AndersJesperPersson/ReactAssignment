import axios from "axios";

const EventAPI = axios.create(
    {
        baseURL:"https://app.ticketmaster.com/discovery/v2/"

    }
);

export default EventAPI;

