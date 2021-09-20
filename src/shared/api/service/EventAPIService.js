import https from "../EventAPI"

const searchEvent = () =>{
    return https.get("events.json?keyword=golf&apikey=6zsu1WoFbnGqS6gz1IaLX5tRCxT3NZr2")
};

export default {searchEvent};