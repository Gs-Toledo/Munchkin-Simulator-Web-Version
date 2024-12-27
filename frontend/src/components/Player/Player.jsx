import React from "react";
import "./Player.css";

const Player = ({ name, level, treasures }) => {
  return (
    <div className="player">
      <h3>{name}</h3>
      <p>Nível: {level}</p>
      <p>Tesouros: {treasures}</p>
    </div>
  );
};

export default Player;
