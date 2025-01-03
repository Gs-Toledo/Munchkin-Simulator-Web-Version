import express from "express";
import { WebSocketServer, WebSocket } from 'ws';
import bodyParser from "body-parser";
import cors from "cors";
import gameRoutes from "./routes/gameRoutes";
import { Game } from './models/Game';
import { Player } from './models/Player';
import { Bot } from './models/bot';
import { Deck } from './models/Deck';
import { DeckType } from './types/types';

// Inicialização dos objetos de jogo
const treasureDeck = new Deck(DeckType.Treasure);
const doorDeck = new Deck(DeckType.Door);
const game = new Game([], treasureDeck, doorDeck);

// Inicialização do servidor Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

// Configuração das rotas da API
app.use("/api/game", gameRoutes);

// Inicia o servidor HTTP (Express)
const server = app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});

// Configuração do WebSocket
const wss = new WebSocketServer({ server }); // Usa o servidor HTTP do Express

wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (message: string) => {
    const { action, data } = JSON.parse(message);

    switch(action) {
      case 'addPlayer':
        const player = new Player(data.name);
        game.addPlayer(player);
        broadcast(JSON.stringify({ action: 'playerAdded', player }));
        break;
      case 'addBot':
        const bot = new Bot(data.name);
        game.addPlayer(bot);
        broadcast(JSON.stringify({ action: 'botAdded', bot }));
        break;
      case 'removePlayer':
        const playerToRemove = game.getPlayerByName(data.name);
        if (playerToRemove) {
          game.removePlayer(data.name);
          if (playerToRemove instanceof Bot) {
            broadcast(JSON.stringify({ action: 'botRemoved', name: data.name }));
          } else {
            broadcast(JSON.stringify({ action: 'playerRemoved', name: data.name }));
          }
        } else {
          ws.send(JSON.stringify({ action: 'error', message: 'Player not found.' }));
        }
        break;
      case 'drawCard':
        const playerToDraw = game.getPlayerByName(data.playerName);
        if (playerToDraw) {
          const card = game.drawCard(playerToDraw, data.deckType);
          broadcast(JSON.stringify({ action: 'cardDrawn', player: playerToDraw, card }));
        } else {
          ws.send(JSON.stringify({ action: 'error', message: 'Player not found.' }));
        }
        break;
      default:
        ws.send(JSON.stringify({ action: 'error', message: 'Unknown action' }));
    }
  });

  ws.on('close', () => {
    console.log('A client disconnected');
  });
});

// Função para enviar uma mensagem para todos os clientes conectados
const broadcast = (message: string) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
};

console.log("WebSocket server is running on ws://localhost:8080");
