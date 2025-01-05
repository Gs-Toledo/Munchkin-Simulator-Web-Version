import React from "react";
import "./Hand.css";
import Card from "../Card/Card";

const Hand = ({ cards = [] }) => {
  const totalCards = cards.length;
  const arcSpread = 120; // Total de graus de arco para a distribuição

  return (
    <div className="hand">
      {cards.map((card, index) => {
        const angle = ((index - (totalCards - 1) / 2) * arcSpread) / totalCards;
        return (
          <div
            key={index}
            className="card-item"
            style={{
              transform: `rotate(${angle}deg) translateY(-20px)`,
            }}
          >
            <Card type={card.type} title={card.title} description={card.description} image={card.image} />
          </div>
        );
      })}
    </div>
  );
};

export default Hand;
