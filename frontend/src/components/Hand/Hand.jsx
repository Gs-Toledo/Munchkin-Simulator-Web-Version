import React from 'react';
import Card from '../Card/Card';
import './Hand.css';

const Hand = ({ cards = [] }) => {

  return (
    <div className="player-hand">
      <div className="hand-cards">
        {cards.map((card, index) => (
          <div key={index} className="hand-card">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hand;