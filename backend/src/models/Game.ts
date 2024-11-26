import { Player } from "./Player";
import { Card, CardType } from "./Card";
import { Deck } from "./Deck";
import { Monster } from "./Monster";

export class Game {
    players: Player[];
    deck: Deck;

    constructor(players: Player[], deck: Deck) {
        this.players = players;
        this.deck = deck;
    }

    start(): void {
        console.log("Iniciando o jogo de Munchkin!");
        this.players.forEach(player => {
            console.log(`${player.name} está no nível ${player.level}`);
        });
    }

    drawCard(player: Player): void {
        const card = this.deck.draw();
        if (!card) {
            console.log("O baralho está vazio.");
            return;
        }

        console.log(`${player.name} comprou a carta: ${card.name}`);

        if (card.type === CardType.MONSTER) {
            const monster = new Monster(card.name, 5, 2); // Exemplo simples
            const won = monster.fight(player.level);
            if (won) {
                player.levelUp();
                console.log(`${player.name} derrotou o monstro ${monster.name}`);
            } else {
                console.log(`${player.name} perdeu para o monstro ${monster.name}`);
            }
        }
    }
}
