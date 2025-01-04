import React from "react";
import GameBoard from "../../components/GameBoard/GameBoard";

const App = () => {
  const dungeonDeck = [
    { title: "Monstro 1", description: "Um monstro feroz", image: "/path-to-image" },
    { title: "Maldição", description: "Uma maldição terrível", image: "/path-to-image" },
  ];

  const treasureDeck = [
    { title: "Espada Lendária", description: "Adiciona +3 ao combate", image: "/path-to-image" },
    { title: "Poção de Cura", description: "Recupere 1 nível", image: "/path-to-image" },
  ];

  const players = [
    { name: "Jogador 1", level: 1 },
    { name: "Jogador 2", level: 1 },
    { name: "Jogador 3", level: 1 },
    { name: "Jogador 4", level: 1 }
  ];

  return (
    <GameBoard players={players} dungeonDeck={dungeonDeck} treasureDeck={treasureDeck} />
  );
};

export default App;
