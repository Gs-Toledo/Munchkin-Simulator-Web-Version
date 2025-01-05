import React from 'react';
import Card from '../Card/Card';
import './PlayerField.css';

const PlayerField = ({ equipment = [], buffs = [] }) => {
  return (
    <div className="player-field">
      <div className="equipment-section">
        <h4 className="section-title">Equipamento</h4>
        <div className="equipment-cards">
          {equipment.map((item, index) => (
            <div key={index} className="equipment-card">
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className="buffs-section">
        <h4 className="section-title">Buffs/Debuffs</h4>
        <div className="buff-cards">
          {buffs.map((buff, index) => (
            <div key={index} className="buff-card">
              <Card {...buff}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerField;