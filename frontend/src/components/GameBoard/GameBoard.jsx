import React from "react";
import Card from "../Card/Card";
import Player from "../Player/Player";
import "./GameBoard.css";

const GameBoard = ({ players, cards }) => {
  return (
    <div className="game-board">
      <div className="players">
        {players.map((player) => (
          <Player key={player.name} {...player} />
        ))}
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
