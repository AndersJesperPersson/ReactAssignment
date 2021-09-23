import https from "../EventAPI"

const searchEvent = () =>{
    const API_KEY = process.env.REACT_APP_TICKETMASTER_API_KEY;
    return https.get(`events.json?keyword=golf&apikey=${API_KEY}`)
};

export default {searchEvent};