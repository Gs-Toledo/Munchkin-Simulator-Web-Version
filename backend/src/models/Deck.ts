import { DeckType } from "../types/types";
import { Card } from "./cards/Card";

export class Deck {
    type: DeckType;
    cards: Card[];

    constructor(type: DeckType) {
        this.type = type;
        this.cards = [];
    }

    addCard(card: Card): void {
        this.cards.push(card);
        console.log(`Carta "${card.name}" adicionada ao baralho de tipo ${this.type}.`);
    }

    drawCard(): Card | null {
        if (this.cards.length > 0) {
            const drawnCard = this.cards.pop();
            console.log(`Carta "${drawnCard?.name}" foi retirada do baralho de tipo ${this.type}.`);
            return drawnCard || null;
        }
        console.log(`O baralho de tipo ${this.type} está vazio.`);
        return null;
    }

    shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        console.log(`O baralho de tipo ${this.type} foi embaralhado.`);
    }
}