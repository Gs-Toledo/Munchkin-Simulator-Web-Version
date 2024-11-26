import { Card } from "./Card";

export class Deck {
    cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    draw(): Card | null {
        if (this.cards.length === 0) return null;
        return this.cards.shift()!;
    }
}
