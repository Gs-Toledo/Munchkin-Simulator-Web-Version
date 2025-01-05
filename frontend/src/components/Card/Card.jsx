import React from "react";
import "./Card.css"; // Arquivo CSS para o estilo

const Card = ({ type, title, description, image, showCard }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <img src={image} className="card-image" />
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;