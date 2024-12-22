import { Player } from "../Player";
import { Proposal } from "./Proposal";

export class Negotiation {
  proposal: Proposal;

  constructor(proposal: Proposal) {
    this.proposal = proposal;
  }

  acceptProposal(): void {
    const { proposer, recipient, offeredCards, requestedCards } = this.proposal;

    offeredCards.forEach((card) => {
      proposer.removeCardFromHand(proposer ,card.name);
      recipient.addCardToHand(card);
    });

    requestedCards.forEach((card) => {
      recipient.removeCardFromHand(proposer ,card.name);
      proposer.addCardToHand(card);
    });

    console.log(
      `Negotiation between ${proposer.name} and ${recipient.name} completed successfully!`
    );
  }

  rejectProposal(): void {
    console.log(
      `Proposal from ${this.proposal.proposer.name} was rejected by ${this.proposal.recipient.name}.`
    );
  }
}
