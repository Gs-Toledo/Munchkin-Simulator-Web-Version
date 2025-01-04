import React, { useState } from "react";
import Player from "../Player/Player";
import Board from "../Board/Board";
import "./GameBoard.css";

const GameBoard = ({ players, dungeonDeck, treasureDeck }) => {
  if (players.length < 3) {
    throw new Error("O jogo precisa de pelo menos 3 jogadores!");
  }

  const distributePlayers = (players) => {
    const totalPlayers = players.length;
    switch (totalPlayers) {
      case 3:
        return {
          bottomPlayers: [players[0]],
          leftPlayers: [players[1]],
          topPlayers: [],
          rightPlayers: [players[2]]
        };
      case 4:
        return {
          bottomPlayers: [players[0]],
          leftPlayers: [players[1]],
          topPlayers: [players[2]],
          rightPlayers: [players[3]]
        };
      case 5:
        return {
          bottomPlayers: [players[0]],
          leftPlayers: [players[1]],
          topPlayers: [players[2], players[3]],
          rightPlayers: [players[4]]
        };
      case 6:
        return {
          bottomPlayers: [players[0], players[5]],
          leftPlayers: [players[1]],
          topPlayers: [players[2], players[3]],
          rightPlayers: [players[4]]
        };
      default:
        throw new Error("O jogo precisa ter entre 3 e 6 jogadores!");
    }
  };

  const { bottomPlayers, leftPlayers, topPlayers, rightPlayers } = distributePlayers(players);

  return (
    <div className="game-board">
      <div className="board-content">
        <div className="players-row top">
          {topPlayers.map((player, index) => (
            <div key={index} className="player-slot top-slot">
              <Player position="top" {...player} />
            </div>
          ))}
        </div>
        <div className="middle-section">
          <div className="players-column left">
            {leftPlayers.map((player, index) => (
              <div key={index} className="player-slot side-slot">
                <Player position="left" {...player} />
              </div>
            ))}
          </div>
          <Board
            dungeonDeck={dungeonDeck}
            treasureDeck={treasureDeck}
          />

          <div className="players-column right">
            {rightPlayers.map((player, index) => (
              <div key={index} className="player-slot side-slot">
                <Player position="right" {...player} />
              </div>
            ))}
          </div>
        </div>
        <div className="players-row bottom">
          {bottomPlayers.map((player, index) => (
            <div key={index} className="player-slot bottom-slot">
              <Player position="bottom" {...player} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
