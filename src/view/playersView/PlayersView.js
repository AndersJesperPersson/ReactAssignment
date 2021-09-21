import React from "react";
import Cards from "../../components/cards/Cards";
import TeamLeft from "../../shared/members/TeamLeft";
import TeamRight from "../../shared/members/TeamRight";
import "./PlayersView.css"
import Grid from '@mui/material/Grid';



function createCard(participant){

    return(
        <Cards
        key={participant.id}
        name={participant.name}
        hcp={participant.HCP}
        img={participant.imgURL}
        styleTop={participant.styleTop}
     
        />
       
    );
}


export const PlayersView = () =>{
   
    return(
        <div>
            
            <Grid container spacing={2}>
                <Grid item xs={5} container>
                <h2 className="team-header">Team Left</h2>
            <div className="card-wrapper" >
            {TeamLeft.map(createCard)}
            </div>
            </Grid>

            <Grid item xs={2} container>
            <div className="Line"></div>
            </Grid >

            <Grid item xs={5} container>

            <h2 className="team-header">Team Right</h2>
            <div className="card-wrapper" >
            {TeamRight.map(createCard)}
            </div>
            </Grid>
            </Grid>
            </div>
            
       
    )
}