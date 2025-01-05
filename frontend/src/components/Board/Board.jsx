import React, { useState } from "react";
import Card from '../Card/Card';
import './Board.css';

const Board = ({
    dungeonDeck = [],
    treasureDeck = []
}) => {
    
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

    return (
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
    );
};

export default Board;
