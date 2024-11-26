import { Player } from "./models/Player";
import { Card, CardType } from "./models/Card";
import { Deck } from "./models/Deck";
import { Game } from "./models/Game";

const player1 = new Player("Jorge Madeirudo");
const player2 = new Player("Ana Banana");

// cartas exemplo
const cards = [
    new Card("Goblin", CardType.MONSTER, "Um pequeno goblin assustador."),
    new Card("Espada de Madeira", CardType.EQUIPMENT, "Aumenta +1 no combate."),
    new Card("Tesouro Perdido", CardType.TREASURE, "Ganhe um tesouro extra."),
];


const deck = new Deck(cards);


const game = new Game([player1, player2], deck);
game.start();
game.drawCard(player1);
game.drawCard(player2);
