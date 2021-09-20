import React, { useEffect, useState } from 'react'
import EventAPIService from '../../shared/api/service/EventAPIService';
import Grid from '@mui/material/Grid';
import Tickets from '../../components/tickets/Tickets';




export const ShopView = () => {
    const [serverData, setServerData] = useState([]);
    

const fetchData = async() =>{
    try{
     const response = await EventAPIService.searchEvent();

      setServerData(response.data._embedded.events)
      console.log(response.data._embedded.events)

    }
    catch(e){
alert("Error retrieving data from server: " + e);
    }
}

const displayData = (myEvent) => {
   
    return(
        <Tickets
        key = {myEvent?.id}
        name={myEvent?.name}
        date={myEvent?.dates?.start?.localDate}
       
        url= {myEvent.url}
        // img= {event.images}
    />
    )

}

useEffect(() => {
fetchData();
 }, [] )



    return (
        <div>
< Grid container spacing={2} direction="column">
<Grid item lg={12} container> 

{serverData.map(displayData)}
   
</Grid>
</Grid>
        </div>
    )
}
