import { CardType, DeckType } from "../types/types";
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
    console.log(
      `Carta "${card.name}" adicionada ao baralho de tipo ${this.type}.`
    );
  }

  drawCard(type?: CardType): Card | null {
    if (this.cards.length === 0) {
      console.log(`O baralho de tipo ${this.type} está vazio.`);
      return null;
    }

    const drawnCard = this.cards.pop()!;
    console.log(`Carta "${drawnCard.name}" foi retirada do baralho.`);
    return drawnCard;
  }

  shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    console.log(`O baralho de tipo ${this.type} foi embaralhado.`);
  }
}
