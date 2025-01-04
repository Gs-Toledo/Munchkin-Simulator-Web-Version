import React from 'react';
import Hand from '../Hand/Hand';
import PlayerField from '../PlayerField/PlayerField';
import './Player.css';

const Player = ({ 
  name, 
  level = 1, 
  handCards = [], 
  fieldCards = [], // Cartas no campo do jogador
  buffs = [], 
  position = 'bottom', // Posição do player: 'bottom', 'right', 'top', 'left'
  isCurrentPlayer = false 
}) => {
  const totalCombatPower = level + fieldCards.reduce((total, card) => total + (card.combatBonus || 0), 0);

  const renderPlayerContent = () => (
    <div className={`player-content ${position}`}>
      <div className="player-info">
        <h3 className="player-name">{name}</h3>
        <div className="player-stats">
          <span className="level">Nível: {level}</span>
          <span className="combat-power">Poder de Combate: {totalCombatPower}</span>
        </div>
      </div>
      <div className="player-area">
        {/* PlayerField representa as cartas no campo */}
        <PlayerField equipment={fieldCards} buffs={buffs} />
      </div>
      <div className="player-hand-area">
        {/* Hand representa as cartas na mão */}
        <Hand cards={handCards} />
      </div>
    </div>
  );

  return (
    <div className={`player-container ${position} ${isCurrentPlayer ? 'current-player' : ''}`}>
      {renderPlayerContent()}
    </div>
  );
};

export default Player;
