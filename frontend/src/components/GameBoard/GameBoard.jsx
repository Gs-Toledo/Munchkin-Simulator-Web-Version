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
      const card = deck.shift(); // Remove a primeira carta do deck
      setDeckCards((prevCards) => [...prevCards, { ...card, type: deckType }]); // Adiciona a carta ao array de cartas abertas
    } else {
      alert(`O deck de ${deckType} está vazio!`);
    }
  };

  const topPlayers = players.slice(1, 3);
  const sidePlayers = players.length > 4 ? players.slice(3, 5) : [];
  const bottomPlayer = players[0];

  return (
    <div className="game-board">
      <div className="board-content">
        {/* Decks nas laterais horizontais */}

        {/* Exibição dos jogadores nas bordas */}
        <div className="players-row top">
          {topPlayers.map((player, index) => (
            <div key={index} className="player-slot top-slot">
              <Player {...player} />
            </div>
          ))}
        </div>
        <div className="middle-section">
          <div className="players-column left">
            {sidePlayers.length > 0 && (
              <div className="player-slot side-slot">
                <Player {...sidePlayers[0]} />
              </div>
            )}
          </div>

          {/* Área central para exibir cartas abertas */}
          <div className="board-center">
            <div className="deck-container left">
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
              <h3>Cartas de Tesouro</h3>
              <div className="cards-container">
                {treasureCards.map((card, index) => (
                  <Card key={`treasure-${index}`} {...card} />
                ))}
              </div>
            </div>
            <div className="deck-container right">
              <button
                className="deck-button treasure-deck"
                onClick={() => handleDeckClick(treasureDeck, setTreasureCards, "Tesouro")}
              >
                Deck de Tesouro
              </button>
            </div>
          </div>

          <div className="players-column right">
            {sidePlayers.length > 1 && (
              <div className="player-slot side-slot">
                <Player {...sidePlayers[1]} />
              </div>
            )}
          </div>
        </div>
        <div className="players-row bottom">
          <div className="player-slot bottom-slot">
            <Player {...bottomPlayer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
