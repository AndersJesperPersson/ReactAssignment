import React, { useEffect, useState } from 'react'
import EventAPIService from '../../shared/api/service/EventAPIService';
import Grid from '@mui/material/Grid';
import Tickets from '../../components/tickets/Tickets';
import "./ShopView.css"




export const ShopView = () => {
    const [serverData, setServerData] = useState([]);
    

const fetchData = async() =>{
    try{
     const response = await EventAPIService.searchEvent();

      setServerData(response.data._embedded.events)
    

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
        price={myEvent.priceRanges? myEvent.priceRanges[0].min:"100"}
        currency={myEvent.priceRanges? myEvent.priceRanges[0].currency:"USD"}
        url= {myEvent.url}
        img= {myEvent.images[0].url}
    />
    )

}

useEffect(() => {
fetchData();
 }, [] )



    return (
        <div>
< Grid container spacing={2} direction="column">
<Grid item lg={12} container className="Ticket-wrapper"> 

{serverData.map(displayData)}
   
</Grid>
</Grid>
        </div>
    )
}
