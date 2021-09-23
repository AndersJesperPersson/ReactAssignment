import React from "react";
import { useLocation } from "react-router";
import "./PlayerInformation.css";

export const PlayerInformation = () => {
  let location = useLocation();
  return (
    <div>
      <div className="player-wrapper">
        <p className="player-header">
          {location.state.name} - {location.state.hcp} HCP
        </p>
        <p className="player-story">{location.state.story}</p>
        <img className="player-img" src={location.state.img} />
      </div>
    </div>
  );
};
