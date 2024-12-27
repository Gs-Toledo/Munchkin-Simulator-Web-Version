import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Munchkin</h1>
      <nav>
        <Link to="/game" className="home-button">Novo Jogo</Link>
        <Link to="/instructions" className="home-button">Instruções</Link>
        <Link to="/settings" className="home-button">Configurações</Link>
      </nav>
    </div>
  );
};

export default HomePage;
