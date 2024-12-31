import { WebSocketServer, WebSocket } from 'ws';
import { Game } from './models/Game';
import { Player } from './models/Player';
import { Deck } from './models/Deck';
import { MonsterCard } from './models/cards/MonsterCard';
import { EquipmentCard } from './models/cards/EquipmentCard';
import { TreasureCard } from './models/cards/TreasureCard';
import { SocketType } from './types/types';

const cards = [
  new MonsterCard(24, "Goblin", 4, 2, "Um pequeno goblin assustador."),
  new EquipmentCard(33, "Espada de Madeira", 1, "Aumenta +1 no combate.", SocketType.HANDS),
  new TreasureCard(88, "Tesouro Perdido", 600, "Ganhe um tesouro extra."),
];

const deck = new Deck(cards);
const game = new Game([], deck);

// Configuração do servidor WebSocket
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (message: string) => {
    const { action, data } = JSON.parse(message);

    switch(action) {
      case 'addPlayer':
        const player = new Player(data.name);
        game.addPlayer(player);
        broadcast(JSON.stringify({ action: 'playerAdded', player }));
        break;
      case 'drawCard':
        const playerToDraw = game.getPlayerByName(data.playerName);
        if (playerToDraw) {
          const card = game.drawCard(playerToDraw);
          broadcast(JSON.stringify({ action: 'cardDrawn', player: playerToDraw, card }));
        }
        break;
      default:
        ws.send(JSON.stringify({ action: 'error', message: 'Unknown action' }));
    }
  });
});

const broadcast = (message: string) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
};

console.log("WebSocket server is running on ws://localhost:8080");
