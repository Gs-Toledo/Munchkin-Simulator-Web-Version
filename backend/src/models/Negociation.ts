import { Player } from "./Player";

export class Negotiation {
  proposer: Player;
  recipient: Player;
  treasureQuantity: number;

  constructor(proposer: Player, recipient: Player, treasureQuantity: number) {
    this.proposer = proposer;
    this.recipient = recipient;
    this.treasureQuantity = treasureQuantity;
  }

  offer(): void {
    console.log(
      `${this.proposer.name} oferece ${this.treasureQuantity} tesouros para ${this.recipient.name}.`
    );
  }

  accept(): void {
    this.proposer.treasures -= this.treasureQuantity;
    this.recipient.treasures += this.treasureQuantity;
    console.log(
      `${this.recipient.name} aceitou a oferta de ${this.treasureQuantity} tesouros de ${this.proposer.name}.`
    );
  }

  reject(): void {
    console.log(
      `${this.recipient.name} rejeitou a oferta de ${this.treasureQuantity} tesouros de ${this.proposer.name}.`
    );
  }
}
