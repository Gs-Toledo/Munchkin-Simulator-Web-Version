import React, { useState } from "react";
import GameBoard from "../../components/GameBoard/GameBoard";
import "./GamePage.css";

const GamePage = () => {
  const [players] = useState([
    { name: "Jogador 1", level: 1, treasures: 0 },
    { name: "Jogador 2", level: 1, treasures: 0 },
  ]);

  const [cards] = useState([
    { title: "Monstro 1", description: "Um monstro feroz", image: "/images/monster1.png" },
    { title: "Tesouro 1", description: "Um tesouro brilhante", image: "/images/treasure1.png" },
  ]);

  return (
    <div className="game-page">
      <GameBoard players={players} cards={cards} />
    </div>
  );
};

export default GamePage;
