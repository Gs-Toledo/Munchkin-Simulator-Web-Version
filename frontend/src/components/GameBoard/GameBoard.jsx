import React, { useState } from "react";
import Card from "../Card/Card";
import Player from "../Player/Player";
import "./GameBoard.css";

const GameBoard = ({ players, dungeonDeck, treasureDeck }) => {
  if (players.length < 3) {
    throw new Error("O jogo precisa de pelo menos 3 jogadores!");
  }

  const [dungeonCards, setDungeonCards] = useState([]);
  const [treasureCards, setTreasureCards] = useState([]);

  const handleDeckClick = (deck, setDeckCards, deckType) => {
    if (deck.length > 0) {
      const card = deck.shift();
      setDeckCards((prevCards) => [...prevCards, { ...card, type: deckType }]);
    } else {
      alert(`O deck de ${deckType} está vazio!`);
    }
  };

  // Divisão dos jogadores de acordo com a regra especificada
  const bottomPlayers = players.slice(0, Math.min(2, players.length)); // Máximo 2 jogadores embaixo
  const leftPlayers = players.length > 2 ? [players[1], players[3]].filter(Boolean) : [];
  const topPlayers = players.length > 3 ? players.slice(2, 4) : [];
  const rightPlayers = players.length > 5 ? [players[5]] : [];

  return (
    <div className="game-board">
      <div className="board-content">
        <div className="players-row top">
          {topPlayers.map((player, index) => (
            <div key={index} className="player-slot top-slot">
              <Player {...player} />
            </div>
          ))}
        </div>
        <div className="middle-section">
          <div className="players-column left">
            {leftPlayers.map((player, index) => (
              <div key={index} className="player-slot side-slot">
                <Player {...player} />
              </div>
            ))}
          </div>
          <div className="board-center">
            <div className="deck-container" id="left" >
              <button
                className="deck-button dungeon-deck"
                onClick={() => handleDeckClick(dungeonDeck, setDungeonCards, "Dungeon")}
              >
                Deck de Dungeon
              </button>
            </div>
            <div className="cards-display">
              <h3>Cartas de Dungeon</h3>
              <div className="cards-container">
                {dungeonCards.map((card, index) => (
                  <Card key={`dungeon-${index}`} {...card} />
                ))}
              </div>
              <div className="cards-container">
                {treasureCards.map((card, index) => (
                  <Card key={`treasure-${index}`} {...card} />
                ))}
              </div>
              <h3>Cartas de Tesouro</h3>
            </div>
            <div className="deck-container" id="right">
              <button
                className="deck-button treasure-deck"
                onClick={() => handleDeckClick(treasureDeck, setTreasureCards, "Tesouro")}
              >
                Deck de Tesouro
              </button>
            </div>
          </div>
          <div className="players-column right">
            {rightPlayers.map((player, index) => (
              <div key={index} className="player-slot side-slot">
                <Player {...player} />
              </div>
            ))}
          </div>
        </div>
        <div className="players-row bottom">
          {bottomPlayers.map((player, index) => (
            <div key={index} className="player-slot bottom-slot">
              <Player {...player} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
