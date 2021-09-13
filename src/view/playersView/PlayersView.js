import React from "react";
import Cards from "../../components/cards/Cards";
import Participants from "../../components/cards/Participants";

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
        <div>
            {Participants.map(createCard)}
        </div>
    )
}