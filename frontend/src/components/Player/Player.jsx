import React from 'react';
import Hand from '../Hand/Hand';
import PlayerField from '../PlayerField/PlayerField';
import './Player.css';

const Player = ({ 
  name, 
  level = 1, 
  handCards = [
    {
      id: 1,
      title: "Espada Flamejante",
      description: "Adiciona +4 ao seu ataque em combates contra monstros de gelo.",
      image: "path-to-image/espada-flamejante.png",
      type: "Treasure",
    },
    {
      id: 2,
      title: "Poção de Invulnerabilidade",
      description: "Faz você escapar automaticamente de qualquer combate.",
      image: "path-to-image/pocao-invulnerabilidade.png",
      type: "Treasure",
    },
    {
      id: 3,
      title: "Goblin Enfurecido",
      description: "Monstro nível 2. Derrote-o para ganhar 1 nível e 1 tesouro.",
      image: "path-to-image/goblin-enfurecido.png",
      type: "Dungeon",
    },
    {
      id: 4,
      title: "Maldição: Perda de Equipamento",
      description: "Perde todo o equipamento da cabeça ao final do turno.",
      image: "path-to-image/maldicao-perda-equipamento.png",
      type: "Dungeon",
    },
  ], 
  fieldCards = [
    {
      id: 1,
      title: "Espada Flamejante",
      description: "Adiciona +4 ao seu ataque em combates contra monstros de gelo.",
      image: "path-to-image/espada-flamejante.png",
      type: "Treasure",
    },
    {
      id: 2,
      title: "Poção de Invulnerabilidade",
      description: "Faz você escapar automaticamente de qualquer combate.",
      image: "path-to-image/pocao-invulnerabilidade.png",
      type: "Treasure",
    },
    {
      id: 3,
      title: "Goblin Enfurecido",
      description: "Monstro nível 2. Derrote-o para ganhar 1 nível e 1 tesouro.",
      image: "path-to-image/goblin-enfurecido.png",
      type: "Dungeon",
    },
    {
      id: 4,
      title: "Maldição: Perda de Equipamento",
      description: "Perde todo o equipamento da cabeça ao final do turno.",
      image: "path-to-image/maldicao-perda-equipamento.png",
      type: "Dungeon",
    },
  ], // Cartas no campo do jogador
  buffs = [], 
  position = 'bottom', // Posição do player: 'bottom', 'right', 'top', 'left'
  isCurrentPlayer = false 
}) => {
  const totalCombatPower = level + fieldCards.reduce((total, card) => total + (card.combatBonus || 0), 0);

  return (
    <div className={`player-container ${position} ${isCurrentPlayer ? "current-player" : ""}`}>
      <div className="player-info">
        <h3 className="player-name">{name}</h3>
        <div className="player-stats">
          <span className="level">Nível: {level}</span>
          <span className="combat-power">Poder de Combate: {totalCombatPower}</span>
        </div>
      </div>

      <div className="player-area">
        <h4>Equipamentos:</h4>
        <PlayerField equipment={fieldCards} buffs={buffs} />
      </div>

      <div className="player-hand-area">
        <Hand cards={handCards} />
      </div>
    </div>
  );
};

export default Player;
