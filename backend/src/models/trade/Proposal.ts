import { Player } from "../Player";
import { Card } from "../cards/Card";

export class Proposal {
  proposer: Player;
  recipient: Player;
  offeredCards: Card[];
  requestedCards: Card[];

  constructor(proposer: Player, recipient: Player) {
    this.proposer = proposer;
    this.recipient = recipient;
    this.offeredCards = [];
    this.requestedCards = [];
  }

  addOffer(cards: Card[]): void {
    this.offeredCards.push(...cards);
  }

  addRequest(cards: Card[]): void {
    this.requestedCards.push(...cards);
  }

  removeOffer(card: Card): void {
    this.offeredCards = this.offeredCards.filter((c) => c !== card);
  }

  removeRequest(card: Card): void {
    this.requestedCards = this.requestedCards.filter((c) => c !== card);
  }
}