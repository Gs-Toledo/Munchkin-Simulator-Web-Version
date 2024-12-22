import { Player } from "./models/Player";
import { Deck } from "./models/Deck";
import { Game } from "./models/Game";
import { MonsterCard } from "./models/cards/MonsterCard";
import { EquipmentCard } from "./models/cards/EquipmentCard";
import { TreasureCard } from "./models/cards/TreasureCard";

const player1 = new Player("Jorge Madeirudo");
const player2 = new Player("Ana Banana");

// cartas exemplo
const cards = [
  new MonsterCard(24, "Goblin", 4, 2, "Um pequeno goblin assustador."),
  new EquipmentCard(33, "Espada de Madeira", 1, "Aumenta +1 no combate."),
  new TreasureCard(88,"Tesouro Perdido", 600, "Ganhe um tesouro extra."),
];

const deck = new Deck();

const game = new Game([player1, player2], deck);
game.start();
game.drawCard(player1);
game.drawCard(player2);
