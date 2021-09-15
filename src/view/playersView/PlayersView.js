import React from "react";
import Cards from "../../components/cards/Cards";
import Participants from "../../components/cards/Participants";
import "./PlayersView.css"


function createCard(participant){
    return(
        <Cards
        key={participant.id}
        name={participant.name}
        hcp={participant.HCP}
        img={participant.imgURL}
        />
       
    );
}

export const PlayersView = () =>{
   
    return(
        <div >
            <div className="card-wrapper">
            {Participants.map(createCard)}
            </div>
        </div>
    )
}